import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="py-12 md:py-20 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-surface-dark to-background-dark"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center">
                <span className="material-symbols-outlined text-white">spa</span>
              </div>
              <span className="text-xl font-bold">Elysian</span>
            </div>
            <p className="text-gray-400 mb-6">
              A sanctuary of luxury and tranquility in the heart of the Himalayas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">videocam</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('the-villa')}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  The Villa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experiences')}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Experiences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Location
                </button>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                Dehradun, Uttarakhand
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-primary text-sm">call</span>
                +91 0000000000
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                hello@elysian-retreats.com
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Join Waitlist</h4>
            <p className="text-gray-400 mb-4">Experience The
Extraordinary.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="submit" 
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-semibold transition-all hover:scale-105"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Elysian Retreat. All rights reserved. | Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;