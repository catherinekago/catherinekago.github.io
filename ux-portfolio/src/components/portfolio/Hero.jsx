import React from 'react'
import './Hero.scss';
import ScrollIntoView from 'react-scroll-into-view'
import portrait from '../../assets/images/portrait.svg'

const Hero = (props) => {

  return (
    <>
    <div class="hero-background-container background-white">
      <div id="home-hero-container">
      {props.width < 700 ? <img class="illustration-section responsive-img-top" src={portrait} alt="Portrait of Kathrin Schnizer, the creator of this portfolio." /> : null}
        <div id="hero-text-container">
          <h1>Hi, I'm Kathrin.</h1>
          <p class='title-large'>Designer with a passion for inclusive and assistive technologies. Currently, I am facilitating climate action at <b>ClimatePartner</b>.</p>
          <ScrollIntoView behavior="smooth" selector="#portfolio-main-container">
            <button className="button-large">View my work</button>
          </ScrollIntoView>
        </div>
        {props.width > 700 ? <img class="illustration-section responsive-img-top" src={portrait} alt="Portrait of Kathrin Schnizer, the creator of this portfolio." /> : null}
      </div>
      </div>
    </>
  )
}
export default Hero