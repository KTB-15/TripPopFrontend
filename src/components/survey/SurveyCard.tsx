import SurveyCardBody from '@/components/survey/SurveyCardBody';
import SurveyCardFooter from '@/components/survey/SurveyCardFooter';
import SurveyCardHeader from '@/components/survey/SurveyCardHeader';
import useSurveyStore, { QUESTIONS } from '@/stores/SurveyStore';

const SurveyCard = () => {
  const surveyStore = useSurveyStore();

  return (
    <section className="flex w-[375px] min-w-[375px] flex-col space-y-5 rounded-lg border bg-white px-10 py-5 sm:w-[80vh]">
      <SurveyCardHeader progress={surveyStore.progress} />
      <SurveyCardBody question={QUESTIONS[surveyStore.progress]} />
      <SurveyCardFooter />
    </section>
  );
};

export default SurveyCard;
