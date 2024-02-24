import React from "react";
import "./Home.css"

const Imagecard  = () =>{
return (
   
    <div className="image-card-grid">
      <div className="image-card">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-CLASSICBRANDS-dillinger-differenceofopinion-min50.jpg" alt="Card 1" />
       
      </div>
      <div className="image-card">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-CLASSICBRANDS-fashor-kimayra-min50.jpg" alt="Card 2" />
       
      </div>
      <div className="image-card">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-CLASSICBRANDS-lifestyle-upto60.jpg" alt="Card 3" />
       
      </div>
      <div className="image-card">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-CLASSICBRANDS-vanheusen-min40.jpg" alt="Card 4" />
        
      </div>
    </div>
  );
  
}
export {Imagecard}


