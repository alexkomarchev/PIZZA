import React from "react";

export default function CardPrice({ price, OT }) {
  return (
    <div className="card-price">
      { OT && <small className="card-wallet">от </small>}
      {price}
      <small className="card-wallet">руб.</small>
    </div>
  );
}
