// components/modals/LoginModal.tsx
import { BlueButton } from '@/components/bluebuttons';
import { useNavigate } from 'react-router-dom';
import { Description1, Description2, SubText } from './LoginModal.style';

const LoginModal = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <Description1>
        카카오톡으로 로그인하면 <br />더 다양한 기능을 이용하실 수 있어요!
      </Description1>
      <Description2>
        지금 로그인하고 주점 웨이팅, 분실물 등록 <br />
        기능들을 모두 이용해보세요!
      </Description2>
      <BlueButton label="로그인 하러가기" onClick={handleLoginClick} />
      <SubText>불편해도 그냥 이용하기</SubText>
    </>
  );
};

export default LoginModal;
