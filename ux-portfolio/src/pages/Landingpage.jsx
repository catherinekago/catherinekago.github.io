import React from "react";
import Hero from "../components/landingpage/Hero";
import Section from "../components/atoms/Section";
import ProjectTeaser from "../components/landingpage/ProjectTeaser";
import "./Landingpage.scss";
import Contact from "./Contact";
import Carousel from "../components/landingpage/Carousel";
import { useState, useEffect } from "react";
import ProjectFooter from "../components/case-study-components/ProjectFooter";
import LoadingScreen from "./LoadingScreen";
import PasswordModal from "../components/PasswordModal";

const Portfolio = () => {
  let featuredProjects = require("../content.json").portfolio.featuredProjects;
  let additionalProjects =
    require("../content.json").portfolio.additionalProjects;

  const size = useWindowSize();
  const [password, setPasswordRequired] = useState(undefined);
  const [securedLink, setSecuredLink] = useState(undefined);
  const [project, setProject] = useState(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onbeforeunload = function () {
    setLoading(true);
    window.scrollTo(0, 0);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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

  const createOpenPasswordModal = (project, link, password) => {
    return () => {      
      const cache = localStorage.getItem(project)
      if(cache === password) {
        window.location.href = "#" + link;
        // enable for testing
        // localStorage.removeItem(project)
        return
      }

      setPasswordRequired(password)
      setSecuredLink(link)
      setProject(project)
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  }

  const closePasswordModal = () => {
    setPasswordRequired(undefined)
    setSecuredLink(undefined)
    setProject(undefined)
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  const passwordChecker = (secret) => {
    const result = secret === password
    if (result) {
      localStorage.setItem(project, password)
      const link = securedLink
      closePasswordModal()
      window.location.href = "#" + link;
    }
    
    return result
  }

  return (
    <>
      {loading ? <LoadingScreen /> : null}
      <Hero width={size.width} />
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
              onClick={createOpenPasswordModal(project.title, project.link, project.password)}
            />
          ))}

          <Section text="How I work" />
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
      <Carousel />
      <Contact section="true" />
      <ProjectFooter />

      {/* Glassmorphism overlay */}
      {password && (
        <div className="glassmorphism-overlay" onClick={closePasswordModal}></div>
      )}

      {/* Password Modal */}
      {password && <PasswordModal closeModal={closePasswordModal} passwordChecker={passwordChecker}/>}
    </>
  );
};

export default Portfolio;
