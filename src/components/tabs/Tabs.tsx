import * as S from './Tabs.styles';
import { TabsProps } from './Tabs.types';

/**
 * Tabs component
 * @param tabs tabs string array
 * @param activeTab active tab string
 * @param onTabClick click event handler
 * @returns
 */

export default function Tabs({ tabs, activeTab, onTabClick }: TabsProps) {
  return (
    <S.TabsContainer>
      {tabs.map((tab) => (
        <S.Tab key={tab} isActive={tab === activeTab} onClick={() => onTabClick(tab)}>
          <S.TabText isActive={tab === activeTab}>{tab}</S.TabText>
        </S.Tab>
      ))}
    </S.TabsContainer>
  );
}
