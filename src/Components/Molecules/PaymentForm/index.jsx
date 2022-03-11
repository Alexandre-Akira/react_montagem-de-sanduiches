import "./style.css";
import Input from "../../Atoms/Input";
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";

function PaymentForm() {
  const formInputsData = [
    { label: "Nome", placeholder: "Seu Nome Completo" },
    { label: "Numero do Cartão", placeholder: "Somente números" },
    { label: "Data de Vencimento", placeholder: "Somente números" },
    { label: "CVV", placeholder: "3 dígitos" },
    { label: "CPF", placeholder: "Somente números" },
  ];
  return (
    <div className="form">
      <Title className="form__title title--payment-form">Insira os dados do pagamento:</Title>
      <form>
        {formInputsData.map((inputData, index) => {
          return (
            <Input
              key={`input${index}`}
              className="form__input"
              label={inputData.label}
              placeholder={inputData.placeholder}
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
