interface SurveyCardBodyProps {
  question: string;
}

const SurveyCardBody = ({ question }: SurveyCardBodyProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-2 overflow-hidden">
      <h1 className="max-w-full break-words text-center text-3xl font-bold">{question}</h1>
      <section className="flex w-full flex-1 items-center justify-evenly">
        <div className="border-survey-left hover:bg-survey-left h-16 w-16 cursor-pointer rounded-full border-2"></div>
        <div className="border-survey-left hover:bg-survey-left h-12 w-12 cursor-pointer rounded-full border-2"></div>
        <div className="border-survey-left hover:bg-survey-left h-8 w-8 cursor-pointer rounded-full border-2"></div>
        <div className="h-6 w-6 cursor-pointer rounded-full border-2 border-option hover:bg-option"></div>
        <div className="border-survey-right hover:bg-survey-right h-8 w-8 cursor-pointer rounded-full border-2"></div>
        <div className="border-survey-right hover:bg-survey-right h-12 w-12 cursor-pointer rounded-full border-2"></div>
        <div className="border-survey-right hover:bg-survey-right h-16 w-16 cursor-pointer rounded-full border-2"></div>
      </section>
    </div>
  );
};

export default SurveyCardBody;
