import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";

import CaseStudyHeader from "../../components/case-study-components/CaseStudyHeader";
import CaseStudyOverview from "../../components/case-study-components/CaseStudyOverview";
import CaseStudyDescription from "../../components/case-study-components/CaseStudyDescription";

import SurvEyeHero from "../../assets/images/surveye_hero.png"; // TODO REPLACE
import icon_role from "../../assets/icons/quotes.svg";
import icon_tools from "../../assets/icons/tools.svg";
import icon_duration from "../../assets/icons/duration.svg";

const MVP = () => {
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

  const roleText = ["Designer (support)"];
  const toolsText = ["Figma, Dovetail"];
  const durationText = ["October 2021 - June 2022", "(TODO mo. total)"];

  const title = "Building an MVP";
  const overview =
    "Facilitating streamlined data collection and collaboration within an organization's network, empowering them to make well-informed strategic decisions.";
  const challenge =
    "Companies strive to obtain crucial firsthand data from their partner organizations, which is essential for  making well-informed strategic decisions. However, engaging partner organizations in data collection proves difficult due to various factors. These organizations are facing requests from numerous companies seeking their data, for which they struggle to determine where to begin, what specific data to provide, and how to navigate multiple platforms and formats through which data is requested. This obstacle limits effective data sharing and collaboration, hindering companies from gaining access to the valuable insights they require.";
  const solution =
    "A scalable and user-friendly software platform. Partner organizations can conveniently input their data once and effortlessly share it with multiple companies. To simplify the process, they receive guidance and educational support, ensuring they understand the requirements for reporting the necessary data accurately. Additionally, the software provides recommendations to help partner organizations enhance the quality of their data based on the information they have provided. By streamlining data sharing and offering valuable insights, our solution empowers partner organizations to efficiently collaborate with companies, fostering better decision-making.";
  const description = (
    <CaseStudyDescription
      roleIcon={icon_role}
      roleText={roleText}
      toolsIcon={icon_tools}
      toolsText={toolsText}
      durationIcon={icon_duration}
      durationText={durationText}
    />
  );

  return (
    <>
      {/* Hero */}
      <CaseStudyHeader title={title} text={overview} image={SurvEyeHero} />
      <CaseStudyOverview
        challenge={challenge}
        solution={solution}
        description={description}
      />
    </>
  );
};

export default MVP;
