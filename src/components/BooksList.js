import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../features/booksSlice";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BooksList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const notify = (id) => {
    handleDelete(id);
    toast.warn("Successfully deleted book", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const deleteWithToast=(id) => {
    handleDelete(id);
    notify();
  }

  const [modalShown, setModalShown] = useState(false);

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4 space-y-3.5 my-2.5 ">
        <h1>Books added ({books.length})</h1>

        <Link
          to="/create-book"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Create Book
        </Link>
      </header>
      <div className="grid gap-2 lg:grid-cols-4">
        {books.map((book) => (
          <>
            <div
              className="w-full  rounder-md shadow-md lg:max-w-sm"
              key={book.id}
            >
              <img
                className="object-cover  w-62 h-[26.5rem]"
                src={book.imageLink}
                alt="libro"
              />
              <div className="bg-slate-400 p-4  space-y-3.5  h-96 ">
                <h3 className="text-lg font-bold">{book.title}</h3>

                <p>Description: {book.description}</p>
                <p>Author: {book.author}</p>
                <div className="flex gap-x-2 ">
                  <Link
                    to={`/edit-book/${book.id}`}
                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center  "
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteWithToast(book.id)}
                    className="bg-red-500 px-2 py-1 text-xs rounded-md "
                  >
                    Delete
                  </button>
                  <ToastContainer />
                </div>
                <Link
                  to={`/viewmore/${book.id}`}
                  className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow "
                >
                  View more
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
