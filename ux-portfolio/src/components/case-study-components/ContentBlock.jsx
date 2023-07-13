import React from "react";

import icon_lock from "../../assets/icons/lock.svg";

const ContentBlock = (props) => {
  const blockAlignment =
    props.alignment === "horizontal"
      ? "content-horizontal"
      : "content-vertical";

  const confidentialityNote = (
    <div class="confidentiality-note">
      <img
        class="icon-extrasmall"
        src={icon_lock}
        alt="An icon showing a lock"
      />
      <p class="text-s primaryMain">
        I altered the original content to respect its confidentiality.
      </p>
    </div>
  );

  const confidentialityContainer = (
    <div class="confidentiality-container">
      {props.content}
      {confidentialityNote}
    </div>
  );

  const imgContent =
    props.imgType === "confidential" ? confidentialityContainer : props.content;

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
