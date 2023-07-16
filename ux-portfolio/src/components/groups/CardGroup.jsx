import React from "react";
import "./CardGroup.scss";

const CardGroup = (props) => {
  const containerClass =
    "card-container " + props.maxPerRow + " " + props.textAlign;
  return (
    <div class="main-content card-group-container">
      {props.items.map((item) => (
        <div class={containerClass}>
          <img class="icon-small" src={item.icon} alt="" />
          <p class="primaryMain item-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};
export default CardGroup;
