import OrderOverview from "../../Organisms/OrderOverview";
import PaymentForm from "../../Molecules/PaymentForm";

function Checkout() {
  return (
    <main className="checkout">
      <OrderOverview />
      <PaymentForm />
    </main>
  );
}

export default Checkout;
