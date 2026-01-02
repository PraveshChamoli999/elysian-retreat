import React from 'react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    title: "Infinity Edge Experience",
    category: "The Pool",
    description: "Float above the clouds in our temperature-controlled infinity pool with panoramic Himalayan views.",
    image: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop",
    color: "primary",
    features: ["24/7 Access", "Private"],
    icon: "pool",
    delay: "0.1s"
  },
  {
    id: 2,
    title: "Culinary Excellence",
    category: "Gastronomy",
    description: "Farm-to-table dining with local Himalayan ingredients, curated by award-winning chefs.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    color: "accent-gold",
    features: ["Seasonal Menu", "Curated Wines"],
    icon: "restaurant",
    delay: "0.2s"
  },
  {
    id: 3,
    title: "Holistic Healing",
    category: "Wellness",
    description: "Ancient Ayurvedic therapies and modern wellness treatments in a serene mountain setting.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    color: "purple-400",
    features: ["Ayurveda", "Hydrotherapy"],
    icon: "spa",
    delay: "0.3s"
  },
  {
    id: 4,
    title: "Himalayan Expeditions",
    category: "Adventure",
    description: "Guided treks, mountain biking, and cultural tours exploring the untouched beauty of the Himalayas.",
    image: "https://images.unsplash.com/photo-1699972901575-a27de02f4916?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "blue-400",
    features: ["Trekking", "Wildlife", "Photography"],
    icon: "hiking",
    delay: "0.4s",
    wide: true
  },
  {
    id: 5,
    title: "Local Heritage",
    category: "Culture",
    description: "Experience traditional Himalayan culture through music, dance, and artisan workshops.",
    image: "https://images.unsplash.com/photo-1716573259535-5fa69018b69a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "red-400",
    features: ["Folk Music", "Crafts"],
    icon: "celebration",
    delay: "0.5s"
  }
];

const ExperienceCard = ({ experience, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <div 
      ref={ref}
      className={`card-stagger ${experience.wide ? 'lg:col-span-2' : ''} ${inView ? 'visible' : ''}`}
      style={{ animationDelay: experience.delay }}
    >
      <div className="card-3d h-full rounded-3xl overflow-hidden shadow-2xl">
        <div className="card-3d-inner h-full">
          <div className="card-image-container h-64">
            <img 
              src={experience.image} 
              alt={experience.title} 
              className="card-image w-full h-full object-cover"
            />
            <div className="card-overlay"></div>
          </div>
          <div className="card-content p-6 md:p-8 bg-surface-dark h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-${experience.color} text-sm font-bold uppercase tracking-widest`}>
                {experience.category}
              </span>
              <div className={`h-px flex-1 bg-gradient-to-r from-${experience.color} to-transparent`}></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{experience.title}</h3>
            <p className="text-gray-300 mb-6 flex-grow">{experience.description}</p>
            <div className="mt-auto">
              {experience.wide ? (
                <div className="flex flex-wrap gap-4">
                  {experience.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className={`px-4 py-2 rounded-full bg-${experience.color}/10 text-${experience.color} text-sm border border-${experience.color}/20`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  {experience.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="experiences">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-surface-dark to-background-dark"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent-gold/5 to-transparent rounded-full animate-spin-reverse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 md:mb-24 section-reveal ${inView ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6 border border-primary/20">
            Curated Experiences
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Future <span className="font-serif italic gradient-text">Amenities</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Immerse yourself in bespoke experiences crafted to perfection. Each moment at Elysian is designed to create lasting memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="experiencesGrid">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;