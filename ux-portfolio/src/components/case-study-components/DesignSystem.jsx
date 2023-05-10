import React from 'react'
import { useState, useEffect } from "react";
import './CaseStudyStyles.scss';
import bgDark from './../../assets/backgrounds/bg-black.jpg'

import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyHero from './CaseStudyHero';
import CaseStudyOverview from './CaseStudyOverview';
import CaseStudyDescription from './CaseStudyDescription';
import CaseStudySection from './CaseStudySection';
import CaseStudyContent from './CaseStudyContent';
import ContentBlock from './ContentBlock';

import icon_role from '../../assets/icons/quotes.svg';
import icon_tools from '../../assets/icons/tools.svg';
import icon_duration from '../../assets/icons/schedule.svg';

import image_discovery from '../../assets/illustrations/image_discovery.svg'
import image_design from '../../assets/illustrations/image_design.svg'
import ItemGroup from './ItemGroup';

import ds_design_hybrid_approach from '../../assets/images/DesignSystem/ds_design_hybrid_approach.svg'
import ds_design_prototypical_implementation from '../../assets/images/DesignSystem/ds_design_prototypical_implementation.png'

const DesignSystem = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = "Design System"
  const overview = "In 2021, my employer at the time expanded their product teams for their digital solutions portfolio. Within a short period of time, the number of our designers also increased, and it soon became clear that existing structures had to be adapted to the requirements of the growing design team. In addition to my role as UX designer for a specific digital product, I took on the task of identifying the design team’s requirements for our design system and associated processes, exploring possible solutions, and implementing the approach that addressed our needs best."

  const heroContent = <p class="text-l text-medium">Placeholder for some visual hero</p>

  const challenge = "With a growing digital product landscape, our design team faced the challenge of maintaining consistency between the different products. We saw the need to improve our current workflow to keep each other in the loop early on in the process of evolving existing components and introducing new ones. On top of that, the structure of our existing design system was not prepared for the anticipated increase of complexity and amount of components."
  const solution = "I introduced three main adaptation to our current design system and associated processes: an overhaul of our design system structure, templates to facilitate documentation of components, and a release process for new components to improve transparency and alignment within the design team."
  const roleText = ["UX Designer (lead)"];
  const toolsText = ["Figma"];
  const durationText = ["XXX 2021 - XXX 2021 (2 mo. total)"]
  const description = <CaseStudyDescription roleIcon={icon_role} roleText={roleText} toolsIcon={icon_tools} toolsText={toolsText} durationIcon={icon_duration} durationText={durationText} />

  const discovery_contentblock_1 = <ContentBlock
    headline={<h3>Status quo</h3>}
    content={<ItemGroup type="underline" items={[{ headline: "Figma file", text: "Our design system combined themes, typography, and components in a single Figma file." }, { headline: "Internal structure", text: "Within the file itself, we had an overview page of all components, and each component had its own page where it is originally defined." }, { headline: "Material UI", text: "The majority of components were CI-themed Material UI components. Only a few components were custom creations based on MUI components." }]} />} />

  const discovery_contentblock_2 = <ContentBlock
    headline={<h3>Talking to the user</h3>}
    text={<p class="text-l text-medium">I identified the following <span class="text-l text-title">pain points</span>:</p>}
    content={<ItemGroup type="box" size="large"
      items={[{ headline: "Long search time", text: "When looking for a component page, users had to scroll through a lot of pages within the side navigation." }, { headline: "Missing documentation", text: "Especially for custom components, there was no further explanation on how they should be used, how it behaves and who created it in the first place." }, { headline: "No alignment", text: "Designers of different product teams were working on similar components simultaneously without being aware of it. This resulted in double work and in missed opportunities to co-create at an early stage." }, { headline: "No process", text: "There was no streamlined process on when and how to communicate the need for new components within the design team and bring in new components to the design system." }]} />} />


  const design_contentblock_1 = <ContentBlock
    headline={<h3>Design system structure</h3>}
    text={<p class="text-l text-medium">I explored <span class="text-l text-title">four possible approaches to structure our own design system</span>:</p>}
    content={<ItemGroup type="box" size="small"
      items={[{ headline: "Atomic design", text: "categorizing components by structural complexity" }, { headline: "By purpose", text: "e.g. “input”, “data display”, “navigation”" }, { headline: "By object", text: "based on the concept of real-world objects and their attributes" }, { headline: "By alphabet", text: "alphabetical ordering without further categorization" }]} />} />

  const design_contentblock_2 =(
    <div class="two-columns-container flex-center">
      <p class="text-l text-medium">I then elaborated pros and cons of each of the four approaches and scheduled a short session with the design team to present my suggestions and <span class="text-l text-title">receive feedback</span> to supplement my own evaluation. Based their input, I drafted a <span class="text-l text-title">hybrid approach</span>.</p>
      <img class="img-two-columns" src={ds_design_hybrid_approach} alt={"A visualisation of the hybrid approach for our design system: it consists of three types of components, atoms, which refer to the theme of the design system, molecules, which are Material UI components, and oragnisms, which are formed by our custom components. Within each of these categories, the components themselves are ordered alphabetically."} />
  </div>
  );

  const design_contentblock_3 =(
    <div class="two-columns-container flex-center">
      <img class="img-two-columns hide-on-xs-s" src={ds_design_prototypical_implementation} alt={"A screenshot of the prototypical implementation of the proposed design system structure. It shows the following Figma page structure: Overview, Atoms, Molecules and Organisms. For each category of the atomic design system, there are sub-pages with the actual components of the category, ordered alphabetically."} />
      <p class="text-l text-medium">I created a prototypical design system file to showcase the proposed design system structure with a small selection of our actual components. I scheduled another feedback session with the design team to gather feedback on the refined proposal. The team found the new structure easy to understand and extend.</p>
      <img class="img-two-columns hide-on-m-l-xl" src={ds_design_prototypical_implementation} alt={"A screenshot of the prototypical implementation of the proposed design system structure. It shows the following Figma page structure: Overview, Atoms, Molecules and Organisms. For each category of the atomic design system, there are sub-pages with the actual components of the category, ordered alphabetically."} />
  </div>
  );



  return (
    <>
      <CaseStudyHeader title={title} text={overview} />
      <CaseStudyHero backgroundImage={bgDark} content={heroContent} />
      <CaseStudyOverview challenge={challenge} solution={solution} description={description} />
      <CaseStudySection
        flexDirection={"horizontal"}
        section={"Discovery"}
        headline={"Diving into the problem space"}
        text={<p class='text-l'>I started my investigation by analyzing the current structure of our design system. With this overview in mind, I talked to the users of our design system, namely my design colleagues to gather insights on their current pain points related to the design system and the processes to maintain and extend it.</p>}
        image={image_discovery}
        imageAlt={"An illustration of a female diver surrounded by several fish and a turtle. The diver is reaching with her hand for the turtle. Anemones are covering the ground."}
      />

      <CaseStudyContent
        content1={discovery_contentblock_1}
        content2={discovery_contentblock_2}
      />


      <CaseStudySection
        flexDirection={"horizontal"}
        section={"Design"}
        headline={"Exploring the solution space"}
        text={<p class='text-l'>TODO</p>}
        image={image_design}
        imageAlt={"An illustration of an astronout surfing on a space ship, passing clouds and different planets."}
      />

      <CaseStudyContent
        content1={design_contentblock_1}
        content2={design_contentblock_2}
        content3={design_contentblock_3}

      />

      <CaseStudySection
        flexDirection={"horizontal"}
        section={"Outcome"}
        headline={"Proposing structures and a process"}
        text={<p class='text-l'>TODO</p>}
        image={image_design}
        imageAlt={"TODO."}
      />


      <CaseStudySection
        flexDirection={"horizontal"}
        section={"Reflection"}
        headline={"What did I learn?"}
        text={<p class='text-l'>TODO</p>}
        image={image_design}
        imageAlt={"TODO."}
      />


    </>



  )
}
export default DesignSystem