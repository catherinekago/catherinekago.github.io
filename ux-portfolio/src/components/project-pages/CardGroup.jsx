import React from 'react'
import './CardGroup.scss';

const CardGroup = (props) => {

  return (
    <div class="main-content card-group-container">
      {props.items.map((item) => (
        <div class="card-container">
          <img class="icon-small" src={item.icon} alt="" />
          <p class="text-medium item-text">{item.text}</p>

        </div>
      ))}
    </div>
  )
}
export default CardGroup