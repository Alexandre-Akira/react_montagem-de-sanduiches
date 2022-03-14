import "./style.css";
import Button from "../../Atoms/Button";

function OptionsList({ options, onOptionClick }) {
  return (
    <ul>
      {options.map((option, index) => {
        return (
          <li className="options-list__option" key={`${index}option`}>
            <Button id={option.id} onOptionClick={onOptionClick} className="options-list__button" type="button">
              {option.description}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default OptionsList;
