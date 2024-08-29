import useSurveyStore, { QUESTIONS } from '@/stores/SurveyStore';

const SurveyCardBody = () => {
  const { progress, choices, setChoice } = useSurveyStore();

  const OPTIONS = [
    { value: 1, class: 'border-survey-left hover:bg-survey-left survey-circle xl-circle', bg: 'bg-survey-left' },
    { value: 2, class: 'border-survey-left hover:bg-survey-left survey-circle lg-circle', bg: 'bg-survey-left' },
    { value: 3, class: 'border-survey-left hover:bg-survey-left survey-circle md-circle', bg: 'bg-survey-left' },
    { value: 4, class: 'survey-circle sm-circle border-option hover:bg-option', bg: 'bg-option' },
    { value: 5, class: 'border-survey-right hover:bg-survey-right survey-circle md-circle', bg: 'bg-survey-right' },
    { value: 6, class: 'border-survey-right hover:bg-survey-right survey-circle lg-circle', bg: 'bg-survey-right' },
    { value: 7, class: 'border-survey-right hover:bg-survey-right survey-circle xl-circle', bg: 'bg-survey-right' },
  ];

  const handleSelect = (value: number) => {
    console.log(progress, choices, value);
    if (choices[progress - 1] === value) setChoice(0);
    else setChoice(value);

    console.log(choices);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-2 overflow-hidden">
      <h1 className="max-w-full break-words text-center text-xl font-bold sm:text-2xl">{QUESTIONS[progress]}</h1>
      <section className="flex w-full flex-1 items-center justify-evenly">
        {OPTIONS.map((option) => (
          <div
            key={option.value}
            className={`${option.class} ${choices[progress - 1] === option.value ? option.bg : ''}`}
            onClick={() => handleSelect(option.value)}></div>
        ))}
      </section>
    </div>
  );
};

export default SurveyCardBody;
