import "./style.css";
import { Component } from "react";
import Item from "../../Atoms/Item";

class ItemList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="item-list">
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
