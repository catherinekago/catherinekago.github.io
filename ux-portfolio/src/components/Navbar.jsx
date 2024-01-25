import React from "react";

import { Route, Routes, Link, useLocation } from "react-router-dom";

import "./Navbar.scss";
import About from "../pages/About";
import Landingpage from "../pages/Landingpage";

import resume from "../assets/pdfs/Kathrin-Schnizer_CV_EN.pdf";
import Contact from "../pages/Contact";
import SurvEye from "../pages/case-studies/SurvEye";
import DesignSystem from "../pages/case-studies/DesignSystem";
import MVP from "../pages/case-studies/MVP";
import CPYou from "../pages/projects/CPYou";
import GazeVisualImpairment from "../pages/case-studies/GazeVisualImpairment";

const Navbar = () => {
  const { pathname } = useLocation();
  const styles = {
    // Setting a different color for each route
    // Can also be classes or other custom styling
    color: {
      ["/contact"]: "nav-container dark",
      ["/design-system"]: "nav-container light",
      ["/surveye"]: "nav-container light",
      ["/data-collection"]: "nav-container light",
      ["/about"]: "nav-container light",
      ["/"]: "nav-container light",
      ["/cp-you"]: "nav-container dark",
      ["/gaze-visual-impairment"]: "nav-container light",
    },
  };

  return (
    <>
      <div class={styles.color[pathname]}>
        <nav>
          <Link id="nav-home" to="/">
            KS
          </Link>
          <div id="nav-items-container">
            <Link class="nav-item text-l" to="/">
              Portfolio
            </Link>
            <Link class="nav-item text-l" to="/about">
              About
            </Link>
            {/* eslint-disable-next-line */}
            <a href={resume} target="_blank" class="nav-item text-l" to="/">
              Resume
            </a>
            <Link class="nav-item text-l" to="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/surveye" element={<SurvEye />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/data-collection" element={<MVP />} />
        <Route path="/cp-you" element={<CPYou />} />
        <Route
          path="/gaze-visual-impairment"
          element={<GazeVisualImpairment />}
        />
      </Routes>
    </>
  );
};
export default Navbar;
