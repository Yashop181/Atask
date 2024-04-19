import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";

const Layout = () => {
  const [expanded, setExpanded] = useState(false);
  const cartItems = useSelector(state => state.cartSlice.cart);
  const wishlistItems = useSelector(state => state.wishlistSlice.wishlist);
  const itemLength = cartItems.length;
  const wishlistLength = wishlistItems.length;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-anarchy-symbol_23-2149244760.jpg?w=740&t=st=1712339684~exp=1712340284~hmac=30ccbcc95f28f212d2fa944dc319c2cac699bdc5e16c8dc1f97503d1f75b772d"
            alt="v"
          />
        </div>
        <div className={`navbar-links ${expanded ? "expanded" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="#about">About</Link>
          <Link to="/cart" className="iconcart">
            <CiShoppingCart  /> {itemLength} 
          </Link>
          <Link to="/wishlist" className="wishlistcart">
            <CiHeart /> {wishlistLength}
          </Link>
        </div>
        <button
          className={`navbar-toggle ${expanded ? "active" : ""}`}
          onClick={handleToggle}
        >
          <span>&#9776;</span>
        </button>
      </div>
      <Outlet/>
    </>
  );
};

export default Layout;
