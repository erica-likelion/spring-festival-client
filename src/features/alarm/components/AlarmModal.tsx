import { BlueButton } from '@/components/bluebuttons';
import * as S from './AlarmModal.styles';
import { handleAllowNotification } from '@/services/fcm/notificationPermission';

function AlarmModal({ close }: { close: () => void }) {
  const handleAllowNotifications = () => {
    handleAllowNotification({ currentAccess: undefined });
    close();
  };
  return (
    <S.Container>
      <S.Text>
        알림 허용 팝업이 뜰거예요.
        <br />
        기능들을 이용하려면 허용 버튼을 눌러주세요!
      </S.Text>
      <BlueButton label="확인" onClick={handleAllowNotifications} />
      <S.BottomText onClick={close}>불편해도 알람없이 이용하기</S.BottomText>
    </S.Container>
  );
}

export default AlarmModal as React.ComponentType<{ close: () => void; title: string }>;
