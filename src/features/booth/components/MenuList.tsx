import { Tabs } from '@/components/tabs';
import { useState } from 'react';
import * as S from './MenuList.styles';
import { MenuFrame } from '@/components/image-text-frame';

const MENU_CATEGORY = ['베스트 메뉴', '메인 메뉴', '사이드 메뉴', '세트', '음료'];
const MENU_LIST = [
  {
    category: '베스트 메뉴',
    menu: [
      {
        name: '햄계란말이',
        description: '햄을 넣어 더욱 맛있는 계란말이',
        price: 5500,
      },
      {
        name: '햄계란말이',
        description: '햄을 넣어 더욱 맛있는 계란말이',
        price: 5500,
      },
      {
        name: '햄계란말이',
        description: '햄을 넣어 더욱 맛있는 계란말이',
        price: 5500,
      },
    ],
  },
  {
    category: '메인 메뉴',
    menu: [
      {
        name: '햄계란말이',
        description: '햄을 넣어 더욱 맛있는 계란말이',
        price: 5500,
      },
      {
        name: '햄계란말이',
        description: '햄을 넣어 더욱 맛있는 계란말이',
        price: 5500,
      },
    ],
  },
  {
    category: '사이드 메뉴',
    menu: [
      {
        name: '햄계란말이',
        description: '햄을 넣어 더욱 맛있는 계란말이',
        price: 5500,
      },
      {
        name: '햄계란말이',
        description: '햄을 넣어 더욱 맛있는 계란말이',
        price: 5500,
      },
    ],
  },
  {
    category: '세트',
    menu: [
      {
        name: '햄계란말이',
        description: '햄을 넣어 더욱 맛있는 계란말이',
        price: 5500,
      },
    ],
  },
  {
    category: '음료',
    menu: [
      {
        name: '햄계란말이',
        description: '햄을 넣어 더욱 맛있는 계란말이',
        price: 5500,
      },
    ],
  },
];
export default function MenuList() {
  const [activeTab, setActiveTab] = useState('');
  return (
    <>
      <Tabs tabs={MENU_CATEGORY} activeTab={activeTab} onTabClick={(tab) => setActiveTab(tab)} />
      <S.MenuList>
        {MENU_LIST.map((menu) => (
          <S.MenuItem key={menu.category}>
            <S.MenuCategory>{menu.category}</S.MenuCategory>
            {menu.menu.map((item, index) => (
              <MenuFrame
                key={menu.category + item.name + index}
                menu={item.name}
                description={item.description}
                price={item.price}
                width="100%"
              />
            ))}
          </S.MenuItem>
        ))}
      </S.MenuList>
    </>
  );
}
