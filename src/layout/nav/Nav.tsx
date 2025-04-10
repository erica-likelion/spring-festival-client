import { NavLink } from 'react-router-dom';
import * as S from './Nav.styles';
import { NAV_ITEMS } from '@/layout/nav/nav.types';

/**
 * Nav component
 * - handlePreventEdgeSwipe: 네비게이션 바 뒤로가기 앞으로 가기 스와이프 방지
 * @returns {JSX.Element}
 */
export default function Nav() {
  return (
    <S.Nav>
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
