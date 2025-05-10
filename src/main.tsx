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
  User,
  TimeTable,
  PerformanceDetail,
  LostPost,
  Notice,
  NoticeDetail,
  Lost,
  LostUpload,
} from '@/pages';
import Layout from '@/layout';

import { Modal as ModalProvider } from '@/components/modal';
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
        path: 'main/lost/post/:id',
        element: <LostPost />,
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
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={theme}>
      <ModalProvider />
      <GlobalStyle />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </>,
);
