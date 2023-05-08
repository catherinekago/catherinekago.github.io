import React from 'react'

const CaseStudyDescription = (props) => {

  return (
    <>
      <div class="main-content-container">
        <div class="project-description">
          <div class="project-details-container">
            <img class="icon-big" src={props.roleIcon} alt="" />
            <div class="description-text-container">
              <p class="text-l text-dark text-title">Role</p>
              {props.roleText.map((text) => (
                <p class="text-l text-dark">{text}</p>
              ))}
            </div>
          </div>
          <div class="project-details-container">
            <img class="icon-big" src={props.toolsIcon} alt="" />
            <div class="description-text-container">
              <p class="text-l text-title text-medium">Tools</p>
              {props.toolsText.map((text) => (
                <p class="text-l text-dark">{text}</p>
              ))}
            </div>
          </div>
          <div class="project-details-container">
            <img class="icon-big" src={props.durationIcon} alt="" />
            <div class="description-text-container">
              <p class="text-l text-medium text-title">Duration</p>

              {props.durationText.map((text) => (
                <p class="text-l text-dark">{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CaseStudyDescription