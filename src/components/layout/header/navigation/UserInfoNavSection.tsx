import NavLink from '@/components/layout/header/navigation/NavLink';

const MyPageNavSection = () => {
  return (
    <>
      <nav className="flex px-4 text-lg font-bold">
        <NavLink href="/mypage/favourite">즐겨찾기</NavLink>
        <NavLink href="/mypage/review">리뷰</NavLink>
        <NavLink href="/mypage/history">히스토리</NavLink>
        <NavLink href="/">메인으로</NavLink>
      </nav>
    </>
  );
};

export default MyPageNavSection;
