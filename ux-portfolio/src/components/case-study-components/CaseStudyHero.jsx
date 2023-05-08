import React from 'react'
import './CaseStudyStyles.scss';

const CaseStudyHero = (props) => {

  const image = `url(${props.backgroundImage})`


  return (
    <div style={{backgroundImage: image }} class="main-background-container container-dark">
    <div class="main-content-container">
      {props.content}

  </div>
  </div>
  )
}
export default CaseStudyHero