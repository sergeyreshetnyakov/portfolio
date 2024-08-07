import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { storeApi } from "./store/storeApi";
import messageReducer from "./messanger/messageSlice";
import userReducer from "./messanger/userSlice";
import cartReducer from "./store/cartSlice";

const rootReducer = combineReducers({
   message: messageReducer,
   user: userReducer,
   cart: cartReducer,
   [storeApi.reducerPath]: storeApi.reducer,
});

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(storeApi.middleware);
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
