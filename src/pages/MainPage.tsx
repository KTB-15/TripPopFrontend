import { PlaceContainer } from '@/components/place';
import { PlaceCard } from '@/components/place/card';

const MainPage = () => {
  return (
    <>
      <div className="flex flex-col h-full justify-center">
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
