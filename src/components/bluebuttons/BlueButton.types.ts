/**
 * 공통 BlueButton 컴포넌트의 Props
 */
export interface BlueButtonProps {
  /**
   * 버튼에 표시될 텍스트
   */
  label: string;

  /**
   * 버튼 비활성화 여부
   * true일 경우 클릭이 비활성화되고 회색 스타일로 표시됨
   * @default false
   */
  disabled?: boolean;

  /**
   * 버튼 크기 조정 여부
   * true이면 기본 크기(더 큰 버튼), false이면 작아진 버튼
   * @default true
   */
  isBigger?: boolean;

  /**
   * 버튼 클릭 시 실행되는 함수
   * 예: 페이지 이동, 모달 열기 등 사용자 정의 동작
   * @returns void
   */
  onClick?: () => void;
}

export interface StyledButtonProps {
  $isBigger: boolean;
}
