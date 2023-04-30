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
import magnifierIcon from '../assets/icons/magnifier.svg'
import deblurIcon from '../assets/icons/deblur.svg'
import invisibleIcon from '../assets/icons/invisible.svg'
import feedbackIcon from '../assets/icons/feedback.svg'
import zoomIcon from '../assets/icons/zoom.svg'
import pauseIcon from '../assets/icons/pause.svg'
import pathIcon from '../assets/icons/path.svg'
import anchorIcon from '../assets/icons/anchor.svg'
import animationIcon from '../assets/icons/animation.svg'
import spaceIcon from '../assets/icons/space.svg'

import ProjectSection from './project-pages/ProjectSection';
import ProjectContent from './project-pages/ProjectContent';

import eyeIllustration from '../assets/illustrations/eye_illustration.svg'
import ideationIllustration from '../assets/illustrations/ideation_illustration.svg';
import implementationIllustration from '../assets/illustrations/implementation_illustration.svg';
import userIllustration from '../assets/illustrations/user_illustration.svg';

import surveyeIdeation from '../assets/images/surveye_ideation.svg';
import surveyeInteractionFlow from '../assets/images/surveye_interaction-flow.svg';

import mockup_l1 from '../assets/images/mockup_l1.svg';
import mockup_l2 from '../assets/images/mockup_l2.svg';
import mockup_s1 from '../assets/images/mockup_s1.svg';
import mockup_s2 from '../assets/images/mockup_s2.svg';

import surveyeUserstudyFeedback from '../assets/images/surveye_userstudy-feedback.jpg';

