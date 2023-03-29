import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import './ProjectTeaser.scss';
import Chip from '../atoms/Chip';
import SurveyeHero from '../../assets/images/SurvEye.svg'


const ProjectTeaser = (props) => {
    const className = 'project-teaser-container ' + props.teaserType;
    const images = {
        "SurvEye": SurveyeHero}


    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 968;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, []);

    const textContainer = (
        <div class="project-teaser-text-container">
            <h3>{props.title}</h3>
            <p class='title-medium text-light' >{props.description}</p>
            <div class="chip-row-container">
                <Chip chipType="chip-primary" label={props.projectType} />

                {props.chips.map(chipLabel => (
                    <Chip chipType="chip-secondary" label={chipLabel} />
                ))}

            </div>


            <Link class="button-medium" to={props.link}>
                <button>{props.button}</button>

            </Link>
        </div>);

    const imageContainer = (<Link to={props.link}>
          <img class="project-teaser-image" src={images[props.title]} />
    </Link>);

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

}
export default ProjectTeaser