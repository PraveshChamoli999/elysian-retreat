import React from 'react';
import { useInView } from 'react-intersection-observer';

const Location = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="location">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark to-background-dark"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={`section-reveal ${inView ? 'visible' : ''}`}>
            <div className="glass-effect rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">pin_drop</span>
                </div>
                <span className="text-primary text-sm font-bold uppercase tracking-widest">The Destination</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Dehradun, <span className="font-serif italic gradient-text">India</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Nestled at 1000 meters in the Doon Valley, Elysian Retreat offers unparalleled views of the Shivalik Hills and access to pristine Himalayan landscapes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover-lift">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">flight</span>
                  </div>
                  <div>
                    <span className="block text-sm font-semibold">45 minutes</span>
                    <span className="text-xs text-gray-400">From Jolly Grant Airport</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover-lift">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">train</span>
                  </div>
                  <div>
                    <span className="block text-sm font-semibold">30 minutes</span>
                    <span className="text-xs text-gray-400">From Dehradun Station</span>
                  </div>
                </div>
              </div>
              <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                View Location Map
                <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-2 transition-transform">explore</span>
              </button>
            </div>
          </div>
          
          <div className={`section-reveal ${inView ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="card-3d rounded-3xl overflow-hidden shadow-2xl">
              <div className="card-3d-inner">
                <div className="card-image-container h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1705301802506-3feb648bc714?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Himalayan View" 
                    className="card-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold mb-2">Panoramic Majesty</h3>
                    <p className="text-gray-200">180° views of the Himalayan ranges</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent-gold/20 to-transparent rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;