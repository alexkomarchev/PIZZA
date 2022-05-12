import React, { useState } from "react";
import { Card } from "../card/card";
import "./card-todo.css";
export const CardTodo = ({Menu,Slider,Ingredients,todo,Pizza}) => {



  return (
    <div>
      <div>
        {Menu.map((todo,index) => (
          <Card
            NoSlider={Slider}
            NoIngr={Ingredients}
            todo={todo}
            Pizza={Pizza}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
