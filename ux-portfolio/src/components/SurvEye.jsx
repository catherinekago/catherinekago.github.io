import React from 'react';
import { useState, useEffect } from "react";
import './../style/style.scss'

import ProjectDescription from './project-pages/ProjectDescription';
import SurvEyeHero from '../assets/images/SurvEye.svg';
import typeIcon from '../assets/icons/quotes.svg';
import stagesIcon from '../assets/icons/timeline.svg';
import durationIcon from '../assets/icons/schedule.svg';
import surveyeTaskFlowHorizontal from '../assets/images/surveye_task_flow_horizontal.svg'
import surveyeTaskFlowVertical from '../assets/images/surveye_task_flow_vertical.svg'
import voiceIcon from '../assets/icons/voice.svg'
import gazeIcon from '../assets/icons/gaze.svg'

import ProjectSection from './project-pages/ProjectSection';
import ProjectContent from './project-pages/ProjectContent';

import eyeIllustration from '../assets/illustrations/eye_illustration.svg'
import ideationIllustration from '../assets/illustrations/ideation_illustration.svg';
import implementationIllustration from '../assets/illustrations/implementation_illustration.svg';
import userIllustration from '../assets/illustrations/user_illustration.svg';

import github from '../assets/icons/github.png'

import Section from './atoms/Section';

