// src/service/foregroundMessage.js
import { getMessaging, onMessage } from 'firebase/messaging';
import { app } from './firebase';

const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
  const notification = payload.notification;

  if (notification && Notification.permission === 'granted') {
    const notificationTitle = notification.title || '알림';
    const notificationOptions = {
      body: notification.body || '',
    };

    new Notification(notificationTitle, notificationOptions);
  }
});
