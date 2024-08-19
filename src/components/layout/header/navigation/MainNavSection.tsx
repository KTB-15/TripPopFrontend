import NavLink from '@/components/layout/header/navigation/NavLink';

const MainNavSection = () => {
  return (
    <>
      <nav className="flex px-4 text-lg font-bold">
        <NavLink href="/">홈</NavLink>
        <NavLink href="/mypage/favourite">마이페이지</NavLink>
      </nav>
    </>
  );
};

export default MainNavSection;
