import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/booksSlice";
import UserSlice from "../features/User/UserSlice";

export const store = configureStore({
  reducer: { 
    books: booksReducer,
    user: UserSlice.reducer,
  }
});
