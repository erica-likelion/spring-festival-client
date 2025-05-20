import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPageHeader, MapPageBottomSheet } from '@/features/map';
import { days, categories, DAYS, CATEGORIES } from '@/constants/map';
import { FESTIVAL_START_DATE, FESTIVAL_TOTAL_DAYS } from '@/constants/festival/dates';
import { getCurrentFestivalDay } from '@/utils/dateUtils';
import * as S from './MapPage.styles';
import { useLayoutStore } from '@/stores/useLayoutStore';
import ReCenterButtonIcon from '@/assets/icons/re-center.svg?react';
import ReCenterClickedButtonIcon from '@/assets/icons/re-center-clicked.svg?react';
import { useKakaoMap } from '@/hooks/useKakaoMap';

export default function Map() {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);

  // 현재 날짜에 기반한 페스티벌 일차 계산
  const currentDay = getCurrentFestivalDay(FESTIVAL_START_DATE, FESTIVAL_TOTAL_DAYS) as DAYS;
  console.log(
    `[MapPage] 현재 날짜: ${new Date().toLocaleDateString()}, 페스티벌 시작 일차: ${FESTIVAL_START_DATE}, 페스티벌 일차: ${currentDay}`,
  );

  // 날짜 및 카테고리 관련 상태
  const [selectedDay, setSelectedDay] = useState<DAYS>(currentDay);
  const [selectedCategory, setSelectedCategory] = useState<CATEGORIES | null>(null);

  // 카카오맵 커스텀 훅 사용
  console.log('[MapPage] useKakaoMap 훅 초기화 시작');
  const { moveToCurrentLocation, showItemMarker } = useKakaoMap(
    {
      mapRef,
      center: { lat: 37.294711, lng: 126.833163 }, // 대운동장
      level: 3,
      draggable: true,
      zoomable: true,
      scrollwheel: true,
    },
    selectedCategory,
    selectedDay,
  );
  console.log('[MapPage] useKakaoMap 훅 초기화 완료');

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

  // 페이지를 벗어날 때 네비게이션 바를 원상복구
  useEffect(() => {
    return () => {
      // 언마운트 시 네비게이션 바를 다시 표시
      useLayoutStore.getState().setIsNav(true);
    };
  }, []);

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

  // 현재 위치 버튼 관련 상태
  const [isReCentering, setIsReCentering] = useState<boolean>(false);

  // 현재 위치로 이동 핸들러
  const handleReCenterClick = () => {
    setIsReCentering(true); // 클릭 효과 활성화
    moveToCurrentLocation(); // 현재 위치로 이동

    // 일정 시간 후 버튼 상태 원래대로 복원
    setTimeout(() => {
      setIsReCentering(false);
    }, 1000);
  };

  console.log('[지도] MapPage 컴포넌트가 렌더링되었습니다.');

  return (
    <S.MapContainer>
      <S.MapOverlay $headerExpanded={headerExpanded} />
      <S.MapWrapper ref={mapRef} />
      <S.ReCenterButton $isBottomSheetOpen={isBottomSheetOpen} onClick={handleReCenterClick}>
        {isReCentering ? <ReCenterClickedButtonIcon /> : <ReCenterButtonIcon />}
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
          <MapPageBottomSheet
            selectedCategory={selectedCategory}
            selectedDay={selectedDay}
            onItemClick={showItemMarker}
          />
        )}
      </S.ContentContainer>
    </S.MapContainer>
  );
}
