import React from 'react';
import { Imageslider } from './Imageslider';
import "./Home.css"
import { Slidercard } from './Slidercard';
import { Imagesliderbottom } from './Imagesliderbottom';
import { Imagecard } from './Imagecard';
import { Footer } from './Footer';



const Home =()=>{
return (
    <>
    <div className="container">
   
        <section className="hero">
    <div className="poster">
        <Imageslider/>
        </div>
        <div className="heading">
            <h2>Discover Amazing Products</h2>
            <p>A shop it now  website is an online platform that allows businesses to sell products or services to customers over the internet. These websites typically include features such as product listings, shopping carts, secure payment gateways, and  order processing systems. Customers can browse products, add them to their cart, and complete the purchase process entirely online. eCommerce websites can range from small boutique stores to large-scale online retailers, offering a wide variety of products to consumers worldwide.</p>
        </div>
        
     
      </section>
    
   <section className="deals">
    <div className="headingDeals">
 <h2>Deals On Top Style</h2>
    </div>

    <div className="NewDeals">
        <h3 className='freshdeals-heading'>All These Are Fresh And New</h3>

        <div className="cards">
        <Slidercard/>
        </div>
    </div>


   
   </section>

   <section>
    <div className="Imagesliderbottom">
        <Imagesliderbottom/>
    </div>
   </section>
<div className="Imagecard">
    <Imagecard/>
</div>

   <div className="fotter">
    <Footer/>
   </div>
   </div>
    </>
)
}
export {Home}