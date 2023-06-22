import React from "react";
import { useState, useEffect } from "react";
import "../components/case-study-components/CaseStudyStyles.scss";
import "../style/style.scss";

import ContentBlock from "../components/case-study-components/ContentBlock";
import CaseStudyContent from "../components/case-study-components/CaseStudyContent";

import portrait from "../assets/images/portrait.svg";

const About = () => {
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

  const introText = (
    <p class="text-l primaryMain">
      In university, I found that the structure and layout of the supplementary
      material provided by my professors were extremely challenging for my
      brain. Determined to improve my study experience, I analyzed the
      underlying structure and reorganized the content in a way that would
      enhance memorization. I condensed the content from 1200 slides to less
      than 30 full pages and cleverly printed four pages on a single sheet,
      creating the illusion of less information to process. Employing
      color-coded sections and highlighted keywords, I leveraged my visual
      memory, while supplementing the theory with practical sample solutions to
      facilitate comprehension and application of knowledge. Looking back, I
      realize that this experience unknowingly marked
      <span class="text-l text-title"> my debut in the field of UX/UI.</span>:
    </p>
  );

  return (
    <>
      <div class={"main-background-container container-grey"}>
        <div class="content-horizontal">
          <img
            class="img-small"
            src={portrait}
            alt={
              "A screenshot of the workspace of our workshop where we collectively gathered information on what the documentation of a component should provide. We gathere information around where to document components, who is writing the documentation, for whom it is written, e.g. who is the target group, and finally, what exactly we want to document."
            }
          />
          <div class={"content-vertical-small"}>{introText}</div>
        </div>
      </div>
    </>
  );
};
export default About;
