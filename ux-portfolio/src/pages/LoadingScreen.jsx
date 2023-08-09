import React from "react";
import "./../style/style.scss";

const LoadingScreen = (props) => {
  return (
    <div className={"loader-container"}>
      <h1 id="k-animated" class="text-light">
        K
      </h1>
      <h1 id="s-animated" class="text-light">
        S
      </h1>
    </div>
  );
};

export default LoadingScreen;
