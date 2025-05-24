import { navItems } from '@/layout/nav/nav.types';
import HOME_LOTTIE from '@/assets/lotties/home-blue-filled.json';
import MAP_LOTTIE from '@/assets/lotties/geopoint-blue-filled.json';
import STAGE_LOTTIE from '@/assets/lotties/stage-blue-filled.json';
import PUB_LOTTIE from '@/assets/lotties/pub-blue-filled.json';
//import WAITING_LOTTIE from '@/assets/lotties/waiting-blue-filled.json';

import HOME_ICON from '@/assets/icons/home.svg?react';
import MAP_ICON from '@/assets/icons/geopoint.svg?react';
import STAGE_ICON from '@/assets/icons/stage.svg?react';
import PUB_ICON from '@/assets/icons/pub.svg?react';
//import WAITING_ICON from '@/assets/icons/waiting.svg?react';

export const NAV_ITEMS: navItems = [
  {
    id: 'home',
    path: '/main',
    label: '홈',
    icon: HOME_LOTTIE,
    DefaultIcon: <HOME_ICON width={'1.5rem'} height={'1.5rem'} fill="#FAFAFA" />,
  },
  {
    id: 'map',
    path: '/map',
    label: '지도',
    icon: MAP_LOTTIE,
    DefaultIcon: <MAP_ICON width={'1.5rem'} height={'1.5rem'} fill="#FAFAFA" />,
  },
  {
    id: 'performance',
    path: '/performance',
    label: '공연',
    icon: STAGE_LOTTIE,
    DefaultIcon: <STAGE_ICON width={'1.5rem'} height={'1.5rem'} fill="#FAFAFA" />,
  },
  {
    id: 'booth',
    path: '/booth',
    label: '주점',
    icon: PUB_LOTTIE,
    DefaultIcon: <PUB_ICON width={'1.5rem'} height={'1.5rem'} fill="#FAFAFA" />,
  },
  /*{
    id: 'user',
    path: '/user',
    label: '나의 예약',
    icon: WAITING_LOTTIE,
    DefaultIcon: <WAITING_ICON width={'1.5rem'} height={'1.5rem'} fill="#FAFAFA" />,
  },*/
] as const;
