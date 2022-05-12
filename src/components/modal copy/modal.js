import React, { Children } from "react";
import "./modal.css";

export default function ModalBasket(props) {
  return (
    <div className={`modal_wrapper ${props.isOpen ? "open" : "close"}`}>
      <div className='modal_basket'>
        <div className="modal_close_basket" onClick={props.modalClose}>
          ×
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
