import React from 'react'
import "./ProjectSection.scss";
import Section from '../atoms/Section';

const ProjectSection = (props) => {

  const containerClass = props.flexDirection === "vertical" ? "main-content content-vertical" : "main-content content-horizontal";
  const imageClass = props.flexDirection === "vertical" ? "main-content" : "main-content illustration"
  return (
      <div class="main-background-container background-primary">
        <Section text={props.section} />
        <div class={containerClass}>
          <div class="main-content content-vertical text-block">
            <h2 class="main-content">{props.headline}</h2>
            {props.text}
          </div>
          {props.secondImage !== null && props.width < 700 ?
            <img class="main-content" src={props.secondImage} alt={props.imageAlt} />
            :
            <img class={imageClass} src={props.image} alt={props.imageAlt} />
          }

        </div>
      </div>
  )
}
export default ProjectSection;