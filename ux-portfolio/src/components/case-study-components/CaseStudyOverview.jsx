import React from "react";
import Section from "../atoms/Section";
import "./CaseStudyStyles.scss";

const CaseStudyOverview = (props) => {
  return (
    <div class="main-background-container container-grey">
      <div class="main-content-container">
        <Section text="Overview" />
        <div class="two-columns-container">
          <div class="content-vertical-small">
            <h3>The challenge</h3>
            <p class="text-l primaryMain">{props.challenge}</p>
          </div>
          <div class="content-vertical-small">
            <h3>The solution</h3>
            <p class="text-l primaryMain">{props.solution}</p>
          </div>
        </div>

        {props.description}
      </div>
    </div>
  );
};
export default CaseStudyOverview;
