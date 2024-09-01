import ReviewCard from '@/components/place/review/ReviewCard';
import ReviewInputContainer from '@/components/place/review/ReviewInputContainer';

const PlaceReviewSection = () => {
  return (
    <div className="h-full flex-1 py-4 sm:py-10">
      <h1 className="mb-4 text-3xl font-bold">리뷰</h1>
      <ReviewInputContainer />
      <section className="flex flex-col items-center justify-center space-y-2">
        <ReviewCard rating={4} />
        <ReviewCard rating={4} />
        <ReviewCard rating={4} />
      </section>
    </div>
  );
};

export default PlaceReviewSection;
