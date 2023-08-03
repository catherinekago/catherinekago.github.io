import React from "react";
import { useState } from "react";
import "./ItemGroup.scss";

import icon_expand_more from "../../assets/icons/expand_more.svg";
import icon_expand_less from "../../assets/icons/expand_less.svg";

const ItemGroup = (props) => {
  // TODO: I need state for every item
  const [expanded, setExpanded] = useState(false);

  const determineExpandableState = (text) => {
    if (expanded) {
      return <p class="text-l primaryMain">{text}</p>;
    } else {
      return null;
    }
  };

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  // TODO: underline position
  const determineHeader = (expandable, icon, headline) => {
    if (expandable === "false") {
      return (
        <div class="item-group-header">
          <div class="item-group-headline">
            {icon}
            <p class="text-l text-title text-primary">{headline}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div class="item-group-header" onClick={() => handleExpansion()}>
          <div class="item-group-headline">
            {icon}
            <p class="text-l text-title text-primary">{headline}</p>
          </div>
          <img
            class="icon-small"
            src={expanded ? icon_expand_less : icon_expand_more}
            alt="An icon showing a magnification glass"
          />
        </div>
      );
    }
  };

  const buildGroup = (type, size) => {
    if (type === "underline") {
      return (
        <div class="item-group-container-underline">
          {props.items.map((item, index) => (
            <div class="item-group-item-underline">
              {determineHeader(props.expandable, item.icon, item.headline)}
              <div class="item-group-header-underline" />
              {props.expandable === false ? (
                <p class="text-l primaryMain">{item.text}</p>
              ) : (
                determineExpandableState(item.text)
              )}
            </div>
          ))}
        </div>
      );
    } else {
      let itemGroupClass;
      if (size === "small") {
        itemGroupClass = "item-group-item-box item-group-item-box-small";
      } else if (size === "large") {
        itemGroupClass = "item-group-item-box item-group-item-box-large";
      }

      // TODO: based on itemGroupClass create layout for items in container
      return (
        <div class="item-group-container-box">
          {props.items.map((item) => (
            <div class={itemGroupClass}>
              <p class="text-l text-title text-primary">{item.headline}</p>
              <p class="text-l primaryMain">{item.text}</p>
            </div>
          ))}
        </div>
      );
    }

    // TODO:
  };

  return buildGroup(props.type, props.size);
};
export default ItemGroup;
