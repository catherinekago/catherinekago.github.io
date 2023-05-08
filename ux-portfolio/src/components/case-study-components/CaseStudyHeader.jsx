import React from 'react'
import './CaseStudyStyles.scss';

const CaseStudyHeader = (props) => {


  return (
        <div class="main-background-container case-study-hero-container container-dark">
          <div class="main-content-container">
          <h1 >{props.title}</h1>
          <p class="text-l text-medium">{props.text}</p>
        </div>
        </div>

  )
}
export default CaseStudyHeader