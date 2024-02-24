import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./singleproduct.css"

const SingleProduct = (prop) =>{
 const {productId}=useParams()
    const [product,setProduct]=useState([])
    
    useEffect(()=>{
        
     fetch(`http://localhost:1111/product/${productId}`)
     .then(res => res.json())
     .then((res)=>{
        setProduct([res])
          console.log(res);
     })
     .catch((err)=>console.log(err))
    },[productId])
    return(
         <>
    <div className="product-details">
        {product.map((item) => (
            <div key={item.id}>
                <img src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <p className="price">Price: {item.price}</p>
                <p className="category">Category: {item.category}</p>
                <p className="striked-off-price">Striked Off Price: {item.strikedOffPrice}</p>
            </div>
        ))}
    </div>
</>

    )
}
export {SingleProduct}