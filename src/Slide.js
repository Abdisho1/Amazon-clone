import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slide.css'

function Slide() {
  return (
    <div>
      {/* <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/> */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className="slide">
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61dM0HK1hhL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61HBeh4tctL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71qUptobbzL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/615gz3iBnZL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61n0HKriWZL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71mXZ5RCedL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/51j9Jz-VaKL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Slide