import { CATEGORIES } from '@/constants/map';
import { DAYS } from '@/constants/map';
import { ReactNode } from 'react';
import { MapDataItem } from '@/constants/map/MapData';

/**
 * 바텀시트 컴포넌트 Props 타입 정의
 *
 * @interface BottomSheetProps
 * @property {CATEGORIES|null} selectedCategory - 선택된 카테고리 (필수)
 * @property {DAYS} [selectedDay] - 선택된 날짜 (기본값: 첫째 날)
 * @property {ReactNode} [children] - 바텀시트 내부에 렌더링할 사용자 지정 콘텐츠 (옵션)
 * @property {Function} [onItemClick] - 항목 클릭 시 호출되는 콜백 함수 (옵션)
 */
export interface BottomSheetProps {
  selectedCategory: CATEGORIES | null;
  selectedDay: DAYS;
  children?: ReactNode;
  onItemClick?: (item: MapDataItem) => void;
}
