import React from 'react';
import { useInView } from 'react-intersection-observer';

const timelineItems = [
  {
    id: 1,
    date: "Jan 2026",
    title: "Ground Breaking",
    description: "Foundation laid and site clearing completed with minimal environmental impact, preserving 90% of existing trees.",
    status: "completed",
    align: "left"
  },
  {
    id: 2,
    date: "Current Phase",
    title: "Structural Framework",
    description: "Main resort building and the exclusive villa structure nearing completion. Using sustainable local stone and timber.",
    status: "current",
    align: "right",
    highlight: true
  },
  {
    id: 3,
    date: "Est. 2027",
    title: "Grand Opening",
    description: "Welcoming our first guests to Elysian Retreat. Experience the dawn of a new era.",
    status: "upcoming",
    align: "left"
  }
];

const Timeline = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section className="py-32 relative bg-background-dark overflow-hidden" id="progress">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 hidden md:block"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-20 section-reveal ${inView ? 'visible' : ''}`}>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Construction Updates</span>
          <h2 className="text-3xl md:text-5xl font-light text-white">Bringing The <span className="font-serif italic text-gray-500">Vision</span> To Life</h2>
        </div>
        
        <div className="space-y-24">
          {timelineItems.map((item) => (
            <div key={item.id} className="relative flex flex-col md:flex-row items-center group">
              {item.align === "left" ? (
                <>
                  <div className="md:w-1/2 md:pr-16 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <span className="text-primary font-mono text-sm mb-2 block">{item.date}</span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  
                  <div className={`absolute left-1/2 -translate-x-1/2 ${
                    item.status === 'current' ? 'w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-background-dark animate-pulse-slow' :
                    item.status === 'completed' ? 'w-6 h-6 bg-primary rounded-full shadow-[0_0_30px_rgba(48,232,140,0.6)] z-10 flex items-center justify-center' :
                    'w-6 h-6 bg-white/20 rounded-full'
                  } hidden md:flex items-center justify-center order-1 md:order-2`}>
                    {item.status === 'current' && (
                      <div className="w-6 h-6 bg-primary rounded-full animate-ping"></div>
                    )}
                    {item.status === 'completed' && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="md:w-1/2 md:pl-16 order-3 md:order-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-[1px] w-20 bg-white/20 md:hidden"></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 md:pr-16 md:text-right order-2 md:order-1 mt-6 md:mt-0 opacity-40"></div>
                  
                  <div className={`absolute left-1/2 -translate-x-1/2 ${
                    item.status === 'current' ? 'w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-background-dark animate-pulse-slow' :
                    item.status === 'completed' ? 'w-6 h-6 bg-primary rounded-full shadow-[0_0_30px_rgba(48,232,140,0.6)] z-10 flex items-center justify-center' :
                    'w-6 h-6 bg-white/20 rounded-full'
                  } hidden md:flex items-center justify-center order-1 md:order-2`}>
                    {item.status === 'current' && (
                      <div className="w-6 h-6 bg-primary rounded-full animate-ping"></div>
                    )}
                    {item.status === 'completed' && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="md:w-1/2 md:pl-16 order-3 md:order-3">
                    {item.highlight && (
                      <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20 animate-pulse-slow">
                        {item.date}
                      </span>
                    )}
                    {!item.highlight && (
                      <span className="text-gray-500 font-mono text-sm mb-2 block">{item.date}</span>
                    )}
                    <h3 className={`${item.highlight ? 'text-3xl' : 'text-2xl'} font-bold text-white mb-3`}>
                      {item.title}
                    </h3>
                    <p className={item.highlight ? "text-gray-300 text-lg" : "text-gray-400"}>
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;