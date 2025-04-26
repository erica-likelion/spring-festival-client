import TestImage from '@/assets/images/performance/day1-newjins.webp';
import * as S from './Details.styles';

export default function Details() {
  return (
    <S.DetailsContainer>
      {/* Navbar back version */}
      <S.Image src={TestImage} alt="newjins" width={'23.4888rem'} height={'29.375rem'} />
    </S.DetailsContainer>
  );
}
