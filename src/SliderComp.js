import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Carousel naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3}>
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/61HBeh4tctL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/61dM0HK1hhL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/615gz3iBnZL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/61n0HKriWZL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/71mXZ5RCedL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/51j9Jz-VaKL._SX3000_.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </Carousel>
  );
}

export default SliderComp;