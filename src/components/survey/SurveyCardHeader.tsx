import { Backspace, IconButton } from '@/components/common/icon';
import SurveyButton from '@/components/survey/SurveyButton';
import { useNavigate } from 'react-router-dom';

interface SurveyCardHeaderProps {
  progress: number;
}
const SurveyCardHeader = ({ progress }: SurveyCardHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-start justify-between">
      <div className="group flex cursor-pointer items-center space-x-2" onClick={() => navigate(-1)}>
        <IconButton>
          <Backspace className="group-hover:stroke-blue-light" />
        </IconButton>
        <span className="text-lg group-hover:text-blue-light">취소</span>
      </div>
      <SurveyButton
        disabled={true}
        buttonName={`${progress} / 8`}
        className={'survey-btn bg-blue-survey-btn'}></SurveyButton>
      {/* 진행도 표시 */}
    </div>
  );
};

export default SurveyCardHeader;
