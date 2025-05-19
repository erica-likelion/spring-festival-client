import { getToken } from 'firebase/messaging';
import { sendToken } from '@/services/alarm';
//import { registerServiceWorker } from "./registerServiceWorker";
import { messaging } from '@/services/firebase';

export async function handleAllowNotification() {
  //registerServiceWorker(); // 나중에 설명
  try {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      });
      if (token) {
        sendToken(token); // (토큰을 서버로 전송하는 로직)
      } else {
        console.log('토큰 등록이 불가능 합니다. 생성하려면 권한을 허용해주세요');
      }
    } else if (permission === 'denied') {
      console.log('web push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요');
    }
  } catch (error) {
    console.error('푸시 토큰 가져오는 중에 에러 발생', error);
  }
}
