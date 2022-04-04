import React, { useRef, useEffect } from "react";
import "./LineWave.css";

function LineWave({ scrollValue }, props) {
  const canvasRef = useRef(null);

  const cWidth = 400;
  const cHeight = 150;
  const w = 400;
  const h = 200;
  const amplitude = h;
  const frequency = "0.00" + scrollValue;
  var phi = 0;

  const draw = (ctx, frameCount) => {
    ctx.lineWidth = 1;
    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.beginPath();
    phi = frameCount / 30;

    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.beginPath();
    ctx.strokeStyle = "hsl(" + frameCount + ",100%,50%)";
    ctx.moveTo(0, cHeight);
    for (var x = 0; x < w; x++) {
      var y = (Math.sin(x * frequency + phi) * amplitude) / 2 + amplitude / 2;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, cHeight);
    ctx.lineTo(0, cHeight);
    ctx.stroke();
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      // window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return (
    <div className="wave-container">
      {scrollValue}
      {console.log()}
      <canvas ref={canvasRef} {...props}></canvas>
    </div>
  );
}

export default LineWave;
