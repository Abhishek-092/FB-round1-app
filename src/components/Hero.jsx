import React, { Suspense, memo } from 'react';

const ThreeScene = React.lazy(() => import('./ThreeScene'));

// Play triangle icon — replaced with allowed chevron-right SVG
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="m8.25 4.5l7.5 7.5l-7.5 7.5" />
  </svg>
);

function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-screen pt-28 md:pt-36 flex items-center overflow-hidden grainy-bg bg-bloom">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left stagger-in">
          
          {/* Label Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9E8E2] border border-[#114C5A]/10 mb-8 rounded-none">
            <span className="font-mono text-[10px] tracking-widest text-[#114C5A] uppercase font-semibold">
              // Version 4.0 Active
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#172B36] tracking-tighter leading-[0.9] mb-8">
            Data systems<br />
            <span className="text-[#114C5A]">that run</span><br />
            themselves.
          </h1>

          {/* Subheading / Copy */}
          <p className="text-sm md:text-base text-[#172B36]/80 max-w-md font-sans leading-relaxed mb-10">
            Deploy self-optimizing pipelines across distributed node meshes. Orchestrated by AI, verified by cryptography, and scaled without latency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a 
              href="#pricing"
              className="px-8 py-4 bg-[#114C5A] hover:bg-[#FFC801] hover:text-[#172B36] text-[#F1F6F4] text-xs font-mono uppercase tracking-widest transition-all duration-300 font-bold text-center shadow-md shadow-[#114C5A]/10 hover:shadow-[#FFC801]/20 transform hover:-translate-y-0.5"
            >
              Initialize Node
            </a>
            
            <a 
              href="#workflow"
              className="flex items-center justify-center gap-3 px-6 py-4 border border-[#114C5A]/20 hover:border-[#114C5A] text-[#172B36] text-xs font-mono uppercase tracking-widest transition-all duration-300 font-bold"
            >
              <PlayIcon />
              Watch Flow (1.8m)
            </a>
          </div>

          {/* Live system state bar (JetBrains Mono) */}
          <div className="mt-16 pt-8 border-t border-[#D9E8E2] w-full max-w-lg grid grid-cols-3 gap-6 font-mono">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#172B36]/50 mb-1">Glob. Latency</div>
              <div className="text-lg font-bold text-[#114C5A]">0.84ms</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#172B36]/50 mb-1">Nodes Active</div>
              <div className="text-lg font-bold text-[#114C5A]">1,402,983</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#172B36]/50 mb-1">Uptime</div>
              <div className="text-lg font-bold text-[#114C5A]">99.999%</div>
            </div>
          </div>

        </div>

        {/* Right Side: Three.js Interactive Network Canvas */}
        <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[600px]">
          {/* Subtle Ambient Bloom behind Canvas */}
          <div className="absolute inset-0 bg-radial from-[#D9E8E2]/60 to-transparent blur-3xl pointer-events-none rounded-full w-4/5 h-4/5 m-auto"></div>
          
          <Suspense fallback={<div className="w-full h-full min-h-[400px] lg:min-h-[600px] absolute inset-0" aria-hidden="true" />}>
            <ThreeScene />
          </Suspense>
        </div>

      </div>

      {/* Decorative vertical lines / grid styling */}
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#D9E8E2]/40 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-0 left-12 w-[1px] h-full bg-[#D9E8E2]/20 pointer-events-none hidden md:block"></div>
    </section>
  );
}

export default memo(Hero);
