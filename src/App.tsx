import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/UserInfoPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/mypage',
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
