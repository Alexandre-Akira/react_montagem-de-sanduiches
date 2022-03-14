import "./style.css";
import ItemList from "../../Molecules/ItemList";
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";
import Total from "../../Atoms/Total";

function SelectedOptions({ options }) {
  return (
    <div className="selected-options">
      <div className="selected-options__list">
        <Title className="selected-options__title title--selected-options">Ingredientes Selecionados: </Title>
        <ItemList className="order-overview__list" items={options} />
      </div>
      <div className="selected-options__footer">
        <Total className="selected-options__total" items={options} />
        <Button to={"/checkout"} state={options} className="selected-options__button">
          Prosseguir
        </Button>
      </div>
    </div>
  );
}

export default SelectedOptions;
