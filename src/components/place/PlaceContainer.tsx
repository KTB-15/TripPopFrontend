import { PropsWithChildren } from 'react';

const PlaceContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">{children}</div>;
};

export default PlaceContainer;
