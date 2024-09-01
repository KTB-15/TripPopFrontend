import PlaceDetailSection from '@/components/place/PlaceDetailSection';
import PlaceReviewSection from '@/components/place/PlaceReviewSection';

const PlaceDetailPage = () => {
  return (
    <>
      <div className="flex h-full flex-col justify-start px-[4rem] py-8 sm:flex-row md:py-4">
        <PlaceDetailSection />
        <PlaceReviewSection />
      </div>
    </>
  );
};

export default PlaceDetailPage;
