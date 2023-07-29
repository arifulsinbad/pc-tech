import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
