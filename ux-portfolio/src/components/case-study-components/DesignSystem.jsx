import React from "react";
import { useState, useEffect } from "react";
import "./CaseStudyStyles.scss";
import "../../style/style.scss";
import bgDark from "./../../assets/backgrounds/bg-black.jpg";

import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyOverview from "./CaseStudyOverview";
import CaseStudyDescription from "./CaseStudyDescription";
import CaseStudySection from "./CaseStudySection";
import CaseStudyContent from "./CaseStudyContent";
import ContentBlock from "./ContentBlock";
import NextProject from "./NextProject";
import ProjectFooter from "./ProjectFooter";

import icon_role from "../../assets/icons/quotes.svg";
import icon_tools from "../../assets/icons/tools.svg";
import icon_duration from "../../assets/icons/schedule.svg";
import icon_inventory from "../../assets/icons/inventory.svg";
import icon_rocket from "../../assets/icons/rocket.svg";
import icon_structure from "../../assets/icons/structure.svg";
import icon_description from "../../assets/icons/description.svg";
import icon_communication from "../../assets/icons/communication.svg";
import icon_child from "../../assets/icons/child.svg";

import image_discovery from "../../assets/illustrations/image_discovery.svg";
import image_design from "../../assets/illustrations/image_design.svg";
import image_outcome from "../../assets/illustrations/image_outcome.svg";
import ItemGroup from "./ItemGroup";

