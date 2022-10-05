import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Harry potter",
    completed: false,
    author: "Fabi",
    description: "This is a book",
  },
  {
    id: "2",
    title: "Lord of the rings",
    completed: false,
    author: "Pablo",
    description: "This is a book",
  },
  {
    id: "3",
    title: "Harry potter second",
    completed: false,
    author: "Fabi",
    description: "This is a book",
  },
  {
    id: "4",
    title: "Lord of the rings 2012",
    completed: false,
    author: "Marta Gomez",
    description: "This is a book",
  },
];

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
