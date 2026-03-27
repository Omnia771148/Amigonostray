
import { Carousel } from 'react-bootstrap';
import wel from './wel.jpg';
import ame from './ame.jpg';
import lav from './lav.jpg';
import "./carousel.css"; 
const BootstrapCarousel = () => {
  return (
    <Carousel className='cor'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wel}
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ame}
          alt="Second slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lav}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;