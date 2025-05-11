import * as S from './BoothLocation.styles';
import RightIcon from '@/assets/icons/right-arrow.svg?react';

export default function BoothLocation() {
  return (
    <S.Container>
      <S.Title>오시는 길</S.Title>
      <S.Locate>서울특별시 강남구 테헤란로 14길 6 남도빌딩 2층</S.Locate>
      <S.Map>
        <S.Button>
          <S.ButtonText>지도에서 보기</S.ButtonText>
          <RightIcon width={'1rem'} height={'1rem'} fill="#FAFAFA" />
        </S.Button>
      </S.Map>
    </S.Container>
  );
}
