import { Link } from "react-router-dom"
import "./nav.css"
const Nav =() =>{
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
  </div>
</>

)
}
export {Nav}