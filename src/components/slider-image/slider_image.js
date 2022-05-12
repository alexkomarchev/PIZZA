import React, { useState } from "react";
import "./slider_image.css";
import Modal from "../modal/modal";

export default function SliderImage({ slider_image }) {
  const styles = {
    backgroundImage: `url(${slider_image})`,
  };


  return (
    <div className="slider_image" style={styles}>
     
    </div>
  );
}
