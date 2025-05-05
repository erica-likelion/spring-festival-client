import { NavBar } from '@/components/nav-bar';
import * as S from './Main.styles';
import Carousels from '@/features/main/components/carousels/Carousels';

export default function Main() {
  return (
    <>
      <NavBar />
      <S.Main>
        <S.Title>진행중인 이벤트</S.Title>
        <S.CarouselsBox>
          <Carousels />
        </S.CarouselsBox>
      </S.Main>
    </>
  );
}
