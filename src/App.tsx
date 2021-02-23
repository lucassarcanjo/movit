import React from "react";
import ExperienceBar from "./components/ExperienceBar";

import "./styles/global.css";
import "@fontsource/inter";

const App = () => {
  return (
    <div className="container">
      <ExperienceBar currentExperience={400} />
    </div>
  );
};

export default App;
