import React from "react";
import "./../style/style.scss";
import { useState, useEffect } from "react";

const LoadingScreen = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      className={loading ? "loader-container" : "loader-container transparent"}
    >
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
