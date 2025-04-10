import { Outlet, useLocation } from 'react-router-dom';
import Nav from '@/layout/nav';
import { AnimatePresence, easeInOut } from 'framer-motion';

import * as S from './Layout.styles';
import { useEffect, useRef } from 'react';

export default function Layout() {
  const locate = useLocation();
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = layoutRef.current; // layout ref
    if (!el) return;

    const handlePreventEdgeSwipe = (e: TouchEvent) => {
      // 좌우 edge 스와이프 시 이벤트 중지
      const touchX = e.touches[0].pageX; // 시작점
      if (touchX < 10 || touchX > window.innerHeight - 10) e.preventDefault(); // 좌우 10 이내 판단
    };

    el.addEventListener('touchstart', handlePreventEdgeSwipe, { passive: false });
    return () => {
      el.removeEventListener('touchstart', handlePreventEdgeSwipe);
    };
  });

  return (
    <S.Container ref={layoutRef}>
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
