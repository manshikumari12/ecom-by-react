import React, { useState, useEffect } from 'react';
import "./Cart.css"
const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleGetCart = () => {
    let token = localStorage.getItem("token");
    let email = localStorage.getItem("email");
    console.log(token, email)
    
    if (token && email) {
      fetch(`http://localhost:1111/cart?email=${email}`, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 401) {
            throw new Error('Unauthorized user');
          } else {
            throw new Error('Failed to fetch cart');
          }
        })
        .then((data) => {
          setCart(data);
          console.log(data);
          // Set other state variables like total amount, products in cart, etc.
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to fetch cart");
        });
    } else {
      alert("Please login first!");
    }
  };

  useEffect(() => {
    handleGetCart();
  }, []);

  return (
    <div className="mainconatinerforcart p-2">
      <div className={`left p-3 border ${cart?.length > 0 ? "w-75" : "w-100"}`}>
        {cart.length > 0 ? (
          cart.map((product) => {
            return (
              <section key={product._id} className="border itemContainer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="imageContainer"
                />
                <div className="detailsContainer p-2">
                  <div className="titleforproducts">{product.title}</div>
                  <p>
                    <b>Price: </b>
                    {product.price}$
                  </p>
                </div>
              </section>
            );
          })
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <box-icon
              name="cart-alt"
              size="100px"
              className="border"
            ></box-icon>
            <div className="headline-cart">Cart is empty! Please Login first !!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
