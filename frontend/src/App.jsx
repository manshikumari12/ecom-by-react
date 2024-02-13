
import './App.css';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import {Route,Routes} from "react-router-dom"
import { Product } from './Components/Product';
import { Nav } from './Components/Nav';
import { SingleProduct } from './Components/SingleProduct';
function App() {
  return (
  <div>
    <Nav/>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product/:productId" element={<SingleProduct/>}/>
    </Routes>
  

  </div>
  );
}

export default App;
