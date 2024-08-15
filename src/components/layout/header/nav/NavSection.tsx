import MainNavSection from '@/components/layout/header/nav/MainNavSection';
import MyPageNavSection from '@/components/layout/header/nav/UserInfoNavSection';
import { useLocation } from 'react-router-dom';

const NavSection = () => {
  const location = useLocation();
  // 현재 페이지에 해당되는 텍스트인지 확인하는 함수
  return (
    <>
      {location.pathname.includes('/mypage') ? (
        <MyPageNavSection></MyPageNavSection>
      ) : (
        <MainNavSection></MainNavSection>
      )}
    </>
  );
};

export default NavSection;
