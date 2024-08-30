import SurveyButton from '@/components/survey/SurveyButton';
import { SurveyReq } from '@/data/type';
import { useApiMutate } from '@/hooks/useApi';
import useSurveyStore, { QUESTIONS } from '@/stores/SurveyStore';
import { useNavigate } from 'react-router-dom';

const SurveyCardFooter = () => {
  const { progress, choices, incProgress, decProgress, resetProgress } = useSurveyStore();
  const navigate = useNavigate();
  const surveyReq: SurveyReq = choices.reduce((acc, value, idx) => {
    const key = `travelStyle${idx + 1}` as keyof SurveyReq;
    acc[key] = value;
    return acc;
  }, {} as SurveyReq);
  const { mutate, isPending } = useApiMutate<unknown, SurveyReq>(
    {
      url: '/member/survey/TODO',
      method: 'PATCH',
      body: surveyReq,
    },
    {
      onSuccess: () => {
        resetProgress();
        navigate('/');
      },
    }
  );

  const handleNext = () => {
    if (choices[progress - 1] === 0) {
      alert('입력해주세요.');
      return;
    }
    if (progress === QUESTIONS.length - 1) {
      mutate(surveyReq);
    } else incProgress();
  };

  const handlePrev = () => decProgress();
  const handleSkip = () => resetProgress();
  const isLastQuestion = progress === QUESTIONS.length - 1;
  return (
    <div className="flex w-full items-center justify-between space-y-1">
      <SurveyButton
        buttonName="뒤로가기"
        onClick={handlePrev}
        className="survey-btn bg-blue-survey-btn hover:bg-blue-dark"
      />
      <div className="flex items-center justify-center space-x-5">
        <SurveyButton
          buttonName="건너뛰기"
          onClick={handleSkip}
          className="survey-btn bg-cancel text-black hover:bg-gray-400"
        />
        <SurveyButton
          buttonName={isPending ? '등록 중...' : isLastQuestion ? '완료' : '다음'}
          onClick={handleNext}
          className="survey-btn bg-blue-survey-btn hover:bg-blue-dark"
        />
      </div>
    </div>
  );
};

export default SurveyCardFooter;
