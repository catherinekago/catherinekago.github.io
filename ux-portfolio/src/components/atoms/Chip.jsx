import React from 'react'
import './Chip.scss';

const Chip = (props) => {
const className = 'chip-container ' + props.chipType;
  return (
    <>
      <div className={className} >
        <p class="chip-label">{props.label}</p>
      </div>
    </>
  )
}
export default Chip