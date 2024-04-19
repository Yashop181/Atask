import { useSelector } from "react-redux";
import "./Wishlist.css"
const Wishlist = () => {
  const myData = useSelector((state) => state.wishlistSlice.wishlist);
  console.log(myData);

  return (
    <>
      <div className="">
        <h1>Shopping Wishlist</h1>
      </div>
      <hr />
      <br />
      <div className="">
        {myData.map((item) => (
          <div key={item.id}>

            <div className="up">
              <div className="">
                <div className="wishlist-image">
                  <img src={item.productImage} alt="Product" />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <h1>{item.price} </h1>
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

export default Wishlist;