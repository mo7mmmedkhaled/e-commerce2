import { configureStore } from "@reduxjs/toolkit";
import caSlice from "./caSlice";

const store = configureStore({
  reducer: {
    cartSlice: caSlice.reducer,
  },
});

export default store;
