import React from 'react'
import './ListGroup.scss';

const ListGroup = (props) => {

  return (
      <div class="main-content list-group-container">
        {props.items.map((item, index) => (
          <div class="list-item-container">
            {index === 0 ? <div class="divider" /> : null}
            <div class="list-item">
              <img class="icon-small" src={item.icon} alt="" />
              <div class="item-text">
              <p class="item-title">{item.title}</p>
              <p class="text-medium item-text">{item.text}</p>
              </div>
            </div>

            <div class="divider" />

          </div>
        ))}
      </div>
  )
}
export default ListGroup