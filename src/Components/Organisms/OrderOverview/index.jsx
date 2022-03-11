import "./style.css";
import ItemList from "../../Molecules/ItemList";
import HamburguerImage from "../../Atoms/HamburguerImage";
import Text from "../../Atoms/Text";
import Title from "../../Atoms/Title";

function OrderOverview() {
  const selectedItems = [
    { category: "Pao", description: ["Brioche"], value: 10 },
    { category: "Carne", description: ["Bovina"], value: 10 },
    { category: "Queijo", description: ["Molho Gorgonzola"], value: 10 },
    { category: "Saladas", description: ["Alface", "tomate", "picles"], value: 10 },
    { category: "Complementos", description: ["Bacon"], value: 10 },
  ];
  return (
    <div className="order-overview">
      <HamburguerImage className="order-overview__image" />
      <Text className="order-overview__text text--acknowledgement">Obrigado pela Preferencia</Text>
      <Title className="order-overview__list-title title--overview">Resumo do Pedido:</Title>
      <ItemList className="order-overview__list" items={selectedItems} />
    </div>
  );
}

export default OrderOverview;
