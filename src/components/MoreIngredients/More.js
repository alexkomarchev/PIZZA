import React, { useState} from "react";
import { useDispatch } from "react-redux";
import "./More.css";
export default function More(props) {
  const [cheked, setCheked] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    setCheked(!cheked)
    cheked ? dispatch({type:"addIngMinus",payload: props.price}): dispatch({type:"addIngPlus",payload: props.price})
  }

  return (
    <div className={ cheked ? 'MORE_wrapper_Off':'MORE_wrapper'}>
 
      <div
        className="more_img"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <input
              className="more_input"
              type="checkbox"
              defaultChecked={cheked}
              onChange={handleClick}
            />
      <div className="more_title">{props.title}</div>
      <form>
        <div className="input_price">
          <div className="input">
          </div>
          <div className="more_price">
            {props.price}
            <small>
              руб<div className=""></div>
            </small>
          </div>
        </div>
      </form>
    </div>
  );
}
