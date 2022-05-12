import React, { useState } from "react";
import { Button } from "../button/button";
import "./card.css";
import Modal from "../modal/modal";
import AddIng from "../addIngredienrs/addIng";
import SliderCart from "../slider-cart/slider-cart";
import { useDispatch, useSelector } from "react-redux";
import CardPrice from "../card-price/card-price";

export const Card = ({ todo, NoIngr, NoSlider, Pizza }) => {
  const [modal, setModal] = useState(false);
  const price = useSelector((state) => state.price);
  const dispatch = useDispatch();
  function openModal() {
    setModal(true);
  }
  const AddCounter = () =>{

    dispatch({ type: "AddToBasket", payload: todo })
  }
  const PizzaYes = () => {
    if (Pizza) {
      return (
        <div className="AddToBasketAndPrice">
          {" "}
          <div >
            <CardPrice price={todo.price} OT ={true} />
          </div>
          <div className="add_to_card" id="more">
            <Button onMore={openModal} title="Выбрать" />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="AddToBasketAndPrice">
            {" "}
            <div>
              <CardPrice price={todo.price}  />
            </div>
            <div className="add_to_card">
              <Button
                onMore={AddCounter}
              />
            </div>
          </div>
        </div>
      );
    }
  };
  const SliderTrueFalse = () => {
    NoSlider ? (
      <SliderCart slider_image={todo.image} />
    ) : (
      <div className="card_img" style={styles}></div>
    );
  };
  const styles = {
    backgroundImage: `url(${todo.imageSlider})`,
  };

  return (
    <div className="card">
      {NoSlider && <SliderCart slider_image={todo.image} />}
      {!NoSlider && <div className="card_img" style={styles}></div>}
      <div className="card-title">{todo.title}</div>
     <div className="card-info">{todo.info}</div>
      <PizzaYes />
      {/* <div className="add_to_card">
        <Button
          onMore={() => dispatch({ type: "AddToBasket", payload: todo })}
        />
      </div>
      <div className="add_to_card" id="more">
        <Button onMore={openModal} title="Подробнее..." />
      </div> */}
      {modal && (
        <Modal
          card = {true}
          isOpen={modal}
          modalClose={() => setModal(false)}
        >
          <div className="MODAL">
            {" "}
            <div className="modal_image_wrapper">
              {" "}
              <div className="card_img_modal">
                {NoSlider && <SliderCart slider_image={todo.image} />}
              </div>
            </div>
            <div className="no_image">
              {" "}
              <div className="modal_title">{todo.title}</div>
              <div className="modal_info">30 см, томатная основа, 800 г </div>
              {NoIngr && (
                <div className="more_title">
                  {" "}
                  <div className="more_title1">Добавить в пиццу</div>{" "}
                  <AddIng />
                </div>
              )}
              <div className="add_to_card_modal">
                <Button position={'relative'} height={'40px'} fontSize={'15px'} onMore={() => dispatch({ type: "AddToBasket", payload: todo})}  title="Добавить в корзину за" price={todo.price}   />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
