import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[#F1F6F4]/80 backdrop-blur-md border-[#D9E8E2] py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <svg className="w-6 h-6 text-[#114C5A]" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/>
            </svg>
            <span className="font-mono text-sm tracking-wider text-[#114C5A] font-bold">
              AETHER
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#workflow" 
              className="text-xs uppercase font-mono tracking-widest text-[#172B36]/70 hover:text-[#114C5A] transition-colors duration-150"
            >
              Workflow
            </a>
            <a 
              href="#features" 
              className="text-xs uppercase font-mono tracking-widest text-[#172B36]/70 hover:text-[#114C5A] transition-colors duration-150"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-xs uppercase font-mono tracking-widest text-[#172B36]/70 hover:text-[#114C5A] transition-colors duration-150"
            >
              Pricing
            </a>
            <a 
              href="#security" 
              className="text-xs uppercase font-mono tracking-widest text-[#172B36]/70 hover:text-[#114C5A] transition-colors duration-150"
            >
              Security
            </a>
            <a 
              href="#faq" 
              className="text-xs uppercase font-mono tracking-widest text-[#172B36]/70 hover:text-[#114C5A] transition-colors duration-150"
            >
              FAQ
            </a>
          </nav>

          {/* Actions & Hamburger Toggle */}
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href="#pricing" 
              className="hidden sm:inline-block text-xs font-mono tracking-wider text-[#172B36] hover:text-[#114C5A] transition-colors"
            >
              Sign In
            </a>
            
            <a
              href="#cta"
              className="hidden sm:inline-block relative px-5 py-2.5 text-xs font-mono uppercase tracking-widest bg-[#114C5A] text-[#F1F6F4] border border-[#114C5A] hover:bg-transparent hover:text-[#114C5A] transition-all duration-300 rounded-none shadow-sm focus:outline-none"
            >
              Deploy Node
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-[#172B36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC801] focus-visible:ring-offset-1"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#F1F6F4]/95 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out border-b border-[#D9E8E2] ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col justify-center h-full max-w-7xl mx-auto px-6 py-24 space-y-8 text-left font-mono">
          <a 
            href="#workflow" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg uppercase tracking-widest text-[#172B36] hover:text-[#114C5A]"
          >
            01 // Workflow
          </a>
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg uppercase tracking-widest text-[#172B36] hover:text-[#114C5A]"
          >
            02 // Features
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg uppercase tracking-widest text-[#172B36] hover:text-[#114C5A]"
          >
            03 // Pricing
          </a>
          <a 
            href="#security" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg uppercase tracking-widest text-[#172B36] hover:text-[#114C5A]"
          >
            04 // Security
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg uppercase tracking-widest text-[#172B36] hover:text-[#114C5A]"
          >
            05 // FAQ
          </a>
          
          <div className="pt-6 border-t border-[#D9E8E2] flex flex-col gap-4">
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-[#172B36] font-bold text-left"
            >
              Sign In
            </a>
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 bg-[#114C5A] text-[#F1F6F4] text-xs font-mono uppercase tracking-widest text-center"
            >
              Deploy Node
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
