export type navItem = Record<'id' | 'path' | 'label', string>;

export type navItems = navItem[];

export const NAV_ITEMS: navItems = [
  { id: 'home', path: '/', label: '홈' },
  { id: 'map', path: '/map', label: '지도' },
  { id: 'performance', path: '/performance', label: '공연' },
  { id: 'booth', path: '/booth', label: '주점' },
  { id: 'user', path: '/user', label: '나의 예약' },
] as const;
