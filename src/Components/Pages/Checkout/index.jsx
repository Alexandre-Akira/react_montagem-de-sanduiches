import OrderOverview from "../../Organisms/OrderOverview";
import PaymentForm from "../../Molecules/PaymentForm";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const items = location.state;
  return (
    <main className="checkout">
      <OrderOverview selectedItems={items} />
      <PaymentForm />
    </main>
  );
}

export default Checkout;
