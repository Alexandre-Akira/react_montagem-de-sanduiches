import "./style.css";
import Input from "../../Atoms/Input";
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";

function PaymentForm() {
  const formInputsAtributtes = [
    { label: "Nome", placeholder: "Seu Nome Completo", type: "range", validate: "name" },
    { label: "Numero do Cartão", placeholder: "Somente números", type: "range", validate: "cardNumber" },
    { label: "Data de Vencimento", placeholder: "Somente números", type: "range", validate: "expireDate" },
    { label: "CVV", placeholder: "3 dígitos", type: "number", validate: "cvv" },
    { label: "CPF", placeholder: "Somente números", type: "number", validate: "cpf" },
  ];
  return (
    <div className="form">
      <Title className="form__title title--payment-form">Insira os dados do pagamento:</Title>
      <form>
        {formInputsAtributtes.map((inputData, index) => {
          return (
            <Input
              key={`input${index}`}
              className="form__input"
              label={inputData.label}
              placeholder={inputData.placeholder}
              validationMethod={inputData.validate}
            />
          );
        })}
      </form>
      <Button type="submit" className="form__button button--form">
        Pagar
      </Button>
    </div>
  );
}

export default PaymentForm;
