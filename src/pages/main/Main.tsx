import { NavBar } from '@/components/nav-bar';
import * as S from './Main.styles';
import { EventCarousels } from '@/features/main/components/carousels';
import { Menu } from '@/features/main/components/menu/index';
import { NoticeSlider } from '@/features/main/components/slider';
import Right from '@/assets/icons/right-arrow.svg?react';
import Backeffct from '@/assets/icons/Background-Reflect.svg?react';
import { useNavigate } from 'react-router-dom';
import UserLogin from '@/features/main/components/user/UserLogin';
import Footer from '@/features/main/components/user/Footer';

export default function Main() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <S.TitleWrapper>
          <S.Title>진행중인 이벤트</S.Title>
        </S.TitleWrapper>
        <S.CarouselsBox>
          <EventCarousels />
        </S.CarouselsBox>
        <UserLogin />
        <S.TitleWrapper>
          <S.Title>공지사항</S.Title>
          <S.BlackButton onClick={() => navigate('/main/notice')}>
            <S.BtnText>모두 보기</S.BtnText>
            <Right width={'1rem'} height={'1rem'} />
          </S.BlackButton>
        </S.TitleWrapper>
        <NoticeSlider />
        <Menu />
        <Footer />
      </S.Main>
      <S.Effect>
        <Backeffct />
      </S.Effect>
    </S.Container>
  );
}
