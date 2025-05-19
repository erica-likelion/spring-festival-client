import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as S from './Layout.styles';
import Nav from '@/layout/nav';
import Main from '@/layout/main/Main';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { Modal as ModalProvider } from '@/components/modal';
import { useWaitingStore } from '@/features/waiting/stores/useWaitingStore';
import { useEffect } from 'react';

/**
 * Layout component
 * @returns {JSX.Element}
 */
export default function Layout() {
  const isNav = useLayoutStore((state) => state.isNav);
  const loadWaitings = useWaitingStore((state) => state.loadWaitings);
  useEffect(() => {
    loadWaitings();
  }, [loadWaitings]);
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
