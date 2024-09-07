import { RootHeader } from '@/components/layout/header';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <>
      <RootHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
