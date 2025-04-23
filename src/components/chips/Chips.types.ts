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
};
