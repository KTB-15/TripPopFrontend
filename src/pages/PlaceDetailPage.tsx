import PlaceDetailSection from '@/components/place/PlaceDetailSection';
import PlaceReviewSection from '@/components/place/PlaceReviewSection';

const PlaceDetailPage = () => {
  return (
    <>
      <div className="flex h-full flex-col bg-blue-100 px-[3rem] py-8 sm:flex-row md:py-4">
        <PlaceDetailSection />
        <PlaceReviewSection />
      </div>
    </>
  );
};

export default PlaceDetailPage;
