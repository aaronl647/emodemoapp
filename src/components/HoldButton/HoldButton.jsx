import React, { useState, useEffect } from "react";
import "./HoldButton.css";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

function HoldButton() {
  const [openModal, setOpenModal] = useState(false);
  const [{ x }, api] = useSpring(() => ({ x: 0 }));
  const bind = useDrag(({ active, movement: [mx], cancel }) => {
    if (mx <= -200) {
      setOpenModal(true);
    }
    api.start({ x: active ? mx : 0, immediate: active });
  });

  return <animated.div className="dot" {...bind()} style={{ x }} />;
  // const [{ x }, api] = useSpring(() => ({ x: 0 }));
  // const bind = useDrag(
  //   ({ down, offset: [ox] }) =>
  //     api.start({
  //       x: down ? ox : 0,
  //       immediate: down,
  //       config: { duration: 250 },
  //     }),
  //   { from: () => [x.get(), 0] }
  // );

  // const handleDrag = (x) => {
  //   if (x > 250) {
  //     console.log("hello");
  //   }
  // };

  // return <animated.div className="dot" {...bind()} style={{ x }} />;
}

// useEffect(() => {
//   first;

//   return () => {
//     second;
//   };
// }, [third]);

export default HoldButton;
