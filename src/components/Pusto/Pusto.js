import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardInBasket from "../CardInBasket/CardInBasket";
import { FcReuse } from "react-icons/fc";
import Sum from "../sum/sum";
import Counter from "../counter/counter";
import { v4 as uuid } from "uuid";
import Sclonenia from "../Sclonenia/sclonenia";

export default function Pusto() {
  const basket = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const CountTovar = () => {
    return (
      <span className="CardCounter">
        <Counter />
      </span>
    );
  };
  return basket.length !== 0 ? (
    <div className="Basket">
      <div className="Counter_Price" style={{ display: "flex" }}>
        <div className="InfoBasket">
          <Counter basket={basket} />
        </div>
        &nbsp;
        <Sclonenia />
        &nbsp;
        <div style={{ color: "black", fontWeight: 900 }}>
          в корзине на сумму{" "}
        </div>
        &nbsp;
        <Sum basket={basket} />
      </div>

      <div className="cardBasket">
        {[...new Set(basket)].map((el, i) => (
          <CardInBasket key={uuid()} card={el} />
        ))}
      </div>
    </div>
  ) : (
    <div className="EmptyBasket">
      <div>
        <FcReuse size={100} />
      </div>
      <div className="empty">
        <span>Ой,пусто!</span>
      </div>
      <span className="empty2">
        Ваша корзина пуста, откройте меню и выберите понравившийся товар.
      </span>
    </div>
  );
}
