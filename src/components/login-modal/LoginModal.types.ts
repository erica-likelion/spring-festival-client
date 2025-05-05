/**
 * LoginModal 컴포넌트에 전달되는 props 인터페이스입니다.
 */
export interface LoginModalProps {
  /**
   * 모달이 열려 있는지 여부를 나타냅니다.
   * true일 경우 모달이 화면에 표시됩니다.
   */
  isOpen: boolean;

  /**
   * 모달을 닫을 때 호출되는 함수입니다.
   */
  onClose: () => void;
}
