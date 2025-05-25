import { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { NavBar } from '@/components/nav-bar';
import * as S from './BoothDetail.styles';
import { BoothInfo, BoothLocation, MenuList } from '@/features/booth';
//import { Waiting } from '@/features/waiting';
import { BOOTH_LIST } from '@/constants/booth/booth';

export default function BoothDetail() {
  const { id } = useParams();
  const location = useLocation();
  const fromRef = useRef(location.state?.from || '/booth');
  const booth = BOOTH_LIST.find((booth) => booth.id === Number(id)); // ✅ 타입 일치
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!booth) {
    return null; // or handle the case when the booth is not found
  }
  return (
    <S.Container>
      <NavBar isBack title="주점" backPath={fromRef.current} />
      <S.BackgroundImg src={booth.posterImage} />
      <S.Section style={{ marginTop: '-2rem' }}>
        <BoothInfo id={booth.id} />
        {/*<Waiting id={booth.id} />*/}
      </S.Section>
      <S.BorderSection>
        <MenuList id={booth.id} />
      </S.BorderSection>
      <S.HorizontalLine />
      <S.BorderSection>
        <BoothLocation id={booth.id} boothLocation={booth.locate} />
      </S.BorderSection>
      <S.HorizontalLine />
      <S.BottomPadding />
    </S.Container>
  );
}
