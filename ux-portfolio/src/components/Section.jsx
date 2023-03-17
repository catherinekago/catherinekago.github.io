import React from 'react'
import './Section.scss';

class Section extends React.Component {
    
  render() {
      return (
    <>
      <div class="section-container" >
        <div class="section-line"></div>
        <p class="section-text">{this.props.text}</p>
      </div>
    </>
  )
}
};

export default Section