import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPageHeader } from '@/features/map';
import { days, categories, DAYS, CATEGORIES } from '@/constants/map';
import * as S from './MapPage.styles';

export default function Map() {
  const navigate = useNavigate();

  // 날짜 및 카테고리 관련 상태
  const [selectedDay, setSelectedDay] = useState<DAYS>(days[0]);
  const [selectedCategory, setSelectedCategory] = useState<CATEGORIES | null>(null);

  // 헤더 관련 상태
  const [headerExpanded, setHeaderExpanded] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(true);

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
          expanded={headerExpanded}
          onExpandToggle={handleHeaderToggle}
          showCategory={showCategory}
          onExpandChange={handleHeaderExpandChange}
        />
      </S.ContentContainer>
    </S.MapContainer>
  );
}
