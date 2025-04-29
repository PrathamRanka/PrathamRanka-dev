'use client';

import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({
    backgroundColor: '#FF6F20', // Default color
    transform: 'scale(1)',
  });

  useEffect(() => {
    // Function to update mouse position
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Function to change cursor style based on the background
    const handleCursorStyle = (e: MouseEvent) => {
      const element = e.target as HTMLElement; // Cast e.target to HTMLElement
      if (!element) return;

      const backgroundColor = window.getComputedStyle(element).backgroundColor;

      // Check if the background color is valid
      if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
        setCursorStyle((prev) => ({
          ...prev,
          backgroundColor: '#FFFFFF', // Default to white for transparent backgrounds
        }));
        return;
      }

      // Calculate the inverted color
      const invertedColor = invertColor(backgroundColor);
      setCursorStyle({
        backgroundColor: invertedColor,
        transform: 'scale(1)', // Keep the scale consistent
      });
    };

    // Helper function to invert the color
    const invertColor = (color: string) => {
      let rgbArr: number[] | null = null;

      // Handle rgba or rgb strings
      if (color.startsWith('rgb')) {
        rgbArr = color.match(/\d+/g)?.map(Number) || null;
      }

      // If the color is not in rgb/rgba format, return white
      if (!rgbArr || rgbArr.length < 3) return '#FFFFFF';

      // Invert the RGB values
      const r = 255 - rgbArr[0];
      const g = 255 - rgbArr[1];
      const b = 255 - rgbArr[2];

      // Preserve the alpha channel if present
      if (rgbArr.length === 4) {
        const a = rgbArr[3] / 255; // Alpha is usually 0-255, normalize to 0-1
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      }

      return `rgb(${r}, ${g}, ${b})`;
    };

    // Attach event listeners
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleCursorStyle);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleCursorStyle);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
        width: '20px',
        height: '20px',
        backgroundColor: cursorStyle.backgroundColor,
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: `translate(-50%, -50%) ${cursorStyle.transform}`, // Apply the transform
        transition: 'transform 0.1s ease, background-color 0.3s ease', // Smooth transitions
        zIndex: 9999,
      }}
    ></div>
  );
};

export default Cursor;