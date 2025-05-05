import StaffLabel from '../components/main/StaffLabel';
import * as S from './ModalNotification.styles';

/**
 * Modal_Notification 컴포넌트
 * @returns {JSX.Element}
 */

export default function ModalNotification() {
  return (
    <S.ModalContainer>
      <StaffLabel absolute={false} />
      <S.ModalText>
        위 상태가 표시된 분실물은 현장에서
        <br />
        축제기획단 STAFF에게 전달된 상태로,
        <br />
        추후에 총학생회 인스타그램을 통해
        <br />
        공지되는 <S.ModalTextBold>분실물 수령 장소</S.ModalTextBold>에서만
        <br />
        찾아가실 수 있습니다.
      </S.ModalText>
    </S.ModalContainer>
  );
}
