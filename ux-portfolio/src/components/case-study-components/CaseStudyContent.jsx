import React from 'react'

const CaseStudyContent = (props) => {

   return (
    <div class="main-background-container container-white" >

      <div class={"main-content-container content-blocks"}>
        {props.content1}
        {props.content2}
        {props.content3}
        {props.content4}
      </div>

    </div>
  )

}
export default CaseStudyContent;