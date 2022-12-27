import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";

export const rootStore = configureStore({
    reducer: {
        cartReducer
    }
})
