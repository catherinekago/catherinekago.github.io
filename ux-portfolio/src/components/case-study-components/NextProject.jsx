import React from "react";
import { Link } from "react-router-dom";
import "./NextProject.scss";

const NextProject = (props) => {
  return (
    <div class="mcontainer-white next-project-container">
      <p class="text-dark next-text">
        Next: <span class="text-primary text-title">{props.project}</span>
      </p>
      <Link class="button-medium" to={props.link}>
        <button>{props.button}</button>
      </Link>
    </div>
  );
};
export default NextProject;
