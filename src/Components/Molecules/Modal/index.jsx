import "./style.css";
import React, { Component } from "react";
import Title from "../../../Components/Atoms/Title";
import Text from "../../../Components/Atoms/Text";
import Button from "../../../Components/Atoms/Button";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, message, hide, onClick } = this.props;
    return (
      <div className={hide === true ? " modal modal--hidden" : "modal"}>
        <div className="modal__wrapper">
          <div className="modal__content">
            <Title className="modal__title title--modal">{title}</Title>
            <Text className="modal__message">{message}</Text>
          </div>
          <Button onClick={onClick} className="modal__button">
            Ok
          </Button>
        </div>
      </div>
    );
  }
}

export default Modal;
