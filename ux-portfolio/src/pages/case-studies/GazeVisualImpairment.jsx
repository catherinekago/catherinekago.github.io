import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";

import CaseStudyDescription from "../../components/case-study-components/CaseStudyDescription";
import GazeHero from "../../assets/images/GazeVisualImpairment/gaze_hero.png";
import LoadingScreen from "../LoadingScreen";

import durationIcon from "../../assets/icons/schedule.svg";
import magnifierIcon from "../../assets/icons/magnifier.svg";
import deblurIcon from "../../assets/icons/deblur.svg";
import invisibleIcon from "../../assets/icons/invisible.svg";

import importantIcon from "../../assets/icons/release_alert_FILL0_wght400_GRAD0_opsz24.svg";
import stressIcon from "../../assets/icons/pulse_alert_FILL0_wght400_GRAD0_opsz24.svg";
import tiredIcon from "../../assets/icons/sentiment_worried_FILL0_wght400_GRAD0_opsz24.svg";
import icon_diamond from "../../assets/icons/diamond_FILL0_wght400_GRAD0_opsz24.svg";

import ProjectHero from "../../components/project-components/ProjectHero";
import CaseStudyOverview from "../../components/case-study-components/CaseStudyOverview";
import CaseStudyContent from "../../components/case-study-components/CaseStudyContent";
import ContentBlock from "../../components/case-study-components/ContentBlock";
import NextProject from "../../components/case-study-components/NextProject";

import gazeQuestions from "../../assets/images/GazeVisualImpairment/gaze-questions.png";
import gazeSecondaryResearch from "../../assets/images/GazeVisualImpairment/gaze-secondary-research.png";
import gazeHighlights from "../../assets/images/GazeVisualImpairment/gaze-highlights.png";

import mockup from "../../assets/images/mockup.png";

import surveyeUserstudyFeedback from "../../assets/images/surveyeUserstudyFeedback.jpg";

import CardGroup from "../../components/groups/CardGroup";
import ItemGroup from "../../components/groups/ItemGroup";

