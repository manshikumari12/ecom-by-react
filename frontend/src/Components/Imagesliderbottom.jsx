import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Home.css"

const Imagesliderbottom = () =>{
     const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: false,
    beforeChange: (current, next) => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(next);
      }
    }
  };

  return (
    <div className='slidertoproll'>
      <Slider {...settings} ref={sliderRef}>
        <div className='posterImg'>
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-23022024-NC-Z20-P4-Uniquest-Fasttrack-under2999.jpg" alt="img" />
        </div>
        <div className='posterImg'>
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-23022024-NC-Z20-P2-Homeexpressions-divinecase-under599.jpg" alt="img" />
        </div>
        <div className='posterImg'>
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-23022024-NC-Z20-P4-Uniquest-Fasttrack-under2999.jpg" alt="img" />
        </div>
      </Slider>
    </div>
  );
}
export {Imagesliderbottom}