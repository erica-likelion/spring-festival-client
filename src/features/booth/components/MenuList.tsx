import { Tabs } from '@/components/tabs';
import { useState } from 'react';
//import * as S from './MenuList.styles';
//import { MenuFrame } from '@/components/image-text-frame';
import { BOOTH_LIST } from '@/constants/booth/booth';
const MENU_CATEGORY = ['메인', '사이드', '서브'];

export default function MenuList({ id }: { id: number }) {
  const [activeTab, setActiveTab] = useState('');
  const booth = BOOTH_LIST.find((booth) => booth.id === Number(id)); // ✅ 타입 일치
  if (!booth) {
    return null; // or handle the case when the booth is not found
  }
  return (
    <>
      <Tabs tabs={MENU_CATEGORY} activeTab={activeTab} onTabClick={(tab) => setActiveTab(tab)} />
      메뉴데이터 공사중
      {/**
      <S.MenuList>
        {booth.menu.main.map((main) => (
          <S.MenuItem>
            <S.MenuCategory>{main}</S.MenuCategory>
            <MenuFrame menu={main} description={'미정'} price={0} width="100%" />
          </S.MenuItem>
        ))}
      </S.MenuList>
 */}
    </>
  );
}
