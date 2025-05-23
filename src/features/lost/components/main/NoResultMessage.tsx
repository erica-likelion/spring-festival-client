import * as S from './NoResultMessage.styles';

export default function NoResultMessage() {
  return (
    <S.NoResultMessageWrap>
      <S.NoResultMessageTitle>검색 결과가 없어요 T.T</S.NoResultMessageTitle>
      <S.NoResultMessageBox>
        <S.NoResultMessage>분실물의 정확한 키워드를 입력하셨는지</S.NoResultMessage>
        <S.NoResultMessage>다시 한 번 확인해주세요!</S.NoResultMessage>
      </S.NoResultMessageBox>
    </S.NoResultMessageWrap>
  );
}
