import OrderOverview from "../../Organisms/OrderOverview";
import PaymentForm from "../../Molecules/PaymentForm";
import { Component } from "react";
import AppHeader from "../../Molecules/AppHeader";
import "../../Template/Checkout/style.css";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.items = this.props.location.state;
  }
  render() {
    return (
      <>
        <AppHeader title={"Pague Seu Sanduiche"} />
        <main className="checkout">
          <OrderOverview selectedItems={this.items} />
          <PaymentForm />
        </main>
      </>
    );
  }
}

export default Checkout;
