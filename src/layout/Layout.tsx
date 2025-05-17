import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as S from './Layout.styles';
import Nav from '@/layout/nav';
import Main from '@/layout/main/Main';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { Modal as ModalProvider } from '@/components/modal';

/**
 * Layout component
 * @returns {JSX.Element}
 */
export default function Layout() {
  const isNav = useLayoutStore((state) => state.isNav);
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setLoggedIn(!!token);
  }, [setLoggedIn]);

  return (
    <S.Container>
      {isNav && <Nav />}
      <AnimatePresence mode="wait">
        <Main>
          <Outlet />
        </Main>
      </AnimatePresence>
      <ModalProvider />
    </S.Container>
  );
}
