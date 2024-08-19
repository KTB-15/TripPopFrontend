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
    <div className="flex w-full min-w-[10%] max-w-[25rem] flex-col overflow-hidden rounded-lg bg-white drop-shadow-md">
      <img className="object-cover w-full h-60" src="image-url" alt="Travel Destination" />
      <div className="px-1 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold peer-hover:text-blue-light">전주한옥마을버스정류장</h2>
            <IconButton onClick={() => goToDetail('TODO')}>
              <EnterSVG />
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
