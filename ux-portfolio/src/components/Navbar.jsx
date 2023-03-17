import React from 'react'

import { Route, Routes, Link} from "react-router-dom";
import './Navbar.scss';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import ScrollIntoView from 'react-scroll-into-view'

import resume from "../assets/pdfs/Kathrin-Schnizer_CV_EN.pdf";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link id ="nav-home" to="/">
            KS
          </Link>
          <div id = "nav-items-container"> 
          <Link class ="nav-item" to="/">
            Portfolio
          </Link>
          <Link class ="nav-item" to="/about">
            About
            </Link>
          <a href={resume} target="_blank" class ="nav-item" to="/">
            Resume
          </a>
          <ScrollIntoView behavior="smooth" selector="#contact-container">
          <Link class ="nav-item" to="">
            Contact
          </Link>
          </ScrollIntoView>
          </div>
      </nav>

      <Routes>
      <Route path="/"  element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
export default Navbar