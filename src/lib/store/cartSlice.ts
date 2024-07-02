import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./storeApi";

interface InitialStateType {
   cart: IProduct[];
}

const initialState: InitialStateType = {
   cart: [],
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<IProduct>) => {
         state.cart.push(action.payload);
      },
      deleteCart: (state) => {
         state.cart = [];
      },
   },
});

export default cartSlice.reducer;
export const { addToCart, deleteCart } = cartSlice.actions;
