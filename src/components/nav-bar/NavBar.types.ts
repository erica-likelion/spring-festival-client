/**
 * NavBar 컴포넌트의 Props 타입 정의
 */
export interface NavBarProps {
  isBack?: boolean;
  isSearch?: boolean;
  title?: string;
  onSearchClick?: () => void;
  backPath?: number | string;
  opacity?: boolean;
}

export interface SearchNavBarProps {
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string;
  backPath?: number | string;
}
