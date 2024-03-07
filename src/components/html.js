import React, { useEffect, useRef } from "react";

const MyCanvas = () => {
  const canvasRef = useRef(null);
  let ctx, canvasWidth, canvasHeight, arrowY;
  const arrowSize = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const parentDiv = canvas.parentElement; // Get the parent div
    ctx = canvas.getContext("2d");
    canvasWidth = parentDiv.clientWidth; // Set canvas width to parent div width
    canvasHeight = parentDiv.clientHeight; // Set canvas height to parent div height
    arrowY = 0;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    drawArrow();

    const handleWheel = (event) => {
      arrowY += event.deltaY * 1;
      arrowY = Math.min(Math.max(0, arrowY), canvasHeight - arrowSize);
      drawArrow();
    };

    canvas.addEventListener("wheel", handleWheel);

    return () => {
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const drawArrow = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, 0);
    ctx.lineTo(canvasWidth / 2, canvasHeight);
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, arrowY);
    ctx.lineTo(canvasWidth / 2 - arrowSize / 2, arrowY - arrowSize);
    ctx.lineTo(canvasWidth / 2 + arrowSize / 2, arrowY - arrowSize);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, 0);
    ctx.lineTo(canvasWidth / 2, arrowY);
    ctx.stroke();
  };

  return <canvas ref={canvasRef}></canvas>;
};

export default MyCanvas;
