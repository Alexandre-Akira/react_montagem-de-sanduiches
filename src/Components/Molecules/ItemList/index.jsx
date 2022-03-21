import "./style.css";
import { Component } from "react";
import Item from "../../Atoms/Item";
import Title from "../../Atoms/Title";

class ItemList extends Component {
  render() {
    const { items, className } = this.props;

    return (
      <div className={`${className} item-list`}>
        <Title className="item-list__title title--overview">Resumo do Pedido:</Title>
        <ul className="item-list__wrapper">
          {items.map((item, index) => {
            return (
              <Item
                className="item-list__item"
                key={`item${index}`}
                category={item.category}
                description={item.description}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ItemList;
