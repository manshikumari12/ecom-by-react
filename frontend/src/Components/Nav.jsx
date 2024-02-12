import { Link } from "react-router-dom"
import "./nav.css"
const Nav =() =>{
return(
<>
 <div className="navbar">
    <h1>Shop It Now</h1>
    <input type="text" placeholder="Search" />
    <ul>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </div>
</>
)
}
export {Nav}