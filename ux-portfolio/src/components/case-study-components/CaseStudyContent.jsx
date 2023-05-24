import React from "react";

const CaseStudyContent = (props) => {
  return (
    <div class="main-background-container container-white">
      <div class={"main-content-container content-blocks"}>
        {props.content.map((item) => item)}
      </div>
    </div>
  );
};
export default CaseStudyContent;
