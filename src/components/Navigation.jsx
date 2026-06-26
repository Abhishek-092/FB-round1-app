import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#F1F6F4]/80 backdrop-blur-md border-[#D9E8E2] py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none">
          <span className="font-mono text-sm tracking-wider text-[#114C5A] font-bold">
            AE//THER
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFC801] group-hover:scale-150 transition-transform duration-200"></span>
        </a>

        {/* Navigation Links */}
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

        {/* Call to Actions */}
        <div className="flex items-center gap-6">
          <a 
            href="#pricing" 
            className="text-xs font-mono tracking-wider text-[#172B36] hover:text-[#114C5A] transition-colors"
          >
            Sign In
          </a>
          <a
            href="#cta"
            className="relative px-5 py-2.5 text-xs font-mono uppercase tracking-widest bg-[#114C5A] text-[#F1F6F4] border border-[#114C5A] hover:bg-transparent hover:text-[#114C5A] transition-all duration-300 rounded-none shadow-sm focus:outline-none"
          >
            Deploy Node
          </a>
        </div>
      </div>
    </header>
  );
}
