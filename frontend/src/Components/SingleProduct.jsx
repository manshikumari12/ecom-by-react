

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";

import { Footer } from "../Components/Footer";

const SingleProduct = (props) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://e-com-backend-dad7.onrender.com/product/${productId}`)
      .then(res => res.json())
      .then((res) => {
        setProduct(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
<>

<div className="product-details">
  <img src={product.image} alt={product.title} />
  <div className="details">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p className="price">Price: {product.price}</p>
    <p className="category">Category: {product.category}</p>
    {product.rating && (
      <div className="product-rating">
        <p>Rating: {product.rating.rate}</p>
        <p>Count: {product.rating.count}</p>
      </div>
    )}
  </div>
  

</div>
<div>
  <Footer/>
</div>
</>

  );

  
};

export { SingleProduct };
