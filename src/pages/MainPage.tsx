import { PlaceContainer } from '@/components/place';
import { PlaceCard } from '@/components/place/card';

const MainPage = () => {
  return (
    <>
      <div className="flex h-full flex-col justify-center">
        <PlaceContainer>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
        </PlaceContainer>
      </div>
    </>
  );
};

export default MainPage;
