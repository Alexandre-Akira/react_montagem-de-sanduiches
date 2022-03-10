import "./style.css";
import { Component } from "react";

class Item extends Component {
  formatedDescription(description) {
    if (typeof description === "object") {
      return description.join([", "]).replace(/,(?=[^,]*$)/, " e ");
    } else {
      return description.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    }
  }
  render() {
    const { category, description } = this.props;
    return <li className="item">{`${category}: ${this.formatedDescription(description)}`}</li>;
  }
}

export default Item;
