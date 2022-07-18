import OptionButton from "../option_button/OptionButton";
import style from "./OptionSelected.module.css"

const OptionSelected = ({ src, disabled, value, text }) => {
  return (
    <div className={style.optionSelected}>
      <OptionButton src={src} disabled={disabled} value={value} />
      <span className={style.optionSelectedText}>{text}</span>
    </div>
  );
};

export default OptionSelected;
