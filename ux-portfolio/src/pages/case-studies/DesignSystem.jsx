import React from "react";
import { useState, useEffect } from "react";
import "../../components/case-study-components/CaseStudyStyles.scss";
import "../../style/style.scss";

import CaseStudyHeader from "../../components/case-study-components/CaseStudyHeader";
import CaseStudyOverview from "../../components/case-study-components/CaseStudyOverview";
import CaseStudyDescription from "../../components/case-study-components/CaseStudyDescription";
import CaseStudyContent from "../../components/case-study-components/CaseStudyContent";
import ContentBlock from "../../components/case-study-components/ContentBlock";
import NextProject from "../../components/case-study-components/NextProject";

import icon_role from "../../assets/icons/quotes.svg";
import icon_tools from "../../assets/icons/tools.svg";
import icon_duration from "../../assets/icons/duration.svg";
import icon_inventory from "../../assets/icons/inventory.svg";
import icon_rocket from "../../assets/icons/rocket.svg";
import icon_structure from "../../assets/icons/structure.svg";
import icon_description from "../../assets/icons/description.svg";
import icon_communication from "../../assets/icons/communication.svg";
import icon_child from "../../assets/icons/child.svg";

import icon_locked from "../../assets/icons/locked.svg";
import icon_code from "../../assets/icons/code.svg";
import icon_evaluation from "../../assets/icons/evaluation.svg";

import ItemGroup from "../../components/groups/ItemGroup";

import ds_hero from "../../assets/images/DesignSystem/ds_hero.svg";
import ds_discovery_process_horizontal from "../../assets/images/DesignSystem/ds_discovery_process_horizontal.png";
import ds_discovery_research from "../../assets/images/DesignSystem/ds_discovery_research.png";
import ds_design_documentation_brainstorming from "../../assets/images/DesignSystem/ds_design_documentation_brainstorming.jpg";
import ds_design_process from "../../assets/images/DesignSystem/ds_design_structure.png";
import ds_outcome_hybrid_approach from "../../assets/images/DesignSystem/ds_design_hybrid_approach.svg";
import ds_outcome_prototypical_implementation from "../../assets/images/DesignSystem/ds_design_prototypical_implementation.png";
import ds_outcome_process_horizontal from "../../assets/images/DesignSystem/ds_outcome_process_horizontal.png";
import ds_outcome_documentation from "../../assets/images/DesignSystem/ds_outcome_documentation.png";

