import {Routes, Route} from "react-router-dom"
import './App.css';
import "./pages/Login"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Rackets from "./pages/Rackets";
import { UserProvider } from './store/user.context.js';
import Shoes from "./pages/Shoes";
import Tshirts from "./pages/Tshirts";
import ViewDetailProduct from "./pages/ViewDetailProduct";
import CartDetail from "./pages/CartDetail";

function App() {
  return (
    <div className="container">

     <UserProvider>
        
              <Routes>
                 <Route path="/" element={<Register />}></Route>
                 <Route path="/login" element={<Login />}></Route>
                 <Route path="/welcome/:id" element={<Welcome />}></Route>
                 <Route path="/rackets" element={<Rackets />}></Route>
                 <Route path="/shoes" element={<Shoes />}></Route>
                 <Route path="/tshirts" element={<Tshirts />}></Route>
                 <Route path="/viewDetail/:id" element={<ViewDetailProduct />}></Route>
                 <Route path="/usercart" element={<CartDetail />}></Route>
              </Routes>
         
      </UserProvider>
    </div>
  );
}

export default App;
