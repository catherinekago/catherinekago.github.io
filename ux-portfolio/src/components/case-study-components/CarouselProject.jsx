import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./CarouselProject.scss";

const CarouselProject = (props) => {
  return (
    <AliceCarousel
      autoPlay={false}
      autoPlayStrategy={"default"}
      infinite={true}
      autoPlayInterval={8000}
      controlsStrategy="alternate"
      mouseTracking
      items={props.items}
      responsive={props.responsive}
      paddingRight={25}
      paddingLeft={25}
    />
  );
};

export default CarouselProject;
