import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  card: [],
  Promocode: 0,
  modal: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "addIngPlus":
      return { ...state, price: state.price + action.payload };
    case "addIngMinus":
      return { ...state, price: state.price - action.payload };
    case "addCounter":
      return { ...state, card: state.card.concat(action.payload) };
    case "noCounter":
      let iAP = state.card.lastIndexOf(action.payload);
      return {
        ...state,
        card: state.card.filter((el, index) => index !== iAP),
      };
    case "DelCounter":
      return {
        ...state,
        card: state.card.filter((el) => el !== action.payload),
      };
    case "Close":
      return { ...state, modal: false };
    case "Open":
      return { ...state, modal: true };
    case "AddToBasket": {
      return { ...state, card: state.card.concat(action.payload) };
    }
    case "Promocode": {
      return { ...state, Promocode: 100 };
    }
    case "DelPromocode": {
      return { ...state, Promocode: 0 };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
