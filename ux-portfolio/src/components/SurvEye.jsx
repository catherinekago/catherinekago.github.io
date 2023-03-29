import React from 'react';
import './../style/style.scss'
import ProjectHero from './project-pages/ProjectHero';
import SurvEyeHero from '../assets/images/SurvEye.svg'

const SurvEye = () => {
    const title = "SurvEye";
    const text = "TODO, some text about what this project is about."
    return (
        <ProjectHero title={title} text={text} image={SurvEyeHero}/>
    )
} 




export default SurvEye;