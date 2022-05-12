import React, { useState } from "react";
import Search from "../search/search";
import Select from "../select/select";

export default function Allfilter({ GoSearch, SortUP, SortDown, SortAll }) {
  const [selectSort, setselectSort] = useState("");
  function sortCard(sort) {
    setselectSort(sort);
    if (sort === "Все товары") SortAll();
    if (sort === "По цене (возрастание)") SortUP();
    if (sort === "По цене (убывание)") SortDown();
    
  }
  function GoSearchAll(event) {
    GoSearch(event)
  }

  return (
    <div className="search">
      <Search onSearch={GoSearchAll} />
      <Select
        value={selectSort}
        onChange={sortCard}
      />
    </div>
  );
}
