import { Link } from "react-router-dom"
import "./nav.css"
const Nav =() =>{
return(
<>
  <div className="navbar">
    <h1>Shop It Now</h1>
  <div className="search-container">
  <input type="text" placeholder="Search..." />
 <i className="fa fa-search"></i>
</div>
    <button>
      <Link to="/signup">Signup</Link>
    </button>
    <button>
      <Link to="/login">Login</Link>
    </button>
  </div>
</>

)
}
export {Nav}