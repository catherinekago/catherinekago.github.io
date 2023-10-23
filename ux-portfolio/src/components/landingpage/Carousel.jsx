import React from "react";
import AliceCarousel from "react-alice-carousel";
import Section from "../atoms/Section";
import "./Carousel.scss";

import linkedin from "../../assets/icons/linkedin-mark-light.svg";
import bethThayne from "../../assets/images/testimonial-portraits/bethThayne.png";

const Carousel = () => {
  let portraits = [bethThayne];
  let testimonials = require("../../content.json").portfolio.testimonials;
  let items = testimonials.map((testimonial, index) => (
    <CarouselItem
      name={testimonial.name}
      occupation={testimonial.occupation}
      // linkedin={testimonial.linkedin}
      quote={testimonial.quote}
      img={portraits[index]}
    />
  ));

  return (
    <div class="main-background-container" id="carousel-container">
      <Section variant="section-light" text="What my coworkers say about me" />
      <AliceCarousel
        autoPlay={true}
        autoPlayStrategy={"default"}
        infinite={true}
        autoPlayInterval={8000}
        controlsStrategy="alternate"
        mouseTracking
        items={items}
      />
    </div>
  );
};

const CarouselItem = (props) => {
  return (
    <div class="carousel-item-container container-dark">
      <div class="carousel-item-person-container container-dark">
        <img
          src={props.img}
          alt="portrait picture of the person behind the statement"
          class="avatar"
        />
        <div class="carousel-item-person-info container-dark">
          <h4 class="primaryMain">{props.name}</h4>{" "}
          <p class="text-m primaryMain">{props.occupation}</p>
          {/* <a href={props.linkedin} target="_blank" rel="noreferrer">
            <img class="icon-extrasmall" src={linkedin} alt="LinkedIn" />
          </a> */}
        </div>
      </div>
      <p class="text-l primaryMain">"{props.quote}"</p>
    </div>
  );
};

export default Carousel;
