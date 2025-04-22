import { useState } from 'react';
import * as S from './Notification.styles';
import { NotificationProps } from './Notification.types';
import CloseIcon from '@/assets/icons/close.svg?react';
/**
 * 사용자에게 알림 메시지를 표시하는 Notification 컴포넌트입니다.
 * 클릭하면 확장되어 더 자세한 내용을 볼 수 있고, 닫기 버튼으로 제거할 수 있습니다.
 *
 * @param {string} title - 알림 제목
 * @param {function} onClick - 알림 클릭 시 호출되는 콜백 함수
 * @returns {React.ReactElement} Notification 컴포넌트
 *
 * @example
 * // 기본 사용법
 * <Notification
 *   title="Notification Title"
 *   onClick={handleClickNotification}
 * />
 */
export default function Notification({ title, onClick }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // 3초 후에 사라지는 애니메이션 적용 (css와 일치)
  };

  if (!isVisible) return null;

  return (
    <S.Container $isClosing={isClosing}>
      <S.Icon src="src/assets/images/notification.webp" alt="Notification" />
      <S.Title onClick={() => onClick?.()}>{title}</S.Title>
      <S.CloseButton onClick={handleClose}>
        <CloseIcon width={'1.25rem'} height={'1.25rem'} />
      </S.CloseButton>
    </S.Container>
  );
}