const GazeVisualImpairment = () => {
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

  const roleText = ["Researcher, Designer, Developer (solo)"];
  const toolsText = ["Condens, Miro, Unity"];
  const durationText = ["July 2023 - Dec 2023", "(6 mo. total)"];

  const title = "Gaze and Visual Impairment";
  const overview =
    "For my master's thesis, I had the opportunity to combine two areas of great interest to me: assistive technologies and design thinking. ";
  const challenge =
    "Visually impaired individuals face unique challenges in perceiving and expressing gaze, which becomes particularly daunting given the major role it plays as a subconscious channel of communication for sighted individuals. Gaze serves as a powerful nonverbal tool to convey information and make judgments about a person's emotions, attitude, and personality. The inaccessibility of gaze behavior can greatly influence the prospects of visually impaired candidates, underscoring the importance of fostering equal opportunities for all job applicants.";
  const solution =
    "Within six months, I completed a whole cycle of the design thinking process, starting with user interviews to empathize with the target group, define the key user need, ideate potential solutions to address the need, create a working prototype in a VR environment and evaluate my proposals within a user study. As an outcome, I identified further directions, as well as initial guidelines for the design of visual gaze cues.";
  const description = (
    <CaseStudyDescription
      roleText={roleText}
      toolsText={toolsText}
      durationText={durationText}
    />
  );

  const discovery_contentblock_1 = (
    <ContentBlock
      size={size}
      headline={<h3>What is already out there?</h3>}
      text={
        <p class="text-l primaryMain">
          As a first step,{" "}
          <span class="text-l text-title">
            I investigated existing research{" "}
          </span>{" "}
          on gaze behavior, the challenges of visually impaired individuals in
          the context of job interviews, as well as existing assistive
          technologies that aim to address the inaccessibility of information
          for visually impaired individuals in the broader, face-to-face
          conversational context. By bringing this information together, I was
          able to identify{" "}
          <span class="text-l text-title">
            {" "}
            the need for additional primary research to understand the role of
            gaze behavior for visually impaired individuals in the setting of a
            job interview.
          </span>
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={gazeSecondaryResearch}
          alt={
            "A visualization of the different areas I investigated during my phase of secondary research. I displays three branched structures, one for the areas gaze behavior, challenges of visually impaired individuals, and assistive technologies for the conversational context. As an outcome of the research, I identified the concrete information coded through gaze which is inaccessiblet to visually impaired individuals, the general challenges of visually impaired individuals concerning gaze behavior, and what user needs current solutions in the conversational context are already addressing, and their effectiveness and the opportunity space."
          }
        />
      }
    />
  );

  const discovery_contentblock_2 = (
    <ContentBlock
      size={size}
      headline={<h3>Talking to the target group</h3>}
      text={
        <p class="text-l primaryMain">
          With the goal to understand the role of gaze behavior for visually
          impaired job candidates , I conducted{" "}
          <span class="text-l text-title">
            remote user interviews with eight visually impaired individuals.
          </span>{" "}
          I prepared a semi-structured interview outline that covered three main
          areas of interest.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={gazeQuestions}
          alt={
            "A visualization displaying the three question blocks I prepared in my semi-structured interview outline: one block about the role of gaze behavior in job interviews, another one on the general experiences in job interviews with focus on challenges, and a final block on high-level feedback one existing concepts to support visually impaired individuals to express and perceive gaze."
          }
        />
      }
    />
  );

  const discovery_contentblock_3 = (
    <ContentBlock
      size={size}
      text={
        <p class="text-l primaryMain">
          I used{" "}
          <a
            class="inline-link text-l"
            target="_blank"
            href="https://condens.io/"
            rel="noreferrer"
          >
            condens.io
          </a>{" "}
          to automatically transcribe my interview recordings, tag relevant
          insights, and create affinity maps to further cluster my insights.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={gazeHighlights}
          alt={
            "A screenshot of how I organized and grouped my research findings in the research tool condens. For each area of interest, I clustered the findings into reemerging patterns."
          }
        />
      }
    />
  );

  const listItemsQuestions = [
    {
      icon: (
        <img
          class="icon-small"
          src={importantIcon}
          alt="An icon showing an exclamation mark in the center of a star"
        />
      ),
      headline: "Gaze is important",
      text: "The participants stated that either from own experiences or explanations of sighted individuals, they learned about the association of eye contact with respect and attention. Both of which were found to be of great importance in job interviews.",
    },
    {
      icon: (
        <img
          class="icon-small"
          src={stressIcon}
          alt="An icon showing a heart, a line indicating a heartbeat, and an exclamation mark"
        />
      ),
      headline: "Job interviews are stressful",
      text: "Visually impaired job candidates want to present themselves from their best side, and make a positive and capable impression. They experienced that due to their impairment, they had to justify their skills and competence even stronger, as they were frequently confronted with misconceptions on the capabilities of visually impaired individuals, especially in the context of the workforce.",
    },
    {
      icon: (
        <img
          class="icon-small"
          src={tiredIcon}
          alt="An icon showing a tired smiley face"
        />
      ),
      headline: "Expressing gaze is exhausting",
      text: "Visually impaired job candidates are putting effort in simulating eye contact although they cannot perceive the eyes of their conversation partner. They want to show their respect and attention, which is why they try to direct their gaze at their partner. However, it requires great effort to focus on something you cannot perceive, and anchor your eyes on.",
    },
    {
      icon: (
        <img
          class="icon-small"
          src={icon_diamond}
          alt="An icon showing a diamond"
        />
      ),
      headline: "Perceiving gaze would add value",
      text: "Visually impaired job candidates have limited capabilities to perceive the interviewer’s gaze. They wish to be able to access this information though, to support them determining the attention of the interviewer. Based on this information, they would expect to gain better insights on how the conversation is developing, if they need to be more persuasive, and to get more insights on how the interviewer reacts to certain topics.",
    },
  ];

  const discovery_contentblock_4 = (
    <ContentBlock
      size={size}
      text={
        <p class="text-l primaryMain">
          The <span class="text-l text-title">key findings</span> of the user
          interviews were as follows:
        </p>
      }
      content={
        <ItemGroup
          type="underline"
          size="small"
          expandable={true}
          length={4}
          items={listItemsQuestions}
        />
      }
    />
  );

  const design_contentblock_1 = (
    <ContentBlock
      size={size}
      // headline={<h3>Exploring the solution space</h3>}
      text={<p class="text-l primaryMain">To be continued...</p>}
    />
  );

  const design_contentblock_2 = (
    <ContentBlock
      size={size}
      headline={<h3>Designing for gaze</h3>}
      text={
        <p class="text-l primaryMain">
          With the requirements in mind, I explored different{" "}
          <span class="text-l text-title">gaze-based interface designs</span>{" "}
          for likert items covering either a discrete or a continuous scale.
          Together with my supervisor I evaluated the designs and selected the
          four designs variants with the biggest potential.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={gazeQuestions}
          alt={
            "Screenshot of the ideation workspace, showing different sketches for gaze-based interface design."
          }
        />
      }
    />
  );

  const design_contentblock_3 = (
    <ContentBlock
      size={size}
      text={
        <p class="text-l primaryMain">
          I then continued with an exploration of the possible{" "}
          <span class="text-l text-title">states and transitions</span>, as well
          as how to best provide{" "}
          <span class="text-l text-title">visual feedback</span> to the user.
          The <span class="text-l text-title">interaction flow</span> below
          showcases the outcome of my exploration for one of the design
          variants.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={gazeSecondaryResearch}
          alt={
            "Screenshot of the the interaction flow of one of the four selected variants, depitcting states and transitions and feedback provided to the user."
          }
        />
      }
    />
  );

  const implementation_contentblock_1 = (
    <ContentBlock
      size={size}
      headline={<h3>A gaze-based web application</h3>}
      text={
        <p class="text-l primaryMain">
          I translated my designs into{" "}
          <a
            class="inline-link text-l inverted"
            target="_blank"
            href="https://github.com/catherinekago/surv-eye"
            rel="noreferrer"
          >
            concrete interface implementations
          </a>{" "}
          and set up data collection algorithms in the background to collect
          quantitative data during my user testings. To capture gaze input in
          real-time I used the eye-tracking library{" "}
          <a
            class="inline-link text-l"
            target="_blank"
            href="https://webgazer.cs.brown.edu/"
            rel="noreferrer"
          >
            Webgazer
          </a>{" "}
          and adjusted the library to better suit my use case.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mockup}
          alt={
            "A mockup of the four interface designs. The first one shows a design where the likert scale is divided into seven blocks that cover about half of the screen's height. Once the user's gaze is identified to touch one of the blocks, the selection process begins. For the second one, the likert scale is displayed two times: first in a gaze-insensitive inspection area, and also within a gaze-sensitive interaction area. The user can inspect the question and the corresponding options, and then follow a line connecting the option they want to chose to the corresponding interaction element. The third one shows an interface for a slider component. Within a gaze insensitive inspection area, the user can see the question as well as the slider and its current knob position. Beneath, there is another slider displayed, where the user can look ath the left and right side of the knob to move the knob towards their gaze position. The fourth mockup also depicts a slider interface. Here the user has two buttons spanning 50% of the screen width each, whcih the user can select to control the slider component underneath. Once the user is satisfied, they can drop their gaze to the lower screen border which triggers the knob movement to stop."
          }
        />
      }
    />
  );

  const evaluation_contentblock_1 = (
    <ContentBlock
      size={size}
      headline={<h3>Collecting feedback</h3>}
      text={
        <p class="text-l primaryMain">
          I tested my designs with{" "}
          <span class="text-l text-title">16 individuals.</span> During my study
          I collected quantiative and qualitative feedback. I transferred my
          transcripts to a Miro board and{" "}
          <span class="text-l text-title">
            categorized the qualitative feedback
          </span>{" "}
          as “positive feedback”, “negative feedback”, and “requests and
          observations”, and clustered the feedback according to recurring
          themes.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={surveyeUserstudyFeedback}
          alt={
            "Screenshot of the ideation user feedback workspace, showing digital sticky notes categorized and further clustered by common themes."
          }
        />
      }
    />
  );

  const evaluation_contentblock_2 = (
    <ContentBlock
      size={size}
      headline={<h3>Making sense of it</h3>}
      text={
        <p class="text-l primaryMain">
          Based on the insights of the user testing, I was able to derive{" "}
          <span class="text-l text-title">eight recommendations</span> for the
          design of gaze-based interfaces for manually impaired individuals:
        </p>
      }
    />
  );

  return (
    <>
      {loading ? <LoadingScreen /> : null}

      <ProjectHero
        image={GazeHero}
        imageAlt="A visualization showing multiple mockups of the mobile version of the product."
      />

      {/* Hero */}
      <CaseStudyOverview
        title={title}
        challenge={challenge}
        solution={solution}
        description={description}
      />

      {/* Setting the scene */}

      <CaseStudyContent
        color="white"
        section="Discovery"
        content={[
          discovery_contentblock_1,
          discovery_contentblock_2,
          discovery_contentblock_3,
          discovery_contentblock_4,
        ]}
      />

      {/* Design */}

      <CaseStudyContent
        color="grey-light"
        section="Design"
        content={[
          design_contentblock_1,
          // design_contentblock_2,
          // design_contentblock_3,
        ]}
      />

      {/* Implementation */}
      {/* 
      <CaseStudyContent
        color="white"
        section="Prototypical Implementation"
        content={[implementation_contentblock_1]}
      /> */}

      {/* User study */}

      {/* <CaseStudyContent
        section="Evaluation"
        color="grey-light"
        content={[evaluation_contentblock_1, evaluation_contentblock_2]}
      />

      <CaseStudyContent
        section="Reflection"
        color="dark"
        content={[
          <ContentBlock
            size={size}
            headline={<h3>Three reasons why...</h3>}
            text={
              <p class="text-l text-light">
                ... I absolutely loved working on this project:
              </p>
            }
            content={threeReasonsWhy.map((item) => (
              <div class={"content-horizontal item-icons"}>
                <img class="icon-extrabig" src={item.icon} alt={item.alt} />
                {item.text}
              </div>
            ))}
          />,
        ]}
      /> */}

      <NextProject project="SurvEye" button="View Case Study" link="/surveye" />
    </>
  );
};

export default GazeVisualImpairment;
