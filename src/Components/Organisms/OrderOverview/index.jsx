import "./style.css";
import ItemList from "../../Molecules/ItemList";
import HamburguerImage from "../../Atoms/HamburguerImage";
import Text from "../../Atoms/Text";

function OrderOverview({ selectedItems }) {
  return (
    <div className="order-overview">
      <HamburguerImage className="order-overview__image" />
      <Text className="order-overview__text text--acknowledgement">Obrigado pela Preferencia</Text>
      <ItemList className="order-overview__list" items={selectedItems} />
    </div>
  );
}

export default OrderOverview;
