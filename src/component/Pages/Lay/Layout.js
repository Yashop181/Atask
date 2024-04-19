import { Link, Outlet } from "react-router-dom";
import "./Layout.css"
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";

const Layout = () => {
  const cartItems = useSelector(state => state.cartSlice.cart);
  const wishlistItems = useSelector(state => state.wishlistSlice.wishlist);
  const itemLength = cartItems.length;
  const wishlistLength = wishlistItems.length;
  return (
    <>
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart"><CiShoppingCart />{itemLength} </Link>
        <Link to="/wishlist"><CiHeart /> {wishlistLength} </Link>
        <Link to="/login">Login</Link>
        
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
