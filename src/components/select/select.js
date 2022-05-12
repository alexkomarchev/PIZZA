import React, { useState } from "react";
import Options from "../options/options";
import "./select.css";

export default function Select({ defaultValue, onChange, value }) {
  const Option = [
    { title: "Все товары", value: "popul" },
    { title: "По цене (возрастание)", value: "price" },
    { title: "По цене (убывание)", value: "popul" },
  ];
  return (
    <div className="select_wrapper">
      <select
        className="select-css"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {Option.map((el, i) => (
          <Options title={el.title} key={i} value={Options.value} />
        ))}
      </select>
    </div>
  );
}
