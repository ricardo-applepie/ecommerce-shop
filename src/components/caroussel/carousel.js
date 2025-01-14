import React from 'react';
import './caroussel.css';
import { Carousel } from 'react-bootstrap';

function Carouselslider() {
  return (
    <div className="caroussel__wrapper">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://media.boohoo.com/i/boohooamplience/100621_RT1_DESK_DE?$homesplash_desktop_full_1x$"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://media.boohoo.com/i/boohooamplience/180621_JACKG_RT_DESK?$homesplash_desktop_full_1x$"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselslider;
