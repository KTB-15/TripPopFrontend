import { ReactNode } from 'react';

const UserInfoCard = ({ children, options }: { children: ReactNode; options?: ReactNode }) => {
  return (
    <div className="flex items-center space-x-6 rounded-lg px-6 py-2 shadow-[4px_4px_4px_rgba(0,0,0,0.3)]">
      {children}
      <div className="absolute right-[7rem] top-6 flex space-x-2">{options}</div>
    </div>
  );
};

export default UserInfoCard;
