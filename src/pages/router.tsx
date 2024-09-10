import { createBrowserRouter, RouteObject } from 'react-router-dom';
import UserFavouritePage from '@/pages/userInfo/UserFavouritePage';
import UserReviewPage from '@/pages/userInfo/UserReviewPage';
import UserHistoryPage from '@/pages/userInfo/UserHistoryPage';
import RootPage from '@/pages/RootPage';
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import SurveyPage from '@/pages/SurveyPage';
import PlaceDetailPage from '@/pages/PlaceDetailPage';
import TokenProvider from './TokenProvider';

const myPageRoutes: RouteObject[] = [
  {
    path: 'mypage/favourite',
    element: <UserFavouritePage></UserFavouritePage>,
  },
  {
    path: 'mypage/review',
    element: <UserReviewPage></UserReviewPage>,
  },
  {
    path: 'mypage/history',
    element: <UserHistoryPage></UserHistoryPage>,
  },
  {
    path: 'jwt-token',
    element: <TokenProvider></TokenProvider>
  }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage></RootPage>,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/detail/:id',
        element: <PlaceDetailPage />,
      },
      ...myPageRoutes,
    ],
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: 'survey',
    element: <SurveyPage />,
  },
]);

export default router;
