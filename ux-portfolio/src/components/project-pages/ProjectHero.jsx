import React from 'react'
import './ProjectHero.scss';

const ProjectHero = (props) => {

    return (
        <>
      <div class="project-hero-container">
      <div class="project-hero-text-container">
        <h2>{props.title}</h2>
        <p  class='title-medium'>{props.text}.</p>
        </div>
        <img src={props.image} alt="Hero" />
    </div>
    </>
  )
}
export default ProjectHero