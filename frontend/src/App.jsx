
import './App.css';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import {Route,Routes} from "react-router-dom"
import { Product } from './Components/Product';
import { Nav } from './Components/Nav';
import { SingleProduct } from './Components/SingleProduct';
import { Home } from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
  <div>
    <Nav/>
    
    
    <Routes>
        <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product/:productId" element={<SingleProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>

    </Routes>
  

  </div>
  );
}

export default App;
