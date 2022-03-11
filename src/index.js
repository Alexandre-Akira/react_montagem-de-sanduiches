import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
import "./Components/Template/Checkout/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Checkout from "./Components/Pages/Checkout";
import Home from "./Components/Pages/Home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
