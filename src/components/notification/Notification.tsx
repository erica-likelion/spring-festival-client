import * as S from './Notification.styles';
import { NotificationProps } from './Notification.types';

/**
 * 사용자에게 알림 메시지를 표시하는 Notification 컴포넌트입니다.
 * 클릭하면 확장되어 더 자세한 내용을 볼 수 있고, 닫기 버튼으로 제거할 수 있습니다.
 *
 * @param {string} title - 알림 제목
 * @param {function} onClose - 닫기 버튼 클릭 시 호출되는 콜백 함수
 * @param {function} onClick - 알림 클릭 시 호출되는 콜백 함수
 * @returns {React.ReactElement} Notification 컴포넌트
 * 
 * @example
 * // 기본 사용법
 * const [showNotification, setShowNotification] = useState(true);
 * const handleCloseNotification = () => {
    setShowNotification(false);
  };
 * <Notification
 *   title="Notification Title"
 *   contents="This is the content of the notification."
 *   onClose={handleCloseNotification}
 *   initExpanded={false}
 * /> 
 */
export default function Notification({ title, onClose, onClick }: NotificationProps) {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <S.Container>
      <S.Icon src="src/assets/icons/notification.webp" alt="Notification" />
      <S.Title onClick={onClick}>{title}</S.Title>
      <S.CloseButton onClick={handleClose}>
        <img src="src/assets/icons/close.svg" alt="Close" />
      </S.CloseButton>
    </S.Container>
  );
}
