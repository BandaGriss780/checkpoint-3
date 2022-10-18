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
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="App">
     
      <Particles
        id="tsparticles"
        className="particles-js"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#808B96",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "red",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <NavBar />
      <div className="flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" exact element={<LoginComponent />} />
          <Route path="/viewmore/:id" element={<ViewMorePage />} />
          <Route path="/Logout" exact element={<LogoutComponent />} />

          <Route path="/booksList" element={<BooksList />} />
          <Route path="/create-book" element={<BookForm />} />
          <Route path="/edit-book/:id" element={<BookForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
