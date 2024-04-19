import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { id } = action.payload;
      let isInWishlist = false;
      for (const item of state.wishlist) {
        if (item.id === id) {
          isInWishlist = true;
          break;
        }
      }
      if (isInWishlist) {
        alert("Already in cart");
      } else {
        state.wishlist.push(action.payload); 
      }
    },
    
  },
});

export const { addToWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
