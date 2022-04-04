import React, { useState } from "react";
import "./App.css";
import VerticalScroll from "./components/VerticalScroll/VerticalScroll";
import LineWave from "./components/LineWave/LineWave";
import SwipeModal from "./components/SwipeModal/SwipeModal";

function App() {
  const [scrollValueY, setScrollValueY] = useState(0);
  const [scrollValueX, setScrollValueX] = useState(0);
  const [open, setOpen] = useState(false);

  const handleDrag = () => {
    if (scrollValueX > 600) {
    }
  };

  return (
    <div className="App">
      <div className="scroll">
        <VerticalScroll
          setScrollValueX={setScrollValueX}
          setScrollValueY={setScrollValueY}
        >
          <SwipeModal onChange={handleDrag()} setOpen={setOpen} />
        </VerticalScroll>
      </div>
      <div className="canvas-wave">
        <LineWave scrollValueY={scrollValueY} />
      </div>
    </div>
  );
}

export default App;
