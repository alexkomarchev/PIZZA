import React from 'react'
import { Button } from "../button/button";
import './navig.css'

export default function Navig({ScrollToMyPizza,ScrollToMyDes}) {
  return (
    <div className="nav">
    <nav>
      <div className="button_menu">
        <Button
          backgroundColor={"transparent"}
          fontSize={"15px"}
          color={"black"}
          border={"none"}
          onMore={ScrollToMyPizza}
          title={"Пицца"}
        />
      </div>
      <div className="button_menu">
        <Button
          backgroundColor={"transparent"}
          fontSize={"15px"}
          color={"black"}
          border={"none"}
          onMore={ScrollToMyDes}
          title={"Десерты"}
        />
      </div>
    </nav>
  </div>
  )
}
