import React from 'react'
import "./ProjectSection.scss";

const ProjectContent = (props) => {

   return (
    <div class={"main-background-container background-white"}>

      <div class={"main-content content-vertical text-block"}>
        {props.content1}
        {props.content2}
        {props.content3}
        {props.content4}
      </div>

    </div>
  )

}
export default ProjectContent;