import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/auth/login/kakao/auth-code`, {
        withCredentials: true,
      })
      .then((res) => {
        const token = res.headers['authorization']?.replace('Bearer ', '');
        if (token) {
          localStorage.setItem('access_token', token);
          navigate('/main');
        } else {
          alert('토큰이 없습니다');
          navigate('/login');
        }
      })
      .catch((err) => {
        console.error('❌ 로그인 결과 확인 실패', err);
        alert('로그인 실패');
        navigate('/login');
      });
  }, [navigate]);

  return <div>로그인 처리 중입니다...</div>;
};

export default LoginSuccess;
