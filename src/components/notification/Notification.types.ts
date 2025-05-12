import { CSSWidthValue } from '@/types/css-values.types';

/**
 * 사용자에게 알림 메시지를 표시하는 Notification 컴포넌트의 Props
 */
export type NotificationProps = {
  /**
   * 알림의 제목
   */
  title: string;

  /**
   * 알림 클릭 시 호출되는 콜백 함수
   * 예를들어 알림을 클릭하면 상세페이지로 이동시킨다.
   * @returns void
   */
  onClick?: () => void;

  /**
   * 명시적인 너비 값 (예: '20rem', '100%' 등)
   * @default '20.9375rem'
   */
  width?: CSSWidthValue;

  /**
   * 알림 닫기 버튼 클릭 시 호출되는 콜백 함수
   * @returns void
   */
  onClose?: () => void;
};
