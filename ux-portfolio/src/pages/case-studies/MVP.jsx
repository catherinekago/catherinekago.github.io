import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";

import CaseStudyHeader from "../../components/case-study-components/CaseStudyHeader";
import CaseStudyOverview from "../../components/case-study-components/CaseStudyOverview";
import CaseStudyDescription from "../../components/case-study-components/CaseStudyDescription";
import ItemGroup from "../../components/groups/ItemGroup";
import ContentBlock from "../../components/case-study-components/ContentBlock";
import CaseStudySection from "../../components/case-study-components/CaseStudySection";
import SurvEyeHero from "../../assets/images/surveye_hero.png"; // TODO REPLACE
import CaseStudyContent from "../../components/case-study-components/CaseStudyContent";
import NextProject from "../../components/case-study-components/NextProject";

import mvp_teaser from "../../assets/images/MVP/mvp_teaser.png";
import mvp_discovery_personas from "../../assets/images/MVP/mvp_discovery_personas.svg";
import mvp_discovery_empathy from "../../assets/images/MVP/mvp_discovery_empathy.svg";
import mvp_design_userflow from "../../assets/images/MVP/mvp_design_userflow.svg";
import mvp_trialRun from "../../assets/images/MVP/mvp_design_trial.png";
import mvp_deliveryprep from "../../assets/images/MVP/mvp_partner_product.png";
import mvp_vision from "../../assets/images/MVP/mvp_vision.png";
import mvp_realData from "../../assets/images/MVP/image002.png";

import icon_role from "../../assets/icons/quotes.svg";
import icon_tools from "../../assets/icons/tools.svg";
import icon_duration from "../../assets/icons/duration.svg";

import icon_onboarding from "../../assets/icons/onboarding.svg";
import icon_progress from "../../assets/icons/track_progress.svg";
import icon_registration from "../../assets/icons/registration.svg";
import icon_dataEntry from "../../assets/icons/data_entry.svg";
import icon_knowledge from "../../assets/icons/knowledge.svg";

import icon_support from "../../assets/icons/support.svg";
import icon_company from "../../assets/icons/company.svg";
import icon_partner from "../../assets/icons/partner.svg";

import icon_support_light from "../../assets/icons/icon_support_light.svg";
import icon_company_light from "../../assets/icons/icon_company_light.svg";
import icon_partner_light from "../../assets/icons/icon_partner_light.svg";

