import React, { useEffect, useState } from "react";
import "./filter.css";
import { Button } from "../button/button";

export default function Filter({ onFilter }) {
  const [valueMin, setValueMin] = useState();
  const [valueMax, setValueMax] = useState();

  function GoFilter(event) {
    event.preventDefault();
    if (2 > 1) {
      onFilter(valueMin, valueMax);
    }
  }

  // useEffect(() => {document.title = `Вы нажали ${valueMin}`;})

  return (
    <div className="filter">
      <form className="form_filter" onSubmit={GoFilter}>
        <div className="input-wrapper">
          <input
            className="input-filter"
            value={valueMin}
            type="text"
            placeholder="от"
            onChange={(event) => setValueMin(event.target.value)}
          />
          <input
            className="input-filter"
            value={valueMax}
            type="text"
            placeholder="до"
            onChange={(event) => setValueMax(event.target.value)}
          />
        </div>

        <div className="wrapper">
          <Button title="Применить" />
        </div>
      </form>
    </div>
  );
}
