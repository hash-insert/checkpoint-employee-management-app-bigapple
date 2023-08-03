import employee from "../images/employee.jpg";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../images/download.jpeg";

const Corousel = () => {
  return (
    <Carousel style={{ backgroundColor:"whitesmoke" }}>
      <Carousel.Item interval={3000}>
        <img className="carousel-image" src={firstImage} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="carousel-image" src={employee} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Corousel;