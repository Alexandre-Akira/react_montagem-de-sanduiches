import "./style.css";
import { Component } from "react";

class Button extends Component {
  render() {
    const { children, className, ...props } = this.props;

    return (
      <button {...props} className={` button  ${className}`}>
        {children}
      </button>
    );
  }
}

export default Button;
