import { Outlet, useLocation } from 'react-router-dom';
import Nav from '@/layout/nav';
import { AnimatePresence, easeInOut } from 'framer-motion';

import * as S from './Layout.styles';

export default function Layout() {
  const locate = useLocation();
  return (
    <S.Container>
      <Nav />
      <AnimatePresence mode="wait">
        <S.Main
          key={locate.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: easeInOut }}
        >
          <Outlet />
        </S.Main>
      </AnimatePresence>
    </S.Container>
  );
}
