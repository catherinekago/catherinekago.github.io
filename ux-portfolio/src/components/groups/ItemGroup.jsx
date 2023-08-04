import React from "react";
import "./ItemGroup.scss";
import Item from "./Item";

const ItemGroup = (props) => {
  const buildGroup = (type, size) => {
    if (type === "underline") {
      return (
        <div class="item-group-container-underline">
          {props.items.map((item, index) => (
            <Item type={type} item={item} expandable={props.expandable} />
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

      return (
        <div class="item-group-container-box">
          {props.items.map((item) => (
            <Item
              itemGroupClass={itemGroupClass}
              type={type}
              item={item}
              expandable={props.expandable}
            />
          ))}
        </div>
      );
    }
  };

  return buildGroup(props.type, props.size);
};
export default ItemGroup;
