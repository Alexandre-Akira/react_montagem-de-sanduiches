import "./style.css";

import React, { Component } from "react";

export default class Title extends Component {
  render() {
    const { children, ...props } = this.props;
    return <h1 {...props}>{children}</h1>;
  }
}
