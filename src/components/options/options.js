import React from "react";
import './options.css'

export default function Options({title,value}) {
  return <option className="options" value={value}>{title}</option>;
}
