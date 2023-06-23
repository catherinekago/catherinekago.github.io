import React from "react";
import { useState, useEffect } from "react";
import "../components/case-study-components/CaseStudyStyles.scss";
import "../style/style.scss";

import ContentBlock from "../components/case-study-components/ContentBlock";
import CaseStudyContent from "../components/case-study-components/CaseStudyContent";
import Chip from "../components/atoms/Chip";
import portrait from "../assets/images/portrait.svg";
import volunteer from "../assets/icons/volunteer.svg";
import education from "../assets/icons/school.svg";
import work from "../assets/icons/work.svg";
import food from "../assets/icons/food.svg";

import linkedin from "../assets/icons/linkedin-mark-white.svg";
import github from "../assets/icons/github-mark-white.svg";
import Contact from "./Contact";

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
      <span class="text-l text-title"> my debut in the field of UX/UI.</span>
    </p>
  );

  const aboutMeFacts = [
    {
      icon: volunteer,
      alt: "An icon displaying a hand holding a heart",
      text: (
        <p class="text-l primaryMain">
          Through my involvement in a voluntary practical at the{" "}
          <a
            class="text-l primaryDark inline-link"
            target="_blank"
            href="https://www.felsenstein.org/wp/"
          >
            Fritz-Felsenstein-Haus
          </a>
          , a center for individuals with physical and multiple disabilities, I
          immersed myself in a world of speech therapy sessions, classes, and
          leisure activities with children and young adults facing diverse
          medical conditions. Engaging with therapists, caregivers, teachers,
          and the children themselves, I developed a profound interest in
          assistive technologies and their potential to
          <span class="text-l text-title"> empower and enhance lives.</span>
        </p>
      ),
    },
    {
      icon: education,
      alt: "An icon displaying a a graduation hat",
      text: (
        <p class="text-l primaryMain">
          During my further studies in{" "}
          <span class="text-l text-title"> Human-Computer Interaction </span>{" "}
          (B. Sc. and M. Sc.), I directed my attention towards two specific
          areas: user experience and assistive technologies. In my final theses,
          I had the opportunity to collaborate with individuals who had{" "}
          <a class="text-l primaryDark inline-link" href="url">
            manual impairments
          </a>{" "}
          and{" "}
          <a class="text-l primaryDark inline-link" href="url">
            visual impairments
          </a>
          , conducting user-centered investigations and evaluations of suitable
          cue design for assistive technologies.
        </p>
      ),
    },
    {
      icon: work,
      alt: "An icon displaying a rulter and a pencil, positioned over each other to resemble a cross",
      text: (
        <p class="text-l primaryMain">
          Currently, I work as a UX/UI designer at{" "}
          <a
            class="text-l text-title primaryMain link-underline"
            target="_blank"
            href="https://www.climatepartner.com/en?utm_source=google&utm_campaign=1263822618&utm_medium=cpc&utm_content=653770977769&utm_term=climatepartner&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH3w88iD-kn1zCNE3w_dlQhPUxWRZUTMFXssAbZSUZGonKMMIRHiLcMaAiD8EALw_wcB"
          >
            ClimatePartner
          </a>
          , where I have been involved in the design of two digital products
          focused on promoting climate action for private individuals, retail
          businesses, and their supply chains. In my role, I participate in user
          research, product ideation, design, testing, MVP preparation and
          launch, as well as ongoing product improvement and development.
        </p>
      ),
    },
    {
      icon: food,
      alt: "An icon displaying chopsticks grasping ramen out of a bowl",
      text: (
        <p class="text-l primaryMain">
          Apart from design, I find joy in creating and savoring delicious food
          with great company. Additionally, I cherish the quiet mornings spent
          in the park.
        </p>
      ),
    },
  ];

  const skills = {
    General: [
      "UX/UI",
      "Research",
      "UX Flows",
      "Digital Prototyping",
      "Usability Testing",
      "UI Testing",
      "Frontend Development",
    ],
    Design: ["Figma", "Miro"],
    Engineering: ["HTML & CSS", "JavaScript", "Java", "Android"],
  };

  return (
    <>
      <div class={"main-background-container container-white"}>
        <div class="content-horizontal main-content-container">
          <h1>
            Hi, I am Kathrin. <br /> Junior UX/UI designer living in Munich.{" "}
          </h1>
        </div>
      </div>
      <div class={"main-background-container container-grey"}>
        <div class="content-horizontal main-content-container">
          <img
            class="img-small"
            src={portrait}
            alt={
              "A screenshot of the workspace of our workshop where we collectively gathered information on what the documentation of a component should provide. We gathere information around where to document components, who is writing the documentation, for whom it is written, e.g. who is the target group, and finally, what exactly we want to document."
            }
          />
          <div class={"content-vertical"}>{introText}</div>
        </div>
      </div>

      <div class={"main-background-container container-white"}>
        <div class={"main-content-container content-blocks"}>
          <div class="content-vertical item-icons-container">
            {aboutMeFacts.map((item) => (
              <div class={"content-horizontal item-icons"}>
                <img class="icon-extrabig" src={item.icon} alt={item.alt} />
                {item.text}
              </div>
            ))}
          </div>
          <div class="content-vertical item-icons">
            <h3>Education</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <p class="text-xxl primaryMain">University of Munich LMU</p>

              <p class="text-l primaryMain">
                <span class="text-l text-title">
                  Human-Computer Interaction
                </span>
                , Master of Science, Focus in UX and Assistive Technologies ·
                2023
              </p>

              <p class="text-l primaryMain">
                <span class="text-l text-title">Media Informatics</span>,
                Bachelor of Science, Focus in Human-Computer Interaction · 2021
              </p>

              <p class="text-l primaryMain">
                <span class="text-l text-title">
                  Phonetics and Speech Processing
                </span>
                , Bachelor of Arts, Focus in Psycholinguistics · 2018
              </p>
            </div>
          </div>

          <div class="content-horizontal no-group">
            <div class="content-vertical item-icons">
              <h3>Experience</h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p class="text-xxl primaryMain">ClimatePartner</p>

                <p class="text-l primaryMain">
                  Junior UX/UI Designer (Working Student) · May 2020 - Present
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p class="text-xxl primaryMain">University of Munich (LMU)</p>

                <p class="text-l primaryMain">
                  Student Assistant · TODO 2015 - Dec 2019
                </p>
              </div>
            </div>
            <div class="content-vertical item-icons">
              <h3>Skills</h3>
              {Object.keys(skills).map((key) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <p class="text-xxl primaryMain">{key}</p>
                  <div class="chip-row-container">
                    {skills[key + ""].map((chipLabel) => (
                      <Chip chipType="chip-primary" label={chipLabel} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Contact section="false" />
    </>
  );
};
export default About;
