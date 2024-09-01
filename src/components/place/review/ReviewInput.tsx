import { useState } from 'react';

const ReviewInput = () => {
  const [review, setReview] = useState('');
  return (
    <textarea
      className="w-full resize-none rounded-lg border border-option p-2 text-lg focus:outline-none"
      placeholder="소중한 리뷰를 남겨주세요."
      value={review}
      onChange={(e) => setReview(e.target.value)}
      rows={4}
    />
  );
};

export default ReviewInput;
