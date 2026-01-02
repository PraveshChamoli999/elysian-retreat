import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 100 + 50;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.opacity = Math.random() * 0.3 + 0.1;
      particle.style.animation = `particle-float ${duration}s linear infinite`;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <>
      <div ref={containerRef} className="particles-container"></div>
      <div 
        className="glowing-orb" 
        style={{ top: '20%', left: '10%', width: '300px', height: '300px' }}
      ></div>
      <div 
        className="glowing-orb" 
        style={{ bottom: '30%', right: '15%', width: '400px', height: '400px', animationDelay: '1s' }}
      ></div>
      <div 
        className="ripple" 
        style={{ top: '50%', left: '80%', width: '100px', height: '100px', animationDelay: '0.5s' }}
      ></div>
    </>
  );
};

export default InteractiveBackground;