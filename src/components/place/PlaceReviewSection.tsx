import ReviewCard from '@/components/place/review/ReviewCard';
import ReviewInput from '@/components/place/review/ReviewInput';

const PlaceReviewSection = () => {
  return (
    <section className="h-full bg-green-300 sm:flex-1">
      <h1 className="mb-4 text-xl font-bold">리뷰</h1>
      <ReviewInput />
      <section className="space-y-4">
        <ReviewCard rating={5} />
        <ReviewCard rating={5} />
        <ReviewCard rating={5} />
      </section>
    </section>
  );
};

export default PlaceReviewSection;
