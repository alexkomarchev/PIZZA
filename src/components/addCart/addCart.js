import React, { useState } from "react";
import { Button } from "../button/button";
import Modal from "../modal/modal";

export default function AddCart({ onCreate }) {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [modal, setModal] = useState(false);

  function GoCart(event) {
    event.preventDefault();
    if (value1.trim() && value2.trim()) {
      onCreate(value1, value2);
      setValue1("");
      setValue2("");
    }
  }

  return (
    <div>
      <form action="" onSubmit={GoCart}>
        <div>
          <input
            value={value1}
            type="text"
            placeholder="Название"
            onChange={(event) => setValue1(event.target.value)}
          />
        </div>
        <div>
          <input
            value={value2}
            type="text"
            placeholder="Цена"
            onChange={(event) => setValue2(event.target.value)}
          />
        </div>
        <Button />
      </form>
    </div>
  );
}
