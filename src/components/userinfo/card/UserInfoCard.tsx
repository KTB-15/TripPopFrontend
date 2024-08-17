import { ReactNode } from 'react';

const UserInfoCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex space-x-6 rounded-lg border px-6 py-2 shadow-[4px_4px_4px_rgba(0,0,0,0.3)]">{children}</div>
  );
};

export default UserInfoCard;
