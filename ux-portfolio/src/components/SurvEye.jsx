import React from 'react';
import { useState, useEffect } from "react";
import './../style/style.scss'
import ProjectHero from './project-pages/ProjectHero';
import ProjectDescription from './project-pages/ProjectDescription';
import SurvEyeHero from '../assets/images/SurvEye.svg';
import typeIcon from '../assets/icons/quotes.svg';
import stagesIcon from'../assets/icons/timeline.svg';
import durationIcon from '../assets/icons/schedule.svg';
import surveyeTaskFlowHorizontal from '../assets/images/surveye_task_flow_horizontal.svg'
import surveyeTaskFlowVertical from '../assets/images/surveye_task_flow_vertical.svg'

import Section from './atoms/Section';

const SurvEye = () => {

    const size = useWindowSize();

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
    const stagesText = ["User research", "Wireframes, UI Design", "Frontend", "User testing", "Insight sharing"];
    const durationText = ["June 2021 - Dec 2021", "(6 mo. total)"]


    return (
        <>
            <ProjectHero title={heroTitle} text={heroText} image={SurvEyeHero} />
            <ProjectDescription typeIcon={typeIcon} typeText={typeText} stagesIcon={stagesIcon} stagesText={stagesText} durationIcon={durationIcon} durationText={durationText} />

            <div class="main-background-container background-white">
                <Section text="Overview" />
                <div class="main-content content-vertical">
                    <h2 class="main-content">Designing gaze-based interactions for digital questionnaires</h2>
                    <p class='title-medium main-content'>TODO</p>
                </div>
            </div>

            <div class="main-background-container background-primary">
                <Section text="Understanding the problem" />
                <div class="main-content content-vertical">
                    <p class='title-medium main-content'>I did a first investigation of existing research on how manually impaired individuals interact with paper-based or digital questionnaires and translated my findings into a <span style={{ fontWeight: '700' }}>task flow</span>:</p>
                    {size.width > 700 ?
                        <img class="main-content" src={surveyeTaskFlowHorizontal} alt="Task flow for SurvEye: manually impaired user participates in research, has to fill out a paper-based or digital prototype. If there is assistance available, user might provide biased answers. Without assistance the user fails to fill out the questionnaire. Either way, current questionnaire design lead sto an underrepresentation of manually impaired users in research." />
                        :
                        <img class="main-content" src={surveyeTaskFlowVertical} alt="Task flow for SurvEye: manually impaired user participates in research, has to fill out a paper-based or digital prototype. If there is assistance available, user might provide biased answers. Without assistance the user fails to fill out the questionnaire. Either way, current questionnaire design lead sto an underrepresentation of manually impaired users in research." />
                    }
                </div>
            </div>

            <div class="main-background-container background-white">
                <Section text="Defining the goal" />
                <div class="main-content content-vertical">
                <p class='title-medium main-content'>The task flow helped me to define the <span style={{ fontWeight: '700' }}>goal</span> of my solution:</p>
                <h2 class=" title-extralarge main-content">Enable manually impaired individuals to <span style={{ fontFamily: 'Abril Fatface', fontSize: '40px'}}>independently</span> and <span style={{ fontFamily: 'Abril Fatface', fontSize: '40px'}}>anonymously</span> fill out questionnaires.</h2>

                </div>   
            </div>


        </>

    )
} 




export default SurvEye;