import React from 'react'

const ContentBlock = (props) => {

  const blockAlignment = props.alignment === "horizontal" ? "content-horizontal" : "content-vertical";
  const content = props.content !== "" ? props.content : null;


  return (
    <div class={blockAlignment}>
      <div class={"content-vertical"}>
        {props.headline}
        {props.text}
      </div>
      {content}

    </div>

  )

}
export default ContentBlock;