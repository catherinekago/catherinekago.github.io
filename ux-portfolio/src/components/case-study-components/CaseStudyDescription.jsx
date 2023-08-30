import React from "react";
import icon_role from "../../assets/icons/quotes.svg";
import icon_tools from "../../assets/icons/tools.svg";
import icon_duration from "../../assets/icons/duration.svg";

const CaseStudyDescription = (props) => {
  return (
    <>
      <div class="main-content-container">
        <div class="project-description container-dark">
          <div class="project-details-container ">
            <img
              class="icon-big"
              src={icon_role}
              alt="An icon displaying quotation marks"
            />
            <div class="description-text-container">
              <p class="text-l textLight text-title">Role</p>
              {props.roleText.map((text) => (
                <p class="text-l primaryMain">{text}</p>
              ))}
            </div>
          </div>
          <div class="project-details-container">
            <img
              class="icon-big"
              src={icon_tools}
              alt="An icon displaying crafting tools"
            />
            <div class="description-text-container">
              <p class="text-l text-title primaryMain">Tools</p>
              {props.toolsText.map((text) => (
                <p class="text-l primaryMain">{text}</p>
              ))}
            </div>
          </div>
          <div class="project-details-container">
            <img
              class="icon-big"
              src={icon_duration}
              alt="An icon displaying a clock"
            />
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
