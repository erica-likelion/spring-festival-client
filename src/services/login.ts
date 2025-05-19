import { useAuthStore } from '@/stores/useAuthStore';
import axiosInstance from '@/lib/AxiosInstance';

export const login = async (code: string) => {
  try {
    const response = await axiosInstance.post(
      '/auth/kakao/login',
      { code },
      { withCredentials: true }, // refreshToken 쿠키 수신
    );
    const accessToken = response.headers['authorization']?.replace('Bearer ', '');
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      useAuthStore.getState().setLoggedIn(true); // 전역 상태 갱신
      return true;
    } else {
      console.error('access token 없음');
      return false;
    }
  } catch (error) {
    console.error('로그인 실패', error);
    return false;
  }
};
