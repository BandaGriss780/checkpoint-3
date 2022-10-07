import { createSlice } from "@reduxjs/toolkit";
import data from "../listaDeLibros.json"

const initialState = [...data]

const userSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    editBook: (state, action) => {
      const { id, title, description, author } = action.payload;
      const foundBook = state.find((book) => book.id === id);
      if (foundBook) {
        foundBook.title = title;
        foundBook.author = author;
        foundBook.description = description;
      }
    },
    deleteBook: (state, action) => {
      const foundBook = state.find((book) => book.id === action.payload);
      if (foundBook) {
        state.splice(state.indexOf(foundBook), 1);
      }
    },
  },
});

export const { addBook, editBook, deleteBook } = userSlice.actions;
export default userSlice.reducer;
