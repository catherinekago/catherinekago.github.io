import React from "react";
import "./Section.scss";

// TODO: depending ont props, set class

class Section extends React.Component {
  render() {
    const textClass = "section-text text-l ";

    return (
      <>
        <div class="section-container main-content">
          <div
            class={
              this.props.variant === "section-light"
                ? "section-line-light"
                : "section-line-dark"
            }
          ></div>
          <p
            class={
              this.props.variant === "section-light"
                ? textClass + "text-light"
                : textClass + "text-primary"
            }
          >
            {this.props.text}
          </p>
        </div>
      </>
    );
  }
}

export default Section;
