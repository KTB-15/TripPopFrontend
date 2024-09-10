import { InfoSection, PlaceImage, PlaceInfo } from '@/components/userinfo/card';
import { ReactNode } from 'react';

const UserInfoCard = ({ options }: { options?: ReactNode }) => {
  return (
    <div className="shadow-card relative flex items-center space-x-6 rounded-lg px-6 py-2">
      <PlaceImage
        src="https://www.travelonline.com/thailand/attractions/white-temple/thailand-generic-white-temple-hd-56217-banner.jpg"
        alt="White Temple"
      />
      <InfoSection>
        <PlaceInfo />
      </InfoSection>
      <div className="absolute right-2 top-2 flex space-x-2">{options}</div>
    </div>
  );
};

export default UserInfoCard;
