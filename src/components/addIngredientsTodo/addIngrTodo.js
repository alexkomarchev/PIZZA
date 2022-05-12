import React from "react";
import More from "../MoreIngredients/More";

export default function AddIngrTodo({ add }) {
  return (
    <div>
      {add.map((el) => (
        <More  price={el.price} title={el.title} img={el.image} />
      ))}
    </div>
  );
}
