import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./product.css"
import { Footer } from "./Footer";

const Product = ()=>{

const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    fetch('http://localhost:1111/product')
      .then(response => response.json())
      .then(data => {
        setProducts(data); 
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []); 


const handleAddToCart = (product) => {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email'); 
  // console.log(token);
  // console.log(email);
  
  if (!token) {
    alert('Please login first!');
       navigate("/Login");
    return;
  }

  if (!email) {
    alert('Email not found. Please login again.');

    return;
  }

  const productWithUserEmail = { ...product, email }; 
  fetch('http://localhost:1111/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(productWithUserEmail), 
  })
    .then(response => {
      if (response.ok) {
        alert('Product added to cart');
      } else if (response.status === 409) {
        alert('Product already in cart');
      } else {
        console.error('Error adding item');
        alert('Error adding item');
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Failed to add product to cart');
    });
};



  

return(
    <>

 <div className="product-list">
   
      {products.length > 0 ? (
        <ul className="productdisplay">
          {products.map(product => (
            <li key={product._id} className="product-item">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Category: {product.category}</p>


            {product.rating && (
                <div className="product-rating">
                  <p>Rating: {product.rating.rate}</p>
                  <p>Count: {product.rating.count}</p>
                </div>
              )}



              <button
                onClick={() => handleAddToCart(product)}
                type="submit"
                className="add-to-cart-button"
              >
                Add to cart
              </button>



              <Link to={`/product/${product._id}`} className="view-link">View</Link>



            </li>


          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>

    <div>
      <Footer/>
    </div>



    </>
)
}
export {Product}