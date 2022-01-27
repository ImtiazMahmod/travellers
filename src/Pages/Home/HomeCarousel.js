import React from "react";
import { Button, Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            height={700}
            className="w-100 d-block"
            src={
              "https://i.pinimg.com/originals/ba/c2/e8/bac2e850e80ae97e7f3cba63a730626c.jpg"
            }
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="carouselTitle">Amazing Tour In Sajek</h1>
            <h3 className="text-warning">Awesome Experience</h3>
            <Button variant="danger">About Us</Button>
            <Button variant="info ms-3">Contact Us</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={700}
            className="d-block w-100"
            src={
              "https://whatson.guide/wp-content/uploads/2018/02/171782_185994668099908_100000681295465_502955_3502055_o.jpg"
            }
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="carouselTitle">The Best Place in Tour!</h1>
            <h3 className="text-warning">Great Experience</h3>
            <Button variant="danger">Contact Us</Button>
            <Button variant="info ms-3">About More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={700}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sajek_Valley_Rangamati_3.jpg/1200px-Sajek_Valley_Rangamati_3.jpg"
            }
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="carouselTitle">Superb Area to visit</h1>
            <h3 className="text-warning">Easy to Travel and feel free</h3>
            <Button variant="danger">Our Services</Button>
            <Button variant="info ms-3">Get in Touch</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
