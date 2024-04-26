import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";
import "./../../components/case-study-components/CarouselProject.scss";

import CPYouHero from "../../assets/images/CPYou/you_hero.svg";
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

  const roleText = ["Lead Researcher, Lead Designer"];
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
        content={[block_1, block_2, block_3, block_4]}
      />

      <CaseStudyContent color="grey" content={[]} />

      <NextProject
        project="Facilitating Data Collection"
        button="View Project"
        link="/data-collection"
      />
    </>
  );
};

export default AImatching;
