import React from "react";
import "./CaseStudyStyles.scss";
import "./CaseStudySection.scss";

const CaseStudyHeader = (props) => {
  return (
    <div class="main-background-container case-study-hero-container container-dark">
      <div class={"main-content-container content-horizontal-section"}>
        <div class="content-vertical ">
          <h1>{props.title}</h1>
          <img
            class={"img-vertical img-hero"}
            src={props.image}
            alt={props.imageAlt}
          />
          <p class="text-l text-medium">{props.text}</p>
        </div>
        <img
          class={"img-horizontal img-hero"}
          src={props.image}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};
export default CaseStudyHeader;
