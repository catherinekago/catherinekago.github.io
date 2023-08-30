import React from "react";
import Section from "../atoms/Section";
import "./CaseStudyStyles.scss";

const CaseStudyOverview = (props) => {
  return (
    <div class="main-background-container container-dark">
      <div class="main-content-container">
        <h1>{props.title}</h1>
        <div class="two-columns-container">
          <div class="content-vertical-small">
            <Section variant="section-light" text="The challenge" />
            <p class="text-l primaryMain">{props.challenge}</p>
          </div>
          <div class="content-vertical-small">
            <Section variant="section-light" text="The solution" />
            <p class="text-l primaryMain">{props.solution}</p>
          </div>
        </div>

        {props.description}
      </div>
    </div>
  );
};
export default CaseStudyOverview;
