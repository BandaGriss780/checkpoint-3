import Carousel from "react-bootstrap/Carousel";
import foto1 from "../Assets/Uno.png";
import foto2 from "../Assets/Dos.png";
import foto3 from "../Assets/Tres.png";

function Home() {
  return (
    <div>
      <p className="title">Welcome to the book jungle</p>

      <Carousel slide={false} className="mt-3">
        <Carousel.Item>
          <img className="d-block w-100" src={foto1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
