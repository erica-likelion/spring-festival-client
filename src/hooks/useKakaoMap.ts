import { useEffect, useRef, useCallback } from 'react';
import { KakaoMapOptions } from '@/types/kakao-maps';
import { getCategoryMarkerImage } from '@/utils/markerIcons';
import { CATEGORIES } from '@/constants/map';
import { LOCATION_DATA } from '@/constants/map/LOC_DATA';
import { DAYS } from '@/constants/map';

export function useKakaoMap(
  options: KakaoMapOptions = {},
  selectedCategory: CATEGORIES | null = null,
  selectedDay: DAYS,
) {
  const internalMapRef = useRef<HTMLDivElement>(null);
  const kakaoMapRef = useRef<kakao.maps.Map | null>(null);
  const myLocationMarkerRef = useRef<kakao.maps.Marker | null>(null);
  const markersRef = useRef<kakao.maps.Marker[]>([]);

  // 타입 안전성을 위해 mapRef를 정의
  const mapRef = options.mapRef || internalMapRef;

  useEffect(() => {
    const loadKakaoMap = () => {
      console.log('[KakaoMap] 지도 로드 시도 중...');
      console.log('[KakaoMap] 로드 조건 확인:', {
        kakao: !!window.kakao,
        kakaoMaps: window.kakao && !!window.kakao.maps,
        mapRef: !!mapRef.current,
        notInitializedYet: !kakaoMapRef.current,
      });

      // 카카오맵이 준비되었는지 확인
      if (window.kakao && window.kakao.maps && mapRef.current && !kakaoMapRef.current) {
        try {
          console.log('[KakaoMap] 지도 옵션 설정 시작');
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

          console.log('[KakaoMap] 지도 초기화 시작');
          // 지도 초기화
          const map = new window.kakao.maps.Map(mapRef.current, mapOptions);
          console.log('[KakaoMap] 지도 객체 생성 완료:', !!map);

          kakaoMapRef.current = map;

          // 모바일 핀치 줌 관련 설정
          map.setZoomable(true);
          enableMultiTouch(mapRef.current);
          console.log('[KakaoMap] 지도 초기화 완료');
        } catch (error) {
          console.error('[KakaoMap] 지도 초기화 중 오류 발생:', error);
        }
      } else {
        console.warn('[KakaoMap] 지도 초기화 조건이 충족되지 않았습니다.');
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

    // index.html에 추가했던 스크립트에 의존하지 않고 직접 로드
    const waitForKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        console.log('[KakaoMap] 카카오맵 객체 감지됨');

        if (typeof window.kakao.maps.load === 'function') {
          console.log('[KakaoMap] 카카오맵 load 함수로 로드');
          window.kakao.maps.load(loadKakaoMap);
        } else {
          console.log('[KakaoMap] 카카오맵 직접 로드');
          loadKakaoMap();
        }
      } else {
        console.log('[KakaoMap] 카카오맵 객체 없음, 1초 후 재시도');
        setTimeout(waitForKakaoMap, 1000); // 1초마다 확인
      }
    };

    // 카카오맵 스크립트 동적 로드
    if (!window.kakao) {
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
      script.async = false; // 비동기 로드 사용하지 않음 (동기적으로 로드)

      // 로드 이벤트 핸들러
      script.onload = () => {
        console.log('[KakaoMap] 스크립트 로드 성공');
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(loadKakaoMap);
        }
      };

      script.onerror = (error) => {
        console.error('[KakaoMap] 스크립트 로드 실패:', error);
      };

      document.head.appendChild(script);
    } else {
      console.log('[KakaoMap] 이미 로드된 kakao 객체 사용');
      waitForKakaoMap();
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    const cleanup = enableMultiTouch(mapRef.current);
    return () => {
      if (cleanup) cleanup();
    };
  }, [options, mapRef]);

  const moveToCurrentLocation = useCallback(() => {
    console.log('[KakaoMap] 현재 위치로 이동 요청');

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
    if (kakaoMapRef.current && selectedCategory) {
      const categoryData = LOCATION_DATA[selectedCategory];

      // 이전 마커들 제거 로직
      const prevMarkers = markersRef.current;
      if (prevMarkers.length > 0) {
        console.log(`[KakaoMap] ${prevMarkers.length}개의 이전 마커 제거`);
        prevMarkers.forEach((marker) => marker.setMap(null));
        markersRef.current = [];
      }

      // 새 마커 추가
      const markers: kakao.maps.Marker[] = [];

      categoryData.forEach((location) => {
        // closeDay에 현재 선택된 날짜가 포함되어 있으면 마커를 표시하지 않음
        if (location.closeDay && location.closeDay.includes(selectedDay)) {
          console.log(`[KakaoMap] ${location.name}은(는) ${selectedDay}에 운영하지 않습니다.`);
          return;
        }

        const position = new window.kakao.maps.LatLng(location.lat, location.lng);
        const marker = new window.kakao.maps.Marker({
          position,
          map: kakaoMapRef.current as kakao.maps.Map,
          image: getCategoryMarkerImage(selectedCategory),
          title: location.name,
        });

        markers.push(marker);

        // 여기에 마커 클릭 이벤트 추가하기
      });

      return () => {
        // Clean up: 모든 마커 제거
        markers.forEach((marker) => marker.setMap(null));
      };
    }
  }, [selectedCategory, selectedDay]);

  return {
    mapRef,
    kakaoMapRef,
    moveToCurrentLocation,
  };
}
