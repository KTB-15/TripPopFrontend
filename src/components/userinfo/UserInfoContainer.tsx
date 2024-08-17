import { ReactNode } from 'react';

const UserInfoContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex h-full flex-col space-y-8 border px-[6rem] py-8 md:py-4">{children}</div>;
};

export default UserInfoContainer;
