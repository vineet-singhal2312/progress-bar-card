import React from "react";
import "../styles/strengthCard.css";
import Progress from "./Progress";
import { GrClose } from "react-icons/gr";

const StrengthCard = ({ setIsOpen }) => {
  return (
    <div className="card">
      <div className="upper-div">
        <GrClose
          className="close-btn"
          id="icon"
          onClick={() => setIsOpen(false)}
        />
        <h2>Strength Bar</h2>
        <h3>Introducing strength bar to help you know your week subjects.</h3>
      </div>
      <div className="middle-div">
        <Progress heading="Weak" progressValue={33.3} color={"#FD755E"} />
        <Progress heading="Average" progressValue={90} color={"#FFD504"} />
        <Progress
          heading="Improvement"
          progressValue={66.6}
          color={"#FF993F"}
        />
        <Progress
          heading="Cutoff level"
          progressValue={100}
          color={"#668cff"}
        />
      </div>
      <div className="lower-div">
        <button className="secondaryButton">Finish</button>
      </div>
    </div>
  );
};

export default StrengthCard;
