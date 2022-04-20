import { useState } from "react";
import "./App.css";
import PrimaryButton from "./components/primaryButton";
import ProgressBar from "./components/ProgressBar";
import StrengthCard from "./components/strengthCard";
import "./styles/primaryButton.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="button-div">
        <PrimaryButton openCard={openCard} />
        {isOpen && <ProgressBar completed={33.3} color={"#FD755E"} />}
      </div>

      {isOpen && <StrengthCard setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
