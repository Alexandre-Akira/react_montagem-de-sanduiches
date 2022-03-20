import "./style.css";
import { Component } from "react";

class Button extends Component {
  render() {
    const { children, type, className, onClick, id } = this.props;

    return (
      <button id={id} onClick={onClick} className={` button  ${className}`} type={type}>
        {children}
      </button>
    );
  }
}

export default Button;
