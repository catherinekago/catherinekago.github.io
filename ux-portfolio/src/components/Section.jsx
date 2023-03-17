import React from 'react'
import './Section.scss';

const Section = ({ text }) => {
  return (
    <>
      <div class="section-container" >
        <div class="section-line"></div>
        <p class="section-text">{text}</p>
      </div>
    </>
  )
}
export default Section