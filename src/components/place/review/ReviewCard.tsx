import Star from '@/components/common/icon/Star';

const ReviewInfoSection = ({ rating }: { rating: number }) => {
  return (
    <div className="mr-4 flex w-16 flex-col items-center justify-center">
      <div className="mb-2 h-12 w-12 rounded-full bg-option"></div>
      <div className="flex items-center justify-center">
        <Star />
        <span className="ml-1 text-sm">{rating}/5</span>
      </div>
    </div>
  );
};

const ReviewContent = () => {
  return (
    <div className="flex-grow">
      <h3 className="font-bold sm:text-lg">사용자 아이디</h3>
      <p className="mt-1 text-sm sm:text-base">
        대한민국 국민이라면 한 기본 사항이 거의 없을 불국사. 얼마 전 활곽재가 이루로 더 찾는 사람이 많았던 곳이죠.
        주말이면 늘 사람들로 붐비는 곳이며 고즈넉한 산사의 분위기는 느끼기 어렵지 만, 신라시대들의 꿈꾸던 불국토의
        분위기를 느낄 수 있는 곳입니다. 잘 생긴 석가탑과 아름다운 다보탑만으로도 불국사는 아름다운 곳입니다.
      </p>
    </div>
  );
};

const ReviewCard = ({ rating }: { rating: number }) => {
  return (
    <div className="shadow-card flex rounded-lg p-4">
      <ReviewInfoSection rating={rating} />
      <ReviewContent />
    </div>
  );
};

export default ReviewCard;
