import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/UserInfoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>,
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
