import React, { useContext, useState } from "react";
import "./header.css";
import { FiShoppingCart } from "react-icons/fi";
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import CardInBasket from "../CardInBasket/CardInBasket";
import { FcReuse } from "react-icons/fc";
import ModalBasket from "../modal copy/modal";
import Pusto from "../Pusto/Pusto";
import PlaceAnOrder from "../PlaceAnOrder/PlaceAnOrder";

export const Header = (props) => {
  // const Close = () => {
  //   setModal (false)
  // }
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const basket = useSelector((state) => state.card);
  const Counter = () => {
    return (
      <div style={{ marginLeft: "10px" }}>
        {" "}
        {basket.reduce((total, el) => (total += 1), 0)}
      </div>
    );
  };
  const Sum = () => {
    return (
      <div style={{ color: "black", fontWeight: 900 }}>
        {basket.reduce((total, el) => total + +el.price, 0)}
      </div>
    );
  };
  const Sclonenia = () => {
    return basket.reduce((total, el) => (total += 1), 0) === 1 ? (
      <div className="InfoBasket">товар</div>
    ) : (
      <div className="InfoBasket">товара</div>
    );
  };
  const CountTovar = () => {
    return (
      <span className="CardCounter">
        <Counter />
      </span>
    );
  };

  return (
    <div className="header">
      <div className="store-name">
        <span>The Best Pizza</span>
        <div>
          <img className="store_icons" src="./icons/6524725.png" alt="1" />
        </div>
      </div>
      {props.children}
      <div style={{ display: "flex" }}>
        {" "}
        <div>
          {" "}
          <CountTovar />
        </div>
        <div className="cart" style={{ marginTop: "13px" }}>
          <button
            style={{ backgroundColor: "#261b1b", border: "none" }}
            onClick={() => dispatch({ type: "Open" })}
            className="basket_button"
          >
            <FiShoppingCart color="white" size={26}></FiShoppingCart>
          </button>
        </div>
        {modal && (
          <div
            className="Modal_wrapper"
            onClick={() => dispatch({ type: "Close" })}
          >
            <ModalBasket
              isOpen={() => dispatch({ type: "Open" })}
              modalClose={() => dispatch({ type: "Close" })}
            >
              <div onClick={e => e.stopPropagation()}>
                <div className="MODAL">
                  <Pusto />
                </div>
                <PlaceAnOrder />
              </div>
            </ModalBasket>
          </div>
        )}
      </div>
    </div>
  );
};
