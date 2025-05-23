import { MultiTabs } from '@/components/tabs';
import { Fragment, useState } from 'react';
import * as S from './MenuList.styles';
import { MenuFrame } from '@/components/image-text-frame';
import { BOOTH_LIST } from '@/constants/booth/booth';
const MENU_CATEGORY = ['메인', '사이드', '서브'];

export default function MenuList({ id }: { id: number }) {
  const [activeTab, setActiveTab] = useState<string[]>([]);
  const booth = BOOTH_LIST.find((booth) => booth.id === Number(id)); // ✅ 타입 일치
  if (!booth) {
    return null; // or handle the case when the booth is not found
  }
  return (
    <>
      <MultiTabs
        tabs={MENU_CATEGORY}
        activeTab={activeTab}
        onTabClick={(updated) => setActiveTab(updated)}
        toggle
      />

      {(activeTab.includes('메인') || activeTab.length === 0) && (
        <Fragment>
          <S.MenuItem>메인메뉴</S.MenuItem>
          <S.MenuList>
            {booth.menu.main.map((menu) => (
              <MenuFrame menu={menu.name} price={menu.price} description={menu.describtion} />
            ))}
          </S.MenuList>
        </Fragment>
      )}
      {(activeTab.includes('사이드') || activeTab.length === 0) && (
        <Fragment>
          <S.MenuItem>사이드메뉴</S.MenuItem>
          <S.MenuList>
            {booth.menu.side.map((menu) => (
              <MenuFrame menu={menu.name} price={menu.price} description={menu.describtion} />
            ))}
          </S.MenuList>
        </Fragment>
      )}
      {(activeTab.includes('서브') || activeTab.length === 0) && (
        <Fragment>
          <S.MenuItem>서브메뉴</S.MenuItem>
          <S.MenuList>
            {booth.menu.sub.map((menu) => (
              <MenuFrame menu={menu.name} price={menu.price} description={menu.describtion} />
            ))}
          </S.MenuList>
        </Fragment>
      )}
    </>
  );
}
