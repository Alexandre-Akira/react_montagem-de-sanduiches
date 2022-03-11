import "./style.css";
import Button from "../../Atoms/Button";

function OptionsList({ options }) {
  return (
    <ul>
      {options.pao.map((option, index) => {
        return (
          <li key={`${index}option`}>
            <Button type="button">{option}</Button>
          </li>
        );
      })}
    </ul>
  );
}

export default OptionsList;
