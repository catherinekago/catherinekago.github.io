import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectTeaser.scss";
import Chip from "../atoms/Chip";
import SurveyeHero from "../../assets/images/surveye_teaser.png";
import DesignSystem from "../../assets/images//DesignSystem/ds_hero.svg";
import MVP from "../../assets/images/MVP/mvp_partner_product_refined.png";
import CPYouHero from "../../assets/images//CPYou/you_hero.png";

const ProjectTeaser = (props) => {
  const className = "project-teaser-container " + props.teaserType;
  const images = {
    MVP: MVP,
    SurvEye: SurveyeHero,
    DesignSystem: DesignSystem,
    CPYou: CPYouHero,
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const textContainer = (
    <div class="project-teaser-text-container">
      <h3>{props.title}</h3>
      <p class="text-l primaryMain">{props.description}</p>
      <div class="chip-row-container">
        <Chip chipType="chip-primary" label={props.projectType} />

        {props.chips.map((chipLabel) => (
          <Chip chipType="chip-secondary" label={chipLabel} />
        ))}
      </div>

      <Link class="button-medium" to={props.link}>
        <button>{props.button}</button>
      </Link>
    </div>
  );

  const imageContainer = (
    <Link class="project-teaser-image" to={props.link}>
      <img src={images[props.slug]} />
    </Link>
  );

  if (props.textPosition === "text-left" && width > breakpoint) {
    return (
      <div className={className}>
        {textContainer}
        {imageContainer}
      </div>
    );
  } else {
    return (
      <div className={className}>
        {imageContainer}
        {textContainer}
      </div>
    );
  }
};
export default ProjectTeaser;
