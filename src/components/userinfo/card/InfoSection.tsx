import { ReactNode } from 'react';

const InfoSection = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center">{children}</div>;
};

export default InfoSection;
