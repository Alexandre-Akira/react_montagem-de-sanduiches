import { Component } from "react";
import Validate from "./validate";
import "./style.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      errorMessage: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.teste = "name";
  }

  handleOnChange($event) {
    this.setState({ value: $event.target.value });
  }

  handleOnBlur() {
    const { validationMethod } = this.props;

    this.setState({ errorMessage: Validate[validationMethod](this.state.value).join(" ") });
  }

  render() {
    const { value } = this.state;
    const { className, placeholder, label } = this.props;
    return (
      <div className={`${className} input-wrapper`}>
        <label className="input-wrapper__label" htmlFor={`${label}Form`}>
          {label}
        </label>
        <input
          id={`${label}Form`}
          placeholder={placeholder}
          className={`input-wrapper__input`}
          value={value}
          onChange={($event) => this.handleOnChange($event)}
          onBlur={this.handleOnBlur}
        />
        <p className="input-wrapper__error-message">{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default Input;
