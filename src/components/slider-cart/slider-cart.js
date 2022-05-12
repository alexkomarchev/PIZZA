import React from 'react'
import Slider from 'react-slick/lib/slider';
import './slider-cart.css'

export default function SliderCart({slider_image}) {
    const settings = {
        className: "slider1",
        infinite: false,
        lazyLoad: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  
      return (
        <div className="slider">
          <Slider {...settings}>
            {Object.keys(slider_image).map((el,index) => <img className='slider_image' key={index} src={slider_image[el]}></img>)}
          </Slider>
        </div>
      );
    }
