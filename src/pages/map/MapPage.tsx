import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPageHeader, MapPageBottomSheet } from '@/features/map';
import { days, categories, DAYS, CATEGORIES } from '@/constants/map';
import * as S from './MapPage.styles';
import { useLayoutStore } from '@/stores/useLayoutStore';
import ReCenterButtonIcon from '@/assets/icons/re-center.svg?react';

export default function Map() {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const kakaoMapRef = useRef<kakao.maps.Map>(null);

  // 날짜 및 카테고리 관련 상태
  const [selectedDay, setSelectedDay] = useState<DAYS>(days[0]);
  const [selectedCategory, setSelectedCategory] = useState<CATEGORIES | null>(null);

  // 헤더 관련 상태
  const [headerExpanded, setHeaderExpanded] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(true);

  // 바텀 시트 관련 상태
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  useEffect(() => {
    if (selectedCategory) {
      setIsBottomSheetOpen(true);
    } else {
      setIsBottomSheetOpen(false);
    }
  }, [selectedCategory]);

  // 바텀시트가 열리면 하단 네비게이션 숨김
  useEffect(() => {
    if (isBottomSheetOpen) {
      useLayoutStore.getState().setIsNav(false);
    } else {
      useLayoutStore.getState().setIsNav(true);
    }
  }, [isBottomSheetOpen]);

  useEffect(() => {
    if (headerExpanded) {
      setIsBottomSheetOpen(false);
    } else if (selectedCategory) {
      setIsBottomSheetOpen(true);
    }
  }, [headerExpanded, selectedCategory]);

  // 날짜 바꾸면 카테고리 초기화
  useEffect(() => {
    setSelectedCategory(null);
  }, [selectedDay]);

  // 헤더 핸들러
  const handleDayChange = (day: DAYS) => {
    setSelectedDay(day);
    setHeaderExpanded(false);
  };

  const handleHeaderToggle = () => {
    if (headerExpanded) {
      setHeaderExpanded(false);
    } else {
      setHeaderExpanded(true);
    }
  };

  // useEffect와 동일한 로직을 함수로 변환
  const handleHeaderExpandChange = (expanded: boolean) => {
    if (expanded) {
      setShowCategory(false);
    } else {
      // 축소 시 드롭다운 애니메이션 후에 카테고리 표시
      setTimeout(() => {
        setShowCategory(true);
      }, 200); // 드롭다운 애니메이션 시간과 동일하게 설정
    }
  };

  const handleCategoryChange = (category: CATEGORIES | null) => {
    setSelectedCategory(category);
  };

  const handleSearchClick = () => {
    navigate('search');
  };

  // 지도 관련 시작 ////////////////////////////////
  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps && mapRef.current && !kakaoMapRef.current) {
        // 지도 초기화
        const options = {
          center: new window.kakao.maps.LatLng(37.294711, 126.833163), // 대운동장
          level: 3, // 지도 확대 레벨
          draggable: true, // 드래그 가능하도록 설정
          zoomable: true, // 줌 가능하도록 설정
          scrollwheel: true, // 스크롤 휠 확대/축소 가능
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);
        kakaoMapRef.current = map;

        // 모바일 투핑거 제스처 설정
        // Kakao Maps에서 자동으로 모바일 멀티터치를 지원하지만, 명시적으로 설정
        map.setZoomable(true);

        // 지도 로드 후 모바일 환경에서 핀치 줌 활성화를 위한 추가 설정
        enableMultiTouch(mapRef.current);
      }
    };

    // 모바일 멀티터치 설정 함수
    const enableMultiTouch = (element: HTMLDivElement | null) => {
      if (!element) return;

      // 터치 이벤트 전파 막지 않도록 설정
      element.style.touchAction = 'manipulation'; // 기본 스크롤, 핀치 줌 허용

      // 모바일 사파리 등에서 핀치 줌 제스처 허용
      document.addEventListener(
        'gesturestart',
        function (e) {
          e.preventDefault();
        },
        { passive: false },
      );

      document.addEventListener(
        'gesturechange',
        function (e) {
          e.preventDefault();
        },
        { passive: false },
      );

      document.addEventListener(
        'gestureend',
        function (e) {
          e.preventDefault();
        },
        { passive: false },
      );
    };

    // 카카오 맵 스크립트 로드
    if (!window.kakao) {
      const script = document.createElement('script');
      const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY; // 환경변수에서 API 키 가져오기
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer,drawing&autoload=false`;
      script.async = true;

      script.onload = () => {
        window.kakao.maps.load(loadKakaoMap);
      };

      document.head.appendChild(script);
    } else {
      loadKakaoMap();
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('gesturestart', function (e) {
        e.preventDefault();
      });
      document.removeEventListener('gesturechange', function (e) {
        e.preventDefault();
      });
      document.removeEventListener('gestureend', function (e) {
        e.preventDefault();
      });
    };
  }, []);
  // 지도 관련 끝 ////////////////////////////////

  return (
    <S.MapContainer>
      <S.MapOverlay $headerExpanded={headerExpanded} />
      <S.MapWrapper ref={mapRef} />
      <S.ReCenterButton $isBottomSheetOpen={isBottomSheetOpen}>
        <ReCenterButtonIcon />
      </S.ReCenterButton>
      <S.ContentContainer>
        <MapPageHeader
          days={days}
          selectedDay={selectedDay}
          onDayChange={handleDayChange}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onSearchClick={handleSearchClick}
          expanded={headerExpanded}
          onExpandToggle={handleHeaderToggle}
          showCategory={showCategory}
          onExpandChange={handleHeaderExpandChange}
        />
        {isBottomSheetOpen && (
          <MapPageBottomSheet selectedCategory={selectedCategory} selectedDay={selectedDay} />
        )}
      </S.ContentContainer>
    </S.MapContainer>
  );
}
