import React from 'react';
import { LoginModalProps } from './LoginModal.types';
import { BlueButton } from '@/components/bluebuttons';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
  Overlay,
  ModalBox,
  Description1,
  Description2,
  SubText,
  Header,
  Left,
} from './LoginModal.style';

import Close from '@/assets/icons/close.svg?react';

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLoginClick = () => {
    navigate('/login');
  };

  return createPortal(
    <Overlay>
      <Header>
        <Left />
        <p>로그인</p>
        <Close width={'1.25rem'} height={'1.25rem'} onClick={onClose} />
      </Header>
      <ModalBox>
        <Description1>
          카카오톡으로 로그인하면 <br />더 다양한 기능을 이용하실 수 있어요!
        </Description1>
        <Description2>
          지금 로그인하고 주점 웨이팅, 분실물 등록 <br />
          기능들을 모두 이용해보세요!
        </Description2>
        <BlueButton label={'로그인 하러가기'} onClick={handleLoginClick} />
        <SubText onClick={onClose}>불편해도 그냥 이용하기</SubText>
      </ModalBox>
    </Overlay>,
    document.body,
  );
};

export default LoginModal;
