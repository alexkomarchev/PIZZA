import React from "react";
import "./search.css";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [search, setSearch] = useState();

  function clickSearch(event) {
    event.preventDefault();
    if (search) {
      onSearch(search);
    }
  }

  return (
    <div className="d4">
      <form action="" onSubmit={clickSearch} className="form-search">
        <div className="input_search">
          <input
            className="input"
            value={search}
            type="search"
            placeholder="Что-то нужно найти?"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="input_search">
          <input className="submit" value="" type="submit" />
        </div>
      </form>
    </div>
  );
}
