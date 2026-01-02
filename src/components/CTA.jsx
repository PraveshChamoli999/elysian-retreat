import React from 'react';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`glass-effect rounded-3xl p-12 text-center border border-white/10 shadow-2xl section-reveal hover-grow ${inView ? 'visible' : ''}`}>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-6 block">Limited Availability</span>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
            Ready for an <span className="font-serif italic text-primary">Unforgettable</span> Experience?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Be among the first to experience Elysian Retreat. 
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-background-dark font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;