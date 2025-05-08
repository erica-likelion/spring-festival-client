import { DAYS, CATEGORIES } from '@/constants/map';

/**
 * 지도 페이지 하단 시트 컴포넌트의 Props 타입 정의
 *
 * @typedef {Object} MapPageBottomSheetProps
 * @property {boolean} isBottomSheetOpen - 바텀시트 열림 여부 상태
 * @property {DAYS} selectedDay - 현재 선택된 날짜
 * @property {CATEGORIES | null} selectedCategory - 현재 선택된 카테고리 (없을 경우 null)
 * @property {number} currentHeight - 바텀시트의 현재 높이 (rem 단위)
 * @property {function} onHeightChange - 높이 변경 시 호출되는 콜백 함수
 * @property {boolean} isDragging - 사용자가 현재 드래그 중인지 여부
 * @property {number} startY - 드래그 시작 시 Y 좌표
 * @property {function} onDragStart - 드래그 시작 시 호출되는 콜백 함수
 * @property {function} onDragEnd - 드래그 종료 시 호출되는 콜백 함수
 */
export type MapPageBottomSheetProps = {
  isBottomSheetOpen: boolean;
  selectedDay: DAYS;
  selectedCategory: CATEGORIES | null;
  currentHeight: number;
  onHeightChange: (height: number) => void;
  isDragging: boolean;
  startY: number;
  onDragStart: (y: number) => void;
  onDragEnd: () => void;
};
