import "./style.css";
import OptionsList from "../../Molecules/OptionsList";
import HamburguerImage from "../../Atoms/HamburguerImage";
import Text from "../../Atoms/Text";

function SelectOptions({ options, onOptionClick, text }) {
  return (
    <div className="select-options">
      <HamburguerImage className="select-options__image" />
      <Text className="select-options__text text--acknowledgement">{text}</Text>
      <OptionsList onOptionClick={onOptionClick} className="select-options__list" options={options} />;
    </div>
  );
}

export default SelectOptions;
