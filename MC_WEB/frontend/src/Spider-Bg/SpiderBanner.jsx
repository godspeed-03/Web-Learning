import React, { useEffect, useRef, useState } from "react";

const SpiderBanner = ({
  children,
  noOfDots,
  colors,
  lineLenght,
  className,
}) => {
  const dotnumber = noOfDots ? noOfDots : 50;
  const colorArray = colors && colors.length > 0 ? colors : ["white", "black"];
  const length = lineLenght > 100 ? lineLenght : 100;

  console.log(colorArray, dotnumber, length)

  const bannerRef = useRef();
  const canvasRef = useRef();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const updateDimension = () => {
      if (bannerRef.current) {
        setDimension({
          width: bannerRef.current.offsetWidth,
          height: bannerRef.current.offsetHeight,
        });
      }
    };

    updateDimension();
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  useEffect(() => {
    if (dimension.width && dimension.height) {
      const totalDots = Math.floor(
        dotnumber * ((dimension.width * dimension.height) / (1522 * 718))
      );
      const generatedDots = Array.from({ length: totalDots }, () => ({
        x: Math.random() * dimension.width,
        y: Math.random() * dimension.height,
        size: Math.random() * 3 + 5,
        color: colorArray[Math.floor(Math.random() * colorArray.length)],
      }));

      setDots(generatedDots);
    }
  }, [ dimension.width, dimension.height]);

  // Draw dots and lines on canvas
  useEffect(() => {
    const drawLines = () => {
      if (canvasRef.current) {
        const context = canvasRef.current.getContext("2d");

        // Clear canvas before drawing
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        dots.forEach((dot) => {
          context.fillStyle = dot.color;
          context.beginPath();
          context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          context.fill();
        });

        if (mousePosition.x > 0 && mousePosition.y > 0) {
          dots.forEach((dot) => {
            const distance = Math.sqrt(
              (mousePosition.x - dot.x) ** 2 + (mousePosition.y - dot.y) ** 2
            );

            if (distance < length) {
              context.strokeStyle = dot.color;
              context.lineWidth = 1;
              context.beginPath();
              context.moveTo(dot.x, dot.y);
              context.lineTo(mousePosition.x, mousePosition.y);
              context.stroke();
            }
          });
        }

      }
    };

    drawLines();
  }, [mousePosition, dots]);

  // Handle mouse movement
  const handleMouseMove = (event) => {
    const position = bannerRef.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - position.left,
      y: event.clientY - position.top,
    });
  };

  // Adjust canvas resolution for high-DPI screens
  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      const ratio = window.devicePixelRatio || 1;
      canvasRef.current.width = dimension.width * ratio;
      canvasRef.current.height = dimension.height * ratio;
      context.scale(ratio, ratio);
    }
  }, [dimension]);

  return (
    <section
      ref={bannerRef}
      onMouseMove={handleMouseMove}
      className={`banner relative ${className || ""}`}
    >
      {children}
      <canvas
        ref={canvasRef}
        width={dimension.width}
        height={dimension.height}
        className="canvas absolute w-full h-full top-0 pointer-events-none"
      />
    </section>
  );
};

export default SpiderBanner;
