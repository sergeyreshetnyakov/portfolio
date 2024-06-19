import { configureStore, combineReducers } from "@reduxjs/toolkit";
import messageReducer from "./messanger/messageSlice";
import userReducer from "./messanger/userSlice";

const rootReducer = combineReducers({
  message: messageReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
