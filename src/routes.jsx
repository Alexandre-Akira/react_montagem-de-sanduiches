import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Checkout from "./Components/Pages/Checkout";

class RootRouter extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default RootRouter;
