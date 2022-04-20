import React from "react";
import "../styles/progress.css";
import ProgressBar from "./ProgressBar";

const Progress = ({ heading, progressValue, color }) => {
  return (
    <div className="progressDiv">
      {heading && <h3 className="progress-section-heading">{heading}</h3>}
      <ProgressBar completed={progressValue} color={color} />
    </div>
  );
};

export default Progress;
