import React from "react";

const CaseStudyContent = (props) => {
  const divClass =
    props.color == "grey"
      ? "main-background-container container-grey"
      : "main-background-container container-white";
  return (
    <div class={divClass}>
      <div class={"main-content-container content-blocks"}>
        {props.content.map((item) => item)}
      </div>
    </div>
  );
};
export default CaseStudyContent;
