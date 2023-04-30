import React from 'react'
import "./ProjectSection.scss";

const ProjectContent = (props) => {

  const containerClass = props.spacing === "small" ? "main-content content-vertical text-block" : "main-content content-vertical visuals-block"

  return (
    <div class="main-background-container background-white">

      <div class={containerClass}>
        {props.content1}
        {props.content2}
        {props.content3}
        {props.content4}
      </div>

    </div>
  )

}
export default ProjectContent;