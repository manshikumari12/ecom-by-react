import React, { useState, useEffect } from 'react';
import "./Cart.css"
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [Totalitemincart, setTotalitemincart] = useState(0);
   const [Amount, setAmount] = useState(0);

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
           setTotalitemincart(data.length); 
                setAmount(0);


            for (let item of data) {
            setAmount(
            (prevTotalAmount) =>
            prevTotalAmount + +item["price"] * +item["quantity"]
            );
          }

          console.log(data);

          
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to fetch cart");
        });
    } else {
      alert("Please login first!");
    }
  };







const handleDeleteFromCart = (productId) => {
  let token = localStorage.getItem("token");
  let email = localStorage.getItem("email");
  console.log(token);
  if (!token || !email) {
    alert('Please login first!');
    return;
  }

  fetch(`http://localhost:1111/cart/remove/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({ email: email }),
  })
    .then((res) => {
      if (res.ok) {
        setCart(cart.filter(product => product._id !== productId));
        setTotalitemincart(Totalitemincart - 1);
        alert('Product removed from cart');
      } else {
        alert('Failed to remove product from cart');
      }
    })
    .catch((err) => {
      console.error(err);
      alert('Failed to remove product from cart');
    });
};



const handleQuantityUpdate = (itemId, quantity) => {
  let token = localStorage.getItem("token");
  if (token) {
    let payload = {
      itemId: itemId,
      quantity: quantity,
    };
    fetch(`http://localhost:1111/cart/patch`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          handleGetCart();
        } else {
          throw new Error('Failed to update quantity');
        }
      })
      .catch((err) => {
        alert("Unauthorized user!");
      });
  } else {
    alert("Please login first!");
  }
};



  useEffect(() => {
    handleGetCart();
  }, []);

  return (
  <div className="main-container-for-cart p-2">
  <div className={`left p-3 border ${cart?.length > 0 ? "w-75" : "w-100"}`}>
    <p>
      <b>Total items: </b>
      {Totalitemincart}
    </p>
    <p>
      <b>Total Amount: </b>
      {Amount.toFixed(2)}
    </p>
    {cart.length > 0 ? (
      cart.map((product) => {
        return (
          <section key={product._id} className="border item-container">
            <img
              src={product.image}
              alt={product.title}
              className="image-container"
            />
            <div className="details-container p-2">
              <div className="title-for-products">{product.title}</div>
              <p>
                <b>Price: </b>
                {product.price}$
              </p>
            </div>
            <div className="buttons-container">
              <button
                onClick={() => handleDeleteFromCart(product._id)}
                type="button"
                className="delete-from-cart-button"
              >
                Remove from cart
              </button>
              <div className="quantity-buttons">
                <button
                  onClick={() => {
                    product.quantity > 1
                      ? handleQuantityUpdate(
                          product._id,
                          product.quantity - 1
                        )
                      : handleDeleteFromCart(product._id);
                  }}
                >
                  <b>-</b>
                </button>
                <button>{product.quantity}</button>
                <button
                  onClick={() => {
                    product.quantity < 5
                      ? handleQuantityUpdate(
                          product._id,
                          product.quantity + 1
                        )
                      : alert("Maximum you can add 5 items!");
                  }}
                >
                  <b>+</b>
                </button>
              </div>
            </div>
          </section>
        );
      })
    ) : (
      <div className="empty-cart-message">
        <box-icon name="cart-alt" size="100px" className="border"></box-icon>
        <div className="headline-cart">Cart is empty! Please Login first!</div>
      </div>
    )}
  </div>
</div>

  );
};

export default Cart;
