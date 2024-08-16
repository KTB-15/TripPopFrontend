import { IconButton } from '@/components/common/icon';
import EnterSVG from '@/components/common/icon/Enter';
import { useNavigate } from 'react-router-dom';

const SurveyStartSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('survey');
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex items-center justify-end w-auto px-3 py-1 space-x-3 cursor-pointer group text-blue-light">
        <p className="text-base font-bold group-hover:text-blue-dark sm:text-xl">나만의 여행지 찾아보기</p>
        <IconButton>
          <EnterSVG className="stroke-blue-light group-hover:stroke-blue-dark" />
        </IconButton>
      </div>
    </>
  );
};

export default SurveyStartSection;
