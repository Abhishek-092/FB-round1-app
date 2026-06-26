import React, { memo } from 'react';

function Footer() {
  return (
    <footer className="py-16 bg-[#F1F6F4] text-[#172B36] border-t border-[#D9E8E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-6 gap-12 text-left">
        
        {/* Brand details */}
            <div className="flex items-center gap-3">
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
              <circle cx="50" cy="50" r="11" fill="url(#logoGlowFooter)" className="logo-pulse" />
              
              {/* Outer nodes (hollow rings matching background) */}
              <circle cx="50" cy="15" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="80.3" cy="32.5" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="80.3" cy="67.5" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="50" cy="85" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="19.7" cy="67.5" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              <circle cx="19.7" cy="32.5" r="5.5" fill="#F1F6F4" stroke="#FFC801" strokeWidth="2.5" />
              
              <defs>
                <radialGradient id="logoGlowFooter" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFC801" />
                  <stop offset="100%" stopColor="#FF9932" />
                </radialGradient>
              </defs>
            </svg>
            <span className="font-mono text-sm tracking-wider text-[#114C5A] font-bold">
              AETHER
            </span>
          </div>
          <p className="text-xs text-[#172B36]/60 leading-relaxed font-sans max-w-xs">
            Autonomous data processing networks and distributed schema alignment pipelines built for high-performance software architecture.
          </p>
          <div className="font-mono text-[9px] text-[#172B36]/40 uppercase tracking-widest pt-4">
            © 2026 Aether Systems Inc.
          </div>
        </div>

        {/* Links Col 1: System */}
        <div className="col-span-1 space-y-3 font-mono text-xs">
          <h4 className="text-[10px] uppercase text-[#172B36]/50 tracking-widest font-bold">System</h4>
          <ul className="space-y-2">
            <li><a href="#workflow" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Workflow</a></li>
            <li><a href="#features" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Mesh Nodes</a></li>
            <li><a href="#pricing" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Pricing Matrix</a></li>
            <li><a href="#security" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Telemetry</a></li>
          </ul>
        </div>

        {/* Links Col 2: Network */}
        <div className="col-span-1 space-y-3 font-mono text-xs">
          <h4 className="text-[10px] uppercase text-[#172B36]/50 tracking-widest font-bold">Network</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Node Catalog</a></li>
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Edge Routers</a></li>
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Status Core</a></li>
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">API Docs</a></li>
          </ul>
        </div>

        {/* Links Col 3: Resources */}
        <div className="col-span-1 space-y-3 font-mono text-xs">
          <h4 className="text-[10px] uppercase text-[#172B36]/50 tracking-widest font-bold">Specs</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">JSON Normalizer</a></li>
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Embedding Hub</a></li>
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">VPC Sandbox</a></li>
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Git Integrations</a></li>
          </ul>
        </div>

        {/* Links Col 4: Trust */}
        <div className="col-span-1 space-y-3 font-mono text-xs">
          <h4 className="text-[10px] uppercase text-[#172B36]/50 tracking-widest font-bold">Trust</h4>
          <ul className="space-y-2">
            <li><a href="#security" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Security Hub</a></li>
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">Data Custody</a></li>
            <li><a href="#" className="text-[#172B36]/70 hover:text-[#114C5A] transition-colors">SLA Contracts</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default memo(Footer);
