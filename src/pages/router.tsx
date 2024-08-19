import { createBrowserRouter, RouteObject } from 'react-router-dom';
import UserFavouritePage from '@/pages/userInfo/UserFavouritePage';
import UserReviewPage from '@/pages/userInfo/UserReviewPage';
import UserHistoryPage from '@/pages/userInfo/UserHistoryPage';
import RootPage from '@/pages/RootPage';
import MainPage from '@/pages/MainPage';

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
      ...myPageRoutes,
    ],
  },
]);

export default router;
