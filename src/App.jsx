import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Workflow from './components/Workflow';
import BentoGrid from './components/BentoGrid';
import Pricing from './components/Pricing';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="grainy-bg min-h-screen flex flex-col bg-[#F1F6F4] text-[#172B36]">
      {/* Sticky header navigation */}
      <Navigation />
      
      {/* Main narrative flows */}
      <main className="flex-grow">
        {/* Cinematic hero and interactive 3D nodes canvas */}
        <Hero />
        
        {/* Trusted company marquee */}
        <Companies />
        
        {/* How the AI processes data flow */}
        <Workflow />
        
        {/* Architectural Bento capabilities grid with desktop/mobile sync */}
        <BentoGrid />
        
        {/* Optimized dynamic matrix pricing engine */}
        <Pricing />
        
        {/* Cryptographic security capabilities showcase */}
        <Security />
        
        {/* Customer architectural reviews */}
        <Testimonials />
        
        {/* Handcrafted technical FAQ accordion */}
        <FAQ />
        
        {/* Sandbox init command launcher */}
        <CTA />
      </main>

      {/* Corporate compliance spec footer */}
      <Footer />
    </div>
  );
}

export default App;
