import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./nav.css"
const Nav =() =>{
    const navigate = useNavigate(); 
 const handleLogout = async () => {
    const token = localStorage.getItem('token'); 

    if (!token) {
      alert('No token found, please login first');
      navigate("/Login");
      return;
    }

    try {
      const response = await fetch('http://localhost:1111/users/logout', {
        method: 'GET',
        headers: {
          'Authorization': token,
        },
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.msg);
        localStorage.removeItem('token'); 
          navigate("/Login");
      } else {
        alert(result.msg);
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('An error occurred during logout. Please try again.');
    }
  };

return(
<>
  <div className="navbar">
    < div className="your-Logo">
      <Link to="/"> <h1>Shop It Now</h1></Link>
    </div>
   
    <div className="search-container">
  <input type="text" placeholder="Search..." />
<i className="fa fa-search"></i>
</div>

    <button className="your-button">
      <Link to="/Signup" >Signup</Link>
    </button>
    <button className="your-button">
      <Link to="/Login">Login</Link>
    </button>

    <button className="your-button"> 
      <Link to="/cart">Cart</Link>
    </button>
     <button className="your-button"   onClick={handleLogout}> 
      <Link to="/logout">Logout</Link>
    </button>
  </div>
</>

)
}
export {Nav}