import { NavLink, useLocation } from 'react-router-dom';
import * as S from './Nav.styles';
import { NAV_ITEMS, NAVS } from '@/layout/nav/nav-item';
import Lottie from 'react-lottie-player';
import { useLayoutStore } from '@/stores';

/**
 * Nav component
 * @returns {JSX.Element}
 */

export default function Nav() {
  const locate = useLocation();
  const setDirection = useLayoutStore((state) => state.setDirection);

  const handleOnclick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    isLocation: boolean,
    toPath: string,
  ) => {
    if (isLocation) return e.preventDefault();
    const prevPath = NAVS.find((nav) => locate.pathname.startsWith(nav));
    const [prevIndex, nextIndex] = [prevPath, toPath].map((path) =>
      NAVS.findIndex((nav) => nav === path),
    );
    if (nextIndex > prevIndex) setDirection('right');
    else setDirection('left');
  };

  return (
    <S.Nav>
      {NAV_ITEMS.map((item) => {
        const isLocation =
          item.path === '/' ? locate.pathname === '/' : locate.pathname.startsWith(item.path);
        return (
          <NavLink
            to={item.path}
            key={item.id}
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              handleOnclick(e, isLocation, item.path);
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
                  style={{ width: '24px', height: '24px' }}
                />
              )}
              {item.label}
            </S.NavBtn>
          </NavLink>
        );
      })}
    </S.Nav>
  );
}
