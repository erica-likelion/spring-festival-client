import * as S from './Tabs.styles';
import { TabsProps } from './Tabs.types';

/**
 * Tabs component
 * @param tabs tabs string array
 * @param activeTab active tab string
 * @param onTabClick click event handler
 * @param autoWidth optional prop to set width to auto
 * @param toggle optional prop to set toggle behavior
 * @returns {JSX.Element}
 */

export default function Tabs({
  tabs,
  activeTab,
  onTabClick,
  autoWidth = false,
  toggle = false,
}: TabsProps) {
  const handleTabClick = (tab: string) => {
    if (toggle && activeTab === tab) {
      onTabClick('');
    } else {
      onTabClick(tab);
    }
  };

  return (
    <S.TabsContainer $autoWidth={autoWidth}>
      {tabs.map((tab) => (
        <S.Tab key={tab} isActive={tab === activeTab} onClick={() => handleTabClick(tab)}>
          <S.TabText isActive={tab === activeTab}>{tab}</S.TabText>
        </S.Tab>
      ))}
    </S.TabsContainer>
  );
}
