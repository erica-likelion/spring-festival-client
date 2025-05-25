/**
 * 버튼 크기 타입
 * - 'small': 7.5rem 버튼 (폰트 small500)
 * - 'large': 15rem 버튼 (폰트 medium500)
 * - 'large-header': 20rem 버튼 (폰트 header.h4)
 * - 'larger': 20 rem 버튼 (폰트 medium500)
 */
export type BlueButtonSize = 'small' | 'large' | 'large-header' | 'larger';

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
   * @default false
   */
  disabled?: boolean;

  /**
   * 버튼 사이즈 및 스타일
   * @default 'large'
   */
  size?: BlueButtonSize;

  /**
   * 버튼 클릭 시 실행되는 함수
   * 예: 페이지 이동, 모달 열기 등 사용자 정의 동작
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * 스타일 전용 Props
 */
export interface StyledButtonProps {
  $size: BlueButtonSize;
}
