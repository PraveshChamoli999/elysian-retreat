import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // 1. Text Content
  const title = "ELYSIAN";
  const subtitle = "The Boutique Homestay";
  
  // 2. Animation Variants (Kept same as before)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const titleLetterVariants = {
    hidden: { y: 50, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const subtitleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 1 }
    }
  };

  const subtitleLetterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const fadeUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-28 md:pt-20 md:pb-32 lg:min-h-[100dvh] lg:pt-24 lg:pb-36" id="hero">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>
        
        <motion.div 
          className="absolute inset-0 bg-center bg-cover bg-fixed sm:bg-auto"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "linear" }}
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=cover)'
          }}
        />
        
        {/* Decorative Blob - Responsive sizing */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] z-10"
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <motion.div 
        className="relative z-20 text-center px-4 sm:px-6 md:px-8 w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto flex flex-col items-center pb-12 sm:pb-16 md:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* COMING SOON BADGE - Responsive */}
        <motion.div 
          variants={fadeUpVariants}
          className="mb-4 sm:mb-6 md:mb-8 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#30E88C] animate-pulse"></span>
          <span className="text-xs sm:text-[10px] md:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/80">
            Unveiling Soon
          </span>
        </motion.div>

        {/* 1. MAIN TITLE - Fully Responsive */}
        <div className="overflow-hidden mb-2 sm:mb-3 md:mb-4 lg:mb-6 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight sm:tracking-tighter text-white flex flex-wrap justify-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 hero-text-glow leading-none">
            {title.split("").map((letter, i) => (
              <motion.span key={i} variants={titleLetterVariants}>
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* 2. SUBTITLE - Fully Responsive */}
        <motion.div 
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex items-center justify-center w-full"
          variants={subtitleContainerVariants}
        >
          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] uppercase text-gray-200 flex flex-wrap justify-center gap-0.5 sm:gap-1 md:gap-1.5 leading-tight">
            {subtitle.split("").map((char, i) => (
              <motion.span key={i} variants={subtitleLetterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* 3. DECORATIVE LINE - Responsive */}
        <motion.div 
          variants={fadeUpVariants}
          className="w-12 sm:w-16 md:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-transparent via-[#30E88C] to-transparent mb-6 sm:mb-8 md:mb-10 lg:mb-12 opacity-70"
        ></motion.div>

        {/* 4. DESCRIPTION TEXT - Responsive */}
        <motion.p 
          variants={fadeUpVariants}
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed sm:leading-6 md:leading-7 font-light px-2 sm:px-0"
        >
          We are currently crafting a masterpiece in the heart of the Himalayas. 
          <br className="hidden sm:block lg:inline"/> 
          <span className="text-white/60 block mt-2 sm:mt-3 md:inline md:mt-0">Prepare for a new era of luxury.</span>
        </motion.p>
        
        {/* 5. BUTTONS - Fully Responsive */}
        <motion.div 
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-6 md:px-0 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 rounded-full bg-[#30E88C] text-black font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] sm:min-h-[52px]"
          >
            Join Waitlist
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('the-villa')}
            className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 rounded-full border-2 border-white/30 text-white font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base backdrop-blur-sm hover:bg-white/10 transition-all duration-300 min-h-[44px] sm:min-h-[52px]"
          >
            View Vision
          </motion.button>
        </motion.div>

      </motion.div>
      
      {/* ================= SCROLL INDICATOR - PERFECTLY CENTERED & RESPONSIVE ================= */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 w-48 sm:w-56 md:w-64 max-w-[90vw] text-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3">
          {/* PERFECTLY CENTERED "The Journey Begins" */}
          <span className="text-xs sm:text-[10px] md:text-xs lg:text-[10px] uppercase tracking-[0.15em] sm:tracking-widest text-gray-300 sm:text-gray-400 font-medium block w-full text-center leading-tight px-1">
            The Journey Begins
          </span>
          <div className="w-0.5 sm:w-px h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-white/40 to-transparent mx-auto"></div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
