import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./promocode.css";

export default function Promocode() {
  const [value, setValue] = useState();
  const counter = useSelector((state) => state.counter);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const PromocodeSale = (event) => {
    event.preventDefault();
    if (value === "три") {
      return dispatch({ type: "Promocode" });
    }
    return setError(true);
  };
  return (
    <form className="Promocode" onSubmit={PromocodeSale}>
      {" "}
      <div>
        <input
          className="Promocode_input"
          type="text"
          name=""
          placeholder="Промокод"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setError(false);
          }}
        />
        {error && <div className="promocode_error">Промокод не найден. Попробуйте другой</div>}
      </div>
      {value && (
        <button className="Promocode_input_submit" type="submit">
          Применить
        </button>
      )}
    </form>
  );
}
