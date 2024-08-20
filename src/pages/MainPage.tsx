import { PlaceContainer } from '@/components/place';
import { PlaceCard } from '@/components/place/card';
import { SurveyStartSection } from '@/components/survey';

const SurveyContainer = () => {
  return (
    <>
      <div className="flex justify-end">
        <SurveyStartSection></SurveyStartSection>
      </div>
    </>
  );
};

const MainPage = () => {
  return (
    <>
      <div className="flex h-full flex-col justify-center space-y-8 px-[4rem] py-8 md:py-4">
        <SurveyContainer></SurveyContainer>
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
