import React from "react";
import "./../../style/style.scss";

const ProjectHero = (props) => {
  return (
    <img
      class={"img-vertical img-project-hero"}
      src={props.image}
      alt={props.imageAlt}
    />
  );
};
export default ProjectHero;
