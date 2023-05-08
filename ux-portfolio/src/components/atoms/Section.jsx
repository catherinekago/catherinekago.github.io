import React from 'react'
import './Section.scss';

// TODO: depending ont props, set class

class Section extends React.Component {

    
  render() {
      return (
    <>
      <div class="section-container main-content" >
        <div class={this.props.variant === "section-light" ? "section-line-light" : "section-line-dark"}></div>
        <p class={this.props.variant === "section-light" ? "section-text-light" : "section-text-dark"}>{this.props.text}</p>
      </div>
    </>
  )
}
};

export default Section