import "./style.css";
import React, { Component } from "react";
import Title from "../../../Components/Atoms/Title";
import Text from "../../../Components/Atoms/Text";
import Button from "../../../Components/Atoms/Button";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.successTemplate = {
      title: "Pagamento Aprovado com Sucesso",
      message(userName, userCardNumber) {
        return `Muito obrigado pela compra, ${userName}, ela foi computada no cartão de final ${userCardNumber}. Esperamos que tenha um excelente lanche e que possamos vos atender mais vezes!`;
      },
    };

    this.failureTemplate = {
      title: "Pagamento Recusado",
      message() {
        return `Identificamos que você tentou inserir um número de cartão inválido para tentar nos enganar. Calote aqui não!`;
      },
    };
  }

  render() {
    const { userData, hide, onClick, invalidCard } = this.props;
    let last4cardNumber = userData[1].value.split("").slice(-4).join("");
    let userName = userData[0].value;
    return (
      <div className={hide === true ? " modal modal--hidden" : "modal"}>
        <div className="modal__wrapper">
          <div className="modal__content">
            <Title className="modal__title title--modal">
              {invalidCard === true ? this.failureTemplate.title : this.successTemplate.title}
            </Title>
            <Text className="modal__message">
              {invalidCard === true
                ? this.failureTemplate.message()
                : this.successTemplate.message(userName, last4cardNumber)}
            </Text>
          </div>
          <Button onClick={onClick} className="modal__button button--option">
            {invalidCard === true ? "Me Desculpe" : "Ok"}
          </Button>
        </div>
      </div>
    );
  }
}

export default Modal;
