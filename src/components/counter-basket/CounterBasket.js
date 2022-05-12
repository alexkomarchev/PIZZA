import { useSelector, useDispatch } from "react-redux";
import "./CounterBasket.css";
import React, { useEffect, useState } from "react";
import { Button } from "../button/button";

export default function CounterBasket({ todo, onAddPrice, onMinusPrice }) {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const onPlus = () => {
    dispatch({ type: "AddToBasket", payload: todo });
  };
  const onMinus = () => {
    dispatch({ type: "noCounter", payload: todo });
  };

  return (
    <div className="counter_basket-wrapper">
      <div className="button_add_minus">
        <Button
          onMore={onMinus}
          title="-"
          marginBottom={"14px"}
          fontSize={"26px"}
          borderRadius={"5px"}
          backgroundColor={"transparent"}
          color={"black"}
        />
      </div>
      <div className="counter">{card.filter((el) => el === todo).length}</div>
      <div className="button_add">
        <Button
          onMore={onPlus}
          title="+"
          height={"35px"}
          fontSize={"20px"}
          borderRadius={"5px"}
          backgroundColor={"transparent"}
          color={"black"}
        />
      </div>
    </div>
  );
}
