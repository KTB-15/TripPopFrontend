import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/userInfo/UserInfoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>,
  },
  {
    path: '/mypage/favourite',
    element: <MyPage></MyPage>,
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
