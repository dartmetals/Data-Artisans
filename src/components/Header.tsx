import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  //   const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Graduate Internship', href: '/internship' },
    { name: 'Career', href: '/career' },
    { name: 'Stories', href: '/stories' },
  ];

  // Handle scroll event to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Show scroll to top button after scrolling 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ?'bg-transparent backdrop-blur-0 border-b border-transparent'
          : 'bg-transparent backdrop-blur-0 border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2 group">
                <img 
                  src="/da-logo2.png" 
                  alt="Data Artisans Logo" 
                  className="w-48 h-20 md:w-60 md:h-16 object-contain"
                />
                {/* <span className="text-white font-bold text-xl md:text-2xl tracking-tight">
                  Data<span className="text-[#00D4FF]">Artisans</span>
                </span> */}
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 rounded-lg ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#0066FF] hover:bg-[#00D4FF]/10' 
                      : 'text-white hover:text-[#00D4FF] hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Register Button - Desktop - Made smaller */}
            <div className="hidden md:block">
              <button className={`px-3 py-1.5 text-lg bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white font-medium rounded-full hover:shadow-md hover:shadow-[#00D4FF]/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-1.5 ${
                !isScrolled && 'shadow-md'
              }`}>
                Get in touch
                {/* <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
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
                </svg> */}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#0066FF] hover:bg-[#00D4FF]/10' 
                  : 'text-white hover:text-[#00D4FF] hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute inset-0 top-16 md:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } `}
        >
          <div className="flex flex-col h-full">
            <nav className="flex flex-col p-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3 text-lg font-medium rounded-xl transition-all duration-200 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#0066FF] hover:bg-[#00D4FF]/10' 
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className={`pt-4 mt-2 border-t ${
                isScrolled ? 'border-[#00D4FF]/20' : 'border-white/10'
              }`}>
                <button className="w-full px-3 py-1.5 text-sm bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-1.5">
                  Get in touch
                  {/* <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
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
                  </svg> */}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Header;