import * as S from './Header.styles';
import { useEffect } from 'react';
import { MapPageHeaderProps } from './Header.types';
import { Tabs } from '@/components/tabs';
import { DAYS, CATEGORIES } from '@/constants/map'; // 타입 import 추가
import ArrowIcon from '@/assets/icons/down-arrow.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import CircleCheckedIcon from '@/assets/icons/circle-checked.svg?react';
import CircleUncheckedIcon from '@/assets/icons/circle-unchecked.svg?react';

export default function MapPageHeader({
  days,
  selectedDay,
  onDayChange,
  categories,
  selectedCategory,
  onCategoryChange,
  onSearchClick,
  expanded = false,
  onExpandToggle,
  showCategory = true,
  onExpandChange,
  isBackVisible,
  onBackButtonClick,
}: MapPageHeaderProps) {
  // expanded 상태가 변경될 때마다 콜백 호출
  useEffect(() => {
    onExpandChange?.(expanded);
  }, [expanded, onExpandChange]);

  return (
    <S.Container $expanded={expanded}>
      <S.HeadWrap $expanded={expanded}>
        {isBackVisible && (
          <S.BackButton $visible={isBackVisible} onClick={onBackButtonClick}>
            <ArrowIcon width={'1.5rem'} height={'1.5rem'} />
          </S.BackButton>
        )}
        <S.TitleWrap onClick={onExpandToggle}>
          <S.Title>{expanded ? '일차 선택' : `${selectedDay} 지도`}</S.Title>
          <S.DropdownButton $expanded={expanded}>
            <ArrowIcon width={'1.5rem'} height={'1.5rem'} />
          </S.DropdownButton>
        </S.TitleWrap>
        <S.Search $expanded={expanded}>
          <SearchIcon width={'1.5rem'} height={'1.5rem'} onClick={onSearchClick} />
        </S.Search>
      </S.HeadWrap>
      <S.DropDownWrap $expanded={expanded}>
        {days.map((day) => (
          <S.DaySelectButton
            key={day}
            onClick={() => onDayChange(day as DAYS)} // 타입 안전성 보장
          >
            {day} 지도
            {selectedDay === day ? (
              <CircleCheckedIcon width={'1.5rem'} height={'1.5rem'} />
            ) : (
              <CircleUncheckedIcon width={'1.5rem'} height={'1.5rem'} />
            )}
          </S.DaySelectButton>
        ))}
      </S.DropDownWrap>
      <S.OverLayWrap $expanded={expanded}>
        <S.OverLay $expanded={expanded} />
        {showCategory && (
          <S.CategoryWrap $expanded={expanded}>
            <Tabs
              tabs={[...(categories as readonly string[])]}
              activeTab={selectedCategory || ''}
              onTabClick={(tab) => {
                // null이 아닌 경우에만 타입 변환하여 전달
                if (tab) {
                  onCategoryChange(tab as CATEGORIES);
                } else {
                  onCategoryChange(null);
                }
              }}
              autoWidth={true}
              toggle={true}
              margin="1.25rem"
            />
          </S.CategoryWrap>
        )}
      </S.OverLayWrap>
    </S.Container>
  );
}
