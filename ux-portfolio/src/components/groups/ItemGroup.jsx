import React from "react";
import "./ItemGroup.scss";
import Item from "./Item";

const ItemGroup = (props) => {
  const buildGroup = (type, size) => {
    const containerCountDependentClass =
      props.items.length === (2 || 4)
        ? "item-group-item-underline even"
        : "item-group-item-underline uneven";

    if (type === "underline") {
      return (
        <div class="item-group-container-underline">
          {props.items.map((item, index) => (
            <div class={containerCountDependentClass}>
              <Item type={type} item={item} expandable={props.expandable} />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div class="item-group-container-box">
          {props.items.map((item, index) => (
            <Item
              size={size}
              type={type}
              item={item}
              expandable={false}
              background={props.background}
            />
          ))}
        </div>
      );
    }
  };

  return buildGroup(props.type, props.size);
};
export default ItemGroup;
