import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
const Imageslider=()=>{
  const sliderRef = useRef(null);
const naviate = useNavigate()
  const settings = {
    dots: false,
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
const handelnavigation= ()=>{
    naviate("/Product")
}
const imagearraysrc =[
"https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-15022024-MainBannerDailyChanging-Z1-P1-GFS-4080.gif",
"https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20012024-MainBannerDailyChanging-Z1-P4-SS24-upto30.gif",
"https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-15022024-MainBannerDailyChanging-Z1-P1-GFS-4080.gif"
]
  return (
    <div className='slidertoproll'>
      <Slider {...settings} ref={sliderRef}>
        {
          imagearraysrc.map((ele)=>{
            return  <div className='posterImg' onClick={handelnavigation}>
          <img src={ele} alt="" />
        </div>
          })
        }
       
       
      </Slider>
    </div>
  );
}

export {Imageslider}


