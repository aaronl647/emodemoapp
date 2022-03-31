import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./VerticalScroll.css";
import HoldButton from "../HoldButton/HoldButton";

const VerticalScroll = ({ onDrag }) => {
  const constraintRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  return (
    <div className="body">
      <motion.div className="container" ref={constraintRef}>
        <motion.div
          className="item"
          drag
          dragConstraints={constraintRef}
          onDrag={onDrag}
        >
          <HoldButton />
        </motion.div>
      </motion.div>
      {scrollValue}
    </div>
  );
};

export default VerticalScroll;
