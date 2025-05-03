/**
 * BlueButton 컴포넌트 및 스타일 Props 타입 정의
 */
export interface BlueButtonProps {
  label: string;
  disabled?: boolean;
  isBigger?: boolean;
  onClick?: () => void;
}

export interface StyledButtonProps {
  $isBigger: boolean;
  $disabled?: boolean;
}
