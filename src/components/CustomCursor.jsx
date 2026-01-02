import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default');
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    document.addEventListener('mousemove', updateMousePosition);
    
    const interactiveElements = document.querySelectorAll('button, a, .card-3d, .hover-lift');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setCursorType('hover'));
      el.addEventListener('mouseleave', () => setCursorType('default'));
    });
    
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setCursorType('hover'));
        el.removeEventListener('mouseleave', () => setCursorType('default'));
      });
    };
  }, []);
  
  return (
    <>
      <div 
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorType === 'hover' ? 1.5 : 1})`,
          borderColor: cursorType === 'hover' ? '#30e88c' : '#30e88c'
        }}
      ></div>
      <div 
        className="cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;