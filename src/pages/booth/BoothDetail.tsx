import { NavBar } from '@/components/nav-bar';
import { useParams } from 'react-router-dom';
import * as S from './BoothDetail.styles';
import { BoothInfo, BoothLocation, MenuList } from '@/features/booth';
import { Waiting } from '@/features/waiting';
export default function BoothDetail() {
  const { id } = useParams();

  return (
    <>
      <NavBar isBack title="주점" />
      <S.BackgroundImg />
      <S.Section style={{ marginTop: '-2rem' }}>
        <BoothInfo id={Number(id)} />
        <Waiting />
      </S.Section>
      <S.Section>
        <MenuList />
      </S.Section>
      <S.Section>
        <BoothLocation />
      </S.Section>
      <S.BottomPadding />
    </>
  );
}
