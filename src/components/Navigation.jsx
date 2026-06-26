import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
            <svg className="w-6 h-6 text-[#114C5A]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outermost dotted orbit (spins slowly clockwise) */}
              <circle cx="50" cy="50" r="42" stroke="#FF9932" strokeWidth="1.25" strokeDasharray="4 4" opacity="0.6" className="logo-spin-slow" />
              
              {/* Concentric rings (spin slowly counter-clockwise) */}
              <circle cx="50" cy="50" r="30" stroke="#114C5A" strokeWidth="1" opacity="0.25" className="logo-spin-slow-reverse" />
              <circle cx="50" cy="50" r="20" stroke="#114C5A" strokeWidth="1" opacity="0.15" />
              
              {/* Connecting Radial Lines (hexagonal) */}
              <line x1="50" y1="50" x2="50" y2="15" stroke="#FFC801" strokeWidth="2.5" />
              <line x1="50" y1="50" x2="80.3" y2="32.5" stroke="#FFC801" strokeWidth="2.5" />
              <line x1="50" y1="50" x2="80.3" y2="67.5" stroke="#FFC801" strokeWidth="2.5" />
              <line x1="50" y1="50" x2="50" y2="85" stroke="#FFC801" strokeWidth="2.5" />
              <line x1="50" y1="50" x2="19.7" y2="67.5" stroke="#FFC801" strokeWidth="2.5" />
              <line x1="50" y1="50" x2="19.7" y2="32.5" stroke="#FFC801" strokeWidth="2.5" />

              {/* Central glowing node (pulsing) */}
              <circle cx="50" cy="50" r="11" fill="url(#logoGlow)" className="logo-pulse" />
              
              {/* Outer nodes (hollow rings matching background) */}
              <circle cx="50" cy="15" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="80.3" cy="32.5" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="80.3" cy="67.5" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="50" cy="85" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="19.7" cy="67.5" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="19.7" cy="32.5" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              
              <defs>
                <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFC801" />
                  <stop offset="100%" stopColor="#FF9932" />
                </radialGradient>
              </defs>
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
              className="md:hidden p-2 text-[#172B36] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
