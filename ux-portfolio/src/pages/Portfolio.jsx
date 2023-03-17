import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ProjectTeaser from '../components/ProjectTeaser';

class Portfolio extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <div class="main-container">
                <Section text="Featured projects" />
                <ProjectTeaser projectType="Uni project" chips={["Research", "Design", "Frontend"]} teaserType="project-featured" textPosition="text-left" title="This is a title" description="This is a description" button="View Case Study"/>
                </div>

            </>
        );
    }

}

export default Portfolio;