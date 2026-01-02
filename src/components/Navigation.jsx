import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// If you want to use your logo, import it here:
// import logoImg from '../Images/Logo.jpeg';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Spy & Background Style
  useEffect(() => {
    const handleScroll = () => {
      // 1. Determine active section
      const sections = ['hero', 'the-villa', 'experiences', 'location', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
          }
        }
      });

      // 2. Toggle solid background on scroll
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  // Menu Items Config
  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'the-villa', label: 'The Villa' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${
          scrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* --- LOGO --- */}
            <div className="flex items-center space-x-3 cursor-pointer z-50" onClick={() => scrollToSection('hero')}>
              {/* Option A: Use your Image Logo */}
              {/* <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-full object-cover" /> */}

              {/* Option B: Use the CSS Icon (Current) */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#30E88C] to-green-700 flex items-center justify-center animate-pulse-glow">
                <span className="material-symbols-outlined text-white text-xl">spa</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Elysian</span>
            </div>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-[#30E88C]' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* --- MOBILE BURGER BUTTON --- */}
            <button 
              className="md:hidden text-white p-2 z-50 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-2xl font-light uppercase tracking-[0.2em] transition-colors ${
                    activeSection === item.id 
                      ? 'text-[#30E88C]' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Optional: Mobile-only CTA */}
              <div className="pt-8">
                <button className="px-8 py-3 rounded-full border border-[#30E88C] text-[#30E88C] text-sm uppercase tracking-widest hover:bg-[#30E88C] hover:text-black transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;