import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Slidercard = () =>{
 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
      arrows: false,

    
  };

  return (
    <div className="card-slider-container">
      <Slider {...settings}>
        <div className="card-slide">
          <div className="card">
           <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-avaasa-fig-min60.jpg" alt="" />
          </div>
        </div>
        <div className="card-slide">
          <div className="card">
           <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-dnmx-netplay-min50.jpg" alt="" />
          </div>
        </div>
        <div className="card-slide">
          <div className="card">
           <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-axsuperdry-min40.jpg" alt="" />
          </div>
        </div>
        <div className="card-slide">
          <div className="card">
           <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-gap-snitch-min40.jpg" alt="" />
          </div>
        </div>
        <div className="card-slide">
          <div className="card">
           <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-nikepuma-min35.jpg" alt="" />
          </div>
        </div>

         <div className="card-slide">
          <div className="card">
           <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-nikepuma-min35.jpg" alt="" />
          </div>
        </div>


         <div className="card-slide">
          <div className="card">
           <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-TOPBRANDS-nikepuma-min35.jpg" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
export {Slidercard}





