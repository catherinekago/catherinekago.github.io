import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";
import "./../../components/case-study-components/CarouselProject.scss";

import CPYouHero from "../../assets/images/CPYou/you_hero.svg";
import LoadingScreen from "../LoadingScreen";
import NextProject from "../../components/case-study-components/NextProject";
import you_personas from "../../assets/images/CPYou/you_personas.png";
import you_brand from "../../assets/images/CPYou/you_brand.png";
import you_feature_1 from "../../assets/images/CPYou/you_feature_1.png";
import you_feature_2 from "../../assets/images/CPYou/you_feature_2.png";
import you_feature_3 from "../../assets/images/CPYou/you_feature_3.png";
import you_feature_4 from "../../assets/images/CPYou/you_feature_4.png";
import you_potential_1 from "../../assets/images/CPYou/you_potential_1.png";
import you_potential_2 from "../../assets/images/CPYou/you_potential_2.png";
import you_potential_3 from "../../assets/images/CPYou/you_potential_3.png";

import icon_diversity from "../../assets/icons/icon_diversity.svg";
import icon_dashboard from "../../assets/icons/icon_dashboard.svg";
import icon_definition from "../../assets/icons/icon_definition.svg";

import ProjectHero from "../../components/project-components/ProjectHero";
import CaseStudyDescription from "../../components/case-study-components/CaseStudyDescription";
import CaseStudyOverview from "../../components/case-study-components/CaseStudyOverview";
import ContentBlock from "../../components/case-study-components/ContentBlock";
import CaseStudyContent from "../../components/case-study-components/CaseStudyContent";
import CarouselProject from "../../components/case-study-components/CarouselProject";

