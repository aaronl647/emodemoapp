import React from "react";
import "./App.css";
import VerticalScroll from "./components/VerticalScroll.tsx/VerticalScroll";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="scroll">
        <VerticalScroll />
      </div>
    </div>
  );
}

export default App;
