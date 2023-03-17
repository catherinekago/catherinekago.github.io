import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';

class Portfolio extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <div class="main-container">
                <Section text="Featured projects" />
                </div>

            </>
        );
    }

}

export default Portfolio;