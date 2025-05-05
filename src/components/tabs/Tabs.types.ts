import { CSSMarginValue } from '@/types/css-values.types';

/**
 *   Tabs 컴포넌트의 props 타입
 */

export type TabsProps = {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;

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
   * 토글 가능 여부
   * default: false
   */
  toggle?: boolean;

  /**
   * 좌우 여백 지정 (예: "1.25rem")
   * default: "0"
   */
  margin?: CSSMarginValue;
};

/**
 *   MultiTabs 컴포넌트의 props 타입
 */

export type MultiTabsProps = {
  tabs: string[];
  activeTab: string[];
  onTabClick: (updatedTabs: string[]) => void;

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
   * 토글 가능 여부
   * default: false
   */
  toggle?: boolean;

  /**
   * 좌우 여백 지정 (예: "1.25rem")
   * default: "0"
   */
  margin?: CSSMarginValue;
};
