import MyPageHeader from '@/components/userinfo/Header';
import UserInfoContainer from '@/components/userinfo/UserInfoContainer';
import InfoSection from '@/components/userinfo/card/InfoSection';
import PlaceImage from '@/components/userinfo/card/PlaceImage';
import PlaceInfo from '@/components/userinfo/card/PlaceInfo';
import UserInfoCard from '@/components/userinfo/card/UserInfoCard';

const UserFavouritePage = () => {
  return (
    <div className="flex h-full flex-col space-y-8 px-[4rem] py-8 md:py-4 lg:px-[12rem]">
      <MyPageHeader text="즐겨찾기"></MyPageHeader>
      <UserInfoContainer>
        <UserInfoCard>
          <PlaceImage
            src="https://www.travelonline.com/thailand/attractions/white-temple/thailand-generic-white-temple-hd-56217-banner.jpg"
            alt="White Temple"
          />
          <InfoSection>
            <PlaceInfo />
          </InfoSection>
        </UserInfoCard>
      </UserInfoContainer>
    </div>
  );
};

export default UserFavouritePage;
