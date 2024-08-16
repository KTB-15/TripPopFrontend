import { useLocation } from 'react-router-dom';

const NavSection = () => {
  const location = useLocation();
  // 현재 페이지에 해당되는 텍스트인지 확인하는 함수
  const getTextColor = (path: string) => {
    return location.pathname === path ? 'text-blue-light' : 'text-black';
  };
  return (
    <>
      <nav className="flex text-lg font-bold px-4">
        <a href="/" className={`px-2 ${getTextColor('/')}`}>
          홈
        </a>
        <a href="/mypage" className={`px-2 ${getTextColor('/')}`}>
          마이페이지
        </a>
      </nav>
    </>
  );
};

export default NavSection;
