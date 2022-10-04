
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook} from "../features/booksSlice";

function BooksList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="w-4/6">
      
      <header className="flex justify-between items-center py-4">
        <h1>Checkpoint Books ({books.length})</h1>

        <Link
          to="/create-book"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Create Book
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {books.map((book) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={book.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{book.title}</h3>
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
                  delete
                </button>
              </div>
            </header>
            <p>{book.description}</p>
            <p>{book.author}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
