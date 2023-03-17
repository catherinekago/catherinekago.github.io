import React from 'react'
import './Hero.scss';
import ScrollIntoView from 'react-scroll-into-view'

const Hero = () => {

    return (
        <>
      <div id="hero-container">
      <div id="hero-text-container">
        <h1>Hi, I'm Kathrin.</h1>
        <p  class='title-large'>Designer and developer with a passion for inclusive and assistive technologies. Currently, I am facilitating climate action at <b>ClimatePartner</b>.</p>
        <ScrollIntoView selector="#portfolio-main-container">
        <button className="button-large">View my work</button>
        </ScrollIntoView>
        </div>
    </div>
    </>
  )
}
export default Hero