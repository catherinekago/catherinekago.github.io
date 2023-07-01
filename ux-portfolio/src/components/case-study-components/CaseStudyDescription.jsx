import React from "react";

const CaseStudyDescription = (props) => {
  return (
    <>
      <div class="main-content-container">
        <div class="project-description">
          <div class="project-details-container">
            <img class="icon-big" src={props.roleIcon} alt="" />
            <div class="description-text-container">
              <p class="text-l primaryMain text-title">Role</p>
              {props.roleText.map((text) => (
                <p class="text-l primaryMain">{text}</p>
              ))}
            </div>
          </div>
          <div class="project-details-container">
            <img class="icon-big" src={props.toolsIcon} alt="" />
            <div class="description-text-container">
              <p class="text-l text-title primaryMain">Tools</p>
              {props.toolsText.map((text) => (
                <p class="text-l primaryMain">{text}</p>
              ))}
            </div>
          </div>
          <div class="project-details-container">
            <img class="icon-big" src={props.durationIcon} alt="" />
            <div class="description-text-container">
              <p class="text-l primaryMain text-title">Duration</p>

              {props.durationText.map((text) => (
                <p class="text-l primaryMain">{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseStudyDescription;
