import React from "react";
import "./ProjectFooter.scss";

const ProjectFooter = (props) => {
  return (
    <div class="container-dark project-footer">
      <p class="text-small">
        This site is carefully hand-crafted, it comes from my soul.
      </p>
      <p class="text-small">
        Illustrations courtesy of{" "}
        <a class="inline-link" href="http://www.freepik.com/">
          Freepik
        </a>{" "}
        and{" "}
        <a class="inline-link" href="http://www.storyset.com/">
          Storyset.
        </a>
      </p>
    </div>
  );
};
export default ProjectFooter;
