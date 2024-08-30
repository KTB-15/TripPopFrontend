// 설문지 카드 버튼 컴포넌트
interface SurveyButtonProps {
  className?: string; // button css
  buttonName?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SurveyButton = (props: SurveyButtonProps) => {
  return (
    <button onClick={props.onClick} className={props.className} disabled={props.disabled}>
      {props.buttonName ?? 'BUTTON'}
    </button>
  );
};

export default SurveyButton;
