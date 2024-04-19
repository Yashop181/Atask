import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartSlice";
import wishlistReducer from "./WishlistSlice";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedWishlistReducer = persistReducer(persistConfig, wishlistReducer);


const store = configureStore({
  reducer: {
    cartSlice: persistedReducer,
    wishlistSlice: persistedWishlistReducer,

  },
});

export const persistor = persistStore(store);
export default store;
