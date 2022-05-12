import React, { Children } from "react";
import "./modal.css";

export default function Modal(props) {
  return (
    <div className={`modal_wrapper ${props.isOpen ? "open" : "close"}`}>
      <div className={`modal_body ${props.card ? "card" : "basket"}`}>
        <div className="modal_close" onClick={props.modalClose}>
          ×
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
