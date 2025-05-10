import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { MapPageHeader } from '@/features/map';
import { MapPageBottomSheet } from '@/features/map';
import { DEFAULT_BOTTOM_SHEET_HEIGHT_REM } from '@/constants/map/BottomSheet';
import { days, categories, DAYS, CATEGORIES } from '@/constants/map';
import * as S from './MapPage.styles';

export default function Map() {
  const navigate = useNavigate();
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  // 날짜 및 카테고리 관련 상태
  const [selectedDay, setSelectedDay] = useState<DAYS>(days[0]);
  const [selectedCategory, setSelectedCategory] = useState<CATEGORIES | null>(null);

  // 헤더 관련 상태
  const [headerExpanded, setHeaderExpanded] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(true);

  // 바텀시트 관련 상태
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [currentHeightRem, setCurrentHeightRem] = useState<number>(DEFAULT_BOTTOM_SHEET_HEIGHT_REM); // 초기 높이
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);

  useEffect(() => {
    if (isBottomSheetOpen) {
      setIsNav(false);
    } else {
      setIsNav(true);
      setSelectedCategory(null);
    }
  }, [isBottomSheetOpen, setIsNav]);

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
      setIsBottomSheetOpen(false);
    }
  };

  // 헤더 펼쳐질 때 카테고리 숨기기
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
    if (category) {
      setIsBottomSheetOpen(true);
    } else {
      // 카테고리 선택 해제 시 바텀시트 닫기
      setIsBottomSheetOpen(false);
    }
  };

  const handleSearchClick = () => {
    navigate('search');
  };

  // 바텀시트 높이 관련 핸들러
  const updateBottomSheetHeight = useCallback((newHeight: number) => {
    setCurrentHeightRem(newHeight);
  }, []);

  const handleBottomSheetDragStart = (y: number) => {
    setIsDragging(true);
    setStartY(y);
  };

  const handleBottomSheetDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <S.MapContainer>
      <S.MapOverlay $headerExpanded={headerExpanded} />
      <S.ContentContainer>
        <MapPageHeader
          days={days}
          selectedDay={selectedDay}
          onDayChange={handleDayChange}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onSearchClick={handleSearchClick}
          $expanded={headerExpanded}
          onExpandToggle={handleHeaderToggle}
          showCategory={showCategory}
          onExpandChange={handleHeaderExpandChange}
        />
        {isBottomSheetOpen && (
          <MapPageBottomSheet
            isBottomSheetOpen={true}
            selectedDay={selectedDay}
            selectedCategory={selectedCategory}
            currentHeight={currentHeightRem}
            onHeightChange={updateBottomSheetHeight}
            isDragging={isDragging}
            startY={startY}
            onDragStart={handleBottomSheetDragStart}
            onDragEnd={handleBottomSheetDragEnd}
          />
        )}
      </S.ContentContainer>
    </S.MapContainer>
  );
}