import Section from './atoms/Section';
import ListGroup from './project-pages/ListGroup';
import CardGroup from './project-pages/CardGroup';
import NextProject from './project-pages/NextProject';
import ProjectFooter from './project-pages/ProjectFooter';

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

  const listIemsRequirements = [
    { icon: magnifierIcon, title: "Allow for initial inspection", text: "In gaze-based interaction, the eyes are used  for both inspecting and selecting elements, which can result in unintentional selection. Thus, enable the user to inspect their options prior to selecting." },
    { icon: deblurIcon, title: "Consider varying accuracy of eye-tracking technology", text: "Maximize the size of interaction elements to ensure successful selection, and, additionally, identify the minimal sufficient size based on the eye-tracking technology's accuracy." },
    { icon: invisibleIcon, title: "Provide robustness against blinking", text: "Blinking is a natural behavior that humans can only control to a specific extend. By setting the bottom border of interaction elements equal to the bottom border of the screen, you can ensure that blinking will not interrupt interaction that requires gaze fixation." },
    { icon: feedbackIcon, title: "Provide visual feedback", text: "Support the user by indicating where the system estimates their gaze at, which interaction elements are currently being affected by the gaze, and how long the user has to remain fixating on an element in order to select it." }
  ];

  const cardGroupItemsOutcome = [
    { icon: magnifierIcon, text: <p class='title-medium'>Provide a gaze-insensitive <span style={{ fontWeight: '700' }}>inspection area</span></p> },
    { icon: zoomIcon, text: <p class='title-medium'>Minimize required <span style={{ fontWeight: '700' }}>saccades</span></p> },
    { icon: durationIcon, text: <p class='title-medium'>Acknowledge time for <span style={{ fontWeight: '700' }}>inspection</span></p> },
    { icon: pauseIcon, text: <p class='title-medium'>Avoid prolonged <span style={{ fontWeight: '700' }}>gaze fixations</span></p> },
    { icon: pathIcon, text: <p class='title-medium'>Exploit <span style={{ fontWeight: '700' }}>object-based attention</span></p> },
    { icon: anchorIcon, text: <p class='title-medium'>Provide <span style={{ fontWeight: '700' }}>visual anchors</span></p> },
    { icon: animationIcon, text: <p class='title-medium'>Avoid unnecessary <span style={{ fontWeight: '700' }}>movement</span></p> },
    { icon: spaceIcon, text: <p class='title-medium'>Consider target sizes and <span style={{ fontWeight: '700' }}>visual spacings</span></p> }
  ]


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
        isLast="false"
        content1={<p class='title-medium main-content'>The task flow helped me to define the <span style={{ fontWeight: '700' }}>goal</span> of my solution:</p>}
        content2={<h2 class=" title-extralarge main-content">Enable manually impaired individuals to <span style={{ fontFamily: 'Abril Fatface', fontSize: '40px' }}>independently</span> and <span style={{ fontFamily: 'Abril Fatface', fontSize: '40px' }}>anonymously</span> fill out questionnaires.</h2>}
      />

      <ProjectContent
        spacing="medium"
        isLast="true"
        content1={<p class='title-medium main-content'>I proceeded by investigating <span style={{ fontWeight: '700' }}>alternatives to manual input</span> and analyzed their suitability for my goal.</p>}
        content2={alternativesCardContainer}
      />

      {/* Requirements */}

      <ProjectSection
        type="section"
        flexDirection={"horizontal"}
        section={"Identifying the Requirements"}
        headline={"How to design for gaze input?"}
        text={<p class='title-medium main-content'>With gaze defined as a suitable alternative input, I proceeded by gathering insights from existing research on how to design gaze interfaces and <span style={{ fontWeight: '700' }}>aggregated</span> them into <span style={{ fontWeight: '700' }}>requirements</span> for my subsequent design exploration.</p>}
        image={eyeIllustration}
        imageAlt={"An illustration of an open eye."}
        secondImage={null}
        width={size.width}
      />

      <ProjectContent
        spacing="medium"
        isLast="true"
        content1={<p class='title-medium main-content'>I identified <span style={{ fontWeight: '700' }}>four key requirements</span>:</p>}
        content2={<ListGroup items={listIemsRequirements} />}
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

      <ProjectContent
        spacing="small"
        isLast="false"
        content1={<img class="main-content" src={surveyeIdeation} alt={"Screenshot of the ideation workspace, showing different sketches for gaze-based interface design."} />}
      />

      <ProjectContent
        spacing="medium"
        isLast="true"
        content1={<p class='title-medium main-content'>I then continued with an exploration of the possible <span style={{ fontWeight: '700' }}>states and transitions</span>, as well as how to best provide <span style={{ fontWeight: '700' }}>visual feedback</span> to the user. The <span style={{ fontWeight: '700' }}>interaction flow</span> below showcases the outcome of my exploration of one of the four design variants.</p>}
        content2={<img class="main-content" src={surveyeInteractionFlow} alt={"Screenshot of the the interaction flow of one of the four selected variants, depitcting states and transitions and feedback provided to the user."} />}
      />


      {/* Implementation */}

      <ProjectSection
        type="section"
        flexDirection={"horizontal"}
        section={"Prototypical Implementation"}
        headline={"A React web app for gaze input."}
        text={<p class='title-medium main-content'> I translated my designs into <a class="inline-link" href="https://github.com/catherinekago/surv-eye"><span style={{ fontWeight: '700' }}>concrete interface implementations</span></a> and set up <span style={{ fontWeight: '700' }}>data collection algorithms</span> in the background to collect quantitative data during my user testings. To capture gaze input in real-time I used the eye-tracking library <a class="inline-link" href="https://webgazer.cs.brown.edu/"><span style={{ fontWeight: '700' }}>Webgazer</span></a> and adjusted the library to better suit my use case.</p>}
        image={implementationIllustration}
        imageAlt={"A laptop, surrounded by a cup of coffee, a light bulb, color schemes, glasses, and a sketch pad."}
        secondImage={null}
        width={size.width}
      />

      <ProjectContent
        spacing="medium"
        isLast="false"
        content1={<Section text={"Discrete scale interfaces"} />}
        content2={<p class='title-medium main-content'>The first two designs followed two different approaches to enable users <span style={{ fontWeight: '700' }}>to select one out of seven options</span> to respond to a given statement.</p>}
        content3={<div class="content-horizontal"> <img class="img-two-columns" src={mockup_l1} alt={""} /> <img class="img-two-columns" src={mockup_l2} alt={""} /></div>}
      />

      <ProjectContent
        spacing="medium"
        isLast="true"
        content1={<Section text={"Continuous scale interfaces"} />}
        content2={<p class='title-medium main-content'>The other interface variations addressed the task of <span style={{ fontWeight: '700' }}>selecting a value on a continuous scale</span>. As for the previous designs, I asked the participants to select specific values during the testing and think aloud during the interaction.</p>}
        content3={<div class="content-horizontal"> <img class="img-two-columns" src={mockup_s1} alt={""} /> <img class="img-two-columns" src={mockup_s2} alt={""} /></div>}
      />


      {/* User study */}

      <ProjectSection
        type="section"
        flexDirection={"horizontal"}
        section={"Evaluation"}
        headline={"I tested my designs with 16 individuals."}
        text={<p class='title-medium main-content'> During my study, I asked the participants to select the options that were displayed at the top of the interface.
          I also encouraged them to <span style={{ fontWeight: '700' }}>think aloud</span> during the interaction so I could get deeper insights on their perceptions and thoughts.
          Additionally, I  evaluated <span style={{ fontWeight: '700' }}>usability</span> with the <a class="inline-link" href="https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html"><span style={{ fontWeight: '700' }}>SUS</span></a> and <span style={{ fontWeight: '700' }}>workload</span> with the <a class="inline-link" href="https://humansystems.arc.nasa.gov/groups/TLX/"><span style={{ fontWeight: '700' }}>NASA-TLX</span></a> questionnaires.
          My data collection algorithms further measured completion times and errors to back up the qualitative feedback.</p>}
        image={userIllustration}
        imageAlt={"Illustration of six portrait shots."}
        secondImage={null}
        width={size.width}
      />

      <ProjectContent
        spacing="medium"
        isLast="false"
        content1={<Section text={"Raw data"} />}
        content2={<p class='title-medium main-content'>I transferred my transcripts to a Miro board and <span style={{ fontWeight: '700' }}>categorized</span> the qualitative feedback as “positive feedback”, “negative feedback”, and “requests and observations”. I then identified <span style={{ fontWeight: '700' }}>shared themes</span> among the feedback and further clustered the data within their categories.</p>}
        content3={<img class="main-content" src={surveyeUserstudyFeedback} alt={"Screenshot of the ideation user feedback workspace, showing digital sticky notes categorized and further clustered by common themes."} />}
      />

      <ProjectContent
        spacing="medium"
        isLast="true"
        content1={<Section text={"Making sense of it"} />}
        content2={<p class='title-medium main-content'>Based on the insights of the user testing, I was able to derive <span style={{ fontWeight: '700' }}>eight recommendations</span> for both the development of gaze-based interfaces as well as for further research on gaze-based questionnaire design for manually impaired individuals:</p>}
        content3={<CardGroup items={cardGroupItemsOutcome} />}
      />

      <NextProject
        project="Climatepartner YOU"
        button="View Case Study"
        link="/cp-you"
      />

      <ProjectFooter />


    </>

  )
}




export default SurvEye;