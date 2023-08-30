import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";

import CPYouHero from "../../assets/images/CPYou/you_hero.svg";
import LoadingScreen from "../LoadingScreen";
import you_personas from "../../assets/images/CPYou/you_personas.png";
import you_brand from "../../assets/images/CPYou/you_brand.png";

import ProjectHero from "../../components/project-components/ProjectHero";
import CaseStudyDescription from "../../components/case-study-components/CaseStudyDescription";
import CaseStudyOverview from "../../components/case-study-components/CaseStudyOverview";
import ContentBlock from "../../components/case-study-components/ContentBlock";
import CaseStudyContent from "../../components/case-study-components/CaseStudyContent";

const CPYou = () => {
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

  const roleText = ["Researcher, Designer (support)"];
  const toolsText = ["Figma, Dovetail"];
  const durationText = ["June 2021 - Dec 2021", "(6 mo. total)"];

  const title = "ClimatePartner You";
  const challenge =
    "Engaging in climate action requires an understanding of the impact of one's lifestyle on the environment. Acquiring and applying this knowledge to to one’s individual lifestyle takes a significant amount of effort and time.";
  const solution =
    "We created an online calculator to empower individuals to identify their carbon emissions. Our solution focuses on positivity, simplicity, and education to make climate action accessible to users regardless of their climate knowledge.";
  const description = (
    <CaseStudyDescription
      roleText={roleText}
      toolsText={toolsText}
      durationText={durationText}
    />
  );

  const block_1 = (
    <ContentBlock
      size={size}
      alignment="horizontal"
      text={
        <p class="text-l primaryMain">
          We interviewed
          <span class="text-l text-title"> 30+ potential users</span> and
          identified <span class="text-l text-title"> six personas</span> which
          differed in their level of climate knowledge, motivation, and the
          amount of time they were willing to spend to calculate their carbon
          footprint.
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={you_personas}
          alt={
            "A visualization dispalying three cards on top of each other, each of them showing a portrait of a person and a box next to them stating their level of knowledge, motivation, and amount of time. This is an abstract visualization of the personas we created."
          }
        />
      }
    />
  );

  const block_2 = (
    <ContentBlock
      size={size}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          Our target group highly valued peace of mind, a sense of community,
          and credibility. Therefore, we crafted a brand centered around{" "}
          <span class="text-l text-title">
            individuals, a playful spirit, and clarity,
          </span>{" "}
          all aimed at deeply connecting with our intended audience.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={you_brand}
          alt={
            "A visualization dispalying three cards on top of each other, each of them showing a portrait of a person and a box next to them stating their level of knowledge, motivation, and amount of time. This is an abstract visualization of the personas we created."
          }
        />
      }
    />
  );

  return (
    <>
      {loading ? <LoadingScreen /> : null}

      {/* Hero */}
      <ProjectHero
        image={CPYouHero}
        imageAlt="A visualization showing multiple mockups of the mobile version of the product."
      />
      <CaseStudyOverview
        title={title}
        challenge={challenge}
        solution={solution}
        description={description}
      />

      <CaseStudyContent
        color="white"
        section="Understand the target group"
        content={[block_1]}
      />

      <CaseStudyContent
        color="white"
        section="Establish the CP YOU brand"
        content={[block_2]}
      />
    </>
  );
};

export default CPYou;
