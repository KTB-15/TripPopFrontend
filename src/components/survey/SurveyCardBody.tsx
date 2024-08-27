interface SurveyCardBodyProps {
  question: string;
}

const SurveyCardBody = ({ question }: SurveyCardBodyProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-2 overflow-hidden">
      <h1 className="max-w-full break-words text-center text-xl font-bold sm:text-3xl">{question}</h1>
      <section className="flex w-full flex-1 items-center justify-evenly">
        <div className="border-survey-left hover:bg-survey-left survey-circle xl-circle"></div>
        <div className="border-survey-left hover:bg-survey-left survey-circle lg-circle"></div>
        <div className="border-survey-left hover:bg-survey-left survey-circle md-circle"></div>
        <div className="survey-circle sm-circle border-option hover:bg-option"></div>
        <div className="border-survey-right hover:bg-survey-right survey-circle md-circle"></div>
        <div className="border-survey-right hover:bg-survey-right survey-circle lg-circle"></div>
        <div className="border-survey-right hover:bg-survey-right survey-circle xl-circle"></div>
      </section>
    </div>
  );
};

export default SurveyCardBody;
