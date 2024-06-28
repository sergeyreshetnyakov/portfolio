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
         console.log("new product in cart. id: ", action.payload.id);
      },
      deleteFromCart: (state, action: PayloadAction<number>) => {
         state.cart.filter((e) => {
            e.id === action.payload;
         });
      },
   },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
