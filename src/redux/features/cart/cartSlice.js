import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  product: [],
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const selectProduct = state.cart.find(
        (cart) => cart.catagory === action.payload.catagory
      );
      if (!selectProduct) {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
        state.total += action.payload.price;
      } else {
        selectProduct.quantity += 1;
        state.cart
          .filter((cart) => cart.catagory !== action.payload.catagory)
          .push(selectProduct);
      }
    },
    addProduct: (state, action) => {
      if (action.payload) {
        state.product = action.payload;
      }
    },
    removeToCart: (state, action) => {
      state.cart = state.cart.filter(
        (cart) => cart.catagory !== action.payload.catagory
      );
      state.total -= action.payload.price;
    },
  },
});
export const { addToCard, removeToCart, addProduct } = cartSlice.actions;
export default cartSlice.reducer;
