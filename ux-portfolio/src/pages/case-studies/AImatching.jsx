import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";
import "./../../components/case-study-components/CarouselProject.scss";

import AIHero from "../../assets/images/AImatching/AImatching_hero.png";
import LoadingScreen from "../LoadingScreen";
import NextProject from "../../components/case-study-components/NextProject";

import ProjectHero from "../../components/project-components/ProjectHero";
import CaseStudyDescription from "../../components/case-study-components/CaseStudyDescription";
import CaseStudyOverview from "../../components/case-study-components/CaseStudyOverview";
import ContentBlock from "../../components/case-study-components/ContentBlock";
import CaseStudyContent from "../../components/case-study-components/CaseStudyContent";
import CardGroup from "../../components/groups/CardGroup";

import UserResearch from "../../assets/images/AImatching/AImatching_research.png";
import UserFlow from "../../assets/images/AImatching/AImatching_userflow.png";
import InteractionLevels from "../../assets/images/AImatching/AImatching_interactions.jpg";
import InformationArchitecture from "../../assets/images/AImatching/AImatching_IA.png";
import PoCDesign from "../../assets/images/AImatching/AImatching_PoCDesign.jpg";
import DesignIterations from "../../assets/images/AImatching/AImatching_DesignIterations.jpg";
import FeedbackIllustration from "../../assets/images/AImatching/AImatching_FeedbackIllustration.png";
import DesignOutcome from "../../assets/images/AImatching/AImatching_designoutcome.png";
import FeedbackUsageIllustration from "../../assets/images/AImatching/AImacthing_userusagefeedback.png";

import iconMatching from "../../assets/icons/icon_matching.svg";
import iconModelTraining from "../../assets/icons/icon_modeltraining.svg";
import iconTableRows from "../../assets/icons/icon_tablerows.svg";
import iconGestures from "../../assets/icons/icon_gestures.svg";

