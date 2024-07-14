import React, { useState, useEffect } from 'react';
import "./Cart.css"
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [Totalitemincart, setTotalitemincart] = useState(0);
   const [Amount, setAmount] = useState(0);



  //  const [email,setEmail] =useState('')
  //   const [name, setName] = useState('');
  //   const [address, setAddress] = useState('');
  //   const [pincode, setPincode] = useState('');
  //   const [phone, setPhone] = useState('');




//  const handlePlaceSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token'); 

//     const orderData = {
//       email,
//       name,
//       address,
//       pincode,
//       phone,
//       items: cart, 
//     };

//     try {
//       const response = await fetch('http://localhost:1111/users/placeorder', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token, 
//         },
//         body: JSON.stringify(orderData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Order placed successfully:', result);
       
//       } else {
//         console.error('Error placing order:', response.statusText);
//         // Handle error in order placement (e.g., show an error message)
//       }
//     } catch (error) {
//       console.error('Error placing order:', error);
     
//     }
//   };



  const handleGetCart = () => {
    let token = localStorage.getItem("token");
    let email = localStorage.getItem("email");
    
    
    if (token && email) {
      fetch(`https://e-com-backend-dad7.onrender.com/cart?email=${email}`, {
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

  if (!token || !email) {
    alert('Please login first!');
    return;
  }

  fetch(`https://e-com-backend-dad7.onrender.com/cart/remove/${productId}`, {
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
    fetch(`https://e-com-backend-dad7.onrender.com/cart/patch`, {
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





  //orderplace submite




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
      cart.map((product,index) => {
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

{/*  
 <div className="placeordersection">
    {cart?.length ? (
      <div className="place-order-container">
        <form onSubmit={handlePlaceSubmit}>
          <input type="text" placeholder="Email"  onChange={e => setEmail(e.target.value)} />

          <input type="text" placeholder="Name"  onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="Address"  onChange={e => setAddress(e.target.value)} />
          <input type="text" placeholder="Pincode"  onChange={e => setPincode(e.target.value)} />
          <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
          <button >Place Order</button>
        </form>
      </div>
    ) : null}
  </div> */}









</div>

  );
};

export default Cart;
