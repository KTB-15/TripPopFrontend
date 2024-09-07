import { MyPageNavSection, NavSection } from '@/components/layout/header/navigation';
import { useLocation } from 'react-router-dom';

const MainHeader = () => {
  return (
    <>
      <header className="flex items-center justify-between border px-3 py-2">
        <h1 className="text-3xl font-bold">TripPop!</h1>
        <NavSection></NavSection>
      </header>
    </>
  );
};

const MyPageHeader = () => {
  return (
    <>
      <header className="flex items-center justify-between border px-3 py-2">
        <h1 className="text-3xl font-bold">TripPop!</h1>
        <MyPageNavSection></MyPageNavSection>
      </header>
    </>
  );
};

const RootHeader = () => {
  const location = useLocation();
  if (location.pathname.includes('mypage')) return <MyPageHeader />;
  return <MainHeader />;
};

export default RootHeader;
