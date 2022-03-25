import * as React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./VerticalScroll.css";
import SwipeModal from "../SwipeModal/SwipeModal";

function VerticalScroll() {
  const constraintRef = useRef(null);

  const handleRightDrag = () => {
    console.log("hello");
    return <SwipeModal />;
  };
  const handleUpPull = () => {
    // console.log("up pull");
  };
  const handleDownPull = () => {
    // console.log("down pull");
  };
  return (
    <div className="body">
      <motion.div className="container" ref={constraintRef}>
        <motion.div
          className="item"
          drag
          dragConstraints={constraintRef}
          onDragEnd={(event, info) => {
            // console.log(info.point.y, info.point.x);
            if (info.point.x > 500) {
              handleRightDrag();
            } else if (info.point.y < 374) {
              handleUpPull();
            } else if (info.point.y > 374) {
              handleDownPull();
            }
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default VerticalScroll;
