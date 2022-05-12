import React, { useState } from "react";
import "./button.css";

export const Button = ({
  title = "Добавить",
  onMore,
  price,
  height,
  weight,
  borderRadius,
  backgroundColor,
  border,
  color,
  margin,
  fontSize,
  marginBottom,
  position,

}) => {
  const styles = {
    height,
    weight,
    backgroundColor,
    border,
    borderRadius,
    color,
    margin,
    fontSize,
    marginBottom,
    position,
    ":hover": { color: "orange" },
  };


  return (
    <div>
      <button style={styles} onClick={onMore} className="but_add">
        {title} {price}
      </button>
    </div>
  );
};
