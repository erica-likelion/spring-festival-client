// src/pages/Redirection.tsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (!code) {
      console.error('인가 코드 없음');
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/auth/login/kakao/auth-code`,
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
          navigate('/main');
        } else {
          console.error('access token 없음');
          navigate('/login?error=token_missing');
        }
      })
      .catch((err) => {
        console.error('로그인 실패', err);
        navigate('/login?error=server_error');
      });
  }, [navigate]);

  return;
};

export default Redirection;
