import React, { useState } from "react";
import "./App.css";
import VerticalScroll from "./components/VerticalScroll/VerticalScroll";
import LineWave from "./components/LineWave/LineWave";
import SwipeModal from "./components/SwipeModal/SwipeModal";

function App() {
  const [scrollValueY, setScrollValueY] = useState(0);
  const [scrollValueX, setScrollValueX] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <div className="canvas-wave">
        <LineWave scrollValueY={scrollValueY} />
      </div>
      <div className="scroll">
        <VerticalScroll
          setScrollValueX={setScrollValueX}
          setScrollValueY={setScrollValueY}
          onChange={() => {
            setOpenModal(true);
          }}
        />
        <SwipeModal
          show={openModal}
          close={() => {
            setOpenModal(false);
          }}
        />
      </div>
    </div>
  );
}

export default App;
