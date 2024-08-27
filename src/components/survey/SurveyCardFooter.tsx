import SurveyButton from '@/components/survey/SurveyButton';
import useSurveyStore from '@/stores/SurveyStore';

const SurveyCardFooter = () => {
  const surveyStore = useSurveyStore();
  const onNextClick = () => {
    surveyStore.incProgress();
  };

  const onPrevClick = () => {
    surveyStore.decProgress();
  };
  const onSkipClick = () => {
    surveyStore.resetProgress();
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
          buttonName="다음"
          onClick={onNextClick}
          className="survey-btn bg-blue-survey-btn hover:bg-blue-dark"
        />
      </div>
    </div>
  );
};

export default SurveyCardFooter;
