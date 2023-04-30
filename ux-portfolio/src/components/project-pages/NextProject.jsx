import React from 'react'
import { Link } from "react-router-dom";
import './NextProject.scss';

const NextProject = (props) => {

  return (
    <div class="main-background-container next-project-container">
      <p class="text-medium next-text">Next: <span style={{ fontWeight: '700', color: '#6F8463' }}>{props.project}</span></p>
      <Link class="button-medium" to={props.link}>
                <button>{props.button}</button>

            </Link>
    </div>
  )
}
export default NextProject

