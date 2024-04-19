import { createSlice } from "@reduxjs/toolkit";

const caSlice = createSlice({
  name: "ca",
  initialState: {
    cartItem: [],
    favItem: [],
    totalQuantity: 0,
    total: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.total = state.total + newItem.price;
      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity--;
      state.total = state.total - newItem.price;
      if (existingItem.quantity === 1) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== newItem.id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - newItem.price;
      }
    },
    addItemToFavorite(state, action) {
      const newItem = action.payload;
      const indexItem = state.favItem.findIndex(
        (item) => item.id === newItem.id
      );
      const existItem = state.favItem.find((item) => item.id === newItem.id);
      if (!existItem) {
        state.favItem.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
        });
      } else {
        state.favItem.splice(indexItem, 1);
      }
    },
  },
});
export const uiActions = caSlice.actions;
export default caSlice;
