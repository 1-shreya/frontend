import React from 'react';
import { Carousel } from 'react-bootstrap';

function Hero() {
  return (
    <section className="hero">
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1500x500"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Get the Best Health Insurance for You and Your Family</h1>
            <p>Protect your loved ones with our affordable and comprehensive health insurance plans.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1500x500"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Choose from a Range of Plans</h1>
            <p>We offer a variety of health insurance plans to suit your needs and budget.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1500x500"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Get Expert Advice</h1>
            <p>Our experienced agents will help you find the perfect plan for you and your family.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   
      
    </section>
  );
}

export default Hero;