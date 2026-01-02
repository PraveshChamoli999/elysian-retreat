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

  // 1. Text Content - UPDATED FOR WEB PROMOTION
  const title = "ELYSIAN";
  const subtitle = "The Boutique Homestay";
  
  // 2. Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
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
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>
        
        <motion.div 
          className="absolute inset-0 bg-center bg-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "linear" }}
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop)'
          }}
        />
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-10"
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <motion.div 
        className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* NEW: COMING SOON BADGE */}
        <motion.div 
          variants={fadeUpVariants}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#30E88C] animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/80">
            Unveiling Soon
          </span>
        </motion.div>

        {/* 1. MAIN TITLE */}
        <div className="overflow-hidden mb-2 md:mb-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white flex gap-1 sm:gap-4 hero-text-glow">
            {title.split("").map((letter, i) => (
              <motion.span key={i} variants={titleLetterVariants}>
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* 2. SUBTITLE */}
        <motion.div 
          className="mb-8 h-8 md:h-12 flex items-center justify-center"
          variants={subtitleContainerVariants}
        >
          <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] md:tracking-[0.4em] uppercase text-gray-200 flex">
            {subtitle.split("").map((char, i) => (
              <motion.span key={i} variants={subtitleLetterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* 3. DECORATIVE LINE */}
        <motion.div 
          variants={fadeUpVariants}
          className="w-16 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-[#30E88C] to-transparent mb-8 md:mb-10 opacity-70"
        ></motion.div>

        {/* 4. DESCRIPTION TEXT (Updated for Under Construction) */}
        <motion.p 
          variants={fadeUpVariants}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed font-light"
        >
          We are currently crafting a masterpiece in the heart of the Himalayas. 
          <br className="hidden md:block"/> 
          <span className="text-white/60">Prepare for a new era of luxury.</span>
        </motion.p>
        
        {/* 5. BUTTONS (Updated CTAs) */}
        <motion.div 
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Join Waitlist Button */}
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(48, 232, 140, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full bg-[#30E88C] text-black font-bold uppercase tracking-widest text-xs sm:text-sm shadow-lg transition-all"
          >
            Join Waitlist
          </motion.button>
          
          {/* View Vision/Concept Button */}
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('the-villa')}
            className="px-8 py-4 rounded-full border border-white/30 text-white font-bold uppercase tracking-widest text-xs sm:text-sm backdrop-blur-sm transition-all"
          >
            View Vision
          </motion.button>
        </motion.div>

      </motion.div>
      
      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-gray-400">The Journey Begins</span>
          <div className="w-px h-10 md:h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;