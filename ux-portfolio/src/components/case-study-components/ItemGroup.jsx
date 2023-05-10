import React from 'react'
import './ItemGroup.scss'

const ItemGroup = (props) => {

  const buildGroup = (type, size) => {

    if (type === "underline") {

      return (<div class="item-group-container-underline">
        {props.items.map((item) => (
          <div class="item-group-item-underline">
            <div class="item-group-header">
              <p class="text-l text-title text-primary">{item.headline}</p>
              <div class="item-group-header-underline" />
            </div>
            <p class="text-l text-dark">{item.text}</p>
          </div>
        ))}
      </div>);
    } else {

      let itemGroupClass;
      if (size === "small") {
        itemGroupClass = "item-group-item-box item-group-item-box-small"
      } else if (size === "large") {
        itemGroupClass = "item-group-item-box item-group-item-box-large"
      }

      // TODO: based on itemGroupClass create layout for items in container
      return (<div class="item-group-container-box">
        {props.items.map((item) => (
          <div class={itemGroupClass}>
            <p class="text-l text-title text-primary">{item.headline}</p>
            <p class="text-l text-dark">{item.text}</p>
          </div>
        ))}
      </div>
      )





    }

    // TODO: 

  }

  return (
    buildGroup(props.type, props.size)
  )

}
export default ItemGroup;