const AImatching = () => {
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

  const roleText = ["Researcher, Designer (lead)"];
  const toolsText = ["Figma, Dovetail, Miro, DataDog"];
  const durationText = ["Jan 2024 - present"];

  const title = "It's AI match";
  const challenge =
    "Our consultants faced the daily challenge of manually identifying and mapping the best fitting values of an internal database to customer data which consists of up to 75.000 rows. This process was not only time-consuming but also prone to inconsistencies and errors. However, a successful technical Proof of Concept (PoC) was deployed, demonstrating the capability of AI to propose the best match for each entry in the customer data file simultaneously. This breakthrough presented me with an exciting challenge: to reassess and enhance the consultant's workflow concerning the data matching in light of technological advancements.";
  const solution =
    "Building on top of the PoC, we developed an AI-powered internal tool to assist our consultants in swiftly and confidently finding the best match from recommended options. This approach streamlined the search process, easing the mental burden on our users and offering intelligent support for daily work on customer data. We addressed both the need of identifying the right match and the management of large datasets simultaneously. Additionally, we integrated functionality to learn from user corrections, ensuring a sustainable method for continuously improving the AI model's training data with each use of our tool.";
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
      headline={<h3>Collecting firsthand insights</h3>}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          As the newly assembled team consisting of experts in product
          development, design, data analytics, and software development that
          took on the responsibility to advance the technical PoC, we started
          out with building up a shared understanding of the consultants'
          current workflow. This involved conducting{" "}
          <span class="text-l text-title">four user interviews </span> to gain
          insights into the existing process, its challenges, as well as the
          perceived value and limitations of the PoC.
          <br /> <br /> Afterwards, I analyzed the interviews, extracting{" "}
          <span class="text-l text-title">key insights </span>, structuring them
          for clarity, and{" "}
          <span class="text-l text-title">
            sharing the synthesized findings
          </span>{" "}
          with the team.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={UserResearch}
          alt={
            "Two screenshots side by side, one showing the clustered results of the user research, grouped by type of information: customer data, output, and review. The second screenshot shows the insights in which the findings were aggregated, grouped into customer data, pre-processing, output and review."
          }
        />
      }
      imageDescription={
        "A screenshot of the research respository, illustrating the final clustering of the user insights to the left, and the aggregated top-level findings to right."
      }
      // content={
      // <img
      //   class="img-two-columns"
      //   src={}
      //   alt={
      //     ""
      //   }
      // />
      // }
    />
  );

  const keyConcepts = [
    {
      icon: iconGestures,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">Messy data</span> <br />
          The customer data usually contains duplicates and frequently show
          inconclusive descriptions that require the consultants to manually
          clean up and correct the data.
        </p>
      ),
    },
    {
      icon: iconTableRows,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">Large data</span> <br />
          The customer data usually consists of multiple thousands of rows which
          our consultants have to check and process row by row.
        </p>
      ),
    },
    {
      icon: iconMatching,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">
            Slow, stupid database
          </span>{" "}
          <br />
          The database that holds the values to match has long loading times and
          most of all: querying requires the exact wording - our consultants
          hated that unintuitive thing.
        </p>
      ),
    },
    {
      icon: iconModelTraining,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">
            Insufficient accuracy
          </span>{" "}
          <br />
          The PoC is promising, but it relies on more training data to reach a
          level that consultants can rely upon. Acquiring training data required
          extra work from our consultants.
        </p>
      ),
    },
  ];

  const block_2 = (
    <ContentBlock
      size={size}
      headline={<h3>Understanding the journey</h3>}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          The firsthand user insights provided a crucial foundation for
          visualizing the entire process through a{" "}
          <span class="text-l text-title">
            holistic user flow, capturing the current state{" "}
          </span>{" "}
          comprehensively. Within this visualization, I emphasized the current
          challenges and documented the workarounds that consultants have
          established to adapt to existing processes.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={UserFlow}
          alt={
            "A screenshot of the userflow that was derived from the research, displaying the status quo of the process. It starts with the acquisition of data from the customer, then goes into pre-processing that data. Next up is the section on identifying the best match using either the existing database, the PoC, or external sources, and finishes with the review flow that follows the path of the PoC."
          }
        />
      }
      imageDescription={
        "A screenshot of the overarching user flow that I derived from the user insights. It features the flow from initial customer data to the review process of the AI-tool's suggestions. This served us a visual guidance when prioritizing optimizations and new features to discover."
      }
    />
  );

  const block_3 = (
    <ContentBlock
      size={size}
      headline={<h3>Identifying the pains</h3>}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          We derived four distinct pain points that our tool should address:
        </p>
      }
      content={
        <CardGroup items={keyConcepts} textAlign="center" maxPerRow="four" />
      }
    />
  );

  const block_4 = (
    <ContentBlock
      size={size}
      alignment="horizontal"
      text={
        <p class="text-l primaryMain">
          Additionally, we discovered that these pains ocurred on two distinct,
          yet intertwined levels, which we needed to consider with our solution:{" "}
          <span class="text-l text-title">the micro interaction </span>, and{" "}
          <span class="text-l text-title">the macro interaction. </span>{" "}
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={InteractionLevels}
          alt={
            "A visualization explaining the two interaction levels and how they relate to each other: on the micro level, we identified the need to investigate how we might enable consultants to swiftly determine the optimal match for a single data point. This micro interaction was part of the macro interaction, where we needed to focus on how we might support consultants to perform the reviewing and modifying of suggestions for an extensive data set."
          }
        />
      }
      imageDescription={
        "A conceptual draft that visualizes the two types of interactions we needed to consider and how they relate to each other."
      }
    />
  );

  const sd_block_1 = (
    <ContentBlock
      size={size}
      headline={<h3>Defining the information architecture</h3>}
      alignment="horizontal"
      text={
        <p class="text-l primaryMain">
          The Proof of Concept (PoC) not only provided functionality for
          managing large amounts of data but also featured{" "}
          <span class="text-l text-title">
            a basic single search interface.{" "}
          </span>
          Feedback on the PoC highlighted the value of the currently decoupled
          single search. Consequently, I started an exploration of an{" "}
          <span class="text-l text-title">
            optimal, integrated information architecture{" "}
          </span>
          to join the two tools. This involved conducting user testing with five
          participants, assessing three different information architecture
          approaches. Their feedback guided my decision to proceed with the tab
          variant.
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={InformationArchitecture}
          alt={
            "An overview of the three information architecture concepts that I tested: section,s tabs and cards to organize the single search and the mass data matching. The sections were found to be overwhelming, and that one could easily miss the second section once the first one was expanded. The cards were found to add an unnecessary step to using the single search feature which is the main, daily usecase for lots of consultants. Finally, the tabs seemed to meet the users' expectations best: being directed to the single search on default matched their workflow, and having both options visible at all times increased comfort and was easier to digest."
          }
        />
      }
      imageDescription={
        "The three wireframes showcase the concepts I tested with five users, featuring their quotes from the testing sessions. It was an easy decision - the tabs were exactly what the users were looking for."
      }
    />
  );

  const sd_block_2 = (
    <ContentBlock
      size={size}
      headline={<h3>Examining the PoC design</h3>}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          Now it was time to take a look at the current interface implementation
          for the single matching. The initial feedback that we collected on the
          PoC highlighted a couple of drawbacks of the first release:
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={PoCDesign}
          alt={
            "A screenshot highlighting the current drawbacks of the PoC design. First, it missed information on the capabilities and limitations of the AI tool which might lead to no or incorrect use. Second, the PoC just displayed the suggestions, but did not allow the user to interact with them. Lastly, the layout was not suitable for easy comparison of suggestions, as it focused on the wrong information to compare."
          }
        />
      }
      imageDescription={
        "The screenshot highlights the main challenges of the initial interface design. As the PoC focused on the technical feasibility of the AI-powered matching, the design did not take into account any user need and desired interactions."
      }
    />
  );

  const sd_block_3 = (
    <ContentBlock
      size={size}
      headline={<h3>Iterate and refine</h3>}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          To tackle these drawbacks, I firstly addressed the{" "}
          <span class="text-l text-title">
            inadequate layout and incorporated the requested details.{" "}
          </span>
          I brought it back to two consultants to collect their feedback on the
          design, continuing to then
          <span class="text-l text-title">
            {" "}
            refine the incoporated information{" "}
          </span>
          based on their insights. Another two usability testings later, the
          design was found to meet the requirements of our consultants, and it
          was time to fine-tune the UI. I prepared a
          <span class="text-l text-title">
            {" "}
            design critique session with a fellow design colleague{" "}
          </span>
          to finalize my screens. For the dev handover I prepared
          <span class="text-l text-title">
            {" "}
            specifications and screens to define the responsive behavior{" "}
          </span>
          and shared my workspace with the frontend developer of my team.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={DesignIterations}
          alt={
            "A visualization of the three iterations over my design, demonstrating the progress from firstly focusing on layout and information, to later refine the interactions and UI elements."
          }
        />
      }
      imageDescription={
        "Within two weeks I extensively refined and tested the designs following an iterative approach, focusing on the foundation first, and finishing with polishing and tweaking the UI components to provide visual guidance for the user."
      }
    />
  );

  const sd_block_4 = (
    <ContentBlock
      size={size}
      headline={<h3>An unexpected finding</h3>}
      alignment="horizontal"
      text={
        <p class="text-l primaryMain">
          During the usability tests, two consultants mentioned they would{" "}
          <span class="text-l text-title">
            happily rate the tool's suggestions{" "}
          </span>
          if it could be done swiftly. I saw the opportunity to leverage this
          willingness to generate training data for our model with little effort
          for both sides. I brought this insight back to the team and we decided
          to bring in a simple feedback functionality to enable users to rate
          the suggestions. I added the common design pattern for voting actions
          in the form of thumbs to the design,
          <span class="text-l text-title">
            {" "}
            enabling consultants to indicate good and bad matches.{" "}
          </span>
          Three door tests later, I handed over the design to my frontend
          developer.
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={FeedbackIllustration}
          alt={
            "An illustration showing two individuals holding up big, blue thumb icons."
          }
        />
      }
      imageDescription={""}
    />
  );

  const sd_block_5 = (
    <ContentBlock
      size={size}
      headline={<h3>The final design</h3>}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          I completed the responsive designs, conducted the dev handover, and
          performed the final UI acceptance for the implementation. hared my
          workspace with the frontend developer of my team.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={DesignOutcome}
          alt={
            "A mockup displaying the single search functionality of out AI tool. It demonstrates the integration of the tabs to navigate the single search and the multi matching, the search query component, and the results table."
          }
        />
      }
      imageDescription={""}
    />
  );

  const sd_block_6 = (
    <ContentBlock
      size={size}
      headline={<h3>User feedback</h3>}
      alignment="horizontal"
      text={
        <p class="quote primaryMain">
          "The tool gives me a
          <span class="quote text-title text-primary"> good overview </span> of
          suggestions. I immediately know which one to choose."
          <br /> <br />
          "With the tool, I can just do
          <span class="quote text-title text-primary">
            {" "}
            one search to find all similar database entries,{" "}
          </span>{" "}
          something I cannot do in the database itself.""
          <br /> <br />
          "Searching the database with the new tool is so much
          <span class="quote text-title text-primary"> quicker </span> - it is
          really nice to work with."
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={FeedbackUsageIllustration}
          alt={
            "An illustration showing two individuals jumping happily, surrounded by small colorful symbols expressing happiness."
          }
        />
      }
      imageDescription={""}
    />
  );

  return (
    <>
      {loading ? <LoadingScreen /> : null}
      {/* Hero */}
      <ProjectHero
        image={AIHero}
        imageAlt="A visualization showing the mockup of the AI-based web tool."
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
        content={[block_1, block_2, block_3, block_4]}
      />

      <div class={"main-background-container"}>
        <div class={"main-content-container container-dark"}>
          <div class={"main-content-container headline-description"}>
            <h2>Part 1</h2>
            <p class="text-xl text-light">Matching single data points</p>
          </div>
        </div>
      </div>

      <CaseStudyContent
        color="grey-light"
        section="Explore possible solutions"
        content={[sd_block_1, sd_block_2, sd_block_3, sd_block_4]}
      />
      <CaseStudyContent
        color="grey-light"
        section="Outcome"
        content={[sd_block_5]}
      />
      <CaseStudyContent
        color="grey-light"
        section="Impact"
        content={[sd_block_6]}
      />
      <NextProject
        project="Facilitating Data Collection"
        button="View Project"
        link="/data-collection"
      />
    </>
  );
};

export default AImatching;
