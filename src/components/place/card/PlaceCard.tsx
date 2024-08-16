import { IconButton } from '@/components/common/icon';
import BookmarkSVG from '@/components/common/icon/Bookmark';
import EnterSVG from '@/components/common/icon/Enter';
import FavouriteSVG from '@/components/common/icon/Favourite';
import { useNavigate } from 'react-router-dom';

const PlaceCard = () => {
  const navigate = useNavigate();

  const goToDetail = (id: string): void => {
    navigate(`detail/${id}`);
  };
  return (
    <div className="group flex w-[25rem] min-w-[10%] flex-col overflow-hidden rounded-lg bg-white drop-shadow-md sm:w-full">
      <img
        className="object-fill w-full hover:animate-zoom-in h-60"
        src="./src/assets/react.svg"
        alt="Travel Destination"
      />
      <div className="px-1 py-2">
        <div className="flex items-center justify-between">
          <div onClick={() => goToDetail('TODO')} className="flex items-center justify-between py-2 cursor-pointer">
            <h2 className="text-base font-semibold group-hover:text-blue-light sm:text-xl">전주한옥마을 버스정류장</h2>
            <IconButton>
              <EnterSVG className={'stroke-black group-hover:stroke-blue-light'} />
            </IconButton>
          </div>
          <div className="flex space-x-2">
            <IconButton onClick={() => goToDetail('TODO')}>
              <FavouriteSVG />
            </IconButton>
            <IconButton onClick={() => goToDetail('TODO')}>
              <BookmarkSVG />
            </IconButton>
          </div>
        </div>
        <div className="mt-2">
          <span className="px-2 py-1 text-sm border rounded-lg border-blue-light text-blue-light">#경주</span>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
