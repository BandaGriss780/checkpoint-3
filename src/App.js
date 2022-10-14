import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksList from "./components/BooksList";
import BookForm from "./components/BookForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-600  h-screen text-white">
      <NavBar />
      <div className="flex items-center justify-center">
          <Routes>
            <Route path="/" element={<BooksList />} />
            <Route path="/create-book" element={<BookForm />} />
            <Route path="/edit-book/:id" element={<BookForm />} />
          </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
