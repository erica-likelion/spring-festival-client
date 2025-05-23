import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as S from './Layout.styles';
import Nav from '@/layout/nav';
import Main from '@/layout/main/Main';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { Modal as ModalProvider } from '@/components/modal';
import { useWaitingStore } from '@/features/waiting/stores/useWaitingStore';
import { useEffect } from 'react';
import { useLikeStore } from '@/features/like/stores/useLikeStore';
import { useAuthStore } from '@/stores/useAuthStore';

/**
 * Layout component
 * @returns {JSX.Element}
 */
export default function Layout() {
  const isNav = useLayoutStore((state) => state.isNav);
  const isLoggined = useAuthStore((state) => state.isLoggedIn);
  const loadWaitings = useWaitingStore((state) => state.loadWaitings);
  const loadlikes = useLikeStore((state) => state.initLikes);
  const fetchWaitingCounts = useLikeStore((state) => state.fetchWaitingCounts);
  useEffect(() => {
    loadlikes();
    fetchWaitingCounts();
    if (isLoggined) loadWaitings();
  }, [loadWaitings, isLoggined, loadlikes, fetchWaitingCounts]);
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
