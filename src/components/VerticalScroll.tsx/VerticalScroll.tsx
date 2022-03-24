import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./VerticalScroll.css";

function VerticalScroll() {
  const constraintRef = useRef(null);

  return (
    <div className="body">
      <motion.div className="container" ref={constraintRef}>
        <motion.div
          className="item"
          drag
          dragConstraints={constraintRef}
          onDrag={(event, info) => {
            console.log(event);
          }}
        />
      </motion.div>
    </div>
  );
}

export default VerticalScroll;
