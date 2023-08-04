import React from "react";
import { Link } from "react-router-dom";
import "./NextProject.scss";

const NextProject = (props) => {
  return (
    <div class="container-dark next-project-container">
      <p class="text-light next-text">
        Next: <span class="text-light text-title">{props.project}</span>
      </p>
      <Link class="button-medium" to={props.link}>
        <button>{props.button}</button>
      </Link>
    </div>
  );
};
export default NextProject;
