import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  product: [],
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
      if (action.payload.quantity > 1) {
        const product = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };
        state.cart = state.cart.filter(
          (cart) => cart._id !== action.payload._id
        );
        state.cart.push(product);
      } else {
        state.cart = state.cart.filter(
          (cart) => cart._id !== action.payload._id
        );
      }
    },
  },
});
export const { addToCard, removeToCart, addProduct } = cartSlice.actions;
export default cartSlice.reducer;
