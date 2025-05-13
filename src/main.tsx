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
  LostPost,
  Notice,
  NoticeDetail,
  Lost,
  LostUpload,
  LostComplete,
  MadeBy,
} from '@/pages';
import Layout from '@/layout';

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
  if (splash) splash.remove();
});
