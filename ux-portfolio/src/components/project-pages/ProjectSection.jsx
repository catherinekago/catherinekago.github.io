import React from 'react'
import "./ProjectSection.scss";
import Section from '../atoms/Section';

const ProjectSection = (props) => {

  var containerClass = props.flexDirection === "vertical" ? "main-content content-vertical" : "main-content content-horizontal";
  containerClass = props.type === "hero" ? "main-content hero-container" : containerClass;

  const imageClass = determineImageClass();

  function determineImageClass() {
    const basis = "";

    switch (props.type) {
      case "hero":
        return basis + "illustration-hero";
      case "section":
        if (props.flexDirection === "vertical") {
          return "main-content";
        } else {
          return basis + "illustration-section";
        }
    }
  }

  const determineTopHeadline = () => {
    if (props.width < 968 && props.type !== "hero") {
      return <h2 class="main-content">{props.headline}</h2>;
    } else {
      return null
    }
  }

  const determineBottomHeadline = () => {
    if (props.type === "hero") {
      return <h1 class="main-content">{props.headline}</h1>;
    } else if (props.width > 968) {
      return <h2 class="main-content">{props.headline}</h2>;
    } else {
      return null
    }
  }

  const determineTopImage = () => {
    if (props.secondImage === null && props.width < 700) {
      return <img class={imageClass} src={props.image} alt={props.imageAlt} />;
    } else if (props.type === "hero" && props.width < 986) {
      return <img class={imageClass} src={props.image} alt={props.imageAlt} />;
    }
  }

  const determineBottomImage = () => {
    if (props.secondImage !== null) {
      if (props.width < 700) {
        return <img class="main-content" src={props.secondImage} alt={props.imageAlt} />;
      } else {
        return <img class={imageClass} src={props.image} alt={props.imageAlt} />;
      }
    } else if (props.type === "section" && props.width > 700) {
      return <img class={imageClass} src={props.image} alt={props.imageAlt} />;
    } else if (props.type === "hero" && props.width > 986) {
      return <img class={imageClass} src={props.image} alt={props.imageAlt} />;
    }
  }

  return (
    <div class={props.type === "section" ? "main-background-container background-primary" : "hero-background-container background-primary"} >
      {props.type === "section" ? <Section text={props.section} /> : null}
      {determineTopHeadline()}
      {determineTopImage()}
      <div class={containerClass}>
        <div class="main-content content-vertical text-block">
          {determineBottomHeadline()}
          {props.text}
        </div>
        {determineBottomImage()}
      </div>
    </div>
  )

}
export default ProjectSection;