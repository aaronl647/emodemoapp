import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./VerticalScroll.css";
import HoldButton from "../HoldButton/HoldButton";

const VerticalScroll = ({}) => {
  const constraintRef = useRef(null);
  return (
    <div className="body">
      <motion.div className="container" ref={constraintRef}>
        <motion.div
          className="item"
          drag
          dragConstraints={constraintRef}
          onDrag={(event, info) => {
            var y = info.point.y;
            var x = info.point.x;
            return x, y;
          }}
        >
          <HoldButton />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VerticalScroll;
