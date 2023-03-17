import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ProjectTeaser from '../components/ProjectTeaser';
import './Portfolio.scss'

const Portfolio = () => {

    let featuredProjects = require('../content.json').portfolio.featuredProjects;
    let additionalProjects = require('../content.json').portfolio.additionalProjects;

    return (
        <>
            <Hero />
            <div id="portfolio-main-container" class="main-container">
                <Section text="Featured projects" />
                {featuredProjects.map((project, index) => (
                    <ProjectTeaser teaserType="project-featured" textPosition={index % 2 === 0 ? "text-left" : "text-right"} title={project.title} description={project.description} button={project.button} projectType={project.projectType} chips={project.chips} />
                ))}

                <Section text="Additional projects" />
                <div className="additional-teaser-container">
                        <div class="project-pair-container">
                                <ProjectTeaser teaserType="project-additional" textPosition={"text-right"} title={additionalProjects.pair1[0].title} description={additionalProjects.pair1[0].description} button={additionalProjects.pair1[0].button} projectType={additionalProjects.pair1[0].projectType} chips={additionalProjects.pair1[0].chips} />
                              <ProjectTeaser teaserType="project-additional" textPosition={"text-right"} title={additionalProjects.pair1[1].title} description={additionalProjects.pair1[1].description} button={additionalProjects.pair1[1].button} projectType={additionalProjects.pair1[1].projectType} chips={additionalProjects.pair1[1].chips} />

                        </div>
                
                </div>
            </div>

        </>
    );
}

export default Portfolio;