import React from 'react';

const BRANDS = [
  { name: 'KRONOS_DATA', sector: 'Telemetry' },
  { name: 'APERTURE_COGNITIVE', sector: 'Neural compute' },
  { name: 'HELIOS_SYSTEMS', sector: 'Edge node mesh' },
  { name: 'VERTEX_FLOW', sector: 'Vector routing' },
  { name: 'SPECTRA_NET', sector: 'Decentralized Q' },
  { name: 'ACME_ORCHESTRA', sector: 'State machine' }
];

export default function Companies() {
  return (
    <section className="py-12 border-b border-[#D9E8E2] bg-[#D9E8E2]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
          
          <div className="flex-shrink-0 text-left">
            <span className="font-mono text-[10px] tracking-widest text-[#114C5A] uppercase font-bold">
              // INTEGRATED NETWORKS
            </span>
          </div>

          <div className="relative w-full overflow-hidden mask-reveal">
            {/* Infinite ticker wrapper */}
            <div className="flex items-center gap-12 animate-[marquee_45s_linear_infinite] whitespace-nowrap">
              {/* Double up the list for loop continuity */}
              {[...BRANDS, ...BRANDS].map((brand, idx) => (
                <div key={idx} className="inline-flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#172B36] tracking-wider">
                    {brand.name}
                  </span>
                  <span className="font-mono text-[9px] bg-[#D9E8E2] text-[#114C5A] px-2 py-0.5 border border-[#114C5A]/10">
                    {brand.sector}
                  </span>
                  <span className="h-1 w-1 bg-[#FF9932] rounded-full mx-2"></span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
