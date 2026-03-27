
'use client';
import { Carousel } from 'react-bootstrap';
const wel = "/images/wel.jpg";
const ame = "/images/ame.jpg";
const lav = "/images/lav.jpg";
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