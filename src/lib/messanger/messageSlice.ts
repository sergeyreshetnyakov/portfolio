import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MessageType = {
   text: string;
   userID: number;
};

type initialStateType = {
   message: MessageType[];
};

const initialState: initialStateType = {
   message: [
      {
         text: "hello",
         userID: 0,
      },
      {
         text: "hi",
         userID: 1,
      },
   ],
};

const messageSlice = createSlice({
   name: "message",
   initialState,
   reducers: {
      addMessage: (state, action: PayloadAction<MessageType>) => {
         state.message.push(action.payload);
      },
      deleteMessageByID: (state, action: PayloadAction<number>) => {
         state.message.filter((e) => e.userID !== action.payload);
      },
   },
});

export const { addMessage, deleteMessageByID } = messageSlice.actions;
export default messageSlice.reducer;
