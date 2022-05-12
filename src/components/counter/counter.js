import React, { useState } from "react";

export default function Counter({ basket }) {

  return (
    <div style={{ marginLeft: "10px" }}>
      {" "}
      {basket.reduce((total, el) => (total += 1), 0)}
    </div>
  );
}
