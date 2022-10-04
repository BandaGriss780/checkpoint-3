import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar, Typography, Button } from "@material-tailwind/react";
import BooksList from "./components/BooksList";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <span>Checkpoint tres</span>
          </Typography>

          <Button
            variant="gradient"
            size="md"
            className="hidden lg:inline-block"
          >
            <span>Login</span>
          </Button>
        </div>
      </Navbar>
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BooksList />} />
            <Route path="/create-book" element={<BookForm />} />
            <Route path="/edit-book/:id" element={<BookForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
