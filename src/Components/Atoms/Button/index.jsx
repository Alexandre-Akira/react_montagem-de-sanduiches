import "./style.css";
import { Link } from "react-router-dom";

function Button({ to = null, children, type, className, onOptionClick, id, state }) {
  if (to === null) {
    return (
      <button id={id} onClick={onOptionClick} className={`${className} button`} type={type}>
        {children}
      </button>
    );
  } else {
    return (
      <Link state={state} to={to} className={`${className} button`} type={type}>
        {children}
      </Link>
    );
  }
}

export default Button;
