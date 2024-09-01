import { BaseButton } from '@/components/common';
import ReviewInput from '@/components/place/review/ReviewInput';
import { useState } from 'react';

const ReviewInputContainer = () => {
  const [review, setReview] = useState('');
  return (
    <div className="mb-2 space-y-0 bg-black sm:mb-6">
      <ReviewInput />
      <div className="flex justify-end">
        <BaseButton buttonName="등록" onClick={() => {}} className="base-btn bg-blue-light hover:bg-blue-dark" />
      </div>
    </div>
  );
};

export default ReviewInputContainer;
