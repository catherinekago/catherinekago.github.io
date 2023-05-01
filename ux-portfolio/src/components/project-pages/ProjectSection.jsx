import React from 'react'
import "./ProjectSection.scss";
import Section from '../atoms/Section';

const ProjectSection = (props) => {

  const containerClass = props.flexDirection === "vertical" ? "main-content content-vertical" : "main-content content-horizontal";

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
    if (props.width < 968) {
      return <h2 class="main-content">{props.headline}</h2>;
    } else {
      return null
    }
  }

  const determineBottomHeadline = () => {
    if (props.width > 968) {
      return <h2 class="main-content">{props.headline}</h2>;
    } else {
      return null
    }
  }

  const determineTopImage = () => {
    if (props.secondImage === null && props.width < 700) {
      return <img class={imageClass} src={props.image} alt={props.imageAlt} />;
    } else {
      return null;
    }
  }

  const determineBottomImage = () => {
    if (props.type !== "content") {
      if (props.secondImage !== null) {
        if (props.width < 700) {
          return <img class="main-content" src={props.secondImage} alt={props.imageAlt} />;
        } else {
          return <img class={imageClass} src={props.image} alt={props.imageAlt} />;
        }
      } else if (props.width > 700){
        return <img class={imageClass} src={props.image} alt={props.imageAlt} />;
      }

    } else {
      return null;
    }
  }

  return (
    <div class="main-background-container background-primary">
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