// src/pages/Redirection.tsx

import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import loading from '../../assets/lotties/loading.json';
import * as S from './Redirection.style';
import { login } from '@/services/login';

const Redirection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const state = login(searchParams.get('code') || '');
    if (!state) {
      navigate('/login/error');
    } else navigate('/');
  }, [searchParams, navigate]);

  return (
    <S.Container>
      <Lottie loop play animationData={loading} style={{ width: 200, height: 200 }} />
      <S.LoadingText>로그인 중입니다...</S.LoadingText>
    </S.Container>
  );
};

export default Redirection;
