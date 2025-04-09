import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to={'/'}>메인</NavLink>
      <NavLink to={'/map'}>지도</NavLink>
      <NavLink to={'/login'}>로그인</NavLink>
      <NavLink to={'/performance'}>공연</NavLink>
      <NavLink to={'/booth'}>주점</NavLink>
    </nav>
  );
}
