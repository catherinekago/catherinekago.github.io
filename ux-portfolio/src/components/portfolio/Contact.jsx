import React from 'react'
import './Contact.scss';
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'

const Contact = () => {
    return (
        <>
      <div id="contact-container">
        <a href="mailto:kathrin.schnizer@gmail.com">kathrin.schnizer@gmail.com</a>
        <div class="contact-icons-container">
        <a href="https://linkedin.com/in/kathrin-schnizer-892a82193.com" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="LinkedIn"/>
        </a>
        <a href="github.com/catherinekago" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub"/>
        </a>
        </div>
        </div>
    </>
  )
}
export default Contact