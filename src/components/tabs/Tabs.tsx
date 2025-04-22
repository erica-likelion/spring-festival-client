import * as S from './Tabs.styles';
import { TabsProps } from './Tabs.types';

/**
 * Tabs component
 * @param tabs tabs string array
 * @param activeTab active tab string
 * @param onTabClick click event handler
 * @param autoWidth optional prop to set width to auto
 * @returns {JSX.Element}
 */

export default function Tabs({ tabs, activeTab, onTabClick, autoWidth = false }: TabsProps) {
  return (
    <S.TabsContainer $autoWidth={autoWidth}>
      {tabs.map((tab) => (
        <S.Tab key={tab} isActive={tab === activeTab} onClick={() => onTabClick(tab)}>
          <S.TabText isActive={tab === activeTab}>{tab}</S.TabText>
        </S.Tab>
      ))}
    </S.TabsContainer>
  );
}
