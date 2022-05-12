import React from "react";
import { Button } from "../button/button";
import { useSelector,useDispatch } from "react-redux";
import "./PlaceAnOrder.css";
import Sum from "../sum/sum";
import Promocode from "../promocode/promocode";
import Counter from "../counter/counter";
import Sclonenia from "../Sclonenia/sclonenia";
import { type } from "@testing-library/user-event/dist/type";

export default function PlaceAnOrder() {
  const basket = useSelector((state) => state.card);
  

  return basket.length !== 0 ? (
    <div className="PlaceAnOrder">
      <Promocode />
      <hr className="hr" style={{ marginLeft: "15px", marginRight: "15px" }} />
      <div className="InfoBasket_place_on_order">
        <div style={{ display: "flex" }}>
          <Counter basket={basket} />
          &nbsp;
          <Sclonenia />
        </div>
        &nbsp;
        <Sum basket={basket} />
      </div>
      <div className="InfoBasket_place_on_order_coin">
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>Начислим BEST-коины</div>
          {/* &nbsp;
          <div title="1">🛈</div> */}
        </div>
        &nbsp;
        <div>
          +{Math.ceil(0.1 * basket.reduce((total, el) => total + +el.price, 0))}{" "}
          <span style={{ fontSize: "16px" }}>©</span>
        </div>
      </div>
      <hr className="hr" style={{ marginLeft: "15px", marginRight: "15px" }} />
      <div className="order_sum">
        <div>Сумма заказа</div>
        <Sum basket={basket} />
      </div>

      <Button
        title="К оформлению заказа"
        height={"40px"}
        weight={"200px"}
        fontSize={"15px"}
        borderRadius={'40px'}
      />
    </div>
  ) : null;
}
