import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addBook, editBook } from "../features/booksSlice";
import { v4 as uuid } from "uuid";

function BookForm() {
  const [book, setBook] = useState({
    title: "",
    description: "",
    author: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const books = useSelector((state) => state.books);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editBook({ ...book, id: params.id }));
    } else {
      dispatch(
        addBook({
          ...book,
          id: uuid(),
        })
      );
    }

    navigate("/BooksList");
  };

  useEffect(() => {
    if (params.id) {
      setBook(books.find((book) => book.id === params.id));
    }
  }, [params, books]);

  return (
    <form onSubmit={handleSubmit} className="bg-slate-400 max-w-sm p-4 mt-4">
      <label className="block text-sm font-bold">Book:</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={book.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="Write a title"
        autoFocus
      />
      <label className="block text-sm font-bold">Author:</label>
      <input
        type="text"
        name="author"
        onChange={handleChange}
        value={book.author}
        className="w-full p-2 rounded-md bg-zinc-700 mb-2"
        placeholder="Write a auhtor"
       
      />
      <label >
        Description:
        <textarea
          type="text"
          name="description"
          onChange={handleChange}
          value={book.description}
          className="w-full p-2 rounded-md bg-zinc-700 mb-2"
          placeholder="Write a description"
        />
      </label>
      <button type="submit" className="bg-indigo-600 px-4 py-1">Submit</button>
    </form>
  );
}

export default BookForm;