import ds_hero from "./../../assets/images/DesignSystem/ds_hero.svg";
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

  const title = "Design System";
  const overview =
    "In 2021, my employer at the time expanded their product teams for their digital solutions portfolio. Within a short period of time, the number of our designers also increased, and it soon became clear that existing structures had to be adapted to the requirements of the growing design team. In addition to my role as UX designer for a specific digital product, I took on the task of identifying the design team’s requirements for our design system and associated processes, exploring possible solutions collectively in the course of a workshop, and implementing the approach that we identified to address our needs best.";

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
        <p class="text-l text-medium">
          I talked to my design colleagues to gather their perspective on the
          design system and the processes to maintain and extend it. I
          identified the following
          <span class="text-l text-title"> pain points:</span>:
        </p>
      }
      content={
        <ItemGroup
          type="box"
          size="large"
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
        <p class="text-l text-medium">
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
        <p class="text-l text-medium">
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
      headline={<h3>Workshop agenda</h3>}
      text={
        <p class="text-l text-medium">
          My design mentor and I translated the previous findings into agenda
          points for our upcoming workshop which resulted in the following
          structure:
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
      text2={
        <p class="text-l text-medium">
          I further prepared the contents for the defined agenda points and put
          them together in a dedicated Miro board which we then used as a
          workspace for our workshop.
        </p>
      }
    />
  );

  const design_contentblock_2 = (
    <ContentBlock
      size={size}
      headline={<h3>Component release process</h3>}
      text={
        <p class="text-l text-medium">
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
        <p class="text-l text-medium">
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
        <p class="text-l text-medium">
          During the preparation of the workshop, I examined common design
          system approaches and how other companies set up their design systems.
          Based on the inspiration that I found, I identified three possible
          approaches to structure our own design system for which I prepared
          pro’s and con’s in advance. During the workshop, I presented our
          current structure, explained the three approaches and gathered further
          feedback on the suitability of the approaches for our specific use
          case.
        </p>
      }
      content={
        <img class="img-two-columns" src={ds_design_process} alt={"TODO"} />
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
        <p class="text-l text-medium">
          We used the workshop to establish a shared understanding of what needs
          the documentation of our components should address.
          <span class="text-l text-title">
            {" "}
            Together with the design team we discussed location, creator, target
            audience, and content of our documentation,{" "}
          </span>
          which served me as a starting point to propose a template for
          component documentation.
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
        <p class="text-l text-medium">
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
        <p class="text-l text-medium">
          I created a
          <span class="text-l text-title">
            {" "}
            prototypical design system file{" "}
          </span>
          to showcase the proposed design system structure with a small
          selection of our actual components. I scheduled another feedback
          session with the design team to gather feedback on the refined
          proposal. The team found the new structure easy to understand and
          maintain and we decided to give it a shot and apply it to our design
          system.
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
      headline={<h3>Documentation</h3>}
      text={
        <p class="text-l text-medium">
          I rearranged and extended our design system to follow the approved
          structure. Additionally, I introduced a
          <span class="text-l text-title"> documentation template </span>
          for our custom components to record information on component origin,
          usage and behavior. I further used the template to document the
          restructuring process itself to ensure transparency for on the changes
          and the reasoning behind them.
        </p>
      }
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
        <p class="text-l text-medium">
          Together with my design mentor I finalized the component release
          process. I set up the component kindergarden section in our design
          system and introduced it to the team in the next design system
          meeting. We further promoted the new process in the design system
          meeting and I added it to our design system’s documentation. The flow
          underneath showcases how the new process supports us in identifying
          shared needs for components in early stages and enables us to
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

  return (
    <>
      <CaseStudyHeader title={title} text={overview} image={ds_hero} />
      <CaseStudyOverview
        challenge={challenge}
        solution={solution}
        description={description}
      />
      <CaseStudySection
        flexDirection={"horizontal"}
        section={"Discovery"}
        headline={"Diving into the problem space"}
        text={
          <p class="text-l">
            To understand the challenges of our current structures, I gathered
            insights from the users of our design system, namely my design
            colleagues. I further mapped out the current component release
            process and design system structure and did research on existing
            design systems to build a solid understanding for further
            exploration of possible solutions to address the design team’s
            needs.
          </p>
        }
        image={image_discovery}
        imageAlt={
          "An illustration of a female diver surrounded by several fish and a turtle. The diver is reaching with her hand for the turtle. Anemones are covering the ground."
        }
      />

      <CaseStudyContent
        content={[
          discovery_contentblock_1,
          discovery_contentblock_2,
          discovery_contentblock_3,
        ]}
      />

      <CaseStudySection
        flexDirection={"horizontal"}
        section={"Design"}
        headline={"Exploring the solution space"}
        text={
          <p class="text-l">
            The outcome of my initial research was a clear goal: to enhance the
            design system and associated processes to improve transparency and
            alignment on existing and emerging UI components. With the goal
            defined, it was now time to explore possible approaches to achieve
            it. My design mentor and I decided to continue by preparing a
            workshop for the whole design team to collectively refine the
            requirements and evaluate first solution approaches.
          </p>
        }
        image={image_design}
        imageAlt={
          "An illustration of an astronaut surfing on a space ship, passing clouds and different planets."
        }
      />

      <CaseStudyContent
        content={[
          design_contentblock_1,
          design_contentblock_2,
          design_contentblock_3,
          design_contentblock_4,
        ]}
      />

      <CaseStudySection
        flexDirection={"horizontal"}
        section={"Outcome"}
        headline={"Implementing structures and processes"}
        text={
          <p class="text-l">
            We did a debrief on our workshop and revised our follow-up tasks.
            Our next steps included a refined proposal for the new design system
            structure and its implementation, providing a documentation template
            for custom components and introduce the finalized component release
            process to the team and promote it within our weekly design system
            meeting.
          </p>
        }
        image={image_outcome}
        imageAlt={"TODO."}
      />

      <CaseStudyContent
        content={[
          outcome_contentblock_1,
          outcome_contentblock_2,
          outcome_contentblock_3,
          outcome_contentblock_4,
        ]}
      />

      <CaseStudySection
        flexDirection={"horizontal"}
        section={"Reflection"}
        headline={"Wait - it’s that easy? We wish."}
        image={null}
        text={
          <p class="text-l">
            When I introduced the design system and our component release
            process to new design team members, they were consistently surprised
            by the simplicity and the self-explanatory structure and process.
            Nevertheless, we identified new challenges as we progressed. We were
            lacking the role of a design system lead who was responsible for the
            evaluation of new component requests. This slowed down the decision
            and release process and created uncertainty. Also, our process
            proposal did not cover the actual implementation, which means that
            misalignment and double-work were still likely to happen within the
            implementation of components. This project taught me that we as
            designers should regularly evaluate the structures we are working
            with to find opportunitites to improve our workflow.
          </p>
        }
      />

      <NextProject project="TODO" button="View Case Study" link="/cp-you" />

      <ProjectFooter />
    </>
  );
};
export default DesignSystem;
