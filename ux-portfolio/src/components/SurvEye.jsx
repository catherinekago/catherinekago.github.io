import React from 'react';
import './../style/style.scss'
import ProjectHero from './project-pages/ProjectHero';
import ProjectDescription from './project-pages/ProjectDescription';
import SurvEyeHero from '../assets/images/SurvEye.svg';
import typeIcon from '../assets/icons/quotes.svg';
import stagesIcon from'../assets/icons/timeline.svg';
import durationIcon from '../assets/icons/schedule.svg';

const SurvEye = () => {
    const heroTitle = "SurvEye";
    const heroText = "TODO, some text about what this project is about."

    const typeText = ["Bachelor Thesis (solo)"];
    const stagesText = ["User research", "Wireframes, UI Design", "Frontend", "User testing", "Insight sharing"];
    const durationText = ["June 2021 - Dec 2021", "(6 mo. total)"]

    return (
        <>
            <ProjectHero title={heroTitle} text={heroText} image={SurvEyeHero}/>
            <ProjectDescription typeIcon={typeIcon} typeText={typeText} stagesIcon={stagesIcon} stagesText={stagesText} durationIcon={durationIcon} durationText={durationText} />
        </>

    )
} 




export default SurvEye;