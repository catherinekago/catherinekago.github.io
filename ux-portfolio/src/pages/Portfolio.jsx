import React from 'react';
import Hero from '../components/portfolio/Hero';
import Section from '../components/atoms/Section';
import ProjectTeaser from '../components/portfolio/ProjectTeaser';
import './Portfolio.scss'
import Contact from '../components/portfolio/Contact';
import Carousel from '../components/portfolio/Carousel';

const Portfolio = () => {

    let featuredProjects = require('../content.json').portfolio.featuredProjects;
    let additionalProjects = require('../content.json').portfolio.additionalProjects;

    return (
        <>
            <Hero />
            <Carousel />
            <div id="portfolio-main-container" class="main-container">
                <Section text="Featured projects" />
                {featuredProjects.map((project, index) => (
                    <ProjectTeaser teaserType="project-featured" textPosition={index % 2 === 0 ? "text-left" : "text-right"} title={project.title} description={project.description} button={project.button} link ={project.link} componentKey={project.componentKey} projectType={project.projectType} chips={project.chips} />
                ))}

                <Section text="Additional projects" />
                <div className="additional-teaser-container">
                    <div class="project-pair-container">
                        <ProjectTeaser teaserType="project-additional" textPosition={"text-right"} title={additionalProjects.pair1[0].title} description={additionalProjects.pair1[0].description} button={additionalProjects.pair1[0].button} link={additionalProjects.pair1[0].link} componentKey={"SurvEye"} projectType={additionalProjects.pair1[0].projectType} chips={additionalProjects.pair1[0].chips} />
                        <ProjectTeaser teaserType="project-additional" textPosition={"text-right"} title={additionalProjects.pair1[1].title} description={additionalProjects.pair1[1].description} button={additionalProjects.pair1[1].button} link={additionalProjects.pair1[0].link} componentKey={"SurvEye"} projectType={additionalProjects.pair1[1].projectType} chips={additionalProjects.pair1[1].chips} />

                    </div>

                </div>

                <Section text="Contact" />
                <Contact />

            </div>
        </>
    );
}

export default Portfolio;