import React from "react";
import "./Hero.scss";
import ScrollIntoView from "react-scroll-into-view";
import portrait from "../../assets/images/portrait.svg";

const Hero = (props) => {
  return (
    <>
      <div class="main-background-container container-white">
        <div id="home-hero-container" class="main-content-container">
          {props.width < 600 ? (
            <img
              class="illustration-section responsive-img-top"
              src={portrait}
              alt="Portrait of Kathrin Schnizer, the creator of this portfolio."
            />
          ) : null}
          <div id="hero-text-container">
            <h1>Hi, I'm Kathrin.</h1>
            <p class="text-xl">
              UX/UI Designer with a passion for inclusive and assistive
              technologies. Currently, I am designing{" "}
              <span class="text-xl text-title">
                human interaction with AI tools
              </span>{" "}
              to effectively and reliably automate manual processes.
            </p>
            <ScrollIntoView
              behavior="smooth"
              selector="#portfolio-main-container"
            >
              <button className="button-large">View my work</button>
            </ScrollIntoView>
          </div>
          {props.width > 600 ? (
            <img
              class="illustration-section responsive-img-top"
              src={portrait}
              alt="Portrait of Kathrin Schnizer, the creator of this portfolio."
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Hero;
