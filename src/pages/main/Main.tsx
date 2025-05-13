import { NavBar } from '@/components/nav-bar';
import * as S from './Main.styles';
import { EventCarousels } from '@/features/main/components/carousels';
import { Menu } from '@/features/main/components/menu/index';
import { NoticeSlider } from '@/features/main/components/slider';
import Right from '@/assets/icons/right-arrow.svg?react';
import BackLayout from '@/assets/icons/Background-main.svg';
import Backeffct from '@/assets/icons/Background-Reflect.svg?react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <div
        style={{
          backgroundImage: `url(${BackLayout})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          backgroundSize: '100% auto',
        }}
      >
        <NavBar />
        <S.Main>
          <S.Title>진행중인 이벤트</S.Title>
          <S.CarouselsBox>
            <EventCarousels />
          </S.CarouselsBox>
        </S.Main>
      </div>
      <UserLogin />
      <S.Contents>
        <S.NoticeBox>
          <S.NoticeText>공지사항</S.NoticeText>
          <S.Btn onClick={() => navigate('/main/notice')}>
            <S.SubText>모두보기</S.SubText>
            <Right width={'1rem'} height={'1rem'} />
          </S.Btn>
        </S.NoticeBox>

        <NoticeSlider />
        <S.Pad>
          <Menu />
        </S.Pad>
      </S.Contents>
      <S.Effect>
        <Backeffct />
      </S.Effect>
    </S.Container>
  );
}
