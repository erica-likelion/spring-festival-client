import * as S from './BoothLocation.styles';

export default function BoothLocation() {
  return (
    <S.Container>
      <S.Title>오시는 길</S.Title>
      <S.Locate>서울특별시 강남구 테헤란로 14길 6 남도빌딩 2층</S.Locate>
      <S.Map>
        <S.Button>지도에서 보기</S.Button>
      </S.Map>
    </S.Container>
  );
}
