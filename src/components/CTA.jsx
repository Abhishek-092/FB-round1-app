import React, { useState, useEffect } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [nodeCount, setNodeCount] = useState(1402983);

  // Counter animation: slowly ticks up live node counts
  useEffect(() => {
    const timer = setInterval(() => {
      setNodeCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="cta" className="py-28 md:py-36 bg-[#F1F6F4] relative overflow-hidden border-b border-[#D9E8E2]">
      
      {/* Glow bloom */}
      <div className="absolute inset-0 bg-radial from-[#D9E8E2]/40 to-transparent blur-3xl pointer-events-none rounded-full w-2/3 h-2/3 m-auto"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Bold Typography & Counter */}
        <div className="lg:col-span-7 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#114C5A] block mb-6">
            // LIVE DEPLOYMENT COMMAND
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#172B36] tracking-tighter leading-[0.9] mb-8">
            Deploy your first<br />
            node mesh.
          </h2>
          <p className="text-sm text-[#172B36]/80 max-w-md mb-10 leading-relaxed font-sans">
            Start processing streams with zero-knowledge nodes in minutes. Free developer tier includes 10GB capacity. No contracts, cancel anytime.
          </p>

          {/* Node Active Counter */}
          <div className="flex items-center gap-4 bg-[#D9E8E2]/35 border border-[#D9E8E2] px-6 py-4 max-w-sm font-mono">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF9932] animate-pulse"></span>
            <div>
              <span className="text-[10px] text-[#172B36]/50 uppercase tracking-widest block">Active Global Nodes</span>
              <span className="text-lg font-bold text-[#114C5A] tracking-wider">
                {nodeCount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Shell Form */}
        <div className="lg:col-span-5 bg-[#114C5A] p-8 md:p-10 text-left border border-[#FFC801]/20 shadow-xl relative">
          
          <div className="flex items-center gap-2 mb-6 border-b border-[#F1F6F4]/10 pb-4">
            {/* Terminal/chevron icon - matches shell script context */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#FFC801]">
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
            </svg>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#F1F6F4]/60">
              node_initializer.sh
            </span>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <span className="font-mono text-xs text-[#FFC801] block">
                Initialization token generated!
              </span>
              <p className="text-xs text-[#F1F6F4]/80 font-sans leading-relaxed">
                Check your inbox. We have sent the credentials to download and register your local V4 node agent.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 border border-[#FFC801] text-[#FFC801] text-[10px] font-mono uppercase tracking-widest hover:bg-[#FFC801] hover:text-[#172B36] transition-all"
              >
                Reset Initialization
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label 
                  htmlFor="email-input" 
                  className="font-mono text-[9px] uppercase tracking-widest text-[#F1F6F4]/60 block"
                >
                  Enter developer email
                </label>
                <input 
                  id="email-input"
                  type="email" 
                  required
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#172B36]/50 border border-[#D9E8E2]/20 px-4 py-3 text-sm font-mono text-[#F1F6F4] focus:outline-none focus:border-[#FFC801] rounded-none placeholder-[#F1F6F4]/30"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[9px] font-mono text-[#F1F6F4]/50">
                  <input type="checkbox" id="terms" required className="accent-[#114C5A] border-[#D9E8E2]/35" />
                  <label htmlFor="terms" className="cursor-pointer">I accept sandbox compliance terms</label>
                </div>

                {/* Magnetic / Premium Hover Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FFC801] hover:bg-[#FF9932] text-[#172B36] hover:text-[#F1F6F4] font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 rounded-none shadow-md cursor-pointer group"
                >
                  <span>Initialize Sandbox</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                    <path d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5H16.5M21.75 7.5v5.25"/>
                  </svg>
                </button>
              </div>
            </form>
          )}

          {/* Absolute decorative border nodes */}
          <div className="absolute top-0 right-0 h-1.5 w-1.5 bg-[#FFC801]"></div>
          <div className="absolute bottom-0 left-0 h-1.5 w-1.5 bg-[#FF9932]"></div>
        </div>

      </div>
    </section>
  );
}
