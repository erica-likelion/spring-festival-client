import { NavBar } from '@/components/nav-bar';
import * as S from './Main.styles';
import Card from './Card';

export default function Main() {
  return (
    <>
      <NavBar />
      <S.Main>
        <S.Title>진행중인 이벤트</S.Title>
        <Card isSun={true}></Card>
      </S.Main>
    </>
  );
}
