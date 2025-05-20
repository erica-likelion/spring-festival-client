import { useEffect, useRef, useCallback, useState } from 'react';
import { KakaoMapOptions } from '@/types/kakao-maps';
import { getCategoryMarkerImage, createMarkerWithLabel } from '@/utils/markerIcons';
import { CATEGORIES } from '@/constants/map';
import { LOCATION_DATA } from '@/constants/map/LOC_DATA';
import { DAYS } from '@/constants/map';
import { MapDataItem } from '@/constants/map/MapData';

export function useKakaoMap(
  options: KakaoMapOptions = {},
  selectedCategory: CATEGORIES | null = null,
  selectedDay: DAYS,
  onMapEmptyClick?: () => void, // 지도 빈 영역 클릭시 콜백 추가
) {
  // 커스텀 오버레이 참조 저장
  const internalMapRef = useRef<HTMLDivElement>(null);
  const kakaoMapRef = useRef<kakao.maps.Map | null>(null);
  const myLocationMarkerRef = useRef<kakao.maps.Marker | null>(null);
  const markersRef = useRef<kakao.maps.Marker[]>([]);
  const customOverlaysRef = useRef<kakao.maps.CustomOverlay[]>([]);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  // 선택된 개별 항목의 마커를 위한 상태
  const selectedItemMarkerRef = useRef<kakao.maps.CustomOverlay | null>(null);
  // 드래그 상태 관리를 위한 상태
  const isDraggingRef = useRef<boolean>(false);

  // 타입 안전성을 위해 mapRef를 정의
  const mapRef = options.mapRef || internalMapRef;

  useEffect(() => {
    const initializeMap = () => {
      // 초기화 조건이 모두 충족되지 않았다면 초기화 시도 안함
      if (!scriptLoaded || !mapRef.current || kakaoMapRef.current) {
        return;
      }

      try {
        console.log('[KakaoMap] 지도 초기화 시작');
        // 지도 옵션 설정
        const mapOptions = {
          center: new window.kakao.maps.LatLng(
            options.center?.lat ?? 37.29644017218779,
            options.center?.lng ?? 126.83516599926162,
          ),
          level: options.level ?? 3,
          draggable: options.draggable ?? true,
          zoomable: options.zoomable ?? true,
          scrollwheel: options.scrollwheel ?? true,
        };
        console.log('[KakaoMap] 지도 옵션:', mapOptions);

        // 지도 초기화
        const map = new window.kakao.maps.Map(mapRef.current, mapOptions);
        console.log('[KakaoMap] 지도 객체 생성 완료:', !!map);

        kakaoMapRef.current = map;

        // 모바일 핀치 줌 관련 설정
        map.setZoomable(true);
        enableMultiTouch(mapRef.current);

        setMapLoaded(true);
        console.log('[KakaoMap] 지도 초기화 완료');
      } catch (error) {
        console.error('[KakaoMap] 지도 초기화 중 오류 발생:', error);
      }
    };

    const enableMultiTouch = (element: HTMLDivElement | null) => {
      if (!element) return;

      // 터치 이벤트 전파 막지 않도록 설정
      element.style.touchAction = 'manipulation';

      // 제스처 이벤트 핸들러
      const preventGesture = (e: Event) => e.preventDefault();

      // 모바일 사파리 등에서 핀치 줌 제스처 허용
      document.addEventListener('gesturestart', preventGesture, { passive: false });
      document.addEventListener('gesturechange', preventGesture, { passive: false });
      document.addEventListener('gestureend', preventGesture, { passive: false });

      // 이벤트 리스너 정리 함수 반환
      return () => {
        document.removeEventListener('gesturestart', preventGesture);
        document.removeEventListener('gesturechange', preventGesture);
        document.removeEventListener('gestureend', preventGesture);
      };
    };

    // 초기화 조건 로깅
    console.log('[KakaoMap] 초기화 조건 상태:', {
      scriptLoaded,
      mapRefExists: !!mapRef.current,
      kakaoMapRefNotExists: !kakaoMapRef.current,
    });

    // 초기화 시도
    initializeMap();

    // 이벤트 리스너 제거를 위한 정리 함수
    const cleanup = enableMultiTouch(mapRef.current);
    return () => {
      if (cleanup) cleanup();
    };
  }, [options, mapRef, scriptLoaded]);

  // 카카오맵 SDK 로드를 위한 별도 useEffect
  useEffect(() => {
    const loadKakaoSDK = () => {
      // 이미 로드되었거나 로드 중인 경우 중복 로드 방지
      if (window.kakao && window.kakao.maps) {
        console.log('[KakaoMap] 이미 로드된 kakao 객체 감지');
        setScriptLoaded(true);
        return;
      }

      console.log('[KakaoMap] 카카오맵 스크립트 로드 시작');

      // 기존 스크립트가 있다면 제거 (중복 로드 방지)
      const existingScript = document.querySelector('script[src*="dapi.kakao.com"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }

      const script = document.createElement('script');
      const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;

      // 스크립트 속성 설정
      script.type = 'text/javascript';
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer,drawing&autoload=false`;
      script.async = true; // 비동기 로드 사용

      // 로드 이벤트 핸들러
      script.onload = () => {
        console.log('[KakaoMap] 스크립트 로드 성공');
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            console.log('[KakaoMap] kakao.maps.load 콜백 실행');
            setScriptLoaded(true);
          });
        }
      };

      script.onerror = (error) => {
        console.error('[KakaoMap] 스크립트 로드 실패:', error);
      };

      document.head.appendChild(script);
    };

    loadKakaoSDK();

    // 컴포넌트가 언마운트될 때 상태 초기화
    return () => {
      setScriptLoaded(false);
      setMapLoaded(false);
    };
  }, []);

  const moveToCurrentLocation = useCallback(() => {
    console.log('[KakaoMap] 현재 위치로 이동 요청');

    // 지도가 아직 초기화되지 않은 경우 실행하지 않음
    if (!kakaoMapRef.current) {
      console.warn('[KakaoMap] 지도가 초기화되지 않아 현재 위치 이동을 수행할 수 없습니다.');
      return;
    }

    // 미리 기본 위치 설정 (한양대 에리카 캠퍼스)
    const defaultLocation = {
      lat: 37.29644017218779,
      lng: 126.83516599926162,
    };

    // 기본 위치로 먼저 이동 (위치 정보 획득 실패 시 폴백으로 사용)
    if (kakaoMapRef.current) {
      const defaultPosition = new window.kakao.maps.LatLng(
        defaultLocation.lat,
        defaultLocation.lng,
      );

      // 지도 중심 이동
      kakaoMapRef.current.setCenter(defaultPosition);
      kakaoMapRef.current.setLevel(3);
    }

    if ('geolocation' in navigator) {
      console.log('[KakaoMap] Geolocation API 사용 가능');

      // 기존 마커 제거
      if (myLocationMarkerRef.current) {
        myLocationMarkerRef.current.setMap(null);
      }

      // 위치 정보 권한 상태 확인 (크롬과 같은 일부 브라우저에서만 작동)
      try {
        if (navigator.permissions && navigator.permissions.query) {
          navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            console.log(`[KakaoMap] 위치 권한 상태: ${result.state}`);
            if (result.state === 'denied') {
              alert(
                '위치 정보 접근이 차단되어 있습니다. 브라우저 설정에서 위치 정보 접근을 허용해주세요.',
              );

              // 권한 거부 시 기본 위치에 마커 표시
              showDefaultMarker();
              return;
            }
          });
        }
      } catch (error) {
        console.log('[KakaoMap] 권한 상태 확인 실패:', error);
      }

      // 로딩 인디케이터 표시하거나 사용자에게 알림
      console.log('[KakaoMap] 위치 정보 요청 중...');

      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('[KakaoMap] 위치 정보 수신 성공');
          const { latitude: lat, longitude: lng } = position.coords;
          console.log(`[KakaoMap] 위도: ${lat}, 경도: ${lng}`);

          if (kakaoMapRef.current) {
            // 정확히 동일한 LatLng 객체를 사용하여 일관성 유지
            const currentPosition = new window.kakao.maps.LatLng(lat, lng);

            // 지도 중심 이동
            kakaoMapRef.current.setCenter(currentPosition);

            // 적절한 줌 레벨 설정
            kakaoMapRef.current.setLevel(2);

            // 마커 생성
            const marker = new window.kakao.maps.Marker({
              position: currentPosition,
              map: kakaoMapRef.current,
              image: getCategoryMarkerImage('myLocation'),
              title: '내 위치',
            });

            // 마커 참조 저장
            myLocationMarkerRef.current = marker;
          }
        },
        (error) => {
          console.error('[KakaoMap] 위치 정보 오류:', error.code, error.message);

          // 오류 코드와 메시지 로깅
          let errorMessage = '위치 정보를 가져올 수 없습니다.';

          switch (error.code) {
            case 1: // PERMISSION_DENIED
              errorMessage =
                '위치 정보 접근 권한이 거부되었습니다. 설정에서 위치 서비스를 허용해주세요.';
              break;
            case 2: // POSITION_UNAVAILABLE
              errorMessage =
                '현재 위치를 확인할 수 없습니다. 와이파이나 셀룰러 데이터를 확인해보세요.';
              break;
            case 3: // TIMEOUT
              errorMessage = '위치 정보를 가져오는 데 시간이 너무 오래 걸립니다.';
              break;
          }

          // 사용자에게 오류 알림
          alert(errorMessage);

          // 기본 위치에 마커 표시
          showDefaultMarker();
        },
        {
          enableHighAccuracy: false, // 고정밀도 비활성화 (배터리 절약, 성공률 향상)
          maximumAge: 60000, // 1분까지의 캐시된 위치 허용
          timeout: 15000, // 15초 타임아웃 (충분한 시간 제공)
        },
      );
    } else {
      console.error('이 브라우저에서는 위치 정보를 제공하지 않습니다.');
      alert('이 브라우저에서는 위치 정보 기능을 사용할 수 없습니다.');
      showDefaultMarker();
    }

    // 기본 위치에 마커를 표시하는 내부 함수
    function showDefaultMarker() {
      if (kakaoMapRef.current) {
        const defaultPosition = new window.kakao.maps.LatLng(
          defaultLocation.lat,
          defaultLocation.lng,
        );

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: defaultPosition,
          map: kakaoMapRef.current,
          image: getCategoryMarkerImage('myLocation'),
          title: '기본 위치',
        });

        // 마커 참조 저장
        myLocationMarkerRef.current = marker;
      }
    }
  }, []);

  // 카테고리별 마커 추가
  useEffect(() => {
    // 지도가 로드되지 않은 경우 처리하지 않음
    if (!kakaoMapRef.current) {
      return;
    }

    // 카테고리가 선택되지 않은 경우 (null) 기존 마커 모두 제거
    if (!selectedCategory) {
      // 이전 마커들 제거
      const prevMarkers = markersRef.current;
      if (prevMarkers.length > 0) {
        console.log(`[KakaoMap] 카테고리 선택 해제: ${prevMarkers.length}개의 마커 제거`);
        prevMarkers.forEach((marker) => marker.setMap(null));
        markersRef.current = [];
      }

      // 이전 커스텀 오버레이 제거
      const prevOverlays = customOverlaysRef.current;
      if (prevOverlays.length > 0) {
        console.log(`[KakaoMap] 카테고리 선택 해제: ${prevOverlays.length}개의 오버레이 제거`);
        prevOverlays.forEach((overlay) => overlay.setMap(null));
        customOverlaysRef.current = [];
      }

      // 선택된 항목 마커가 있다면 제거
      if (selectedItemMarkerRef.current) {
        selectedItemMarkerRef.current.setMap(null);
        selectedItemMarkerRef.current = null;
      }

      return;
    }

    // 선택된 항목 마커가 있다면 제거
    if (selectedItemMarkerRef.current) {
      selectedItemMarkerRef.current.setMap(null);
      selectedItemMarkerRef.current = null;
    }

    console.log(`[KakaoMap] '${selectedCategory}' 카테고리 마커 표시 시작`);
    const categoryData = LOCATION_DATA[selectedCategory];

    // 이전 마커들 제거 로직
    const prevMarkers = markersRef.current;
    if (prevMarkers.length > 0) {
      console.log(`[KakaoMap] ${prevMarkers.length}개의 이전 마커 제거`);
      prevMarkers.forEach((marker) => marker.setMap(null));
      markersRef.current = [];
    }

    // 이전 커스텀 오버레이 제거
    const prevOverlays = customOverlaysRef.current;
    if (prevOverlays.length > 0) {
      console.log(`[KakaoMap] ${prevOverlays.length}개의 이전 오버레이 제거`);
      prevOverlays.forEach((overlay) => overlay.setMap(null));
      customOverlaysRef.current = [];
    }

    // 새 마커 추가
    const markers: kakao.maps.Marker[] = [];
    const overlays: kakao.maps.CustomOverlay[] = [];
    // 경계 계산을 위한 LatLngBounds 객체 생성
    const bounds = new window.kakao.maps.LatLngBounds();

    // 해당 카테고리에 표시할 마커가 있는지 확인하기 위한 플래그
    let hasVisibleMarkers = false;

    categoryData.forEach((location) => {
      // closeDay에 현재 선택된 날짜가 포함되어 있으면 마커를 표시하지 않음
      if (location.closeDay && location.closeDay.includes(selectedDay)) {
        console.log(`[KakaoMap] ${location.name}은(는) ${selectedDay}에 운영하지 않습니다.`);
        return;
      }

      const position = new window.kakao.maps.LatLng(location.lat, location.lng);

      // 텍스트가 있는 커스텀 오버레이 생성 (마커는 생성하지 않음)
      const overlay = createMarkerWithLabel(
        kakaoMapRef.current as kakao.maps.Map,
        position,
        selectedCategory,
        location.name,
        () => {
          // 마커 클릭 시 실행될 함수
          console.log(`[KakaoMap] 마커 클릭: ${location.name}`);

          // 지도를 해당 마커 위치로 중심 이동
          if (kakaoMapRef.current) {
            kakaoMapRef.current.setCenter(position);

            // 적당한 줌 레벨로 설정
            const currentLevel = kakaoMapRef.current.getLevel();
            if (currentLevel > 3) {
              kakaoMapRef.current.setLevel(3);
            }
          }
        },
      );

      // 내부적으로는 마커 없이 오버레이만 사용하지만, bounds 계산 등을 위한 레퍼런스 유지
      markers.push({
        getPosition: () => position,
        setMap: () => {}, // 더미 함수
      } as unknown as kakao.maps.Marker);
      overlays.push(overlay);

      // 경계에 위치 추가
      bounds.extend(position);
      hasVisibleMarkers = true;
    });

    // 마커 참조 업데이트
    markersRef.current = markers;
    customOverlaysRef.current = overlays;

    // 표시할 마커가 있는 경우에만 지도 경계 조정
    if (hasVisibleMarkers) {
      console.log(`[KakaoMap] ${markers.length}개의 마커에 맞게 지도 경계 조정`);

      // 마커가 하나만 있는 경우 적절한 줌 레벨 설정
      if (markers.length === 1) {
        // 마커의 position 속성 직접 접근
        const markerPosition = markers[0].getPosition();
        kakaoMapRef.current.setCenter(markerPosition);
        kakaoMapRef.current.setLevel(3); // 적절한 줌 레벨 설정
      } else {
        // 여러 마커가 있는 경우 모든 마커가 보이도록 경계 조정
        // 적절한 패딩 값을 활용하여 경계 조정 (단위: 픽셀)
        const padding = 50;

        try {
          // 계산된 경계로 지도 이동 및 줌 레벨 조정
          kakaoMapRef.current.setBounds(bounds, padding);
        } catch (error) {
          // 오류 발생 시 패딩 없이 시도
          kakaoMapRef.current.setBounds(bounds);
          console.warn('[KakaoMap] 패딩 적용 실패, 기본 경계만 적용:', error);
        }
      }

      // 너무 가까이 줌인되는 것을 방지하기 위한 최소 줌 레벨 설정
      const currentLevel = kakaoMapRef.current.getLevel();
      if (currentLevel < 2) {
        kakaoMapRef.current.setLevel(2);
      }

      // 너무 멀리 줌아웃되는 것을 방지하기 위한 최대 줌 레벨 설정
      if (currentLevel > 8) {
        kakaoMapRef.current.setLevel(8);
      }
    } else {
      console.log(`[KakaoMap] ${selectedCategory} 카테고리에 표시할 마커가 없습니다.`);
    }

    return () => {
      // Clean up: 모든 오버레이 제거
      overlays.forEach((overlay) => overlay.setMap(null));

      // 선택된 항목 마커도 제거
      if (selectedItemMarkerRef.current) {
        selectedItemMarkerRef.current.setMap(null);
        selectedItemMarkerRef.current = null;
      }
    };
  }, [selectedCategory, selectedDay]);

  // 특정 항목의 위치로 이동하고 마커를 표시하는 함수
  const showItemMarker = useCallback((item: MapDataItem) => {
    if (!kakaoMapRef.current || !item || !item.lat || !item.lng) {
      console.warn('[KakaoMap] 지도가 초기화되지 않았거나 항목에 좌표 정보가 없습니다.');
      return;
    }

    console.log(`[KakaoMap] 항목 마커 표시: ${item.title}`);

    // 기존 카테고리 오버레이 일시적으로 숨기기
    customOverlaysRef.current.forEach((overlay) => overlay.setMap(null));

    // 기존에 선택된 항목 마커가 있다면 제거
    if (selectedItemMarkerRef.current) {
      selectedItemMarkerRef.current.setMap(null);
      selectedItemMarkerRef.current = null;
    }

    // 항목의 위치 객체 생성
    const position = new window.kakao.maps.LatLng(item.lat, item.lng);

    // 선택된 항목의 마커 생성
    const category = item.subtitle as CATEGORIES;
    const overlay = createMarkerWithLabel(
      kakaoMapRef.current as kakao.maps.Map,
      position,
      category,
      item.title,
    );

    // 마커 참조 저장
    selectedItemMarkerRef.current = overlay;

    // 지도를 해당 마커 위치로 중심 이동
    kakaoMapRef.current.setCenter(position);

    // 적절한 줌 레벨 설정
    kakaoMapRef.current.setLevel(3);

    return () => {
      // 마커 제거 함수 반환
      if (selectedItemMarkerRef.current) {
        selectedItemMarkerRef.current.setMap(null);
        selectedItemMarkerRef.current = null;
      }

      // 카테고리 오버레이 다시 표시
      customOverlaysRef.current.forEach((overlay) => overlay.setMap(kakaoMapRef.current));
    };
  }, []);

  // 지도 클릭 이벤트와 드래그 이벤트 처리
  const setupMapClickEvents = useCallback(() => {
    const map = kakaoMapRef.current;
    if (!map) return;

    console.log('[KakaoMap] 지도 클릭 및 드래그 이벤트 등록');

    // 드래그 시작 이벤트 핸들러
    function handleDragStart() {
      console.log('[KakaoMap] 드래그 시작');
      isDraggingRef.current = true;
    }

    // 드래그 종료 이벤트 핸들러
    function handleDragEnd() {
      console.log('[KakaoMap] 드래그 종료');
      // 약간의 지연시간 후 드래그 상태 해제
      setTimeout(() => {
        isDraggingRef.current = false;
      }, 50);
    }

    // 지도 클릭 이벤트 핸들러
    function handleMapClick() {
      if (isDraggingRef.current) {
        console.log('[KakaoMap] 드래그 후 클릭 무시');
        return;
      }

      console.log('[KakaoMap] 지도 빈 영역 클릭');
      if (onMapEmptyClick) {
        onMapEmptyClick();
      }
    }

    // 이벤트 리스너 등록
    if (window.kakao?.maps?.event) {
      // 각 이벤트의 리스너 ID를 저장
      const eventListeners: number[] = [];

      // 새 이벤트 등록 및 ID 저장
      eventListeners.push(window.kakao.maps.event.addListener(map, 'click', handleMapClick));
      eventListeners.push(window.kakao.maps.event.addListener(map, 'dragstart', handleDragStart));
      eventListeners.push(window.kakao.maps.event.addListener(map, 'dragend', handleDragEnd));

      // removeListener를 위한 함수 반환
      return () => {
        try {
          // 모든 등록된 이벤트 리스너 제거
          eventListeners.forEach((listenerId) => {
            if (window.kakao?.maps?.event) {
              window.kakao.maps.event.removeListener(listenerId);
            }
          });
        } catch (error: unknown) {
          console.warn('[KakaoMap] 이벤트 제거 실패:', error);
        }
      };
    }

    // 빈 정리 함수 반환
    return () => {};
  }, [onMapEmptyClick]);

  // 지도 이벤트 설정
  useEffect(() => {
    if (kakaoMapRef.current) {
      const cleanupEvents = setupMapClickEvents();
      return cleanupEvents;
    }
  }, [setupMapClickEvents]);

  return {
    mapRef,
    kakaoMapRef,
    moveToCurrentLocation,
    showItemMarker,
    isMapLoaded: mapLoaded,
  };
}
