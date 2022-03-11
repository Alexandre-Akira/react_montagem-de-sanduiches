import "./style.css";
import ItemList from "../../Molecules/ItemList";
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";
import Total from "../../Atoms/Total";

function SelectedItems() {
  const selectedItems = [
    { category: "Pao", description: ["Brioche"], value: 10 },
    { category: "Carne", description: ["Bovina"], value: 10 },
    { category: "Queijo", description: ["Molho Gorgonzola"], value: 10 },
    { category: "Saladas", description: ["Alface", "tomate", "picles"], value: 10 },
    { category: "Complementos", description: ["Bacon"], value: 10 },
  ];
  return (
    <div className="selected-items">
      <div className="selected-items__list">
        <Title className="selected-items__title title--selected-items">Ingredientes Selecionados: </Title>
        <ItemList className="order-overview__list" items={selectedItems} />
      </div>
      <div className="selected-items__footer">
        <Total className="selected-items__total" items={selectedItems} />
        <Button className="selected-items__button">Prosseguir</Button>
      </div>
    </div>
  );
}

export default SelectedItems;
