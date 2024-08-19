import { PropsWithChildren } from 'react';

const PlaceContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-3 bg-green-400 px-[4rem] sm:grid-cols-2 lg:grid-cols-5">
      {children}
    </div>
  );
};

export default PlaceContainer;
