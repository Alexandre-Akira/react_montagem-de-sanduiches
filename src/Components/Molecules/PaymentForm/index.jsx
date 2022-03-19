import "./style.css";
import Input from "../../Atoms/Input";
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";
import Modal from "../../Molecules/Modal";
import { Component } from "react";

class PaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formInputsAtributtes: [
        { id: "0", label: "Nome", placeholder: "Seu Nome Completo", type: "range", validate: "name", value: "" },
        {
          id: "1",
          label: "Numero do Cartão",
          placeholder: "Somente números",
          type: "range",
          validate: "cardNumber",
          value: "",
        },
        {
          id: "2",
          label: "Data de Vencimento",
          placeholder: "Somente números",
          type: "range",
          validate: "expireDate",
          value: "",
        },
        { id: "3", label: "CVV", placeholder: "3 dígitos", type: "number", validate: "cvv", value: "" },
        { id: "4", label: "CPF", placeholder: "Somente números", type: "number", validate: "cpf", value: "" },
      ],
      hide: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }
  handleChange($event) {
    let inputIndex = $event.target.dataset.indexNumber;
    let value = $event.target.value;
    this.setState((prevState) => ({
      formInputsAtributtes: prevState.formInputsAtributtes.map((obj) =>
        obj.id === inputIndex ? Object.assign(obj, { value }) : obj
      ),
    }));
  }

  handleClick($event) {
    this.setState({ hide: false });
    $event.preventDefault();
  }

  handleModalClick() {
    this.setState({ hide: true });
  }

  render() {
    return (
      <>
        <div className="form-container">
          <Title className="form__title title--payment-form">Insira os dados do pagamento:</Title>
          <form className="form-container__form">
            <div className="form__input-wrapper">
              {this.state.formInputsAtributtes.map((inputData, index) => {
                return (
                  <Input
                    key={`input${index}`}
                    index={index}
                    className="form__input"
                    label={inputData.label}
                    placeholder={inputData.placeholder}
                    validationMethod={inputData.validate}
                    onChange={this.handleChange}
                    value={inputData.value}
                  />
                );
              })}
            </div>
            <Button onClick={this.handleClick} type="submit" className="form__button button--form">
              Pagar
            </Button>
          </form>
        </div>

        <Modal userData={this.state.formInputsAtributtes} onClick={this.handleModalClick} hide={this.state.hide} />
      </>
    );
  }
}

export default PaymentForm;
