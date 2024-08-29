import SurveyButton from '@/components/survey/SurveyButton';
import useSurveyStore from '@/stores/SurveyStore';
import { useNavigate } from 'react-router-dom';

const SurveyCardFooter = () => {
  const { progress, choices, incProgress, decProgress, resetProgress } = useSurveyStore();
  const navigate = useNavigate();
  const onNextClick = () => {
    if (choices[progress - 1] === 0) {
      alert('입력해주세요.');
      return;
    }
    if (progress === 8) {
      console.log('제출');
      navigate('/');
    } else incProgress();
  };

  const onPrevClick = () => {
    decProgress();
  };
  const onSkipClick = () => {
    resetProgress();
  };
  return (
    <div className="flex w-full items-center justify-between space-y-1">
      <SurveyButton
        buttonName="뒤로가기"
        onClick={onPrevClick}
        className="survey-btn bg-blue-survey-btn hover:bg-blue-dark"
      />
      <div className="flex items-center justify-center space-x-5">
        <SurveyButton
          buttonName="건너뛰기"
          onClick={onSkipClick}
          className="survey-btn bg-cancel text-black hover:bg-gray-400"
        />
        <SurveyButton
          buttonName={progress === 8 ? '완료' : '다음'}
          onClick={onNextClick}
          className="survey-btn bg-blue-survey-btn hover:bg-blue-dark"
        />
      </div>
    </div>
  );
};

export default SurveyCardFooter;
