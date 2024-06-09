import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
  name: string;
  color: string;
  ID: number;
};

type InitialStateType = {
  user: UserType[];
  currentUser: number;
};

const initialState: InitialStateType = {
  user: [
    {
      name: "oleg",
      color: "#43cc58",
      ID: 0,
    },
    {
      name: "alex",
      color: "#cc4348",
      ID: 1,
    },
  ],
  currentUser: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      console.log(state.user, action.payload);
      state.user.push(action.payload);
    },
    changeCurrentUser: (state, action: PayloadAction<number>) => {
      state.currentUser = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.user = state.user.filter((e) => e.ID !== action.payload);
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, changeCurrentUser } = userSlice.actions;
