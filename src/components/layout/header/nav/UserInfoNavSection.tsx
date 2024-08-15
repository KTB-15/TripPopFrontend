import { useLocation } from 'react-router-dom';

const MyPageNavSection = () => {
  const location = useLocation();
  // 현재 페이지에 해당되는 텍스트인지 확인하는 함수
  const getTextColor = (path: string) => {
    return location.pathname === path ? 'text-blue-light' : 'text-black';
  };
  return (
    <>
      <nav className="flex text-lg font-bold px-4">
        <a href="/mypage/favourite" className={`px-2 ${getTextColor('/mypage/favourite')}`}>
          즐겨찾기
        </a>
        <a href="/mypage/review" className={`px-2 ${getTextColor('/mypage/review')}`}>
          리뷰
        </a>
        <a href="/mypage/history" className={`px-2 ${getTextColor('/mypage/history')}`}>
          히스토리
        </a>
        <a href="/" className={`px-2 ${getTextColor('/')}`}>
          메인으로
        </a>
      </nav>
    </>
  );
};

export default MyPageNavSection;
