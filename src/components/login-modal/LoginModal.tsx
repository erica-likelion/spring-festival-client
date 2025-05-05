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

/**
 * 로그인 모달 컴포넌트입니다.
 *
 * 사용자가 로그인하지 않은 상태에서 기능을 사용하려 할 때 노출되며,
 * 카카오톡 로그인 유도 및 기능 설명, 로그인 없이도 이용 가능한 선택지를 제공합니다.
 *
 * @component
 * @param {LoginModalProps} props - 모달 표시 여부 및 닫기 함수 props
 * @param {boolean} props.isOpen - 모달이 열려 있는지 여부
 * @param {() => void} props.onClose - 모달 닫기 시 실행되는 함수
 *
 * @example
 * <LoginModal isOpen={true} onClose={() => setOpen(false)} />
 *
 * @returns {JSX.Element | null} 로그인 모달 엘리먼트 또는 null
 */

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