import CardGroup from "../../components/groups/CardGroup";

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

  const roleText = ["Designer (team of two)"];
  const toolsText = ["Figma, Dovetail"];
  const durationText = ["October 2021 - June 2022", "(8 mo. total)"];

  const title = "Building an MVP";
  const overview =
    "Facilitating streamlined data collection and collaboration within an organization's network, empowering them to make well-informed strategic decisions.";
  const challenge =
    "Companies strive to obtain crucial firsthand data from their partner organizations, which is essential for making well-informed strategic decisions. However, the partners oftentimes don't know where to begin, how to acquire the requested data, and have to navigate multiple platforms and formats through which data is requested. This obstacle limits effective data sharing and collaboration, hindering companies from gaining access to the valuable insights they require.";
  const solution =
    "We created a scalable platform that streamlines data sharing between partner organizations and multiple companies. It offers a simplified input process with guidance for accurate reporting and provides recommendations to improve data quality based on an analysis of the provided data..";
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
      headline={<h3>Persona interviews</h3>}
      text={
        <p class="text-l primaryMain">
          We conducted
          <span class="text-l text-title"> persona interviews </span>
          with three of our own consultants, as well as two customers and five
          partner companies. We tagged key insights from the protocols that I
          created during the interviews, and through the aggregation of insights
          we highlighted in our debriefs we were able to uncover{" "}
          <span class="text-l text-title"> the primary unmet needs </span> that
          our solution should address:
        </p>
      }
      content={
        <ItemGroup
          type="underline"
          size="small"
          items={[
            {
              headline: "Consultants",
              icon: (
                <img
                  class="icon-small"
                  src={icon_support}
                  alt="An icon showing an individual wearing a headset"
                />
              ),
              text: "... need a standardized process that support them in handling multiple customers’ request to collect data from their partner organizations to reduce administrative work and be able to serve more customers.",
            },
            {
              headline: "Customers",
              icon: (
                <img
                  class="icon-small"
                  src={icon_company}
                  alt="An icon showing two stylistic buildings"
                />
              ),
              text: "... need to access to their partner organizations’ firsthand data to be able to make informed strategic decisions.",
            },
            {
              headline: "Partner organizations",
              icon: (
                <img
                  class="icon-small"
                  src={icon_partner}
                  alt="An icon showing two individuals shaking hands"
                />
              ),
              text: "... need an easy way to fulfill the customers’ data requests because they want to maintain their partnerships.",
            },
          ]}
        />
      }
    />
  );
  const discovery_contentblock_2 = (
    <ContentBlock
      imgType="confidential"
      size={size}
      headline={<h3>Understand the user</h3>}
      text={
        <p class="text-l primaryMain">
          Based on the information we derived from the persona interviews, we
          created
          <span class="text-l text-title"> personas </span>
          to clearly understand their perspective and communicate it our
          stakeholders.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_discovery_personas}
          alt={
            "The image shows the three personas of our stakeholders. The persona displays information on their demographics, values, role description, challenges, needs and opportunities. However, it is an altered version containing less information and more placeholders to maintain confidentiality."
          }
        />
      }
    />
  );

  const discovery_contentblock_3 = (
    <ContentBlock
      imgType="confidential"
      size={size}
      text={
        <p class="text-l primaryMain">
          We further analyzed our interviews to create
          <span class="text-l text-title"> empathy maps </span> to gain
          additional insights on emotions, challenges and needs of our target
          groups and derive first implications for our solution.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_discovery_empathy}
          alt={
            "The image shows Three empathy maps, one for each stakeholder. It is a square that is divided into four quadrants, one for 'say', 'think', 'do' and 'feel', to clearly capture the users internal and external matters. Each quadrant is filled with stickies that hold information relevant to the quadrant. However, it is an altered version containing less information and more placeholders to maintain confidentiality."
          }
        />
      }
      text2={
        <p class="text-l primaryMain">
          The aggregation of our user research led us to a set of
          <span class="text-l text-title"> value prepositions </span> which
          guided us within the next phase of our design process.
        </p>
      }
    />
  );

  const design_contentblock_1 = (
    <ContentBlock
      imgType="confidential"
      size={size}
      headline={<h3>User flows</h3>}
      text={
        <p class="text-l text-primary">
          We drafted
          <span class="text-l text-title text-primary"> user flows </span>
          for each stakeholder and obtained early feedback from our consultants.
          During the process of refining these flows, we recognized that a
          Software-as-a-Service application would provide the
          <span class="text-l text-title text-primary">
            {" "}
            most efficient solution,{" "}
          </span>
          reducing the workload on our consultants. As a result, we decided
          against integrating a consultant interface and proposed a consolidated
          user flow for our MVP, encompassing our customers and their partner
          organizations only.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_design_userflow}
          alt={
            "The image visualizes the user flows of the customer and the partner organization. We combined both flows on one horizontal pathway to highlight how the two flows relate to each other, and what steps of one flow preceed subsequent steps of the other flow. The steps are portrayed by sticky notes along a horizontal arrow. However, it is an altered version containing less information and more placeholders to maintain confidentiality."
          }
        />
      }
      text2={
        <p class="text-l text-primary">
          We enhanced our collaboration with our consultants to determine an
          <span class="text-l text-title text-primary">
            {" "}
            effective way to incorporate their expertise{" "}
          </span>
          into our MVP solution. Through this collaboration, we further
          identified two key opportunities to
          <span class="text-l text-title text-primary">
            {" "}
            leverage our consultants' insights{" "}
          </span>
          and support partner organizations in achieving better data quality
          while streamlining their data collection processes.
        </p>
      }
    />
  );

  const keyConcepts = [
    {
      icon: icon_onboarding,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">Onboarding</span> <br />
          Enabling our customers to invite their partner organizations to share
          their data
        </p>
      ),
    },
    {
      icon: icon_progress,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">Progress</span> <br />
          Providing an overview of the submitted data to our customers
        </p>
      ),
    },
    {
      icon: icon_registration,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">Registration</span>{" "}
          <br />
          Enabling invited partner organizations to register
        </p>
      ),
    },
    {
      icon: icon_dataEntry,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">Data Entry</span> <br />
          Providing data collection forms to collect required information from
          the partner organizations
        </p>
      ),
    },
    {
      icon: icon_knowledge,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">Knowledge</span> <br />
          Integrating video and recommendation materials to share our
          consultants‘ domain knowledge
        </p>
      ),
    },
  ];

  const design_contentblock_2 = (
    <ContentBlock
      size={size}
      headline={<h3>Iterating over ideas</h3>}
      text={
        <p class="text-l primaryMain">
          Based on our stakeholders’ feedback we generated ideas on solutions
          that address the identified needs. Key concepts we addressed within
          our ideation included:
        </p>
      }
      content={
        <CardGroup items={keyConcepts} textAlign="center" maxPerRow="three" />
      }
    />
  );

  const design_contentblock_3 = (
    <ContentBlock
      imgType="confidential"
      imgPos="right"
      size={size}
      headline={<h3>Trial run</h3>}
      text={
        <p class="text-l text-primary">
          Once we felt confident with our proposal, backed up by several rounds
          of user testing of our prototype to test parts of the journey, we
          <span class="text-l text-title text-primary">
            {" "}
            collaborated with one of our customers to do a trial to test our MVP
            Figma prototype{" "}
          </span>
          holistically. Within this trial, we received insights from our
          customer as well as from three of their partner organizations which we
          integrated in another iteration over the designs.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_trialRun}
          alt={
            "The image visualizes the timeline for our trial run. We started out with a persona interview of the customer, followed by persona interviews of three of their partner organizations. We then continued to evaluate the interviews and the example data we received from them and finalized the prototypes. We conducted testing of the customer facing interface, followed by testing the prototypes for the partner organization facing interface with the three partners. We then implemented their feedback and prepared our designs for delivery."
          }
        />
      }
    />
  );

  const design_contentblock_4 = (
    <ContentBlock
      imgType="confidential"
      imgPos="right"
      alignment="horizontal"
      size={size}
      headline={<h3>Reality check</h3>}
      text={
        <p class="text-l text-primary">
          We further
          <span class="text-l text-title text-primary">
            {" "}
            validated our designs with real data.{" "}
          </span>
          So we reached out to a customer that had 20+ data sets already
          available from their partner organizations. We tested our proposed
          partner organization flow with three data sets to test its
          applicability to real world data. We further performed a data analysis
          on all data sets to validate our concept for the data overview on
          customer side.
        </p>
      }
      content={<img class="img-two-columns" src={mvp_realData} alt={"todo"} />}
    />
  );

  const delivery_contentblock_1 = (
    <ContentBlock
      imgType="confidential"
      imgPos="right"
      alignment="vertical"
      size={size}
      headline={<h3>Delivery preparation</h3>}
      text={
        <p class="text-l text-primary">
          I prepared the frames and documentation for delivery, incorporating
          the valuable feedback we have received from customers and partners. I
          was responsible for preparing frames that communicate the
          <span class="text-l text-title text-primary">
            {" "}
            responsive behavior{" "}
          </span>
          of our components, and in that course I further supplemented the
          design files with additional{" "}
          <span class="text-l text-title text-primary"> documentation </span>
          to speed up the definition of acceptance criteria from UI perspective.
          And now... it's
          <span class="text-l text-title text-primary"> live! 🎉 </span>
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_deliveryprep}
          alt={
            "A screenshot of the main screens of the partner organization flow in Figma, including with a registration page, a dashboard overview, a data entry form, and a section with graphs for comparing oneself with different organizations."
          }
        />
      }
    />
  );

  const delivery_contentblock_2 = (
    <ContentBlock
      imgType="confidential"
      imgPos="right"
      alignment="vertical"
      size={size}
      headline={<h3>Vision</h3>}
      text={
        <p class="text-l text-primary">
          We have further identified
          <span class="text-l text-title text-primary">
            {" "}
            opportunities to enhance our MVP{" "}
          </span>
          into a more advanced tool. This evolution entails
          <span class="text-l text-title text-primary">
            {" "}
            integrating existing data from other tools,{" "}
          </span>
          thereby minimizing the user's manual workload. In the long run, we
          strive to evolve our solution to be able to assist both our customers
          and their partner organizations in{" "}
          <span class="text-l text-title text-primary">
            {" "}
            analyzing their data, offer them guidance in improving data quality,
            and achieving strategic goals.{" "}
          </span>
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_vision}
          alt={
            "A screenshot of the stylized extended user flow that I provided in the section about our discovery. The extended version shows additional steps that indicate where we identified potential actions, and opportunities for integrations with external tools within the journey."
          }
        />
      }
    />
  );

  const threeReasonsWhy = [
    {
      icon: icon_support_light,
      alt: "An icon showing an individual wearing a headset.",
      text: (
        <p class="text-l text-light">
          Our MVP{" "}
          <span class="text-l text-title">
            {" "}
            reduces the manual work of our consultants to a single action,
          </span>{" "}
          which is to click a single button to grant the customer access to the
          platform.
        </p>
      ),
    },
    {
      icon: icon_company_light,
      alt: "An icon showing two stylistic buildings.",
      text: (
        <p class="text-l text-light">
          Status as of July 2023, our MVP{" "}
          <span class="text-l text-title">
            enabled our main customers to request 1000+ of their partner
            organizations to provide their data
          </span>{" "}
          through our service. They further plan to start a new data collection
          round beginning in September 2023.
        </p>
      ),
    },
    {
      icon: icon_partner_light,
      alt: "An icon showing two individuals shaking hands.",
      text: (
        <p class="text-l text-light">
          The partner organizations of our main customers{" "}
          <span class="text-l text-title text-light">
            can provide a set of data once and share it with multiple companies
          </span>{" "}
          using our platform. The firsthand data that we obtained from the
          partners further enables us to{" "}
          <span class="text-l text-title text-light">
            systematically adapt our solution
          </span>{" "}
          to better match their level of expertise.
        </p>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <CaseStudyHeader title={title} text={overview} image={mvp_teaser} />
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
        content={[delivery_contentblock_1, delivery_contentblock_2]}
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
                ... our MVP addresses the identified user needs:
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
      />

      <NextProject project="TODO" button="View Case Study" link="/todo" />
    </>
  );
};

export default MVP;
