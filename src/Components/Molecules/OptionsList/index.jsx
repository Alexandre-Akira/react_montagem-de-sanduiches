import "./style.css";
import Button from "../../Atoms/Button";

function OptionsList({ options, onOptionClick }) {
  return (
    <ul>
      {options.map((option, index) => {
        return (
          <li className="options-list__option" key={`${index}option`}>
            <Button
              id={option.id}
              onClick={() => {
                onOptionClick(option);
              }}
              className={
                option.selected
                  ? "options-list__button button--option button--selected"
                  : "options-list__button button--option"
              }
              type="button"
            >
              {option.description}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default OptionsList;
