import React from "react";
import "../styles/primaryButton.css";

const PrimaryButton = ({ openCard }) => {
  return (
    <button onClick={openCard} className="primaryButton">
      History
    </button>
  );
};

export default PrimaryButton;
