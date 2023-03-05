import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slide.css'

import headerImage from '../assets/home/header-image.svg';

export default class ImgSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      arrows: false,
    };
    return (
      <div className="slide">
        <Slider {...settings}>
          <div>
            <img src={headerImage} alt="slider" />
          </div>
          <div>
            <img src={headerImage} alt="slider" />
          </div>
          <div>
            <img src={headerImage} alt="slider" />
          </div>
        </Slider>
      </div>
    );
  }
}

