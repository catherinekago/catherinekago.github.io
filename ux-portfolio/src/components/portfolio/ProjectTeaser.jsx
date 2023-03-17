import React, { useEffect } from 'react'
import './ProjectTeaser.scss';
import Chip from '../atoms/Chip';

const ProjectTeaser = (props) => {
    const className = 'project-teaser-container ' + props.teaserType;

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 968;
  
    useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth))
    },[]);



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

            <button class="button-medium">{props.button}</button>
        </div>);

    const imageContainer = (<div class="project-teaser-image-container" />);

    if (props.textPosition === "text-left" && width > breakpoint ) {

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