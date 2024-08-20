import { Hashtag } from '@/components/common';

const PlaceInfo = () => {
  return (
    <div className="flex w-24 min-w-24 flex-col items-start justify-start space-y-4 sm:w-[12rem] sm:min-w-[12rem]">
      <h1 className="text-lg font-semibold sm:text-3xl">여행지 이름</h1>
      <div className="flex flex-wrap gap-2">
        <Hashtag text="전주" />
        <Hashtag text="전주" />
        <Hashtag text="전주" />
        <Hashtag text="전주" />
      </div>
    </div>
  );
};

export default PlaceInfo;
