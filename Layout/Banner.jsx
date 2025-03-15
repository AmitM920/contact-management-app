import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Banner() {
  return (
      <Carousel>
          <Carousel.Item>
              <img className="d-block w-100" 
                   src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                   alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
              <img className="d-block w-100" 
                   src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg" 
                   alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
              <img className="d-block w-100" 
                   src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                   alt="Third slide" />
          </Carousel.Item>
      </Carousel>
  );
}

export default Banner;