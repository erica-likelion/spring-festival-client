// src/pages/Redirection.tsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';
import axiosInstance from '@/lib/AxiosInstance';

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('인가 코드', code);
    if (!code) {
      console.error('인가 코드 없음');
      return;
    }

    axiosInstance
      .post(
        '/auth/kakao/login',
        { code },
        { withCredentials: true }, // refreshToken 쿠키 수신
      )
      .then((res) => {
        const accessToken = res.headers['authorization']?.replace('Bearer ', '');
        if (accessToken) {
          localStorage.setItem('access_token', accessToken);
          useAuthStore.getState().setLoggedIn(true); // 전역 상태 갱신
          console.log('로그인 성공', accessToken);
          navigate(-2);
        } else {
          console.error('access token 없음');
          navigate('/login/error');
        }
      })
      .catch((err) => {
        console.error('로그인 실패', err);
        navigate('/login/error');
      });
  }, [navigate]);

  return <div>로그인 처리 중입니다...</div>;
};

export default Redirection;
