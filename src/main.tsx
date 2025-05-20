import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';
import {
  Main,
  Login,
  Map,
  MapSearch,
  Performance,
  Booth,
  BoothDetail,
  User,
  TimeTable,
  PerformanceDetail,
  LostSearch,
  LostPost,
  Notice,
  NoticeDetail,
  Lost,
  LostUpload,
  LostComplete,
  MadeBy,
  Redirection,
} from '@/pages';
import Layout from '@/layout';
import { handleAllowNotification } from '@/services/fcm/notificationPermission';

if (window.Kakao && !window.Kakao.isInitialized()) {
  window.Kakao.init('b3f17a02c1f339facee6125f903e309e');
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: async () => {},
    errorElement: <>ERROR</>,
    children: [
      {
        index: true,
        element: <Navigate to={'/main'} replace />,
      },
      {
        path: 'main',
        element: <Main />,
      },
      {
        path: 'main/lost/search',
        element: <LostSearch />,
      },
      {
        path: 'main/notice',
        element: <Notice />,
      },
      {
        path: 'main/notice/:id',
        element: <NoticeDetail />,
      },
      {
        path: 'main/lost',
        element: <Lost />,
      },
      {
        path: 'main/lost/upload',
        element: <LostUpload />,
      },
      {
        path: 'main/lost/upload/complete',
        element: <LostComplete />,
      },
      {
        path: 'main/lost/post/:id',
        element: <LostPost />,
      },
      {
        path: 'main/about',
        element: <MadeBy />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'login/success',
        element: <Redirection />,
      },
      {
        path: 'user',
        element: <User />,
      },
      {
        path: 'map',
        element: <Map />,
      },
      {
        path: 'map/search',
        element: <MapSearch />,
      },
      {
        path: 'performance',
        element: <Performance />,
      },
      {
        path: 'performance/timetable',
        element: <TimeTable />,
      },
      {
        path: 'performance/detail',
        element: <PerformanceDetail />,
      },
      {
        path: 'booth',
        element: <Booth />,
      },
      {
        path: 'booth/:id',
        element: <BoothDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </>,
);

window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');
  handleAllowNotification(); // 로딩 시 푸시 알림 권한 요청
  if (splash) splash.remove();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    /**navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('✅ PWA 서비스워커 등록 완료:', registration);
      })
      .catch((err) => {
        console.error('❌ PWA 서비스워커 등록 실패:', err);
      });**/
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('✅ FCM 서비스워커 등록 완료:', registration);
      })
      .catch((err) => {
        console.error('❌ FCM 서비스워커 등록 실패:', err);
      });
  });
}
