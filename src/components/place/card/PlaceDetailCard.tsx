import { Hashtag } from '@/components/common';
import { Favourite, Bookmark, Star } from '@/components/common/icon';

const CardBody = () => (
  <div className="p-4">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">여행지 이름</h2>
      <div className="flex items-center space-x-2">
        <Favourite />
        <Bookmark />
      </div>
    </div>
    <div className="mt-2 flex items-center">
      <Star />
      <span className="ml-1">4.6 / 5</span>
    </div>
    <div className="mt-2 flex space-x-2">
      <Hashtag text="경주" />
    </div>
  </div>
);

const PlaceDetailCard = () => {
  return (
    <div className="w-full rounded-lg bg-white shadow">
      <div className="relative h-64 sm:h-80">
        <img src="/api/placeholder/800/600" alt="Travel Destination" className="h-full w-full object-cover" />
      </div>
      <CardBody />
    </div>
  );
};

export default PlaceDetailCard;
