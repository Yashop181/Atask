import { Routes , Route } from "react-router-dom"
import Layout from "./component/Pages/Lay/Layout"
import Home from "./component/Pages/Home/Home"
import Contact from "./component/Pages/Contact/Contact"
import Login from "./component/Pages/Login/Login"
import Cart from "./component/Pages/cart/Cart"
import Wishlist from "./component/Pages/wishlist/Wishlist"
const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/wishlist" element={<Wishlist/>} />
            </Route>
        </Routes>
      
    </>
  )
}

export default App
