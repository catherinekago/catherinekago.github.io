import React from "react";

const ContentBlock = (props) => {
  const blockAlignment =
    props.alignment === "horizontal"
      ? "content-horizontal"
      : "content-vertical";

  const imageContainer = (
    <div class="image-container">
      {props.content}
      <p class="text-comment">{props.imageDescription}</p>
    </div>
  );

  const imgContent = imageContainer;

  return (
    <div class={blockAlignment}>
      {props.imgPos === "left" && props.size.width >= 1000 ? imgContent : null}
      <div class={"content-vertical-small"}>
        {props.headline}
        {props.text}
      </div>
      {props.imgPos !== "left" || props.size.width <= 1000 ? imgContent : null}
      {props.text2}
    </div>
  );
};
export default ContentBlock;
