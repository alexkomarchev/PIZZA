import React from "react";
import "./addIngr.css";
import AddIngrTodo from "../addIngredientsTodo/addIngrTodo";

const add_menu = [
  {
    title: 'Сырный бортик',
    image: "./Ing/cheese_bortik.png",
    price:129,

  },
  {
    title: 'Цыпленок',
    image: "./Ing/cheken.png",
    price:179,

  },
  {
    title: 'Маслины',
    image: "./Ing/maslin.png",
    price:69,

  },
  {
    title: 'Огурчики',
    image: "./Ing/ogur.png",
    price:59,

  },
  {
    title: 'Шапминьоны',
    image: "./Ing/schapmin.png",
    price:99,

  },
  {
    title: 'Томаты',
    image: "./Ing/tomat.png",
    price:89,

  },
  {
    title: 'Ананас',
    image: "./Ing/ananas.png",
    price:169,
 
  },
  {
    title: 'Бекон',
    image: "./image-pizza/bekon.jpg",
    price:149,
  },
];


export default function AddIng({More}) {
  return (
    <div className="More" ><AddIngrTodo add={add_menu} /></div>
    
  );
}
