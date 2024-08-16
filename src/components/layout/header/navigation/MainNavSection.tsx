import NavLink from '@/components/layout/header/navigation/NavLink';

const MainNavSection = () => {
  return (
    <>
      <nav className="flex text-lg font-bold px-4">
        <NavLink href="/">홈</NavLink>
        <NavLink href="/mypage/favourite">마이페이지</NavLink>
      </nav>
    </>
  );
};

export default MainNavSection;
