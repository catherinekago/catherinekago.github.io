import React from "react";
import { useState, useEffect } from "react";
import "./../../style/style.scss";

import CPYouHero from "../../assets/images/CPYou/you_hero.svg";
import LoadingScreen from "../LoadingScreen";

import ProjectHero from "../../components/project-components/ProjectHero";

const CPYou = () => {
  const size = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  window.onbeforeunload = function () {
    setLoading(true);
    window.scrollTo(0, 0);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? <LoadingScreen /> : null}

      {/* Hero */}
      <ProjectHero
        image={CPYouHero}
        imageAlt="A visualization showing multiple mockups of the mobile version of the product."
      />
    </>
  );
};

export default CPYou;
