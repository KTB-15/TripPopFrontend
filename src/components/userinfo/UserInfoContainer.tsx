import { ReactNode } from 'react';

// 마이페이지 레이아웃
const UserInfoContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex h-full flex-col space-y-8 px-[4rem] py-8 md:py-4 lg:px-[12rem]">{children}</div>;
};

export default UserInfoContainer;
