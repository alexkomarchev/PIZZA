import Slider from "react-slick";
import React from "react";
import "./slick.min.css";
import "./slick-theme.min.css";
import SliderImage from "../slider-image/slider_image";
import "./slider.css";

export default function Slider1({ImagePizza,ImageDesert}) {

  const settings = {
    className: "slider2",
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="slider_global">
      <Slider {...settings}>
        <img className="img_slider_global" src="./select1.jpg" alt="" />
        <img className="img_slider_global" src="./select2.jpg" alt="" />
        <img className="img_slider_global" src="./select3.jpg" alt="" />
      </Slider>
    </div>
  );
}
