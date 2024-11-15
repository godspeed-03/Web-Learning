import React, { useEffect, useRef, useState } from "react";

const SpiderBanner = ({ children, noOfDots, colors }) => {
  const bannerRef = useRef();
  const canvasRef = useRef();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
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
        noOfDots * ((dimension.width * dimension.height) / (1522 * 718))
      );
      const generatedDots = Array.from({ length: totalDots }, () => ({
        x: Math.random() * dimension.width,
        y: Math.random() * dimension.height,
        size: Math.random() * 3 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));

      setDots(generatedDots);
    }
  }, [dimension, noOfDots, colors]);

  useEffect(() => {
    const drawDots = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach((dot) => {
          context.fillStyle = dot.color;
          context.beginPath();
          context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          context.fill();
        });
      }
    };

    drawDots();
  }, [dots]);

  return (
    <section ref={bannerRef} className="banner relative">
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
