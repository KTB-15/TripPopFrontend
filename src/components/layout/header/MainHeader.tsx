import { NavSection } from '@/components/layout/header/nav';

const MainHeader = () => {
  return (
    <>
      <header className="px-3 py-2 flex items-center border justify-between">
        <h1 className="text-3xl font-bold">TripPop!</h1>
        <NavSection></NavSection>
      </header>
    </>
  );
};

export default MainHeader;
