import { useState } from 'react';
import * as S from './Notification.styles';
import { NotificationProps } from './Notification.types';
import CloseIcon from '@/assets/icons/close.svg?react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * 사용자에게 알림 메시지를 표시하는 Notification 컴포넌트입니다.
 * 클릭하면 확장되어 더 자세한 내용을 볼 수 있고, 닫기 버튼으로 제거할 수 있습니다.
 * framer-motion을 사용하여 부드럽게 닫힙니다.
 *
 * @param {string} title - 알림 제목
 * @param {function} onClick - 알림 클릭 시 호출되는 콜백 함수
 * @param {string} width - 명시적인 너비 값 (예: '20rem')
 * @param {boolean} fullWidth - true일 경우 너비를 100%로 설정 (width prop이 없을 때만 적용)
 * @returns {React.ReactElement} Notification 컴포넌트
 * ...
 * @note width와 fullWidth를 동시에 사용할 경우, width가 우선 적용됩니다.
 *
 * @example
 * // 기본 사용법
 * <Notification
 *   title="Notification Title"
 *   onClick={handleClickNotification}
 * />
 */
export default function Notification({ title, onClick, width, fullWidth }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  // framer-motion 애니메이션 변수
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '-1.25rem' },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="visible"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <S.Container $width={width} $fullWidth={fullWidth}>
            <S.Icon src="src/assets/images/notification.webp" alt="Notification" />
            <S.Title onClick={() => onClick?.()}>{title}</S.Title>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <S.CloseButton onClick={handleClose}>
                <CloseIcon width={'1.25rem'} height={'1.25rem'} />
              </S.CloseButton>
            </motion.div>
          </S.Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
