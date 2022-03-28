import OrderOverview from "../../Organisms/OrderOverview";
import PaymentForm from "../../Molecules/PaymentForm";
import { Component } from "react";
import AppHeader from "../../Molecules/AppHeader";
import "../../Template/Checkout/style.css";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.mergeOptionsByCategory = this.mergeOptionsByCategory.bind(this);
  }

  mergeOptionsByCategory(selectedOptions = []) {
    // const SelectedOptions = selectedOptions.slice() -- Copia o state mas mantem a referencia;

    const SelectedOptions = JSON.parse(JSON.stringify(selectedOptions.slice()));

    const mergedSelectedOptions = SelectedOptions.reduce((result, currentOption) => {
      let category = currentOption.category;
      let optionWithSameCategory = result.find((option) => option.category === category);

      if (optionWithSameCategory) {
        optionWithSameCategory.value += currentOption.value;
        optionWithSameCategory.description = [...optionWithSameCategory.description, ...currentOption.description];
      } else result.push(currentOption);

      return result;
    }, []);
    return mergedSelectedOptions;
  }
  render() {
    const selectedOptions = this.props.location.state;
    const { mergeOptionsByCategory } = this;
    return (
      <>
        <AppHeader title={"Pague Seu Sanduiche"} />
        <main className="checkout">
          <OrderOverview selectedItems={mergeOptionsByCategory(selectedOptions)} />
          <PaymentForm />
        </main>
      </>
    );
  }
}

export default Checkout;
