import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";
import ProjectHero from "../../components/project-components/ProjectHero";
import CaseStudyHeader from "../../components/case-study-components/CaseStudyHeader";
import CaseStudyOverview from "../../components/case-study-components/CaseStudyOverview";
import CaseStudyDescription from "../../components/case-study-components/CaseStudyDescription";
import ItemGroup from "../../components/groups/ItemGroup";
import ContentBlock from "../../components/case-study-components/ContentBlock";
import CaseStudyContent from "../../components/case-study-components/CaseStudyContent";
import NextProject from "../../components/case-study-components/NextProject";
import LoadingScreen from "../LoadingScreen";

import mvp_teaser from "../../assets/images/MVP/mvp_teaser.png";
import mvp_discovery_personas from "../../assets/images/MVP/mvp_discovery_personas.svg";
import mvp_discovery_empathy from "../../assets/images/MVP/mvp_empathy.jpg";
import mvp_design_userflow from "../../assets/images/MVP/mvp_design_flow.jpg";
import mvp_trialRun from "../../assets/images/MVP/mvp_trialRun.jpg";
import mvp_deliveryprep from "../../assets/images/MVP/mvp_deliveryprep.png";
import mvp_vision from "../../assets/images/MVP/mvp_vision_flow.jpg";
import mvp_realData from "../../assets/images/MVP/mvp_design_realdata.png";
import mvp_partner_product from "../../assets/images/MVP/mvp_partner_product.png";
import mvp_partner_product_refined from "../../assets/images/MVP/mvp_partner_product_refined.png";
import mvp_customer_product from "../../assets/images/MVP/mvp_customer_product.png";
import mvp_refinement_flow from "../../assets/images/MVP/mvp_refinement_flow.jpg";
import mvp_refinement_impr1 from "../../assets/images/MVP/mvp_refinement_impr_1.jpg";

import icon_role from "../../assets/icons/quotes.svg";
import icon_tools from "../../assets/icons/tools.svg";
import icon_duration from "../../assets/icons/duration.svg";

