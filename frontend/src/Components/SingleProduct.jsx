// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import "./singleproduct.css"

// const SingleProduct = (prop) =>{
//  const {productId}=useParams()
//     const [product,setProduct]=useState([])
    
//     useEffect(()=>{
        
//      fetch(`http://localhost:1111/product/${productId}`)
//      .then(res => res.json())
//      .then((res)=>{
//         setProduct([res])
//           console.log(res);
//      })
//      .catch((err)=>console.log(err))
//     },[productId])
//     return(
//          <>
//     <div className="product-details">
//         {product.map((item) => (
//             <div key={item.id}>
//                 <img src={item.img} alt={item.title} />
//                 <h2>{item.title}</h2>
//                 <p>{item.description}</p>
//                 <p className="price">Price: {item.price}</p>
//                 <p className="category">Category: {item.category}</p>
//                 <p className="striked-off-price">Striked Off Price: {item.strikedOffPrice}</p>
//             </div>
//         ))}
//     </div>

// </>

//     )
// }
// export {SingleProduct}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";

const SingleProduct = (props) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1111/product/${productId}`)
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
    <div className="product-details">
      <div key={product.id}>
        <img src={product.image} alt={product.title} />
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
  );
};

export { SingleProduct };
