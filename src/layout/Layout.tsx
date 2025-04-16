import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as S from './Layout.styles';
import Nav from '@/layout/nav';
import Main from '@/layout/main/Main';

/**
 * Layout component
 * @returns {JSX.Element}
 */
export default function Layout() {
  return (
    <S.Container>
      <Nav />
      <AnimatePresence mode="wait">
        <Main>
          <Outlet />
        </Main>
      </AnimatePresence>
    </S.Container>
  );
}
