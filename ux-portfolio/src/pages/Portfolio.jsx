import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ProjectTeaser from '../components/ProjectTeaser';
import './Portfolio.scss'

const Portfolio = () => {

    let featuredProjects = require('../content.json').portfolio.featuredProjects;

    return (
        <>
            <Hero />
            <div id="portfolio-main-container" class="main-container">
                <Section text="Featured projects" />
                {featuredProjects.map((project, index) => (
                    <ProjectTeaser teaserType="project-featured" textPosition={index % 2 === 0 ? "text-left" : "text-right"} title={project.title} description={project.description} button={project.button} projectType={project.projectType} chips={project.chips} />
                ))}

            <Section text="Additional projects" />

            </div>

        </>
    );
}

export default Portfolio;