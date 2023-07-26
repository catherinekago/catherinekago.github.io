import React from "react";
import Hero from "../components/landingpage/Hero";
import Section from "../components/atoms/Section";
import ProjectTeaser from "../components/landingpage/ProjectTeaser";
import "./Landingpage.scss";
import Contact from "./Contact";
import Carousel from "../components/landingpage/Carousel";
import { useState, useEffect } from "react";
import ProjectFooter from "../components/case-study-components/ProjectFooter";

const Portfolio = () => {
  let featuredProjects = require("../content.json").portfolio.featuredProjects;
  let additionalProjects =
    require("../content.json").portfolio.additionalProjects;

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

  return (
    <>
      <Hero width={size.width} />
      <Carousel />
      <div
        id="portfolio-main-container"
        class="main-background-container container-white"
      >
        <div class="main-content-container">
          <Section text="Featured projects" />
          {featuredProjects.map((project, index) => (
            <ProjectTeaser
              teaserType="project-featured"
              textPosition={index % 2 === 0 ? "text-left" : "text-right"}
              title={project.title}
              slug={project.slug}
              description={project.description}
              button={project.button}
              link={project.link}
              componentKey={project.componentKey}
              projectType={project.projectType}
              chips={project.chips}
            />
          ))}

          <Section text="Additional projects" />
          <div className="additional-teaser-container">
            <div class="project-pair-container">
              <ProjectTeaser
                teaserType="project-additional"
                textPosition={"text-right"}
                title={additionalProjects.pair1[0].title}
                slug={additionalProjects.pair1[0].slug}
                description={additionalProjects.pair1[0].description}
                button={additionalProjects.pair1[0].button}
                link={additionalProjects.pair1[0].link}
                projectType={additionalProjects.pair1[0].projectType}
                chips={additionalProjects.pair1[0].chips}
              />
              <ProjectTeaser
                teaserType="project-additional"
                textPosition={"text-right"}
                title={additionalProjects.pair1[1].title}
                slug={additionalProjects.pair1[1].slug}
                description={additionalProjects.pair1[1].description}
                button={additionalProjects.pair1[1].button}
                link={additionalProjects.pair1[1].link}
                projectType={additionalProjects.pair1[1].projectType}
                chips={additionalProjects.pair1[1].chips}
              />
            </div>
          </div>
        </div>
      </div>
      <Contact section="true" />
      <ProjectFooter />
    </>
  );
};

export default Portfolio;
