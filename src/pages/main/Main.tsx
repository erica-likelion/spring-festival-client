import { NavBar } from '@/components/nav-bar';
import * as S from './Main.styles';
import { EventCarousels } from '@/features/main/components/carousels';
import { Menu } from '@/features/main/components/menu/index';

export default function Main() {
  return (
    <S.Container>
      <NavBar />
      <S.Contents>
        <S.Main>
          <S.Title>진행중인 이벤트</S.Title>
          <S.CarouselsBox>
            <EventCarousels />
          </S.CarouselsBox>
        </S.Main>
        <Menu />
      </S.Contents>
    </S.Container>
  );
}
