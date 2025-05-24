import { Tabs } from '@/components/tabs';
import { useState } from 'react';
import * as S from './MenuList.styles';
import { MenuFrame } from '@/components/image-text-frame';
import { BOOTH_LIST } from '@/constants/booth/booth';
const MENU_CATEGORY = ['메인', '사이드', '음료'];

export default function MenuList({ id }: { id: number }) {
  const [activeTab, setActiveTab] = useState<string>('메인인');
  const booth = BOOTH_LIST.find((booth) => booth.id === Number(id)); // ✅ 타입 일치
  if (!booth) {
    return null; // or handle the case when the booth is not found
  }
  return (
    <>
      <Tabs tabs={MENU_CATEGORY} activeTab={activeTab} onTabClick={setActiveTab} />

      {activeTab.includes('메인') && (
        <S.MenuFrame>
          <S.MenuItem>메인메뉴</S.MenuItem>
          <S.MenuList>
            {booth.menu.main.map((menu) => (
              <MenuFrame
                menu={menu.name}
                price={menu.price}
                description={menu.describtion}
                width="100%"
              />
            ))}
          </S.MenuList>
        </S.MenuFrame>
      )}
      {activeTab.includes('사이드') && (
        <S.MenuFrame>
          <S.MenuItem>사이드메뉴</S.MenuItem>
          <S.MenuList>
            {booth.menu.side.map((menu) => (
              <MenuFrame
                menu={menu.name}
                price={menu.price}
                description={menu.describtion}
                width="100%"
              />
            ))}
          </S.MenuList>
        </S.MenuFrame>
      )}
      {activeTab.includes('음료') && (
        <S.MenuFrame>
          <S.MenuItem>음료</S.MenuItem>
          <S.MenuList>
            {booth.menu.sub.map((menu) => (
              <MenuFrame
                menu={menu.name}
                price={menu.price}
                description={menu.describtion}
                width="100%"
              />
            ))}
          </S.MenuList>
        </S.MenuFrame>
      )}
    </>
  );
}
