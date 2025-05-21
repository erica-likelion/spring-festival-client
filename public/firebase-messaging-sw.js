importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'a',
  authDomain: 'p',
  projectId: 'i',
  storageBucket: 'k',
  messagingSenderId: 'e',
  appId: 'y',
});

const messaging = firebase.messaging();

self.addEventListener('push', function (event) {
  const data = event.data.json();
  const { title, body, path = '/' } = data.notification;

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: '/icons/icon-192x192.webp',
      data: { path },
    }),
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const path = event.notification.data?.path || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      for (const client of clientList) {
        if (client.url.includes('/') && 'focus' in client) {
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(path);
      }
    }),
  );
});
