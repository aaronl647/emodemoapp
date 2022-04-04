import React, { useRef, useEffect } from "react";
import "./LineWave.css";

function LineWave({ scrollValueY }, props) {
  const canvasRef = useRef(null);

  const cWidth = 400;
  const cHeight = 250;
  const w = 600 / 2;
  const h = 200 / 2;
  const amplitude = h;
  var frequency = "0.0" + scrollValueY;
  var phi = 0;

  const draw = (ctx, frameCount) => {
    ctx.lineWidth = 5;
    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.beginPath();
    phi = frameCount / 30;

    ctx.beginPath();
    ctx.strokeStyle = "hsl(" + frameCount + ",100%,50%)";
    for (var x = 0; x < w; x++) {
      if (scrollValueY < 300) {
        var y = (Math.sin(x * frequency + phi) * amplitude) / 2 + amplitude / 2;
      } else if (scrollValueY > 300) {
        frequency = "0." + scrollValueY;
        var y = (Math.sin(x * frequency + phi) * amplitude) / 2 + amplitude / 2;
      }
      ctx.lineTo(x, y);
    }

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
    return () => {};
  }, [draw]);
  return (
    <div className="wave-container">
      <canvas ref={canvasRef} {...props}></canvas>
    </div>
  );
}

export default LineWave;
