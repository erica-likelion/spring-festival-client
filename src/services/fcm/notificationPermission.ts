import { getToken } from 'firebase/messaging';

import { messaging } from '@/services/fcm/firebase';
import { sendToken } from '@/services/alarm';

export async function handleAllowNotification() {
  try {
    console.log('푸시 알림 권한 요청');
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      });
      if (token) {
        await sendToken(token);
        localStorage.setItem('deviceToken', token); // (토큰을 서버로 전송하는 로직)
        return true;
      } else {
        console.log('토큰 등록이 불가능 합니다. 생성하려면 권한을 허용해주세요');
      }
    } else if (permission === 'denied') {
      console.log('web push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요');
    }
  } catch (error) {
    console.error('푸시 토큰 가져오는 중에 에러 발생', error);
  }
  return false;
}
