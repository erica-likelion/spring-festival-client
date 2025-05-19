import { NavBar } from '@/components/nav-bar';
import * as S from './Main.styles';
import { EventCarousels } from '@/features/main/components/carousels';
import { Menu } from '@/features/main/components/menu/index';
import { NoticeSlider } from '@/features/main/components/slider';
import Right from '@/assets/icons/right-arrow.svg?react';
import Backeffct from '@/assets/icons/Background-Reflect.svg?react';
import { useNavigate } from 'react-router-dom';
import { UserLogin, Footer } from '@/features/main/components/user';

export default function Main() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Layout />
      <NavBar opacity={true} />
      <S.Main>
        <section>
          {' '}
          <S.TitleWrapper>
            <S.Title>진행중인 이벤트</S.Title>
          </S.TitleWrapper>
          <S.CarouselsBox>
            <EventCarousels />
          </S.CarouselsBox>
        </section>

        <UserLogin />
        <section>
          <S.TitleWrapper>
            <S.Title>공지사항</S.Title>
            <S.BlackButton whileTap={{ scale: 0.95 }} onClick={() => navigate('/main/notice')}>
              <S.BtnText>모두 보기</S.BtnText>
              <Right width={'1rem'} height={'1rem'} />
            </S.BlackButton>
          </S.TitleWrapper>
          <NoticeSlider />
        </section>

        <Menu />
        <Footer />
      </S.Main>
      <S.Effect>
        <Backeffct />
      </S.Effect>
    </S.Container>
  );
}
