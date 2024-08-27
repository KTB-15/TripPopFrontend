import SurveyCardBody from '@/components/survey/SurveyCardBody';
import SurveyCardFooter from '@/components/survey/SurveyCardFooter';
import SurveyCardHeader from '@/components/survey/SurveyCardHeader';

// TODO: 진행률 prop
const SurveyCard = () => {
  return (
    <section className="flex min-w-[350px] flex-col space-y-5 rounded-lg border bg-white px-10 py-5 sm:w-[70vh]">
      <SurveyCardHeader progress={1} />
      <SurveyCardBody question="Q1. 자연 vs 도시" />
      <SurveyCardFooter />
    </section>
  );
};

export default SurveyCard;
