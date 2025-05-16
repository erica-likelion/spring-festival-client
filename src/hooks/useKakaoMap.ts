import { useEffect, useRef, useCallback } from 'react';
import { KakaoMapOptions } from '@/types/kakao-maps';
import MyLocationIcon from '@/assets/icons/my-location.svg';

export function useKakaoMap(options: KakaoMapOptions = {}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const kakaoMapRef = useRef<kakao.maps.Map | null>(null);
  const myLocationMarkerRef = useRef<kakao.maps.Marker | null>(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      console.log('[KakaoMap] 지도 로드 시도 중...');
      console.log('[KakaoMap] 로드 조건 확인:', {
        kakao: !!window.kakao,
        kakaoMaps: window.kakao && !!window.kakao.maps,
        mapRef: !!mapRef.current,
        notInitializedYet: !kakaoMapRef.current,
      });

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

    // 카카오 맵 스크립트 로드
    if (!window.kakao) {
      console.log('[KakaoMap] 카카오맵 스크립트 로드 시작');
      const script = document.createElement('script');
      const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;
      console.log('[KakaoMap] API 키 확인:', apiKey ? '설정됨' : '설정되지 않음');

      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer,drawing&autoload=false`;
      script.async = true;

      script.onload = () => {
        console.log('[KakaoMap] 스크립트 로드 성공, 지도 초기화 시작');
        window.kakao.maps.load(loadKakaoMap);
      };

      script.onerror = (error) => {
        console.error('[KakaoMap] 스크립트 로드 실패:', error);
      };

      document.head.appendChild(script);
      console.log('[KakaoMap] 스크립트 태그 추가됨');
    } else {
      console.log('[KakaoMap] 이미 로드된 kakao 객체 사용');
      loadKakaoMap();
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    const cleanup = enableMultiTouch(mapRef.current);
    return () => {
      if (cleanup) cleanup();
    };
  }, [options]);

  const moveToCurrentLocation = useCallback(() => {
    console.log('[KakaoMap] 현재 위치로 이동 요청');
    if ('geolocation' in navigator) {
      console.log('[KakaoMap] Geolocation API 사용 가능');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('[KakaoMap] 위치 정보 수신 성공');
          const { latitude: lat, longitude: lng } = position.coords;
          console.log(`[KakaoMap] 위도: ${lat}, 경도: ${lng}`);

          if (kakaoMapRef.current) {
            console.log('[KakaoMap] 지도 객체 존재, 위치 이동 시작');
            // 정확히 동일한 LatLng 객체를 사용하여 일관성 유지
            const currentPosition = new window.kakao.maps.LatLng(lat, lng);

            // 지도 중심 이동
            kakaoMapRef.current.setCenter(currentPosition);

            // 지도 레벨 조정 (선택 사항)
            // 기본 줌 레벨 설정
            kakaoMapRef.current.setLevel(2);

            // 기존 마커 제거
            if (myLocationMarkerRef.current) {
              myLocationMarkerRef.current.setMap(null);
            }

            // 마커 이미지 설정
            const markerSize = new window.kakao.maps.Size(44, 44);
            const markerImage = new window.kakao.maps.MarkerImage(MyLocationIcon, markerSize);

            // 마커 생성 - 동일한 currentPosition 사용
            const marker = new window.kakao.maps.Marker({
              position: currentPosition, // 동일한 위치 객체 사용
              map: kakaoMapRef.current,
              image: markerImage,
              title: '내 위치',
            });

            // 마커 참조 저장
            myLocationMarkerRef.current = marker;
          }
        },
        (error) => {
          console.error('현재 위치를 가져오는데 실패했습니다:', error);
          alert('위치 정보를 가져올 수 없습니다. 위치 권한을 확인해주세요.');
        },
        {
          enableHighAccuracy: true, // 고정밀도 위치 정보 사용
          maximumAge: 0, // 캐시된 위치 사용 안 함
          timeout: 5000, // 5초 후 타임아웃
        },
      );
    } else {
      console.error('이 브라우저에서는 위치 정보를 제공하지 않습니다.');
      alert('이 브라우저에서는 위치 정보를 사용할 수 없습니다.');
    }
  }, []);

  return {
    mapRef,
    kakaoMapRef,
    moveToCurrentLocation,
  };
}
