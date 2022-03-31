import React, { useState } from "react";
import "./App.css";
import VerticalScroll from "./components/VerticalScroll/VerticalScroll";
import LineWave from "./components/LineWave/LineWave";

function App({ setScrollValue }) {
  const [scrollValue, setScrollValue] = useState(0);
  const handleDrag = () => {
    console.log(scrollValue);
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="scroll">
        <VerticalScroll setScrollValue={setScrollValue} onChange={handleDrag} />
      </div>
      <div className="canvas-wave">
        <LineWave />
      </div>
    </div>
  );
}

export default App;
