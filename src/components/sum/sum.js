import React from "react";
import { useSelector } from "react-redux";

export default function Sum({ basket }) {
  const PromocodeSale = useSelector((state) => state.Promocode);
  return (
    <div style={{ color: "black", fontWeight: 900 }}>
      {basket.reduce((total, el) => total + +el.price, 0) - +PromocodeSale}
      <span style={{ color: "black", fontWeight: 100 }}>₽</span>
    </div>
  );
}
