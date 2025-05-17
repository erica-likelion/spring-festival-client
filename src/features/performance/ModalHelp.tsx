import * as S from './ModalHelp.styles';

/**
 * ModalHelp 컴포넌트
 * @returns {JSX.Element}
 */

export default function ModalHelp() {
  return (
    <S.ModalContainer>
      <S.ModalTextBox>
        <S.ModalText>해당 페이지는 축제기획단의 타임테이블을</S.ModalText>
        <S.ModalText>바탕으로 정보를 제공하고있으며,</S.ModalText>
        <S.ModalText>기상상황이나 아티스트의 사정 등으로</S.ModalText>
        <S.ModalText>인해 변동된 스케줄은 반영해서 제공하지</S.ModalText>
        <S.ModalText>못하는 점 안내드립니다.</S.ModalText>
      </S.ModalTextBox>
    </S.ModalContainer>
  );
}
