import "./App.css";
import { Route, Routes } from "react-router-dom";
import BooksList from "./components/BooksList";
import BookForm from "./components/BookForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ViewMorePage } from "./components/ViewMorePage";
import LoginComponent from "./features/User/Login";
import LogoutComponent from "./features/User/Logout";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-zinc-600  text-white">
      <NavBar />
      <div className="flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" exact element={<LoginComponent />} />
          <Route path="/viewmore/:id" element={<ViewMorePage />} />
          <Route path="/Logout" exact element={<LogoutComponent />} />

          <Route path="/BooksList" element={<BooksList />} />
          <Route path="/create-book" element={<BookForm />} />
          <Route path="/edit-book/:id" element={<BookForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
