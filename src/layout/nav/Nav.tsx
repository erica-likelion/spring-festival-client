import * as S from './Nav.styles';
import { NAV_ITEMS } from '@/layout/nav/nav.types';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <S.Nav>
      {NAV_ITEMS.map((item) => {
        return (
          <NavLink
            to={item.path}
            key={item.id}
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
