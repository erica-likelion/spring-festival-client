import { days, categories, DAYS, CATEGORIES } from '@/constants/map';

/**
 * 지도 페이지 헤더 컴포넌트의 속성 정의
 * @interface MapPageHeaderProps
 */
export type MapPageHeaderProps = {
  /** 선택 가능한 일자 목록 */
  days: typeof days;

  /** 현재 선택된 일자 */
  selectedDay: DAYS;

  /** 일자 선택 변경 시 호출되는 핸들러 함수 */
  onDayChange: (day: DAYS) => void;

  /** 선택 가능한 카테고리 목록 */
  categories: typeof categories;

  /** 현재 선택된 카테고리 */
  selectedCategory: CATEGORIES | null;

  /** 카테고리 선택 변경 시 호출되는 핸들러 함수 */
  onCategoryChange: (category: CATEGORIES | null) => void;

  /** 검색 버튼 클릭 시 호출되는 핸들러 함수 */
  onSearchClick?: () => void;

  /** 헤더가 확장된 상태인지 여부 */
  expanded: boolean;

  /** 헤더 확장/축소 토글 핸들러 함수 */
  onExpandToggle: () => void;

  /** 헤더 확장 상태 변경 시 호출되는 핸들러 함수 */
  onExpandChange: (expanded: boolean) => void;

  /** 카테고리 섹션 표시 여부 */
  showCategory: boolean;

  /** 뒤로가기 버튼 표시 여부 */
  isBackVisible?: boolean;

  /** 뒤로가기 버튼 클릭 시 호출되는 핸들러 함수 */
  onBackButtonClick?: () => void;
};
