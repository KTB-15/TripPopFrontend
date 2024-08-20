import { PropsWithChildren } from 'react';

const PlaceContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="grid grid-cols-1 gap-3 justify-items-center sm:grid-cols-2 lg:grid-cols-5">{children}</div>;
};

export default PlaceContainer;
