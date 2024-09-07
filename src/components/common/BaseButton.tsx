// 설문지 카드 버튼 컴포넌트
interface BaseButtonProps {
  className?: string; // button css
  buttonName?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const BaseButton = (props: BaseButtonProps) => {
  return (
    <button onClick={props.onClick} className={props.className} disabled={props.disabled}>
      {props.buttonName ?? 'BUTTON'}
    </button>
  );
};

export default BaseButton;
