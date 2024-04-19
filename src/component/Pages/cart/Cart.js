import { useSelector } from "react-redux";
import "./Cart.css"
const Cart = () => {
  const cartData = useSelector((state) => state.cartSlice.cart);
  console.log(cartData);

  return (
    <>
      <div className="">
        <h1>Shopping cart</h1>
      </div>
      <hr />
      <br />
      <div className="">
        {cartData.map((item) => (
          <div key={item.id}>
            
            <div className="">
              <div className="">
                <div className="cart-image">
                  <img src={item.productImage} alt="Product" />
                </div>
                <div>
                  <h2>{item.productTitle}</h2>
                  <h1>{item.productPrice} </h1>
                  <p className="product-description">{item.description}</p>
                  <h1>{item.category}</h1>
                  <br />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;