/**
 * NavBar 컴포넌트의 Props 타입 정의
 */
export interface NavBarProps {
  isBack?: boolean;
  isSearch?: boolean;
  title?: string;
}

export interface SearchNavBarProps {
  onClick: () => void;
  onChange?: () => void;
  placeholder: string;
}
