import { Hashtag } from '@/components/common';
import { IconButton, Bookmark, Enter, Favourite } from '@/components/common/icon';
import { useNavigate } from 'react-router-dom';

const CardActionSection = () => {
  const navigate = useNavigate();
  const goToDetail = (id: string): void => {
    navigate(`detail/${id}`);
  };
  return (
    <div className="flex items-center justify-between px-1">
      <div onClick={() => goToDetail('TODO')} className="flex items-center justify-between py-2 cursor-pointer">
        <h2 className="text-base font-semibold group-hover:text-blue-light sm:text-xl">전주한옥마을 버스정류장</h2>
        <IconButton>
          <Enter className={'stroke-black group-hover:stroke-blue-light'} />
        </IconButton>
      </div>
      <div className="flex space-x-2">
        <IconButton onClick={() => goToDetail('TODO')}>
          <Favourite />
        </IconButton>
        <IconButton onClick={() => goToDetail('TODO')}>
          <Bookmark />
        </IconButton>
      </div>
    </div>
  );
};

const CardFooter = () => {
  return (
    <div className="mt-2">
      <Hashtag text="전주" />
    </div>
  );
};

const CardBody = () => {
  return (
    <div className="px-1 py-2">
      <CardActionSection />
      <CardFooter />
    </div>
  );
};

const PlaceCard = () => {
  return (
    <div className="group flex w-[22rem] min-w-[10%] flex-col overflow-hidden rounded-lg bg-white shadow-md hover:shadow-blue-light/50 sm:w-full">
      <div className="overflow-hidden">
        <img className="object-fill w-full hover:animate-zoom-in h-60" src={url} alt="Travel Destination" />
      </div>
      <CardBody />
    </div>
  );
};

export default PlaceCard;

const url = 'https://cdn.pixabay.com/photo/2022/10/01/01/53/gyeongbokgung-palace-7490464_640.jpg';
