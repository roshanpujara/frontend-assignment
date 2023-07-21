import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  originalProducts: [],
  addedItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.products = action.payload;
      state.originalProducts = action.payload;
    },
    add: (state, action) => {
      state.addedItems.push(action.payload);
    },
    // remove: (state, action) => {
    //   return state.addedItems.filter((item) => {
    //     return item.id !== action.payload;
    //   });
    // },
    remove: (state, action) => {
      const itemToRemove = action.payload;
      state.addedItems = state.addedItems.filter(
        (item) => item.id !== itemToRemove
      );
    },
  },
});
export default cartSlice.reducer;
export const { getData, add, remove } = cartSlice.actions;