import icon_onboarding from "../../assets/icons/onboarding.svg";
import icon_progress from "../../assets/icons/track_progress.svg";
import icon_registration from "../../assets/icons/registration.svg";
import icon_dataEntry from "../../assets/icons/data_entry.svg";
import icon_knowledge from "../../assets/icons/knowledge.svg";
import icon_cycle from "../../assets/icons/cycle.svg";

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

  const roleText = ["Designer (team & solo)"];
  const toolsText = ["Figma, Dovetail"];
  const durationText = ["October 2021 - December 2023", "(26 mo. total)"];

  const title = "Facilitating Data Collection";
  const overview =
    "Facilitating streamlined data collection and collaboration within an organization's network, empowering them to make well-informed strategic decisions.";
  const challenge =
    "Companies strive to obtain crucial firsthand data from their partner organizations, which is essential for making well-informed strategic decisions. However, the partners oftentimes don't know where to begin, how to acquire the requested data, and have to navigate multiple platforms and formats through which data is requested.";
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
      text={
        <p class="text-l primaryMain">
          We conducted
          <span class="text-l text-title"> persona interviews </span>
          with the three main stakeholder groups of our solution to uncover{" "}
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
              text: "... need a standardized process that reduces administrative work and enables them to serve more customers.",
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
      text={
        <p class="text-l primaryMain">
          Based on the information we derived from the persona interviews, we
          created
          <span class="text-l text-title"> personas </span>
          and <span class="text-l text-title"> empathy maps </span> to build our
          further efforts on.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_discovery_personas}
          alt={
            "The image shows the three personas of our stakeholders, stacked upon each other. The persona displays information on their demographics, values, role description, challenges, needs and opportunities. Next to the personas, an empathy map is displayed, with sticky notes in the four quadrants say, think, do, and feel.However, it is an altered version containing less information and more placeholders to maintain confidentiality."
          }
        />
      }
    />
  );

  const design_contentblock_1 = (
    <ContentBlock
      imgType="confidential"
      size={size}
      text={
        <p class="text-l text-primary">
          We created
          <span class="text-l text-title text-primary"> user flows </span>
          for our two user groups and obtained early feedback from our
          consultants.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_design_userflow}
          alt={
            "The image visualizes the user flows of the customer and the partner organization. We combined both flows on the intersection where the customer starts the partner's pathway to highlight how the two flows relate to each other, and what steps of one flow preceed subsequent steps of the other flow. The steps are portrayed by sticky notes along a horizontal arrow. However, it is an altered version containing less information and more generic labels to maintain confidentiality."
          }
        />
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
    {
      icon: icon_cycle,
      text: (
        <p class="text-l text-primary">
          <span class="text-l text-title text-primary">Recurrance</span> <br />
          Enabling our customers to collect data on a yearly basis
        </p>
      ),
    },
  ];

  const design_contentblock_2 = (
    <ContentBlock
      size={size}
      text={
        <p class="text-l primaryMain">
          Based on our stakeholders’ feedback we generated ideas on solutions
          that address the identified needs.
          <span class="text-l text-title text-primary"> Key concepts </span>
          we addressed within our ideation included:
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
      text={
        <p class="text-l text-primary">
          We collaborated with one of our customers to do a
          <span class="text-l text-title text-primary">
            {" "}
            trial to test our MVP Figma prototype holistically.{" "}
          </span>
          Within this trial, we received insights from our customer as well as
          from three of their partner organizations which we integrated in
          another iteration over the designs.
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

  // const design_contentblock_4 = (
  //   <ContentBlock
  //     imgType="confidential"
  //     imgPos="right"
  //     alignment="horizontal"
  //     size={size}
  //     headline={<h3>Reality check</h3>}
  //     text={
  //       <p class="text-l text-primary">
  //         We further
  //         <span class="text-l text-title text-primary">
  //           {" "}
  //           validated our designs with real data.{" "}
  //         </span>
  //         So we reached out to a customer that had 20+ data sets already
  //         available from their partner organizations. We tested our proposed
  //         partner organization flow with three data sets to test its
  //         applicability to real world data. We further performed a data analysis
  //         on all data sets to validate our concept for the data overview on
  //         customer side.
  //       </p>
  //     }
  //     content={<img class="img-two-columns" src={mvp_realData} alt={"todo"} />}
  //   />
  // );

  // const design_contentblock_4 = (
  //   <ContentBlock
  //     imgType="confidential"
  //     imgPos="right"
  //     alignment="vertical"
  //     size={size}
  //     text={
  //       <p class="text-l text-primary">
  //         I prepared our designs for the implementation, considering
  //         <span class="text-l text-title text-primary">
  //           {" "}
  //           different states, responsive behavior, and supplementary
  //           documentation
  //         </span>{" "}
  //         to ensure a smooth handover.
  //       </p>
  //     }
  //     content={
  //       <img
  //         class="main-content-container"
  //         src={mvp_deliveryprep}
  //         alt={
  //           "A screenshot of the main screens of the partner organization flow in Figma, including with a registration page, a dashboard overview, a data entry form, and a section with graphs for comparing oneself with different organizations."
  //         }
  //       />
  //     }
  //   />
  // );

  const delivery_contentblock_1 = (
    <ContentBlock
      imgType="confidential"
      imgPos="right"
      alignment="vertical"
      size={size}
      text={
        <p class="text-l text-primary">
          Through our data collection tool, our
          <span class="text-l text-title text-primary"> customers</span> were
          now able to
          <span class="text-l text-title text-primary">
            {" "}
            invite their partner organizations
          </span>{" "}
          to provide their data on an ongoing basis to{" "}
          <span class="text-l text-title text-primary">
            {" "}
            track and analyze{" "}
          </span>{" "}
          the collected data.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_customer_product}
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
      text={
        <p class="text-l text-primary">
          Our solution further enabled
          <span class="text-l text-title text-primary">
            {" "}
            partner organizations{" "}
          </span>{" "}
          to
          <span class="text-l text-title text-primary">
            {" "}
            register, enter their data, track their progress{" "}
          </span>{" "}
          and understand how their data{" "}
          <span class="text-l text-title text-primary">
            {" "}
            compared to others.{" "}
          </span>
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_partner_product}
          alt={
            "A screenshot of the main screens of the partner organization flow in Figma, including with a registration page, a dashboard overview, a data entry form, and a section with graphs for comparing oneself with different organizations."
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

  const refinement_contentblock_1 = (
    <ContentBlock
      imgType="confidential"
      imgPos="right"
      alignment="vertical"
      size={size}
      text={
        <p class="text-l text-primary">
          After successfully launching our MVP, we worked closely together with
          <span class="text-l text-title text-primary">
            {" "}
            first level support{" "}
          </span>{" "}
          and our
          <span class="text-l text-title text-primary"> key customers. </span>
          Drawing from feedback based on actual user interaction with our
          product, we recognized{" "}
          <span class="text-l text-title text-primary">
            {" "}
            the need to highlight the recurring character of the data entry
            process.{" "}
          </span>{" "}
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_refinement_flow}
          alt={
            "The image visualizes the user flow of the partner organization, with the loop from the end of the linear journey of one-time data entry back to data entry of the first data type as the identified challenge."
          }
        />
      }
    />
  );

  const refinement_contentblock_2 = (
    <ContentBlock
      imgType="confidential"
      imgPos="right"
      alignment="vertical"
      size={size}
      text={
        <p class="text-l text-primary">
          This resulted in another essential iteration over the partner
          organization dashboard:
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={mvp_refinement_impr1}
          alt={
            "A subset of changes we applied to our partner organization dashboard to communicate the circular nature of the data collection process. The visualization shows the before and after versions of UI components, with an explanation what has changed. The first group addresses the missing information why data has to be entered again, which we added by replacing a linear progress bar with a visualization of the circular process, and added an explanation on demand why a certain data type is required again. The next example centeres around enabling users to edit already published data to provide data flexibly once it is available, and support them by providing information on what information is still missing per data set. Finally, the last improvement addresses the insufficient saliency of areas that require user action. Here we introduced a visual element to clearly highlight elements that require the user's attention, and enforced consistent placement of primary controls to support recognition."
          }
        />
      }
    />
  );

  return (
    <>
      {loading ? <LoadingScreen /> : null}
      {/* Hero */}
      <ProjectHero
        image={mvp_teaser}
        imageAlt="A visualization showing multiple mockups of the the product."
      />
      <CaseStudyOverview
        title={title}
        challenge={challenge}
        solution={solution}
        description={description}
      />

      <CaseStudyContent
        color="white"
        section="Understand the stakeholders"
        content={[discovery_contentblock_1, discovery_contentblock_2]}
      />

      <CaseStudyContent
        color="grey-light"
        section="Explore possible solutions"
        content={[
          design_contentblock_1,
          design_contentblock_2,
          design_contentblock_3,
          // design_contentblock_4,
        ]}
      />

      <CaseStudyContent
        color="white"
        section="Outcome"
        content={[delivery_contentblock_1, delivery_contentblock_2]}
      />

      <CaseStudyContent
        color="grey-light"
        section="Refinement"
        content={[refinement_contentblock_1, refinement_contentblock_2]}
      />

      {/* <CaseStudyContent
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
      /> */}

      <NextProject
        project="ClimatePartner YOU"
        button="View Project"
        link="/cp-you"
      />
    </>
  );
};

export default MVP;
