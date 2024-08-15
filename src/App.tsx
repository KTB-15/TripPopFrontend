import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import UserFavouritePage from '@/pages/userInfo/UserFavouritePage';
import UserReviewPage from '@/pages/userInfo/UserReviewPage';
import UserHistoryPage from '@/pages/userInfo/UserHistoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>,
  },
  {
    path: '/mypage/favourite',
    element: <UserFavouritePage></UserFavouritePage>,
  },
  {
    path: '/mypage/review',
    element: <UserReviewPage></UserReviewPage>,
  },
  {
    path: '/mypage/history',
    element: <UserHistoryPage></UserHistoryPage>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
