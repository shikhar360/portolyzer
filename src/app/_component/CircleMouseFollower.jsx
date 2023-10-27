"use client"

import React, { useEffect, useRef } from 'react';

const CircleMouseFollower = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const circle = circleRef.current;
      if (circle) {
        const x = event.clientX;
        const y = event.clientY + window.scrollY;
        circle.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="miniCircle" ref={circleRef}></div>;
};

export default CircleMouseFollower;

