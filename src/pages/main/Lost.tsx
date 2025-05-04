import * as S from './Lost.styles';
import { NavBar } from '@/components/nav-bar';
import { Registration } from '@/features/lost';
import { ItemList } from '@/features/lost';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';

/**
 * 분실물 페이지
 * @returns {JSX.Element}
 */

export default function Lost() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);

  return (
    <S.Container>
      <NavBar isBack={true} title="분실물 신고하기" isSearch={true} />
      <S.Content>
        <Registration />
        <ItemList />
      </S.Content>
    </S.Container>
  );
}
