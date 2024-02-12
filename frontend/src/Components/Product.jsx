import { useEffect, useState } from "react"

const Product = ()=>{
    //  const [product,setProduct ]=useState([])
    // useEffect(()=>{
    //     fetch("http://localhost:1111/notes",{
    //        headers:{
    //         "Authorization":`Bearer ${localStorage.getItem("token")}`,

    //        }
    //     }).then(res=>res.json())
    //     .then(res=>{
    //         setProduct(res)
    //         console.log(res)
    //     })
    //     .catch((err)=>console.log(err))
    // },[])
const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1111/product')
      .then(response => response.json())
      .then(data => {
        setProducts(data); 
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []); 




return(
    <>
   
    {/* {product.length>0? 
    product.map((ele)=>
        
        <div>
            <h1>{ele.title}</h1>
            <p>{ele.body}</p>
            <button>Delete</button>
        </div>
    ):<div>
        <h2>There is not product for the user</h2>
    </div>
}
    <div>


    </div> */}

<h1>Product List</h1>
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product._id}>
              <img src={product.img} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
              <p>Price: {product.price}</p>
              <p>Category: {product.category}</p>
              <p>Striked Off Price: {product.strikedOffPrice}</p>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}



    </>
)
}
export {Product}