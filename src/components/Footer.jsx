import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 bg-[#F1F6F4] text-[#172B36] border-t border-[#D9E8E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-6 gap-12 text-left">
        
        {/* Brand details */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-[#114C5A]" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/>
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
