import React from "react";
import "./CaseStudySection.scss";
import Section from "../atoms/Section";

const CaseStudySection = (props) => {
  return (
    <div class="main-background-container container-dark">
      <div class={"main-content-container content-horizontal-section"}>
        <div class="content-vertical">
          <div class="section-headline">
            <Section variant="section-light" text={props.section} />
            <h2>{props.headline}</h2>
          </div>
          {props.image !== null ? (
            <img
              class={"img-vertical"}
              src={props.image}
              alt={props.imageAlt}
            />
          ) : null}
          <p class="text-l primaryMain">{props.text}</p>
        </div>
        {props.image !== null ? (
          <img
            class={"img-horizontal"}
            src={props.image}
            alt={props.imageAlt}
          />
        ) : null}
      </div>
    </div>
  );
};
export default CaseStudySection;
