import React, { useState } from "react";
import "./App.css";
import VerticalScroll from "./components/VerticalScroll/VerticalScroll";
import LineWave from "./components/LineWave/LineWave";

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const handleDrag = () => {
    setScrollValue();
    console.log("do something");
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="scroll">
        <VerticalScroll onDrag={handleDrag} />
      </div>
      <div className="canvas-wave">
        <LineWave />
      </div>
    </div>
  );
}

export default App;
