import "./style.css";
import Input from "../../Atoms/Input";
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";
import Modal from "../../Molecules/Modal";
import Validate from "../../Atoms/Input/validate";
import { Component } from "react";

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.isDisabled = true;
    this.state = {
      formInputsAtributtes: [
        {
          id: "0",
          label: "Nome",
          placeholder: "Seu Nome Completo",
          type: "range",
          validate: "name",
          value: "",
          errorMessage: "",
        },
        {
          id: "1",
          label: "Numero do Cartão",
          placeholder: "Somente números",
          type: "range",
          validate: "cardNumber",
          value: "",
          errorMessage: "",
        },
        {
          id: "2",
          label: "Data de Vencimento",
          placeholder: "Somente números",
          type: "range",
          validate: "expireDate",
          value: "",
          errorMessage: "",
        },
        {
          id: "3",
          label: "CVV",
          placeholder: "3 dígitos",
          type: "number",
          validate: "cvv",
          value: "",
          errorMessage: "",
        },
        {
          id: "4",
          label: "CPF",
          placeholder: "Somente números",
          type: "number",
          validate: "cpf",
          value: "",
          errorMessage: "",
        },
      ],
      hide: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.invalidCardNumber = this.invalidCardNumber.bind(this);
  }
  handleInputChange($event, validationMethod) {
    let errors = 0;
    let inputIndex = $event.target.dataset.indexNumber;
    let value = $event.target.value;
    this.setState((prevState) => ({
      formInputsAtributtes: prevState.formInputsAtributtes.map((obj) =>
        obj.id === inputIndex
          ? Object.assign(obj, { value, errorMessage: Validate[validationMethod](value).join(" ") })
          : obj
      ),
    }));
  }

  handleInputBlur($event, validationMethod) {
    let errors = 0;
    let inputIndex = $event.target.dataset.indexNumber;
    let value = $event.target.value;
    this.setState((prevState) => ({
      formInputsAtributtes: prevState.formInputsAtributtes.map((obj) =>
        obj.id === inputIndex ? Object.assign(obj, { errorMessage: Validate[validationMethod](value).join(" ") }) : obj
      ),
    }));
    this.state.formInputsAtributtes.forEach((formInputAttribute) => {
      if (formInputAttribute.errorMessage != "" || formInputAttribute.value === "") {
        errors++;
      }
    });

    errors > 0 ? (this.isDisabled = true) : (this.isDisabled = false);
  }

  handleSubmitClick($event) {
    this.setState({ hide: false });
    $event.preventDefault();
  }

  handleModalClick() {
    this.setState({ hide: true });
  }

  invalidCardNumber() {
    let invalidCardNumber = false;
    const cardNumberInput = this.state.formInputsAtributtes.find((element) => element.validate === "cardNumber");
    if (cardNumberInput.value === "111111111111") {
      invalidCardNumber = true;
    }
    console.log(invalidCardNumber);
    return invalidCardNumber;
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
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputBlur}
                    value={inputData.value}
                    errorMessage={inputData.errorMessage}
                  />
                );
              })}
            </div>
            <Button
              disabled={this.isDisabled}
              onClick={this.handleSubmitClick}
              type="submit"
              className="form__button button--payment"
            >
              Pagar
            </Button>
          </form>
        </div>

        <Modal
          invalidCard={this.invalidCardNumber()}
          userData={this.state.formInputsAtributtes}
          onClick={this.handleModalClick}
          hide={this.state.hide}
        />
      </>
    );
  }
}

export default PaymentForm;
