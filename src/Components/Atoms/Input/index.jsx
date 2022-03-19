import { Component } from "react";

import "./style.css";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { validationMethod, className, placeholder, label, value, onChange, onBlur, index, errorMessage } =
      this.props;
    return (
      <div className={`${className} input-wrapper`}>
        <label className="input-wrapper__label" htmlFor={`${label}Form`}>
          {label}
        </label>
        <input
          data-index-number={index}
          placeholder={placeholder}
          className={`input-wrapper__input`}
          value={value}
          onChange={($event) => onChange($event, validationMethod)}
          onBlur={($event) => onBlur($event, validationMethod)}
        />
        <p className="input-wrapper__error-message">{errorMessage}</p>
      </div>
    );
  }
}

export default Input;
