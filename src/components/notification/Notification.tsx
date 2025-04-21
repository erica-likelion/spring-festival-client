import { useState } from 'react';
import * as S from './Notification.styles';
import { NotificationProps } from './Notification.types';

/**
 * 사용자에게 알림 메시지를 표시하는 Notification 컴포넌트입니다.
 * 클릭하면 확장되어 더 자세한 내용을 볼 수 있고, 닫기 버튼으로 제거할 수 있습니다.
 *
 * @param {string} title - 알림 제목
 * @param {string} contents - 알림 상세 내용
 * @param {function} onClose - 닫기 버튼 클릭 시 호출되는 콜백 함수
 * @param {boolean} initExpanded - 초기 확장 상태 설정 (default: false)
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
export default function Notification({
  title,
  contents,
  onClose,
  initExpanded = false,
}: NotificationProps) {
  const [expanded, setExpanded] = useState(initExpanded);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <S.Container onClick={handleToggle} expanded={expanded}>
      <S.Header>
        <S.Icon src="src/assets/icons/notification.webp" alt="Notification" />
        <S.Title>{title}</S.Title>
        <S.CloseButton expanded={expanded} onClick={handleClose}>
          <img src="src/assets/icons/close.svg" alt="Close" />
        </S.CloseButton>
      </S.Header>
      {expanded && <S.Content expanded={expanded}>{contents}</S.Content>}
    </S.Container>
  );
}
