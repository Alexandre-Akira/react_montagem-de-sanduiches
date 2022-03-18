import { Component } from "react";
import Validate from "./validate";
import "./style.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
    };
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.teste = "name";
  }

  handleOnBlur() {
    const { validationMethod, value } = this.props;

    this.setState({ errorMessage: Validate[validationMethod](value).join(" ") });
  }

  render() {
    const { className, placeholder, label, value, onChange, index } = this.props;
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
          onChange={onChange}
          onBlur={this.handleOnBlur}
        />
        <p className="input-wrapper__error-message">{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default Input;
