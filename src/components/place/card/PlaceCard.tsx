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
    <div className="flex flex-col w-full min-w-[10%] max-w-[25rem] rounded-lg overflow-hidden drop-shadow-md bg-white">
      <img className="w-full h-60 object-cover" src="image-url" alt="Travel Destination" />
      <div className="px-1 py-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
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
          <span className="text-sm text-blue-light border-blue-light border rounded-lg px-2 py-1">#경주</span>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
