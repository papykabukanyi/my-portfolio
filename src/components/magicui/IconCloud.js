// src/components/magicui/IconCloud.js
import React, { useEffect, useRef } from "react";

const IconCloud = ({ iconSlugs }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const radius = 150; // Radius of the icon cloud
    const icons = container.querySelectorAll(".icon");
    const angleIncrement = (2 * Math.PI) / icons.length;
    let angle = 0;

    icons.forEach((icon, index) => {
      const x = radius * Math.sin(angleIncrement * index);
      const y = radius * Math.cos(angleIncrement * index);
      icon.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    let rotationAngle = 0;
    const animate = () => {
      rotationAngle += 0.01;
      container.style.transform = `rotateY(${rotationAngle}rad)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "300px",
        height: "300px",
        position: "relative",
        transformStyle: "preserve-3d",
        animation: "spin 20s infinite linear",
      }}
    >
      {iconSlugs.map((slug, index) => (
        <div
          key={index}
          className="icon"
          style={{
            position: "absolute",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {slug}
        </div>
      ))}
    </div>
  );
};

export default IconCloud;
