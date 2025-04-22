/**
 * 사용자에게 알림 메시지를 표시하는 Notification 컴포넌트의 Props
 * 클릭하면 확장되어 더 자세한 내용을 볼 수 있고, 닫기 버튼으로 제거할 수 있습니다.
 */
export type NotificationProps = {
  /**
   * 알림의 제목
   * 헤더 영역에 표시됩니다.
   */
  title: string;

  /**
   * 닫기 버튼 클릭 시 호출되는 콜백 함수
   * 일반적으로 부모 컴포넌트에서 알림을 DOM에서 제거하는 로직을 구현합니다.
   * @returns void
   */
  onClose: () => void;

  /**
   * 알림 클릭 시 호출되는 콜백 함수
   * 예를들어 알림을 클릭하면 상세페이지로 이동시킨다.
   * @returns void
   */
  onClick?: () => void;
};