const CPYou = () => {
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

  const roleText = ["Researcher, Designer (team of 2)"];
  const toolsText = ["Figma, Dovetail"];
  const durationText = ["June 2021 - Dec 2021", "(6 mo. total)"];

  const title = "ClimatePartner You";
  const challenge =
    "Engaging in climate action requires an understanding of the impact of one's lifestyle on the environment. Acquiring and applying this knowledge to to one’s individual lifestyle takes a significant amount of effort and time, and let's be honest: how much can I as an individual make a difference?";
  const solution =
    "The answer is: quite a lot. Which is why we created an online calculator to empower individuals to identify their carbon emissions. Our solution focuses on positivity, simplicity, and education to make climate action accessible and motivating to users regardless of their climate knowledge.";
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
      alignment="horizontal"
      text={
        <p class="text-l primaryMain">
          We interviewed
          <span class="text-l text-title"> 30+ potential users</span> and
          identified <span class="text-l text-title"> six personas</span> which
          differed in their level of climate knowledge, motivation, and the
          amount of time they were willing to spend to engage in climate action.
          However, they shared a common need:{" "}
          <span class="text-l text-title">
            {" "}
            to understand how their lifestyles contribute to climate change.
          </span>
        </p>
      }
      content={
        <img
          class="img-two-columns"
          src={you_personas}
          alt={
            "A visualization dispalying three cards on top of each other, each of them showing a portrait of a person and a box next to them stating their level of knowledge, motivation, and amount of time. This is an abstract visualization of the personas we created."
          }
        />
      }
    />
  );

  const block_2 = (
    <ContentBlock
      size={size}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          Our target group highly valued peace of mind, a sense of community,
          and credibility. And they were{" "}
          <span class="text-l text-title">
            struggling to believe that their contribution could have a
            significant impact.
          </span>{" "}
          So we had to be clear, to be light, and to be humorous, to get away
          from the doomsday-kinda-attitude{" "}
          <span class="text-l text-title">
            towards rewarding and motivating climate action.
          </span>{" "}
          Which is why we crafted a brand centered around{" "}
          <span class="text-l text-title">
            individuals, a playful spirit, and clarity,
          </span>{" "}
          all aimed at deeply connecting with our intended audience.
        </p>
      }
      content={
        <img
          class="main-content-container"
          src={you_brand}
          alt={
            "A collage of the elements that we combined to create a bold, clear brand voice: quirky graphics, colorful patterns, provocative and fun statements, and bold, fresh colors to give the topic of climate action a refresher."
          }
        />
      }
      imageDescription={
        "A collage of the design elements we combined to create a bold, clear brand: guided by strong colors, playful patterns and visuals, and bold statements."
      }
    />
  );
  const featureContent = [
    {
      title: <p class="text-l text-title primaryMain">Consider effort</p>,
      imgSource: you_feature_1,
      alt: "A mockup showing a screen of our calculator where the user can choose between a fast calculation that takes 3min to complete, and a detailed calculation that takes 10min to complete.",
    },
    {
      title: <p class="text-l text-title primaryMain">Easy estimations</p>,
      imgSource: you_feature_2,
      alt: "A mockup showing a screen of our calculator where the user can enter information about their diet through estimations.",
    },
    {
      title: <p class="text-l text-title primaryMain">Show impact</p>,
      imgSource: you_feature_3,
      alt: "A mockup showing a screen of our calculator where the user sees an overview of all their emissions and what category they belong to.",
    },
    {
      title: <p class="text-l text-title primaryMain">Educate</p>,
      imgSource: you_feature_4,
      alt: "A mockup showing a screen of our calculator where the user learns about the difference between their own carbon footprint and the global carbon footprint.",
    },
  ];

  const featureItems = featureContent.map((item, index) => (
    <div class={"project-carousel-item-container you-yellow"}>
      <div className="carousel-project-header">
        <div className="carousel-project-item-number you-red">
          <p class="text-l text-title text-white">{index + 1}</p>
        </div>
        {item.title}
      </div>
      <img class="carousel-project-image" src={item.imgSource} alt={item.alt} />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    900: { items: 3 },
    1200: { items: 4 },
  };

  const block_3 = (
    <ContentBlock
      size={size}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          With the brand in place, it was then time to explore how we can design
          the footprint calculator itself to provide a{" "}
          <span class="text-l text-title">
            customizable, enjoyable, and motivating experience{" "}
          </span>{" "}
          to those who want to face the impact of their own lifestle. We focused
          on <span class="text-l text-title">four key features</span> to meet
          our users' needs:
        </p>
      }
      content={<CarouselProject responsive={responsive} items={featureItems} />}
    />
  );

  const potentialContent = [
    {
      title: (
        <p class="text-l text-title primaryMain centered">
          Individual <br /> reduction plans
        </p>
      ),
      imgSource: you_potential_1,
      alt: "A wireframe outlining how our solution could incoporate individual reduction plans where users could understand the impact of specific measures and choose those that fit their needs and goals best.",
    },
    {
      title: (
        <p class="text-l text-title primaryMain centered">
          Handle <br /> unavoidable emissions
        </p>
      ),
      imgSource: you_potential_2,
      alt: "A wireframe displaying how our calculator could be supplemented with handling unavoidable emissions. Users could inform themselves about the possibilities to invest in climate impact projects to balance out unavoidable emissions.",
    },
    {
      title: (
        <p class="text-l text-title primaryMain centered">
          Track <br /> your progress
        </p>
      ),
      imgSource: you_potential_3,
      alt: "A wireframe depicting how a user could track their climate action over time by recording their emissions and employ reduction measures.",
    },
  ];

  const potentialItems = potentialContent.map((item, index) => (
    <div class={"project-carousel-item-container"}>
      <div className="carousel-project-header">
        <div className="carousel-project-item-number you-red">
          <p class="text-l text-title text-white">{index + 1}</p>
        </div>
        {item.title}
      </div>
      <img class="carousel-project-image" src={item.imgSource} alt={item.alt} />
    </div>
  ));

  const block_4 = (
    <ContentBlock
      size={size}
      alignment="vertical"
      text={
        <p class="text-l primaryMain">
          Through the user tests conducted on our digital prototypes, we
          revealed{" "}
          <span class="text-l text-title">additional opportunities</span> to
          empower our target audience to take climate action in ways that align
          with their personal preferences, spike up their motivation and make
          their contribution tangible:
        </p>
      }
      content={
        <CarouselProject responsive={responsive} items={potentialItems} />
      }
    />
  );

  const threeReasonsWhy = [
    {
      icon: icon_diversity,
      alt: "An icon showing three individuals in front of a huge heart symbol.",
      text: (
        <p class="text-l text-light">
          This project taught me{" "}
          <span class="text-l text-title">
            {" "}
            the power and joy of talking to your users
          </span>{" "}
          . We collaborated with over 40 potential users over the course of this
          project, helping us to incrementally refine our approach and spark
          ideas for future, promising directions.
        </p>
      ),
    },
    {
      icon: icon_dashboard,
      alt: "An icon showing four rectangles of different dimensions arranged in a square.",
      text: (
        <p class="text-l text-light">
          I discovered{" "}
          <span class="text-l text-title">
            my love for creating responsive design.
          </span>{" "}
          Within this project it was my responsibility to come up with the
          responsive behavior of the designs to work on both mobile and desktop
          devices. It brought me lots of joy defining the layouts, formalize the
          components' behavior and document it for the dev handoff.
        </p>
      ),
    },
    {
      icon: icon_definition,
      alt: "An icon displaying the letter 'A' within a box, indicating its selection.",
      text: (
        <p class="text-l text-light">
          Speaking of formalizing component behavior: this project served as an{" "}
          <span class="text-l text-title text-light">
            introduction to design systems in Figma.
          </span>{" "}
          We created a standalone design system from scratch, defining the atoms
          and building molecules and organisms upon them. It helped us to stay
          consistent, have a component documentation for our developers, and
          quickly implement a rebrand.{" "}
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
        content={[block_1]}
      />

      <CaseStudyContent
        color="white"
        section="Establish the CP YOU brand"
        content={[block_2]}
      />

      <CaseStudyContent
        color="white"
        section="Define key features"
        content={[block_3]}
      />

      <CaseStudyContent
        color="white"
        section="Reveal the potential"
        content={[block_4]}
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
                ... this project was an incredible learning opportunity:
              </p>
            }
            content={threeReasonsWhy.map((item) => (
              <div class={"content-horizontal item-icons"}>
                <img class="icon-medium" src={item.icon} alt={item.alt} />
                {item.text}
              </div>
            ))}
          />,
        ]}
      />

      <NextProject project="SurvEye" button="View Case Study" link="/surveye" />
    </>
  );
};

export default CPYou;
