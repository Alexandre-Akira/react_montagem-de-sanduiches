import "./style.css";
import { Component } from "react";
import Item from "../../Atoms/Item";
import Title from "../../Atoms/Title";

class ItemList extends Component {
  render() {
    const { items } = this.props;
    let total = 0;
    return (
      <div className="item-list">
        <Title className="item-list__title title--overview">Resumo do Pedido:</Title>
        <ul className="item-list__wrapper">
          {items.map((item, index) => {
            total += item.value;
            return (
              <Item
                className="item-list__item"
                key={`item${index}`}
                category={item.category}
                description={item.description}
              />
            );
          })}

          {items.length > 0 && <Item className="item-list__item" category={"Total"} description={total}></Item>}
        </ul>
      </div>
    );
  }
}

export default ItemList;
