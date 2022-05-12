import React, { useState } from "react";
import "./form.css";
export default function Form({ onCreate }) {
  const [value, setValue] = useState("");
  const [valueP, setValueP] = useState("");
  function handleChange1(event) {
    event.preventDefault();
    if (value.trim() && valueP.trim()) {
      onCreate(value, valueP);
      setValue("");
    }
  }
  return (
    <form onSubmit={handleChange1}>
      <div className="form">
        <div>
          <input className="input_filter"
            value={value}
            type="text"
            placeholder="Название"
            onChange={(event) => setValue(event.target.value)}
          />
          <div>
            <input
              value={valueP}
              type="text"
              placeholder="Цена"
              onChange={(event) => setValueP(event.target.value)}
            />
          </div>
        </div>
      </div>
      <button type="submit"></button>
    </form>
  );
}
