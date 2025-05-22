import { BlueButton } from '@/components/bluebuttons';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginModal.style';

const LoginModal = ({ close }: { close?: () => void }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
    close?.();
  };

  return (
    <S.ModalBox>
      <S.Description1>
        카카오톡으로 로그인하면 <br />더 다양한 기능을 이용하실 수 있어요!
      </S.Description1>
      <S.Description2>
        지금 로그인하고 주점 웨이팅, 분실물 등록 <br />
        기능들을 모두 이용해보세요!
      </S.Description2>
      <BlueButton label="로그인 하러가기" onClick={handleLoginClick} />
      <S.SubText onClick={() => close?.()}>불편해도 그냥 이용하기</S.SubText>
    </S.ModalBox>
  );
};

export default LoginModal;
