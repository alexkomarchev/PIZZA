import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CounterBasket from "../counter-basket/CounterBasket";
import "./CardInBasket.css";
export default function CardInBasket({ card }) {
  const cardBasket = useSelector((el) => el.card);
  const styles = {
    backgroundImage: `url(${card.imageSlider})`,
  };

  return (
    <div className="card_basket">
      <div className="img_title">
        {" "}
        <div className="card_img_basket" style={styles}></div>
        <div className="card-title_basket">{card.title}</div>
      </div>
      <hr className="Linia" />
      <div className="card-price2">
        <div className="PRICE">
          <small className="card-wallet2"></small>
          {cardBasket.filter((el) => el === card).length * +card.price}
          &nbsp;
          <span className="card-wallet2">₽</span>
        </div>
        <div className="count">
          {" "}
          <CounterBasket price={card.price} todo={card} />
        </div>
      </div>
    </div>
  );
}
