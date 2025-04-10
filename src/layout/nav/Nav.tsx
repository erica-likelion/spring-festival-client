import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './Nav.styles';
import { NAV_ITEMS } from '@/layout/nav/nav.types';

/**
 * Nav component
 * - handlePreventEdgeSwipe: 네비게이션 바 뒤로가기 앞으로 가기 스와이프 방지
 * @returns {JSX.Element}
 */
export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;
    const handlePreventEdgeSwipe = (e: TouchEvent) => {
      // 좌우 edge 스와이프 시 이벤트 중지
      const touchX = e.touches[0].pageX; // 시작점
      if (touchX < 10 || touchX > window.innerWidth - 10) e.preventDefault(); // 좌우 10 이내 판단
    };
    el.addEventListener('touchstart', handlePreventEdgeSwipe, { passive: false });
    return () => {
      el.removeEventListener('touchstart', handlePreventEdgeSwipe);
    };
  });

  return (
    <S.Nav ref={ref}>
      {NAV_ITEMS.map((item) => {
        return (
          <NavLink
            to={item.path}
            key={item.id}
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              if (window.location.pathname === item.path) e.preventDefault();
            }}
          >
            <S.NavBtn key={item.path} whileTap={{ scale: 0.92, backgroundColor: '#373D3F' }}>
              <S.NavImg />
              {item.label}
            </S.NavBtn>
          </NavLink>
        );
      })}
    </S.Nav>
  );
}
