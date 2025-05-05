import LoginButton from '@/pages/login/LoginButton';
import React, { useEffect } from 'react';
import { Container, NotLoginText, ContentWrapper, TextWrapper, Wrapper } from './login.style';
import HyLightXLikeLion from '@/assets/images/hylight-likelion.svg?react';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/nav-bar';

/**
 * 카카오 로그인 화면입니다.
 * - 상단 헤더, 로고와 설명 문구, 카카오 로그인 버튼과 '로그인하지 않고 둘러보기'로 구성됩니다.
 * - 해당 페이지 진입 시 네비게이션 바를 숨기고, 페이지를 벗어날 경우 다시 보이게 합니다.
 * - "로그인하지 않고 둘러보기" 혹은 뒤로가기 버튼 클릭시 전 페이지로 돌아갑니다.
 *
 * @returns {React.ReactElement} KakaoLoginPage 컴포넌트
 *
 */

const KakaoLoginPage: React.FC = () => {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const navigate = useNavigate();

  useEffect(() => {
    setIsNav(false); // 로그인 화면일 땐 네비게이션 숨김

    return () => {
      setIsNav(true); // 화면 떠날 때 다시 네비게이션 보이게
    };
  }, [setIsNav]);

  const handleLoginClick = () => {
    console.log('카카오 로그인 버튼 클릭');
  };

  const handleNotLoginClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <NavBar isBack={true} title="로그인" backPath={-1} />
      <ContentWrapper>
        <HyLightXLikeLion />
        <TextWrapper>
          <p>카카오톡으로 간편하게 시작해</p>
          <p>지금 바로 축제를 즐겨보세요!</p>
        </TextWrapper>
      </ContentWrapper>
      <Wrapper>
        <LoginButton onClick={handleLoginClick} />
        <NotLoginText onClick={handleNotLoginClick}>로그인하지 않고 둘러보기</NotLoginText>
      </Wrapper>
    </Container>
  );
};

export default KakaoLoginPage;
