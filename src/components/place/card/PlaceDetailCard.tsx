import { Hashtag } from '@/components/common';
import { Favourite, Bookmark, Star, IconButton } from '@/components/common/icon';

const CardBody = () => (
  <div className="space-y-2 p-4">
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold">여행지 이름</h2>
      <div className="flex items-center space-x-2">
        <IconButton>
          <Favourite />
        </IconButton>
        <IconButton>
          <Bookmark />
        </IconButton>
        <div className="flex items-center">
          <Star />
          <span className="ml-1">4 / 5</span>
        </div>
      </div>
    </div>
    <div className="flex space-x-2">
      <Hashtag text="경주" />
    </div>
  </div>
);

const PlaceDetailCard = () => {
  return (
    <div className="shadow-card w-full rounded-lg bg-white px-2 py-2 sm:space-y-4">
      <div className="h-64 overflow-hidden rounded-lg sm:h-[40rem]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk92qOx7c5k5fybjVbUkwg6BGW_ptjgID9A&s"
          alt="여행 카드 이미지"
          className="h-full w-full object-cover hover:animate-zoom-in"
        />
      </div>
      <CardBody />
    </div>
  );
};

export default PlaceDetailCard;
