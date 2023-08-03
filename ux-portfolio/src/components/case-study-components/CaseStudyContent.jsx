import React from "react";
import Section from "../atoms/Section";

const CaseStudyContent = (props) => {
  let divClass = "main-background-container ";

  divClass = divClass + ("container-" + props.color);

  return (
    <div class={divClass}>
      <div class={"main-content-container"}>
        <Section
          variant={props.color === "dark" ? "section-light" : "section-dark"}
          text={props.section}
        />
        <div class={"main-content-container content-blocks"}>
          {props.content.map((item) => item)}
        </div>
      </div>
    </div>
  );
};
export default CaseStudyContent;
