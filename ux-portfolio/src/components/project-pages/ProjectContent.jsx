import React from 'react'
import "./ProjectSection.scss";

const ProjectContent = (props) => {

  var containerClassInner = props.spacing === "small" ? "main-content content-vertical text-block" : "main-content content-vertical visuals-block"
  var containerClassMain = props.isLast === "true" ? "main-background-container background-white" : " main-background-container background-white noBottomPadding"
  return (
    <div class={containerClassMain}>

      <div class={containerClassInner}>
        {props.content1}
        {props.content2}
        {props.content3}
        {props.content4}
      </div>

    </div>
  )

}
export default ProjectContent;