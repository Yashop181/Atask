import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

import { useDispatch } from "react-redux";
import { addtocart } from "../redux/CartSlice";
import { addToWishlist } from "../redux/WishlistSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const loadCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    loadData();
    loadCategories();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(
      addtocart({
        id: product.id,
        productTitle: product.title,
        productPrice: product.price,
        productImage: product.image,
        description: product.description,
        category: product.category,
        quantity: 1,
      })
    );
  };

  const handleAddToWishlist = (product) => {
    dispatch(
      addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        productImage: product.image,
      })
    );
  };

  const filteredProducts = selectedCategory? products.filter((product) => product.category === selectedCategory): products;

  const productCards = filteredProducts.map((product) => (
    <div key={product.id} className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <br />
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Category: {product.category}</p>
        <div className="card-buttons">
          <button className="addtocart" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
          <button className="addtowish" onClick={() => handleAddToWishlist(product)}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
    {/* Display data by category start */}
      <div className="containex">
        {categories.map((category) => (
          <div className="category" key={category}>
            <button
              className="category-button"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
          {/* Display data by category end */}

{/* Display  all the  data start  */}
      <div className="container">
        <h1>Displaying All Products</h1>
        <div className="row">{productCards}</div>
      </div>
      {/* Display  all the  data end  */}
    </>
  );
};

export default Home;
