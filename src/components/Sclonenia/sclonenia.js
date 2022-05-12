import React from "react";
import { useSelector } from "react-redux";

export default function Sclonenia() {
  const tovar = ["товар", "товара", "товаров"];
  const basket = useSelector((el) => el.card);
  const n  = basket.reduce((total, el) => (total += 1), 0) % 100;
  if (n >= 5 && n <= 20) {
    return <div className="InfoBasket">товаров</div>
  }
  const n1 = n % 10;
  if (n1 === 1) {
    return <div className="InfoBasket">товар</div>
  }
  if (n1 >= 2 && n1 <= 4) {
    return <div className="InfoBasket">товара</div>
  }
  return <div className="InfoBasket">товаров</div>

}
