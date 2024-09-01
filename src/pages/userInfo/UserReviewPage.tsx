import { IconButton, Option } from '@/components/common/icon';
import { UserInfoCardContainer, UserInfoContainer, UserInfoHeader } from '@/components/userinfo';
import { UserInfoCard } from '@/components/userinfo/card';

const UserFavouritePage = () => {
  return (
    <UserInfoContainer>
      <UserInfoHeader text="리뷰"></UserInfoHeader>
      <UserInfoCardContainer>
        <UserInfoCard
          options={
            <IconButton rounded={true}>
              <Option />
            </IconButton>
          }
        />
      </UserInfoCardContainer>
    </UserInfoContainer>
  );
};

export default UserFavouritePage;
