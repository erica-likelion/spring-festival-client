import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, easeInOut } from 'framer-motion';
import * as S from './Layout.styles';
import Nav from '@/layout/nav';
import { history } from '@/utils';

/**
 * Layout component
 * - handlePreventEdgeSwipe: 좌우 스와이프 뒤로 가기 앞으로 가기 방지
 * - unlistenHistoryEvent: 뒤로가기 버튼 시 현재 주소로 방지
 * @returns {JSX.Element}
 */
export default function Layout() {
  const locate = useLocation();

  useEffect(() => {
    const handlePreventEdgeSwipe = (e: TouchEvent) => {
      // 좌우 edge 스와이프 시 이벤트 중지
      const touchX = e.touches[0].pageX; // 시작점
      if (touchX < 20 || touchX > window.innerWidth - 20) e.preventDefault(); // 좌우 10 이내 판단
    };
    document.addEventListener('touchstart', handlePreventEdgeSwipe, { passive: false });
    return () => {
      document.removeEventListener('touchstart', handlePreventEdgeSwipe);
    };
  });

  useEffect(() => {
    const unlistenHistoryEvent = history.listen(({ action }) => {
      if (action !== 'POP') return;
      history.push(locate.pathname);
    });
    return unlistenHistoryEvent;
  }, [locate.pathname]);

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
