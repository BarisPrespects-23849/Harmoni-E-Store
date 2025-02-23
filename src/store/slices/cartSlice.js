import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCart(state) {
      state.cartCount += 1;
    },
  },
});

export const { incrementCart } = cartSlice.actions;
export default cartSlice.reducer;
