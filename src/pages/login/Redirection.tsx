// src/pages/Redirection.tsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';
import axios from 'axios';

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('인가 코드', code);
    if (!code) {
      console.error('인가 코드 없음');
      return;
    }

    axios
      .post(
        `http://211.188.62.189:8080/auth/kakao/login`,
        {
          code: code,
        },
        {
          withCredentials: true, // refreshToken 쿠키 받기 위해 필요
        },
      )
      .then((res) => {
        const accessToken = res.headers['authorization']?.replace('Bearer ', '');
        if (accessToken) {
          localStorage.setItem('access_token', accessToken);
          useAuthStore.getState().setLoggedIn(true); // 전역 상태 갱신
          console.log('로그인 성공', accessToken);
          navigate(-2); // 로그인 성공 후 전 페이지로 이동
        } else {
          console.error('access token 없음');
          navigate('/login/error');
        }
      })
      .catch((err) => {
        console.error('로그인 실패', err);
        navigate('login/error');
      });
  }, [navigate]);

  return <div>로그인 처리 중입니다...</div>;
};

export default Redirection;
