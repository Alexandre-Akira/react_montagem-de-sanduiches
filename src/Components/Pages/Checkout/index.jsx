import OrderOverview from "../../Organisms/OrderOverview";
import PaymentForm from "../../Molecules/PaymentForm";
import { Component } from "react";
import AppHeader from "../../Molecules/AppHeader";
import "../../Template/Checkout/style.css";

class Checkout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const selectedOptions = this.props.location.state;
    return (
      <>
        <AppHeader title={"Pague Seu Sanduiche"} />
        <main className="checkout">
          <OrderOverview selectedItems={selectedOptions} />
          <PaymentForm />
        </main>
      </>
    );
  }
}

export default Checkout;