const DesignSystem = () => {
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

  const title = "Design System Rework";
  const overview =
    "Closing the gaps within existing processes and structures to meet the evolving needs of a growing design team.";

  const challenge =
    "With a growing digital product landscape, our design team faced the challenge of maintaining consistency between the different products. We saw the need to improve our current workflow to keep each other in the loop early on in the process of evolving existing components and introducing new ones. On top of that, the structure of our existing design system was not prepared for the anticipated increase of complexity and amount of components.";
  const solution =
    "Based on the insights I gathered in the course of a workshop, I proposed three main adaptations to our current design system and associated processes: an overhaul of our design system structure, templates to facilitate documentation of components, and a release process for new components to improve transparency and alignment within the design team.";
  const roleText = ["UX Designer (lead)"];
  const toolsText = ["Figma, Miro"];
  const durationText = ["Feb 2021 - Apr 2021 (3 mo. total)"];
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

  const discovery_contentblock_1 = (
    <ContentBlock
      size={size}
      headline={<h3>Talking to the user</h3>}
      text={
        <p class="text-l primaryMain">
          To understand the challenges of our current structures, I gathered
          insights from the users of our design system, namely my design
          colleagues. I identified the following
          <span class="text-l text-title"> pain points:</span>:
        </p>
      }
      content={
        <ItemGroup
          type="box"
          size="large"
          background="white"
          items={[
            {
              headline: "Long search time",
              text: "When looking for a component page, users had to scroll through a lot of pages within the side navigation.",
            },
            {
              headline: "Missing documentation",
              text: "Especially for custom components, there was no further explanation on how they should be used, how it behaves and who created it in the first place.",
            },
            {
              headline: "No alignment",
              text: "Designers of different product teams were working on similar components simultaneously without being aware of it. This resulted in double work and in missed opportunities to co-create at an early stage.",
            },
            {
              headline: "Incomplete process",
              text: "There was no streamlined process on when and how to communicate the need for new components within the design team and bring in new components to the design system.",
            },
          ]}
        />
      }
    />
  );

  const discovery_contentblock_2 = (
    <ContentBlock
      size={size}
      headline={<h3>Status quo</h3>}
      text={
        <p class="text-l primaryMain">
          Together with my design mentor,
          <span class="text-l text-title">
            {" "}
            we sketched the current release process{" "}
          </span>
          for new components based on the user insights to visualize the current
          challenges we are facing:
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={ds_discovery_process_horizontal}
          alt={
            "We created a visualisation of the current component release process. It shows how different products individually identify the need for new, complex components, check the design system for existing solutions and do not find any. They then individually start working on the new component, which eventually leads to a current weakness of the process: the coincidental spotting of synergies, which might happen, or not. Then, the designers have the chance to align and do joint design work on the component, gather feedback on the component in the design system meeting, and in the end, the component is eventually, but intransparently released into the design system."
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
          I then continued my investigation by analyzing the current structure
          of our design system and collecting good examples from design systems
          of other companies.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={ds_discovery_research}
          alt={
            "A screenshot of my preparation on a miro board. It shows my investigation of the current status quo of the design system, namely its current structure and components, which are listed on individual stickies. The second part of the research was centered around common approaches to design systems, where I collected screenshots of good examples for design systems and their documentation."
          }
        />
      }
    />
  );

  const design_contentblock_1 = (
    <ContentBlock
      size={size}
      headline={<h3>Workshop preparation</h3>}
      text={
        <p class="text-l primaryMain">
          The outcome of my initial research was a clear goal: to enhance the
          design system and associated processes to improve transparency and
          alignment on existing and emerging UI components. My design mentor and
          I decided to conduct a workshop for the whole design team to
          collectively refine the requirements and evaluate first solution
          approaches. We defined our workshop agenda as follows:
        </p>
      }
      content={
        <ItemGroup
          type="underline"
          size="small"
          items={[
            {
              headline: "Status quo",
              icon: (
                <img
                  class="icon-small"
                  src={icon_inventory}
                  alt="An icon showing a cliboard and a check mark"
                />
              ),
              text: "Reviewing the old design system and presenting the goals for the new design system",
            },
            {
              headline: "Component release process",
              icon: (
                <img
                  class="icon-small"
                  src={icon_rocket}
                  alt="An icon showing a launching rocket"
                />
              ),
              text: "Presentation of proposed process and gathering feedback",
            },
            {
              headline: "Design system structure",
              icon: (
                <img
                  class="icon-small"
                  src={icon_structure}
                  alt="An icon showing boxes connected by lines, indicating a structure or hierarchy"
                />
              ),
              text: "Presentation of possible approaches and gathering feedback",
            },
            {
              headline: "Documentation",
              icon: (
                <img
                  class="icon-small"
                  src={icon_description}
                  alt="An icon showing a document"
                />
              ),
              text: "Discussion of four key questions around documentation of our components to gain an understanding of the requirements",
            },
          ]}
        />
      }
    />
  );

  const design_contentblock_2 = (
    <ContentBlock
      size={size}
      headline={<h3>Component release process</h3>}
      text={
        <p class="text-l primaryMain">
          Based on the weaknesses that my design mentor and I discovered in our
          current component release process, we proposed an adaptation of the
          process so it incorporates early highlighting of needs for new
          components, and transparency on the design process of new components.
          We had two main additions to the existing process:
        </p>
      }
      content={
        <ItemGroup
          type="underline"
          size="small"
          items={[
            {
              headline: "Communicating needs and releases",
              icon: (
                <img
                  class="icon-small"
                  src={icon_communication}
                  alt="An icon showing two overlapping speech bubbles"
                />
              ),
              text: "We proposed to use the design system to raise emerging needs for and the release of new components",
            },
            {
              headline: "Component kindergarden",
              icon: (
                <img
                  class="icon-small"
                  src={icon_child}
                  alt="An icon showing a rocking horse"
                />
              ),
              text: "We introduced the component kindergarden, which is a dedicated page in the design system where new components are transparently being worked on",
            },
          ]}
        />
      }
      text2={
        <p class="text-l primaryMain">
          We gathered feedback from our design team on the additions which we
          took with us for a final revision of the proposal in a workshop
          debrief.
        </p>
      }
    />
  );

  const design_contentblock_3 = (
    <ContentBlock
      size={size}
      alignment="horizontal"
      headline={<h3>Design system structure</h3>}
      text={
        <p class="text-l primaryMain">
          Within the workshop, I presented our current structure, and proposed
          three approaches to improve them based on the research I performed and
          led a discussion with the design team to evaluate the suitability of
          the appraoches for our use cases.
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={ds_design_process}
          alt={
            "A screenshot of the information I aggregated to present during the workshop on the topic of the design system structure. It shows three frames, one for the atomic design, one for design systems by alphabet, and one for design systems by purpose. "
          }
        />
      }
    />
  );

  const design_contentblock_4 = (
    <ContentBlock
      size={size}
      alignment="horizontal"
      imgPos="left"
      headline={<h3>Documentation</h3>}
      text={
        <p class="text-l primaryMain">
          We further used the workshop to establish a shared understanding of
          what needs the documentation of our components should address, which
          served me as a starting point to propose a template for component
          documentation.
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={ds_design_documentation_brainstorming}
          alt={
            "A screenshot of the workspace of our workshop where we collectively gathered information on what the documentation of a component should provide. We gathere information around where to document components, who is writing the documentation, for whom it is written, e.g. who is the target group, and finally, what exactly we want to document."
          }
        />
      }
    />
  );

  const outcome_contentblock_1 = (
    <ContentBlock
      size={size}
      alignment="horizontal"
      headline={<h3>Design system structure</h3>}
      text={
        <p class="text-l primaryMain">
          Based on the design team’s feedback, I drafted a 
          <span class="text-l text-title">
            {" "}
            hybrid approach for our design system structure,
          </span>{" "}
          where the components were organized in the manner of the atomic
          design, and within these groups, the components themselves where
          ordered alphabetically.
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={ds_outcome_hybrid_approach}
          alt={
            "A visualisation of the hybrid approach for our design system: it consists of three types of components, atoms, which refer to the theme of the design system, molecules, which are Material UI components, and oragnisms, which are formed by our custom components. Within each of these categories, the components themselves are ordered alphabetically."
          }
        />
      }
    />
  );

  const outcome_contentblock_2 = (
    <ContentBlock
      size={size}
      alignment="horizontal"
      imgPos="left"
      text={
        <p class="text-l primaryMain">
          I created a
          <span class="text-l text-title">
            {" "}
            prototypical design system file{" "}
          </span>
          to showcase the proposed design system structure with a small
          selection of our actual components. I scheduled another feedback
          session with the design team to gather feedback on the refined
          proposal.
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={ds_outcome_prototypical_implementation}
          alt={
            "A screenshot of the prototypical implementation of the proposed design system structure. It shows the following Figma page structure: Overview, Atoms, Molecules and Organisms. For each category of the atomic design system, there are sub-pages with the actual components of the category, ordered alphabetically."
          }
        />
      }
    />
  );
  const outcome_contentblock_3 = (
    <ContentBlock
      size={size}
      alignment="horizontal"
      imgPos="right"
      headline={<h3>Documentation</h3>}
      text={
        <p class="text-l primaryMain">
          I rearranged and extended our design system to follow the approved
          structure. Additionally, I introduced a
          <span class="text-l text-title"> documentation template </span>
          for our custom components to record information on component origin,
          usage and behavior. I further used the template to document the
          restructuring process itself to ensure transparency for on the changes
          and the reasoning behind them.
        </p>
      }
      // MUCHO LOVE <3
      content={
        <img
          class="img-two-columns"
          src={ds_outcome_documentation}
          alt={
            "A screenshot of the documentation template in Figma that I created for our design system. In the header of the template, the designer can add the name of the component and some details. Also, the designer can provide links to a shared components demo, refer to a documentation in Material UI, and link to the archive in case some related component has been moved there. They can indicate the origin of use, which also refers to the creator of the component. Underneath the header, the designer can add information on the component's behavior. In this screenshot, the template is about a notification banner component, and the behavior section shows how the component's animation works."
          }
        />
      }
    />
  );

  const outcome_contentblock_4 = (
    <ContentBlock
      size={size}
      alignment="vertical"
      headline={<h3>Component release process</h3>}
      text={
        <p class="text-l primaryMain">
          Together with my design mentor I finalized the component release
          process. The flow underneath showcases how the new process supports us
          in identifying shared needs for components in early stages and enables
          us to
          <span class="text-l text-title">
            {" "}
            release new components in a more efficient and transparent way.
          </span>
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={ds_outcome_process_horizontal}
          alt={
            "A diagram depicting the new component release process. It still begins with different products first identifying the need for a new, complex component and checking the design system and Material UI for existing component. This is followed by a new strength of the process, where all designers communicate the need for new components in the design system meeting. Togther, they can then identify synergies, and align and do joint design work in the component kindergarden, the new section in the design system where new components are transparently being worked on. Then, they receive feedback on the component in the design system meeting and finally, the last strength of this process, the component is graduating from the component kindergarden, which refers to a visible step of the final component release."
          }
        />
      }
    />
  );

  const threeReasonsWhy = [
    {
      icon: icon_evaluation,
      alt: "An icon displaying a check mark surrounded by circling arrows that indicate an ongoing process.",
      text: (
        <p class="text-l text-light">
          When I introduced the design system and our component release process
          to new design team members, they were consistently surprised by{" "}
          <span class="text-l text-title text-light">
            the simplicity and the self-explanatory structure and process.
          </span>{" "}
          Nevertheless, we were{" "}
          <span class="text-l text-title text-light">
            lacking the role of a design system lead
          </span>{" "}
          who was responsible for the evaluation of new component requests to
          speed up the process and maintain the design system.
        </p>
      ),
    },
    {
      icon: icon_code,
      alt: "An icon displaying a programming terminal with a prompt command.",
      text: (
        <p class="text-l text-light">
          Also, our process proposal did not cover the actual implementation,
          which means that{" "}
          <span class="text-l text-title text-light">
            misalignment and double-work were still likely to happen within the
            implementation{" "}
          </span>{" "}
          of components.{" "}
        </p>
      ),
    },
    {
      icon: icon_locked,
      alt: "An icon displaying a lock.",
      text: (
        <p class="text-l text-light">
          Lastly, we realized that we were oftentimes working in{" "}
          <span class="text-l text-title text-light">
            silos, resulting in isolated local components that never made it
            into the design system.
          </span>{" "}
          To create a holistic, unified experience within our product landscape,
          we focused on exchange and transparency within the design team.
        </p>
      ),
    },
  ];

  return (
    <>
      <CaseStudyHeader title={title} text={overview} image={ds_hero} />
      <CaseStudyOverview
        challenge={challenge}
        solution={solution}
        description={description}
      />

      <CaseStudyContent
        color="white"
        section="Discovery"
        content={[
          discovery_contentblock_1,
          discovery_contentblock_2,
          discovery_contentblock_3,
        ]}
      />

      <CaseStudyContent
        color="grey-light"
        section="Design"
        content={[
          design_contentblock_1,
          design_contentblock_2,
          design_contentblock_3,
          design_contentblock_4,
        ]}
      />

      <CaseStudyContent
        color="white"
        section="Outcome"
        content={[
          outcome_contentblock_1,
          outcome_contentblock_2,
          outcome_contentblock_3,
          outcome_contentblock_4,
        ]}
      />

      <CaseStudyContent
        section="Reflection"
        color="dark"
        content={[
          <ContentBlock
            size={size}
            headline={<h3>Three reasons why...</h3>}
            text={
              <p class="text-l text-light">... this was just the beginning:</p>
            }
            content={threeReasonsWhy.map((item) => (
              <div class={"content-horizontal item-icons"}>
                <img class="icon-extrabig" src={item.icon} alt={item.alt} />
                {item.text}
              </div>
            ))}
          />,
        ]}
      />

      <NextProject project="TODO" button="View Case Study" link="/cp-you" />
    </>
  );
};
export default DesignSystem;
