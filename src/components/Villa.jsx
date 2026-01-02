import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import villaImg from '../Images/Villa.jpeg';

const Villa = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const villaRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!villaRef.current) return;
    
    const rect = villaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    villaRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px)`;
  };
  
  const handleMouseLeave = () => {
    if (villaRef.current) {
      villaRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }
  };
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="the-villa">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={`section-reveal ${inView ? 'visible' : ''}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6 border border-primary/20">
              Exclusive Living
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="gradient-text font-serif italic">Villa</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              A masterpiece of architectural elegance nestled in the Himalayas. Each villa is a sanctuary of peace, offering panoramic views of the Doon Valley with modern amenities and traditional craftsmanship.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl glass-effect hover-lift">
                <span className="text-3xl font-bold text-primary block mb-2">1</span>
                <span className="text-sm uppercase tracking-widest">Exclusive Villa</span>
              </div>
              <div className="text-center p-6 rounded-2xl glass-effect hover-lift">
                <span className="text-3xl font-bold text-primary block mb-2">1000m</span>
                <span className="text-sm uppercase tracking-widest">Elevation</span>
              </div>
              <div className="text-center p-6 rounded-2xl glass-effect hover-lift">
                <span className="text-3xl font-bold text-primary block mb-2">∞</span>
                <span className="text-sm uppercase tracking-widest">Infinity Pool</span>
              </div>
            </div>
          </div>
          
          <div className={`section-reveal ${inView ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div 
              ref={villaRef}
              className="card-3d rounded-3xl overflow-hidden shadow-2xl"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-3d-inner">
                <div className="card-image-container">
                  <img 
                    src={villaImg}
                    alt="Villa Interior" 
                    className="card-image w-full  object-cover"
                  />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content p-6 md:p-8 bg-surface-dark">
                  <h3 className="text-2xl font-bold mb-4">Architectural Harmony</h3>
                  <p className="text-gray-300">Blending contemporary design with traditional Himalayan architecture.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Villa;