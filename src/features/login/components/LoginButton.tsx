import React from 'react';
import { StyledKakaoButton } from './LoginButton.style';
import { LoginButtonProps } from './LoginButton.types';
import KaKaoTalk from '@/assets/icons/kakaotalk.svg?react';

/**
 * 카카오 로그인 버튼 컴포넌트입니다.
 * 클릭 시 onClick 함수를 실행합니다.
 * 카카오 아이콘과 노란 배경의 스타일을 가집니다.
 *
 * @param {function} [onClick] - 버튼 클릭 시 실행할 콜백 함수
 *
 * @returns {React.ReactElement} LoginButton 컴포넌트
 *
 * @example
 * <LoginButton onClick={handleLoginClick} />
 */

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <StyledKakaoButton onClick={onClick}>
      <KaKaoTalk width={'1.5rem'} height={'1.5rem'} />
      {'카카오톡으로 간편로그인하기'}
    </StyledKakaoButton>
  );
};

export default LoginButton;
