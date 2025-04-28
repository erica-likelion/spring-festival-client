import * as S from './Tabs.styles';
import { TabsProps } from './Tabs.types';

/**
 * Tabs component
 * @param tabs tabs string array
 * @param activeTab active tab string
 * @param onTabClick click event handler
 * @param autoWidth optional prop to set width to auto
 * @param toggle optional prop to set toggle behavior
 * @param margin optional prop to set horizontal margin (first and last tab)
 * @returns {JSX.Element}
 */

export default function Tabs({
  tabs,
  activeTab,
  onTabClick,
  autoWidth = false,
  toggle = false,
  margin = '0',
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
      {tabs.map((tab, index) => (
        <S.Tab
          key={tab}
          $isActive={tab === activeTab}
          onClick={() => handleTabClick(tab)}
          $isFirst={index === 0}
          $isLast={index === tabs.length - 1}
          $margin={margin}
        >
          <S.TabText $isActive={tab === activeTab}>{tab}</S.TabText>
        </S.Tab>
      ))}
    </S.TabsContainer>
  );
}
