import { Hashtag } from '@/components/common';
import { IconButton, Bookmark, Enter, Favourite } from '@/components/common/icon';
import { FavouriteToggleReq, RecommendedPlaceRes } from '@/data/type';
import { useApiMutate } from '@/hooks/useApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardActionSection = ({ place }: { place: RecommendedPlaceRes }) => {
  const navigate = useNavigate();
  const goToDetail = (id: number): void => {
    navigate(`detail/${id}`);
  };
  const { mutate } = useApiMutate<boolean, FavouriteToggleReq>(
    {
      url: '/favourite/toggle',
      method: 'POST',
      body: { placeId: place.placeId, isFavourite: place.isFavourite },
    },
    {
      onSuccess: () => {
        setIsFavourite(!isFavourite);
      },
    }
  );

  const handleFavourite = () => {
    mutate({ placeId: place.placeId, isFavourite: place.isFavourite });
  };
  const [isFavourite, setIsFavourite] = useState(place.isFavourite);
  return (
    <div className="flex items-center justify-between px-1">
      <div onClick={() => goToDetail(place.placeId)} className="flex cursor-pointer items-center justify-between py-2">
        <h2 className="text-base font-semibold group-hover:text-blue-light sm:text-xl">{place.areaName}</h2>
        <IconButton>
          <Enter className={'stroke-black group-hover:stroke-blue-light'} />
        </IconButton>
      </div>
      <div className="flex space-x-2">
        <IconButton onClick={handleFavourite}>
          <Favourite className={`${isFavourite ? 'fill-red' : ''}`} />
        </IconButton>
        <IconButton onClick={() => console.log('TODO: BOOKMARK')}>
          <Bookmark />
        </IconButton>
      </div>
    </div>
  );
};

const CardFooter = ({ place }: { place: RecommendedPlaceRes }) => {
  const areas = place.roadName.split(' ').slice(0, 2);
  return (
    <div className="mt-2 space-x-1">
      {areas.map((areaName, index) => (
        <Hashtag text={areaName} key={index} />
      ))}
    </div>
  );
};

const CardBody = ({ place }: { place: RecommendedPlaceRes }) => {
  return (
    <div className="flex flex-1 flex-col justify-between px-1 py-2">
      <CardActionSection place={place} />
      <CardFooter place={place} />
    </div>
  );
};

const PlaceCard = ({ place }: { place: RecommendedPlaceRes }) => {
  return (
    <div className="group flex w-[22rem] min-w-[10%] flex-col overflow-hidden rounded-lg bg-white shadow-card hover:shadow-blue-light/50 sm:w-full">
      <div className="overflow-hidden">
        <img
          className="h-60 w-full object-fill group-hover:animate-zoom-in"
          src={`data:image/jpeg;base64,${place.placeImage}`}
          alt="여행 카드"
        />
      </div>
      <CardBody place={place} />
    </div>
  );
};

export default PlaceCard;
