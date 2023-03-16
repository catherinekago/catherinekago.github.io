import React from 'react'

import { Route, Routes, Link} from "react-router-dom";
import './Navbar.css';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

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
          <Link class ="nav-item" to="/contact">
            Contact
          </Link>
          </div>
      </nav>

      <Routes>
      <Route path="/"  element={<Portfolio />} />
      <Route path="/resume"  element={<Resume />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
export default Navbar