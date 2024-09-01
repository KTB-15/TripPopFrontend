import { useState } from 'react';

const ReviewInput = () => {
  const [review, setReview] = useState('');
  return (
    <textarea
      className="w-full rounded border p-2 text-lg"
      placeholder="소중한 리뷰를 남겨주세요."
      value={review}
      onChange={(e) => setReview(e.target.value)}
      rows={4}
    />
  );
};

export default ReviewInput;
