import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';



const Bannir = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={require('../Images/pexels-tima-miroshnichenko-5912621.jpg')} alt="Background"/>
        </div>
        <div>
          <img src={require('../Images/pexels-rostislav-5011647.jpg')} alt="Background"/>
        </div>
        <div>
          <img src={require('../Images/pexels-shottrotter-2249964.jpg')} alt="Background"/>
        </div>
      </Slider>
    </>
  )
}

export default Bannir