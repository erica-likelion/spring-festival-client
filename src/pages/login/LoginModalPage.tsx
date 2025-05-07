import { useModalStore } from '@/stores/useModalStore';
import LoginModal from '@/components/login-modal/LoginModal';
import { BlueButton } from '@/components/bluebuttons';

export default function LoginButton() {
  const openModal = useModalStore((state) => state.openModal);

  const handleClick = () => {
    openModal({
      key: 'login-modal',
      component: LoginModal,
      props: { title: '로그인' },
      isHelp: false,
      portalTarget: document.body,
    });
  };

  return <BlueButton label="로그인 하러 가기" onClick={handleClick} />;
}
