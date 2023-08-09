import React from "react";
import "./Contact.scss";
import "./../style/style.scss";
import linkedin from "../assets/icons/linkedin-mark-white.svg";
import github from "../assets/icons/github-mark-white.svg";
import Section from "../components/atoms/Section";

const Contact = (props) => {
  return (
    <div class="main-background-container container-dark">
      <div class="section-block">
        {props.section === "true" ? (
          <Section variant="section-light" text="Contact" />
        ) : null}
        <div class="content-vertical-small main-content-container contact-container">
          <a class="link-white e-mail" href="mailto:kathrin.schnizer@gmail.com">
            kathrin.schnizer@gmail.com
          </a>
          <p class="text-l text-light">
            Are you passionate about empowering and improving lives through
            design? Or perhaps you're seeking a skilled rogue wood elf for your
            next DND campaign? Either way, reach out and let's have a chat! 🙌
          </p>
          <div class="contact-icons-container">
            <a
              href="https://www.linkedin.com/in/kathrin-schnizer-892a82193/"
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
    </div>
  );
};

export default Contact;
