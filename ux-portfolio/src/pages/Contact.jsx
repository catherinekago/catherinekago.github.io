import React from "react";
import "./Contact.scss";
import "./../style/style.scss";
import linkedin from "../assets/icons/linkedin-mark.svg";
import github from "../assets/icons/github-mark.svg";

class Contact extends React.Component {
  render() {
    return (
      <div class="hero">
        <div class="hero-text-container">
          <h1 class="hero-headline">Contact</h1>
          <a href="mailto:kathrin.schnizer@gmail.com">
            kathrin.schnizer@gmail.com
          </a>
          <div class="contact-icons-container">
            <a
              href="https://linkedin.com/in/kathrin-schnizer-892a82193.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="github.com/catherinekago" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
