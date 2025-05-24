import { useAuthStore } from '@/stores/useAuthStore';
import { useWaitingStore } from '@/features/waiting/stores/useWaitingStore';
import axiosInstance from '@/lib/AxiosInstance';
import { handleAllowNotification } from '@/services/fcm/notificationPermission';

export const login = async (code: string) => {
  try {
    const response = await axiosInstance.post(
      '/auth/kakao/login',
      { code },
      { withCredentials: true }, // refreshToken 쿠키 수신
    );
    const accessToken = response.headers['authorization']?.replace('Bearer ', '');
    if (accessToken) {
      await localStorage.setItem('access_token', accessToken);
      useWaitingStore.getState().loadWaitings();
      useAuthStore.getState().setLoggedIn(true); // 전역 상태 갱신
      await handleAllowNotification(accessToken);
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

export const logout = async () => {
  // 모든 DB 이름 가져오기
  const dbs = await indexedDB.databases();
  await useAuthStore.getState().logout();
  localStorage.removeItem('access_token');
  localStorage.removeItem('deviceToken');
  // 모든 DB 삭제
  for (const db of dbs) {
    if (db.name) {
      indexedDB.deleteDatabase(db.name);
    }
  }

  console.log('✅ All IndexedDB databases deleted.');
};
