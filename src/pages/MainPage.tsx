import { PlaceContainer } from '@/components/place';
import { PlaceCard } from '@/components/place/card';
import { SurveyStartSection } from '@/components/survey';
import { RecommendedPlaceReq, RecommendedPlaceRes } from '@/data/type';
import { useApiQuery } from '@/hooks/useApi';

const SurveyContainer = () => {
  return (
    <>
      <div className="flex justify-end">
        <SurveyStartSection></SurveyStartSection>
      </div>
    </>
  );
};

/**
 * 과정: 설문지 정보를 토대로 응답(Place ID)
 * Place ID에 대해 이미지 가져오기
 */
const MainPage = () => {
  const { data, isPending, error } = useApiQuery<RecommendedPlaceRes[], RecommendedPlaceReq>(['recommended'], {
    url: '/recommend',
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;
  return (
    <>
      <div className="flex h-full flex-col justify-center space-y-8 px-[4rem] py-8 md:py-4">
        <SurveyContainer></SurveyContainer>
        <PlaceContainer>
          {data.map((place) => (
            <PlaceCard key={place.placeId} place={place}></PlaceCard>
          ))}
        </PlaceContainer>
      </div>
    </>
  );
};

export default MainPage;
