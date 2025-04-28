import { CSSMarginValue } from '@/types/css-values.types';

/**
 * Chips 컴포넌트의 props 타입
 */

export type ChipsProps = {
  chips: string[];
  /**
   * 넓이 조정 여부
   * default: false
   *
   * false - width: 100%
   *
   * true - width: auto
   *
   * 중앙으로 정렬해서 쓰고 싶은 경우 true를 추천
   */
  autoWidth?: boolean;

  /**
   * 클릭 시 이벤트
   * 클릭한 칩에 대한 지도 페이지로 이동
   */
  onChipClick?: (chip: string) => void;
  /**
   * 삭제 시 이벤트
   * 클릭한 칩이 칩 리스트에서 삭제
   */
  onChipClose?: (chip: string) => void;
  /**
   * 좌우 여백 지정 (예: "1.25rem")
   * default: "0"
   */
  margin?: CSSMarginValue;
};
