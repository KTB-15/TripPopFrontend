import { useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const location = useLocation();
  // 현재 페이지에 해당되는 텍스트인지 확인하는 함수
  const getTextColor = (path: string) => {
    return location.pathname === path ? 'text-blue-light' : 'text-black';
  };

  return (
    <>
      <a href={href} className={`px-2 ${getTextColor(href)} hover:text-blue-dark`}>
        {children}
      </a>
    </>
  );
};

export default NavLink;
