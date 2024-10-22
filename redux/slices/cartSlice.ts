import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      state.push(item);
    },
    removeFromCart: (state, action) => {
      const itemId: string = action.payload;

      return state.filter((item) => {
        return item.productId !== itemId;
      });
    },
    incrementQuantity: (state, action) => {
      const itemId: string = action.payload;

      state.map((item) => {
        if (item.productId === itemId) {
          item.quantity++;
        }
      });
    },
    decrementQuantity: (state, action) => {
      const itemId: string = action.payload;

      state.map((item) => {
        if (item.productId === itemId && item.quantity > 1) {
          item.quantity--;
        }
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
