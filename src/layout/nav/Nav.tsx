import { NavLink, useLocation } from 'react-router-dom';
import * as S from './Nav.styles';
import { NAV_ITEMS } from './nav-item';
import Lottie from 'react-lottie-player';

/**
 * Nav component
 * @returns {JSX.Element}
 */

export default function Nav() {
  const locate = useLocation();
  return (
    <S.Nav>
      {NAV_ITEMS.map((item) => {
        const isLocation = locate.pathname.startsWith(item.path);
        return (
          <NavLink
            to={item.path}
            key={item.id}
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              if (isLocation) e.preventDefault();
            }}
          >
            <S.NavBtn whileTap={{ scale: 0.92, backgroundColor: '#212526' }}>
              {!isLocation ? (
                item.DefaultIcon
              ) : (
                <Lottie
                  key={isLocation ? 'playing' : 'idle'}
                  animationData={item.icon}
                  play={isLocation}
                  loop={false}
                  style={{ width: '1.5rem', height: '1.5rem' }}
                />
              )}
              <S.NavBtnText>{item.label}</S.NavBtnText>
            </S.NavBtn>
          </NavLink>
        );
      })}
    </S.Nav>
  );
}
