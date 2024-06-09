import { configureStore, combineReducers } from "@reduxjs/toolkit";
import messageReducer from "./messanger/messageSlice";
import userReducer from "./messanger/userSlice";

const rootReducer = combineReducers({
  message: messageReducer,
  user: userReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
