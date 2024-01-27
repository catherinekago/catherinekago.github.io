import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";

import CaseStudyDescription from "../../components/case-study-components/CaseStudyDescription";
import GazeHero from "../../assets/images/GazeVisualImpairment/gaze_hero.png";
import LoadingScreen from "../LoadingScreen";

import durationIcon from "../../assets/icons/schedule.svg";
import surveyeTaskFlowHorizontal from "../../assets/images/surveye_task_flow_horizontal.svg";

import voiceIcon from "../../assets/icons/voice.svg";
import gazeIcon from "../../assets/icons/gaze.svg";
import magnifierIcon from "../../assets/icons/magnifier.svg";
import deblurIcon from "../../assets/icons/deblur.svg";
import invisibleIcon from "../../assets/icons/invisible.svg";
import feedbackIcon from "../../assets/icons/feedback.svg";
import zoomIcon from "../../assets/icons/zoom.svg";
import pauseIcon from "../../assets/icons/pause.svg";
import pathIcon from "../../assets/icons/path.svg";
import anchorIcon from "../../assets/icons/anchor.svg";
import animationIcon from "../../assets/icons/animation.svg";
import spaceIcon from "../../assets/icons/space.svg";
import icon_interaction from "../../assets/icons/interaction.svg";
import icon_inclusive from "../../assets/icons/inclusive.svg";
import icon_diamond from "../../assets/icons/diamond.svg";

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

  const alternativesCardContainer = (
    <div class="main-content card-group">
      <div class="card-container container-grey-light">
        <div class="card-icon-text-container">
          <img
            class="icon-medium"
            src={voiceIcon}
            alt="An icon displaying voice"
          />
          <h3>Voice</h3>
        </div>
        <div class="card-content-container">
          <p class="text-l" style={{ color: "#252b33" }}>
            {" "}
            <span class="text-title">independent ✓</span>
          </p>
          <p
            style={{
              color: "#9A9A9A",
              opacity: "50%",
              textDecoration: "line-through",
            }}
            class="text-l"
          >
            <span class="text-title">anonymous</span>
          </p>
        </div>
      </div>

      <div class="card-container container-grey-light">
        <div class="card-icon-text-container">
          <img
            class="icon-medium"
            src={gazeIcon}
            alt="An icon showing an eye"
          />
          <h3>Gaze</h3>
        </div>
        <div class="card-content-container">
          <p class="text-l" style={{ color: "#252b33" }}>
            <span class="text-title">independent ✓</span>
          </p>
          <p class="text-l" style={{ color: "#252b33" }}>
            <span class="text-title">anonymous ✓</span>
          </p>
        </div>
      </div>
    </div>
  );

  const listItemsQuestions = [
    {
      icon: (
        <img
          class="icon-small"
          src={magnifierIcon}
          alt="An icon showing a magnification glass"
        />
      ),
      headline: "Allow for initial inspection",
      text: "In gaze-based interaction, the eyes are used for both inspecting and selecting elements, which may lead to unintentional selection. Therefore, it is important to enable users to inspect their options before making a selection.",
    },
    {
      icon: (
        <img
          class="icon-small"
          src={deblurIcon}
          alt="An icon showing a deblur effect, where a round shape is half pixelated, and half sharp"
        />
      ),
      headline: "Consider varying accuracy",
      text: "Maximize the size of interaction elements to ensure successful selection, and, additionally, identify the minimal sufficient size based on the eye-tracking technology's accuracy.",
    },
    {
      icon: (
        <img
          class="icon-small"
          src={invisibleIcon}
          alt="An icon showing an eye that is crossed out with a line"
        />
      ),
      headline: "Ensure robustness against blinking",
      text: "Blinking is a natural behavior that humans can only control to a certain extend. By setting the bottom border of interaction elements equal to the bottom border of the screen, you can ensure that blinking will not interrupt interaction that requires gaze fixation.",
    },
    {
      icon: (
        <img
          class="icon-small"
          src={feedbackIcon}
          alt="An icon showing a speech bubble with a star inside"
        />
      ),
      headline: "Provide visual feedback",
      text: "Support the user by indicating where the system estimates their gaze at, which interaction elements are currently being affected by the gaze, and how long the user has to remain fixating on an element in order to select it.",
    },
  ];

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

  const cardGroupItemsOutcome = [
    {
      icon: magnifierIcon,
      text: (
        <p class="text-l">
          Provide a gaze-insensitive{" "}
          <span class="text-l text-title">inspection area</span>
        </p>
      ),
    },
    {
      icon: zoomIcon,
      text: (
        <p class="text-l">
          Minimize required <span class="text-l text-title">saccades</span>
        </p>
      ),
    },
    {
      icon: durationIcon,
      text: (
        <p class="text-l">
          Acknowledge time for <span class="text-l text-title">inspection</span>
        </p>
      ),
    },
    {
      icon: pauseIcon,
      text: (
        <p class="text-l">
          Avoid prolonged <span class="text-l text-title">gaze fixations</span>
        </p>
      ),
    },
    {
      icon: pathIcon,
      text: (
        <p class="text-l">
          Exploit <span class="text-l text-title">object-based attention</span>
        </p>
      ),
    },
    {
      icon: anchorIcon,
      text: (
        <p class="text-l">
          Provide <span class="text-l text-title">visual anchors</span>
        </p>
      ),
    },
    {
      icon: animationIcon,
      text: (
        <p class="text-l">
          Avoid unnecessary <span class="text-l text-title">movement</span>
        </p>
      ),
    },
    {
      icon: spaceIcon,
      text: (
        <p class="text-l">
          Consider target sizes and{" "}
          <span class="text-l text-title">visual spacings</span>
        </p>
      ),
    },
  ];

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
      content={
        <CardGroup
          items={cardGroupItemsOutcome}
          maxPerRow="four"
          textAlign="center"
        />
      }
    />
  );

  const threeReasonsWhy = [
    {
      icon: icon_interaction,
      alt: "An icon displaying a person standing in front of a interaction area in the shape of a whiteboard",
      text: (
        <p class="text-l text-light">
          Firstly, it presented me with an exciting challenge of{" "}
          <span class="text-l text-title text-light">
            truly understanding how humans interact
          </span>{" "}
          with digital interfaces in the context of gaze-based design.
        </p>
      ),
    },
    {
      icon: icon_inclusive,
      alt: "An icon displaying three persons with a heart symbol in front of them.",
      text: (
        <p class="text-l text-light">
          Secondly, working on something that{" "}
          <span class="text-l text-title text-light">
            contributes towards shaping a more accessible and inclusive digital
            world{" "}
          </span>{" "}
          was incredibly fulfilling.
        </p>
      ),
    },
    {
      icon: icon_diamond,
      alt: "An icon displaying a diamond.",
      text: (
        <p class="text-l text-light">
          Lastly, this project provided me with the opportunity{" "}
          <span class="text-l text-title text-light">
            to see a project through from the research and design stages to the
            implementation and evaluation phases.
          </span>{" "}
          This comprehensive experience has left me feeling excited, proud, and
          genuinely confident in the value of my work.
        </p>
      ),
    },
  ];

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
