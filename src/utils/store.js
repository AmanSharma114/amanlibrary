import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./storeSlice";

const store = configureStore({
    reducer: {
        cart: CartSlice, 
    }
});

export default store;