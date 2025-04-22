/**
 *   Tabs 컴포넌트의 props 타입
 */

export type TabsProps = {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
};