const SurvEye = () => {

  const size = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const heroTitle = "SurvEye";
  const heroText = "TODO, some text about what this project is about."

  const typeText = ["Bachelor Thesis (solo)"];
  const stagesText = ["User research", "Wireframes, UI Design", "Frontend", "User testing"];
  const durationText = ["June 2021 - Dec 2021", "(6 mo. total)"]

  const alternativesCardContainer = (
    <div class="main-content card-group">
      <div class="card-container container-gray">
        <div class="card-icon-text-container">
          <img class="icon-medium" src={voiceIcon} alt="" />
          <h3>Voice</h3>
        </div>
        <div class="card-content-container">
          <p class='title-medium' style={{ color: "#6F8463" }}> <span style={{ fontWeight: '700' }}>independent</span></p>
          <p style={{ color: "#9A9A9A", opacity: "50%", textDecoration: "line-through" }} class='title-medium'><span style={{ fontWeight: '700' }}>anonymous</span></p>
        </div>
      </div>

      <div class="card-container container-primary">
        <div class="card-icon-text-container">
          <img class="icon-medium" src={gazeIcon} alt="" />
          <h3>Gaze</h3>
        </div>
        <div class="card-content-container">
          <p class='title-medium' style={{ color: "#6F8463" }}><span style={{ fontWeight: '700' }}>independent</span></p>
          <p class='title-medium' style={{ color: "#6F8463" }}><span style={{ fontWeight: '700' }}>anonymous</span></p>
        </div>
      </div>
    </div>)


  return (
    <>
      {/* Hero */}

      <ProjectSection
        type="hero"
        flexDirection={"horizontal"}
        headline={heroTitle}
        text={<p class='title-medium main-content'>{heroText}</p>}
        image={SurvEyeHero}
        imageAlt={"A mockup of the surveye interface: it shows a likert item with the statement 'Snape was a good guy' and options ranging from 'strongly disagree' to 'strongly agree' to select."}
        secondImage={null}
        width={size.width}
      />

      <ProjectDescription typeIcon={typeIcon} typeText={typeText} stagesIcon={stagesIcon} stagesText={stagesText} durationIcon={durationIcon} durationText={durationText} />

      {/* Setting the scene */}

      <ProjectSection
        type="section"
        flexDirection={"vertical"}
        section={"Setting the scene"}
        headline={"What's the issue?"}
        text={<p class='title-medium main-content'>I did a first investigation of existing research on how manually impaired individuals interact with paper-based or digital questionnaires and translated my findings into a <span style={{ fontWeight: '700' }}>task flow</span>:</p>}
        image={surveyeTaskFlowHorizontal}
        imageAlt={"Task flow for SurvEye: manually impaired user participates in research, has to fill out a paper-based or digital prototype. If there is assistance available, user might provide biased answers. Without assistance the user fails to fill out the questionnaire. Either way, current questionnaire design lead sto an underrepresentation of manually impaired users in research."}
        secondImage={surveyeTaskFlowVertical}
        width={size.width}
      />

      <ProjectContent
        spacing="small"
        content1={<p class='title-medium main-content'>The task flow helped me to define the <span style={{ fontWeight: '700' }}>goal</span> of my solution:</p>}
        content2={<h2 class=" title-extralarge main-content">Enable manually impaired individuals to <span style={{ fontFamily: 'Abril Fatface', fontSize: '40px' }}>independently</span> and <span style={{ fontFamily: 'Abril Fatface', fontSize: '40px' }}>anonymously</span> fill out questionnaires.</h2>}
      />

      <ProjectContent
        spacing="medium"
        content1={<p class='title-medium main-content'>I proceeded by investigating <span style={{ fontWeight: '700' }}>alternatives to manual input</span> and analyzed their suitability for my goal.</p>}
        content2={alternativesCardContainer}
        content3={<p class='title-medium main-content'>I found gaze input to meet the user requirements and decided to move on towards exploring how to design interaction for gaze-based questionnaires.</p>}
      />

      {/* Requirements */}

      <ProjectSection
        type="section"
        flexDirection={"horizontal"}
        section={"Identifying the Requirements"}
        headline={"How to design for gaze input?"}
        text={<p class='title-medium main-content'>As a starting point, I gathered insights from existing research on how to design gaze interfaces and <span style={{ fontWeight: '700' }}>aggregated</span> them into <span style={{ fontWeight: '700' }}>requirements</span> for my subsequent design exploration.</p>}
        image={eyeIllustration}
        imageAlt={"An illustration of an open eye."}
        secondImage={null}
        width={size.width}
      />

      {/* Ideation */}

      <ProjectSection
        type="section"
        flexDirection={"horizontal"}
        section={"Ideation"}
        headline={"Next up: exploring the solution space."}
        text={<p class='title-medium main-content'>With the requirements in mind, I explored different gaze-based interface designs for likert items covering either a discrete or a continuous scale. Together with my supervisor I evaluated the designs and selected the <span style={{ fontWeight: '700' }}>four designs variants with the biggest potential</span>.</p>}
        image={ideationIllustration}
        imageAlt={"An illustration of an astronaut standing on a spaceship, surving past planets."}
        secondImage={null}
        width={size.width}
      />


      {/* Implementation */}

      <ProjectSection
        type="section"
        flexDirection={"horizontal"}
        section={"Prototypical Implementation"}
        headline={"A React web app for gaze input."}
        text={<p class='title-medium main-content'> I translated my designs into <a class="inline-link" href="https://github.com/catherinekago/surv-eye"><span style={{ fontWeight: '700' }}>fully-functioning interface implementations</span></a> and set up <span style={{ fontWeight: '700' }}>data collection algorithms</span> in the background to collect quantitative data during my user testings. To capture gaze input in real-time I used the eye-tracking library <a class="inline-link" href="https://webgazer.cs.brown.edu/"><span style={{ fontWeight: '700' }}>Webgazer</span></a> and adjusted the library to better suit my use case.</p>}
        image={implementationIllustration}
        imageAlt={"A laptop, surrounded by a cup of coffee, a light bulb, color schemes, glasses, and a sketch pad."}
        secondImage={null}
        width={size.width}
      />

      {/* User study */}

      <ProjectSection
        type="section"
        flexDirection={"horizontal"}
        section={"Evaluation"}
        headline={"I tested my interfaces with 16 individuals."}
        text={<p class='title-medium main-content'> I asked the participants to interact with the four interface variants. I collected <span style={{ fontWeight: '700' }}>qualitative feedback</span> and evaluated <span style={{ fontWeight: '700' }}>usability</span> with the <a class="inline-link" href="https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html"><span style={{ fontWeight: '700' }}>SUS scale</span></a> and <span style={{ fontWeight: '700' }}>workload</span> with the <a class="inline-link" href="https://humansystems.arc.nasa.gov/groups/TLX/"><span style={{ fontWeight: '700' }}>NASA-TLX questionnaire</span></a>. Additionnally, task completion time and error rate were recorded during the testings.</p>}
        image={userIllustration}
        imageAlt={"Illustration of six portrait shots."}
        secondImage={null}
        width={size.width}
      />



    </>

  )
}




export default SurvEye;