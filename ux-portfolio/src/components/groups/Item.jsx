import React from "react";
import { useState } from "react";
import "./ItemGroup.scss";

import icon_expand_more from "../../assets/icons/expand_more.svg";
import icon_expand_less from "../../assets/icons/expand_less.svg";

const Item = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  const buildItem = (type) => {
    if (type === "underline") {
      return (
        <div class="item-group-item-underline">
          <div>
            <div
              class="item-group-header"
              onClick={() => {
                handleExpansion();
              }}
            >
              <div class="item-group-headline">
                {props.item.icon}
                <p class="text-l text-title text-primary">
                  {props.item.headline}
                </p>
              </div>
              {props.expandable ? (
                <img
                  class="icon-small"
                  src={expanded ? icon_expand_less : icon_expand_more}
                  alt="An icon showing a magnification glass"
                />
              ) : null}
            </div>

            <div class="item-group-header-underline" />
          </div>

          {!props.expandable ? (
            <p class="text-l primaryMain itemText">{props.item.text}</p>
          ) : (
            <p
              class={
                expanded
                  ? "text-l primaryMain itemText"
                  : "text-l primaryMain itemText hiddenItem"
              }
            >
              {props.item.text}
            </p>
          )}
        </div>
      );
    } else {
      let itemGroupClass;
      const containerClass = "container-" + props.background;
      if (props.size === "small") {
        itemGroupClass =
          "item-group-item-box item-group-item-box-small " + containerClass;
      } else if (props.size === "large") {
        itemGroupClass =
          "item-group-item-box item-group-item-box-large " + containerClass;
      }
      return (
        <div class={itemGroupClass}>
          <p class="text-l text-title text-primary">{props.item.headline}</p>
          <p class="text-l primaryMain">{props.item.text}</p>
        </div>
      );
    }
  };

  return buildItem(props.type);
};
export default Item;
