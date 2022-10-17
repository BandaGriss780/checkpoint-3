import Carousel from "react-bootstrap/Carousel";
import foto1 from "../Assets/Uno.png";
import foto2 from "../Assets/Dos.png";
import foto3 from "../Assets/Tres.png";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={foto1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={foto2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="Tit">
        <h1 className="titulo">Welcome to the book jungle</h1>
      </div>
    </div>
  );
}

export default Home;