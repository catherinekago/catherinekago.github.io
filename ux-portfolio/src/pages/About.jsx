import React from "react";
import { useState, useEffect } from "react";
import "../components/case-study-components/CaseStudyStyles.scss";
import "../style/style.scss";
import { Link } from "react-router-dom";

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
    <>
      {" "}
      <p class="text-l primaryMain">
        As a UX/UI designer, I have a genuine interest in creating user-friendly
        experiences and a particular passion for health tech and assistive
        technologies, aiming to enhance the quality of life for every human
        being. My strengths lie in swift comprehension, organized
        problem-solving, and persistent determination to understand and address
        real needs of real humans. Guided by values of responsibility,
        ownership, efficiency, and authenticity, I am committed to designing
        solutions{" "}
        <span class="text-l text-title">
          {" "}
          that contribute to a meaningful, delightful and accessible digital
          world.
        </span>
      </p>
    </>
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
            rel="noreferrer"
          >
            Fritz-Felsenstein-Haus
          </a>
          , a center for individuals with physical and multiple disabilities, I
          took part in speech therapy sessions, classes, and leisure activities
          with children and young adults facing diverse medical conditions.
          Engaging with therapists, caregivers, teachers, and the children
          themselves, I developed a profound interest in assistive technologies
          and their potential to
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
          areas: user experience and assistive technologies. In my final thesis,
          I had the opportunity to collaborate with individuals who had{" "}
          <Link
            class="text-l primaryDark inline-link"
            target="_blank"
            to={"/surveye"}
            rel="noreferrer"
          >
            manual impairments
          </Link>{" "}
          and{" "}
          <Link
            class="text-l primaryDark inline-link"
            target="_blank"
            to={"/gaze-visual-impairment"}
            rel="noreferrer"
          >
            visual impairments
          </Link>
          , conducting user-centered evaluations of suitable assisitve
          technology design.
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
            rel="noreferrer"
          >
            ClimatePartner
          </a>
          , where I am involved in the design of human interaction with a search
          tool using AI to perform automized mapping of data. In my role as a
          part of a product team consisting of a Product Owner, a Domain Expert,
          a Data Expert, and two developers, I perform user research, product
          ideation, design, user testing, design refinement and hand-off
          preparation, as well as ongoing product improvement and development.
        </p>
      ),
    },
    {
      icon: food,
      alt: "An icon displaying chopsticks grasping ramen out of a bowl",
      text: (
        <p class="text-l primaryMain">
          Apart from design, I find joy in creating and savoring delicious food
          with great company. When visiting a foreign country, I get all excited
          to explore local supermarkets to discover local products.
          Additionally, I cherish the quiet mornings spent in the park, looking
          out for squirrels.
        </p>
      ),
    },
  ];

  const skills = {
    General: [
      "User Research",
      "User Testing",
      "UX Flows",
      "Digital Prototyping",
      "UI Acceptance",
      "Frontend Development",
    ],
    Tools: ["Figma", "Miro", "FigJam", "Dovetail", "Condens"],
    Engineering: ["HTML & CSS", "JavaScript", "Java", "Android"],
  };

  return (
    <>
      <div class={"main-background-container container-white"}>
        <div class="content-horizontal main-content-container">
          <h1>
            Hi, I am Kathrin. <br />
            UX/UI designer based in Munich.{" "}
          </h1>
        </div>
      </div>
      <div class={"main-background-container container-grey"}>
        <div class="content-horizontal main-content-container">
          {/* <img
            class="avatar"
            src={portrait}
            alt={"A back and white portrait of me, Kathrin Schnizer."}
          /> */}
          <div class={"content-vertical-small"}>{introText}</div>
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
                , Master of Science, Focus on UX and Assistive Technologies ·
                2024
              </p>

              <p class="text-l primaryMain">
                <span class="text-l text-title">Media Informatics</span>,
                Bachelor of Science, Focus on Human-Computer Interaction · 2021
              </p>

              <p class="text-l primaryMain">
                <span class="text-l text-title">
                  Phonetics and Speech Processing
                </span>
                , Bachelor of Arts, Focus on Psycholinguistics · 2018
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
                  UX/UI Designer · Jan 2024 - present
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p class="text-xxl primaryMain">ClimatePartner</p>

                <p class="text-l primaryMain">
                  UX/UI Designer (Working Student) · May 2020 - Dec 2023
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
                  Student Assistant · 2015 - 2019
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
