import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: () => {},
    remove: () => {},
  },
});
export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
