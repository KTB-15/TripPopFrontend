import { ReactNode } from 'react';

const UserInfoCardContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex h-full flex-col space-y-8 bg-rose-100 px-[6rem] py-8 md:py-4">{children}</div>;
};

export default UserInfoCardContainer;
