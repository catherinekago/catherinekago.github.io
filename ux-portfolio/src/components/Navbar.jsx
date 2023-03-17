import React from 'react'

import { Route, Routes, Link} from "react-router-dom";
import './Navbar.scss';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import ScrollIntoView from 'react-scroll-into-view'

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
          <Link class ="nav-item" to="/resume">
            Resume
          </Link>
          <ScrollIntoView behavior="smooth" selector="#contact-container">
          <Link class ="nav-item" to="">
            Contact
          </Link>
          </ScrollIntoView>
          </div>
      </nav>

      <Routes>
      <Route path="/"  element={<Portfolio />} />
      <Route path="/resume"  element={<Resume />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}
export default Navbar