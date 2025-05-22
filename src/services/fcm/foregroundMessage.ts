import { onMessage } from 'firebase/messaging';
import { messaging } from './firebase';
import { useWaitingStore } from '@/features/waiting/stores/useWaitingStore';

onMessage(messaging, (payload) => {
  const { title, body } = payload.notification || {};

  if (Notification.permission === 'granted' && title) {
    useWaitingStore.getState().loadWaitings();
    new Notification(title, {
      body,
      icon: '/icons/icon-192x192.webp',
    });
  }
});
