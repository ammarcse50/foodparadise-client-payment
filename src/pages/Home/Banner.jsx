
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="assets/1.jpeg" />
      </div>
      <div>
        <img src="assets/2.jpeg" />
      </div>
      <div>
        <img src="assets/3.jpeg" />
      </div>
    </Carousel>
  );
};

export default Banner;
