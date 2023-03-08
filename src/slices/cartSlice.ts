import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {},
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// export const selectItems = (state) => state.basket.items;

export default cartSlice.reducer;
