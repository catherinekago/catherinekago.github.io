import React from "react";

const ContentBlock = (props) => {
  const blockAlignment =
    props.alignment === "horizontal"
      ? "content-horizontal"
      : "content-vertical";

  return (
    <div class={blockAlignment}>
      {props.imgPos === "left" && props.size.width >= 1000
        ? props.content
        : null}
      <div class={"content-vertical-small"}>
        {props.headline}
        {props.text}
      </div>
      {props.imgPos !== "left" || props.size.width <= 1000
        ? props.content
        : null}
      {props.text2}
    </div>
  );
};
export default ContentBlock;
