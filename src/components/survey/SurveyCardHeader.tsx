import { Backspace, IconButton } from '@/components/common/icon';
import SurveyButton from '@/components/survey/SurveyButton';
import useSurveyStore, { QUESTIONS } from '@/stores/SurveyStore';
import { useNavigate } from 'react-router-dom';

interface SurveyCardHeaderProps {
  progress: number;
}
const SurveyCardHeader = ({ progress }: SurveyCardHeaderProps) => {
  const navigate = useNavigate();
  const surveyStore = useSurveyStore();
  const handleBack = () => {
    navigate(-1);
    surveyStore.resetProgress();
  };
  return (
    <div className="flex items-start justify-between">
      <div className="group flex cursor-pointer items-center space-x-2" onClick={handleBack}>
        <IconButton>
          <Backspace className="group-hover:stroke-blue-light" />
        </IconButton>
        <span className="text-lg group-hover:text-blue-light">취소</span>
      </div>
      <SurveyButton
        disabled={true}
        buttonName={`${progress} / ${QUESTIONS.length - 1}`}
        className={'survey-btn bg-blue-survey-btn'}></SurveyButton>
      {/* 진행도 표시 */}
    </div>
  );
};

export default SurveyCardHeader;
