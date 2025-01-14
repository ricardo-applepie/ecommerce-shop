import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    increment: (state, action) => {
      state.cartItems = action.payload;
    },
    removeitem: (state, action) => {
      return state;
    },
    setCartInfo: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { increment, removeitem, setCartInfo } = CartSlice.actions;

export default CartSlice.reducer;
