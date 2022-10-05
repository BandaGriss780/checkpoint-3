import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../features/booksSlice";

function BooksList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4 space-y-3.5 my-2.5">
        <h1>Books added ({books.length})</h1>

        <Link
          to="/create-book"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Create Book
        </Link>
      </header>
      <div class="flex justify-center space-x-3.5 ">
        {books.map((book) => (
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://3.bp.blogspot.com/-B-fvBh56lpI/UHC5X70tjrI/AAAAAAAAXT0/ObVodIHL73Y/s1600/libros1.jpg"
              alt=""
            />
            <div
              className="bg-slate-400 p-4 rounded-md space-y-3.5"
              key={book.id}
            >
              <h3 className="text-lg font-bold">{book.title}</h3>

              <p>Description: {book.description}</p>
              <p>Author: {book.author}</p>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-book/${book.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
