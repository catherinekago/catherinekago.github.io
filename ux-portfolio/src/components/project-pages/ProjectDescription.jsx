import React from 'react'
import './ProjectDescription.scss';

const ProjectDescription = (props) => {

    return (
        <>
      <div class="main-content-container">
      <div class="project-description">
      <div class="project-details-container">
      <img src={props.typeIcon} alt="" />
      <p class="project-description-title">Project type</p>
      {props.typeText.map((text) => (
       <p class="project-description-text">{text}</p>
       ))}
      </div>
      <div class="project-details-container">
      <img src={props.stagesIcon} alt="" />
      <p class="project-description-title">Project stages</p>
      {props.stagesText.map((text) => (
       <p class="project-description-text">{text}</p>
       ))}
      </div>
      <div class="project-details-container">
      <img src={props.durationIcon} alt="" />
      <p class="project-description-title">Duration</p>

      {props.durationText.map((text) => (
       <p class="project-description-text">{text}</p>
       ))}
      </div>
      </div>
    </div>
    </>
  )
}
export default ProjectDescription