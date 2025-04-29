import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';
import { Main, Login, Map, Performance, Booth, User } from '@/pages';
import Layout from '@/layout';
import Details from './pages/performance/Details';

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
        path: 'performance',
        element: <Performance />,
      },
      {
        path: 'performance/detail',
        element: <Details />,
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
