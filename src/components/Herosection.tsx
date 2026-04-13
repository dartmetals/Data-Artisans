import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate how much the hero section has scrolled (0 to 1)
        const progress = Math.min(1, Math.max(0, scrollY / windowHeight));
        setScrollProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      style={{
        transform: `translateY(-${scrollProgress * 100}%)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Background Image */}
      <img 
        src="/da-bghero.png" 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Gradient Overlay for Modern Look */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F2E]/70 via-transparent to-[#0066FF]/30"></div>

      {/* Content Container - LEFT ALIGNED */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-white mb- max-w-3xl leading-tight">
          Get Placed in
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
            UK Top Companies
          </span>
        </h1>

        {/* Description Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-4 leading-relaxed">
          Unlock incredible career opportunities with expert guidance tailored to help you thrive in UK Top Companies. 
          We provide end-to-end support to accelerate your professional journey. Guidance for job placements, 
          CV marketing, and professional training.
        </p>

        {/* CTA Button */}
        <button className="group relative px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white font-semibold rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            Get Started
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </span>
          {/* Button Hover Effect */}
          <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>
      </div>
    </section>
  );
};

// Combined export - HeroSection only
export { HeroSection };