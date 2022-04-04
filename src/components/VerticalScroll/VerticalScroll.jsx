import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./VerticalScroll.css";
import HoldButton from "../HoldButton/HoldButton";

const VerticalScroll = ({ setScrollValueY, setScrollValueX }) => {
  const constraintRef = useRef(null);
  return (
    <div className="body">
      <motion.div className="container" ref={constraintRef}>
        <motion.div
          className="item"
          drag
          dragConstraints={constraintRef}
          onDrag={(event, info) => {
            return setScrollValueY(info.point.y);
          }}
          onDragEnd={(event, info) => {
            return setScrollValueX(info.point.x);
          }}
        >
          <HoldButton />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VerticalScroll;
