import React, { useState, useEffect } from "react";
import "../styles/progressBar.css";

const ProgressBar = ({ color, completed }) => {
  const [doneLeftBar, setDoneLeftBar] = useState(0);
  const [doneMiddleBar, setDoneMiddleBar] = useState(0);
  const [doneRightBar, setDoneRightBar] = useState(0);

  useEffect(() => {
    const newValue = completed * 3;
    if (newValue <= 100) {
      setDoneLeftBar(newValue);
      setDoneMiddleBar(0);
      setDoneRightBar(0);
    } else if (100 < newValue && newValue <= 200) {
      setDoneLeftBar(100);
      setDoneMiddleBar(newValue / 2);
      setDoneRightBar(0);
    } else if (200 < newValue && newValue <= 300) {
      setDoneLeftBar(100);
      setDoneMiddleBar(100);
      setDoneRightBar(newValue / 3);
    }
  }, [completed]);

  return (
    <div className="progress-bar">
      <div className="progress-left">
        <div
          className="progress-bar-left"
          style={{ width: `${doneLeftBar}%`, backgroundColor: color }}
        ></div>
      </div>
      <div className="progress-middle">
        <div
          className="progress-bar-middle"
          style={{ width: `${doneMiddleBar}%`, backgroundColor: color }}
        ></div>
      </div>
      <div className="progress-right">
        <div
          className="progress-bar-right"
          style={{ width: `${doneRightBar}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
