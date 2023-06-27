import {Routes, Route} from "react-router-dom"
import './App.css';
import "./pages/Login"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Rackets from "./pages/Rackets";
import { UserProvider } from './store/user.context.js';
import {CartProvider} from "./store/cart.context.js"
import Shoes from "./pages/Shoes";
import Tshirts from "./pages/Tshirts";
import ViewDetailProduct from "./pages/ViewDetailProduct";
import CartDetail from "./pages/CartDetail";
import Favourites from "./pages/Favourites";
import MyBuys from "./pages/MyBuys";
import ReviewProducts from "./components/ReviewProducts";
import Settings from "./pages/Settings";
import "./index.css"









function App() {
  return (
    <div className="app">

     <UserProvider>
      <CartProvider>

        
              <Routes>
                 <Route path="/" element={<Register />}></Route>
                 <Route path="/login" element={<Login />}></Route>
                 <Route path="/welcome/:id" element={<Welcome />}></Route>
                 <Route path="/rackets" element={<Rackets />}></Route>
                 <Route path="/shoes" element={<Shoes />}></Route>
                 <Route path="/tshirts" element={<Tshirts />}></Route>
                 <Route path="/viewDetail/:id" element={<ViewDetailProduct />}></Route>
                
                 <Route path="/usercart" element={<CartDetail />}></Route>
                 <Route path="/favourites" element={<Favourites />}></Route>
                 <Route path="/myBuys/:userId" element={<MyBuys />}></Route>
                 <Route path="/settings" element={<Settings />}></Route>
               
                 <Route path="/review/:userId" element={<ReviewProducts />}></Route>
           
              
              </Routes>
            
                <p className="text-5xl">aaaa</p>
            


           </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
