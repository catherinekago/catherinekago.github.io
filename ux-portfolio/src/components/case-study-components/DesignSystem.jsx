import React from 'react'
import './CaseStudyStyles.scss';
import bgDark from './../../assets/backgrounds/bg-black.jpg'

import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyHero from './CaseStudyHero';
import CaseStudyOverview from './CaseStudyOverview';
import CaseStudyDescription from './CaseStudyDescription';
import CaseStudySection from './CaseStudySection';

import icon_role from '../../assets/icons/quotes.svg';
import icon_tools from '../../assets/icons/tools.svg';
import icon_duration from '../../assets/icons/schedule.svg';

import image_discovery from '../../assets/illustrations/image_discovery.svg'

const DesignSystem = () => {

  const title = "Design System"
  const overview = "In 2021, my employer at the time expanded their product teams for their digital solutions portfolio. Within a short period of time, the number of our designers also increased, and it soon became clear that existing structures had to be adapted to the requirements of the growing design team. In addition to my role as UX designer for a specific digital product, I took on the task of identifying the design team’s requirements for our design system and associated processes, exploring possible solutions, and implementing the approach that addressed our needs best."

  const heroContent = <p class="text-l text-medium">Placeholder for some visual hero</p>

  const challenge = "With a growing digital product landscape, our design team faced the challenge of maintaining consistency between the different products. We saw the need to improve our current workflow to keep each other in the loop early on in the process of evolving existing components and introducing new ones. On top of that, the structure of our existing design system was not prepared for the anticipated increase of complexity and amount of components."
  const solution = "I introduced three main adaptation to our current design system and associated processes: an overhaul of our design system structure, templates to facilitate documentation of components, and a release process for new components to improve transparency and alignment within the design team."
  const roleText = ["UX Designer (lead)"];
  const toolsText = ["Figma"];
  const durationText = ["XXX 2021 - XXX 2021 (2 mo. total)"]
  const description =  <CaseStudyDescription roleIcon={icon_role} roleText={roleText} toolsIcon={icon_tools} toolsText={toolsText} durationIcon={icon_duration} durationText={durationText} />


  return (
    <>
    <CaseStudyHeader title={title} text={overview} />
    <CaseStudyHero backgroundImage={bgDark} content={heroContent} />
    <CaseStudyOverview challenge={challenge} solution={solution} description={description} />
    <CaseStudySection
        flexDirection={"hoizontal"}
        section={"Discovery"}
        headline={"Diving into the problem space"}
        text={<p class='text-l'>I started my investigation by analyzing the current structure of our design system. With this overview in mind, I talked to the users of our design system, namely my design colleagues to gather insights on their current pain points related to the design system and the processes to maintain and extend it.</p>}
        image={image_discovery}
        imageAlt={"Task flow for SurvEye: manually impaired user participates in research, has to fill out a paper-based or digital prototype. If there is assistance available, user might provide biased answers. Without assistance the user fails to fill out the questionnaire. Either way, current questionnaire design lead sto an underrepresentation of manually impaired users in research."}
      />
    </>

  )
}
export default DesignSystem