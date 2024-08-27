import SurveyButton from '@/components/survey/SurveyButton';

const SurveyCardFooter = () => {
  return (
    <div className="flex w-full items-center justify-between space-y-1">
      <SurveyButton buttonName="뒤로가기" className="survey-btn bg-blue-survey-btn hover:bg-blue-dark" />
      <div className="flex items-center justify-center space-x-5">
        <SurveyButton buttonName="건너뛰기" className="survey-btn bg-cancel text-black hover:bg-gray-400" />
        <SurveyButton buttonName="다음" className="survey-btn bg-blue-survey-btn hover:bg-blue-dark" />
      </div>
    </div>
  );
};

export default SurveyCardFooter;
