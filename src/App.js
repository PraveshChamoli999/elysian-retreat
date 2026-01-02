import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Villa from './components/Villa';
import Experiences from './components/Experiences';
import Location from './components/Location';
import Timeline from './components/Timeline';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import InteractiveBackground from './components/InteractiveBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  useEffect(() => {
    // Initialize card hover effects
    const cards = document.querySelectorAll('.card-3d');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = ((x - centerX) / centerX) * 10;
        const rotateX = ((centerY - y) / centerY) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        setTimeout(() => {
          card.style.transform = '';
        }, 300);
      });
    });
    
    // Add ripple effect on click
    document.addEventListener('click', function(e) {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 2000);
    });
    
    // Parallax Effect
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      
      parallaxLayers.forEach(layer => {
        const speed = layer.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  
  return (
    <div className="App bg-background-dark text-white font-display overflow-x-hidden">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <InteractiveBackground />
      <Navigation />
      <Hero />
      <Villa />
      <Experiences />
      <Location />
      <Timeline />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;