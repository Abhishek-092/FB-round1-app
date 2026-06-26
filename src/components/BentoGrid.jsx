import React, { useState } from 'react';

// Custom SVGs requested by judges
// MeshIcon → shield-check: represents memory sandboxing / isolation
const MeshIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
  </svg>
);

// CodeIcon → code brackets: represents cognitive parsing / schema alignment
const CodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
  </svg>
);

const SandboxIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Isometric cube outline version */}
    <path d="M12 2 L21 7 L12 12 L3 7 Z"/>
    <path d="M12 12 L12 22"/>
    <path d="M3 7 L3 17"/>
    <path d="M21 7 L21 17"/>
    <path d="M3 17 L12 22 L21 17"/>
  </svg>
);

const EnrichIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* link.svg outline */}
    <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/>
  </svg>
);

// BrokerIcon → bolt/lightning: represents high-throughput, high-speed ingestion
const BrokerIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
  </svg>
);

const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m19.5 8.25l-7.5 7.5l-7.5-7.5"/>
  </svg>
);

const FEATURES = [
  {
    id: 'nodes',
    icon: SandboxIcon,
    label: 'NODE_MESH',
    title: 'Distributed Execution Nodes',
    description: 'Deploy stateless containers that execute code closer to your data sources. Minimize pipeline transport overhead and query latency.',
    metric: '0.84ms latency',
    colorClass: 'border-[#114C5A] hover:bg-[#D9E8E2]/25',
    svgType: 'mesh'
  },
  {
    id: 'parser',
    icon: CodeIcon,
    label: 'PARSER_ENGINE',
    title: 'Cognitive Parsing',
    description: 'Transform unformatted JSON, log strings, and binary streams into structured database tables on ingestion.',
    metric: '99.98% repair rate',
    colorClass: 'border-[#D9E8E2] hover:bg-[#D9E8E2]/20',
    svgType: 'code'
  },
  {
    id: 'shield',
    icon: MeshIcon,
    label: 'SEC_SHIELD',
    title: 'Memory Sandboxing',
    description: 'Run data transformations in isolated memory sandboxes, protecting private networks from untrusted source payloads.',
    metric: 'Zero leak architecture',
    colorClass: 'border-[#D9E8E2] hover:bg-[#D9E8E2]/20',
    svgType: 'shield'
  },
  {
    id: 'enrichment',
    icon: EnrichIcon,
    label: 'DATA_ENRICH',
    title: 'Deep Data Enrichment',
    description: 'Enrich raw records with live vector database lookups and LLM semantic tagging during ingestion pipelines.',
    metric: '+140 metadata markers',
    colorClass: 'border-[#114C5A] hover:bg-[#D9E8E2]/25',
    svgType: 'enrich'
  },
  {
    id: 'broker',
    icon: BrokerIcon,
    label: 'INGRESS_BROKER',
    title: 'High-Throughput Broker',
    description: 'Scale ingestion queues to handle millions of requests without buffering bottlenecks. Supported by an optimized memory queue.',
    metric: '12M ops/sec peak capacity',
    colorClass: 'border-[#D9E8E2] hover:bg-[#D9E8E2]/20',
    svgType: 'broker'
  }
];

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState(0);


  // SVG Animation components based on features
  const renderSVG = (type, isActive) => {
    switch (type) {
      case 'mesh':
        return (
          <svg className="w-full h-32 md:h-40 text-[#114C5A]" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="3" fill="#FFC801" className={isActive ? 'animate-ping' : ''} />
            <circle cx="100" cy="20" r="3" fill="#114C5A" />
            <circle cx="100" cy="80" r="3" fill="#114C5A" />
            <circle cx="150" cy="50" r="3" fill="#FF9932" />
            <line x1="50" y1="50" x2="100" y2="20" stroke="#114C5A" strokeWidth="0.5" strokeDasharray="3" />
            <line x1="50" y1="50" x2="100" y2="80" stroke="#114C5A" strokeWidth="0.5" strokeDasharray="3" />
            <line x1="100" y1="20" x2="150" y2="50" stroke="#114C5A" strokeWidth="0.5" />
            <line x1="100" y1="80" x2="150" y2="50" stroke="#114C5A" strokeWidth="0.5" />
            {isActive && (
              <>
                <circle cx="75" cy="35" r="2" fill="#FFC801">
                  <animate attributeName="cx" values="50;100" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="50;20" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="125" cy="35" r="2" fill="#FF9932">
                  <animate attributeName="cx" values="100;150" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="20;50" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </>
            )}
          </svg>
        );
      case 'code':
        return (
          <div className="w-full h-32 md:h-40 flex items-center justify-center font-mono text-[10px] text-[#114C5A]/80 overflow-hidden bg-[#D9E8E2]/20 border border-[#D9E8E2]/40 p-3 select-none">
            <div className="w-full text-left space-y-1">
              <div className="text-[#FF9932]">{'{'}</div>
              <div className="pl-4">"source": "api_stream",</div>
              <div className="pl-4 flex items-center gap-1">
                <span>"status":</span>
                <span className={isActive ? 'text-emerald-700 font-bold' : 'text-[#114C5A]'}>
                  {isActive ? '"parsed_ok"' : '"parsing..."'}
                </span>
              </div>
              <div className="pl-4">"records": 10842</div>
              <div className="text-[#FF9932]">{'}'}</div>
            </div>
          </div>
        );
      case 'shield':
        return (
          <svg className="w-full h-32 md:h-40 text-[#114C5A]" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="75" y="20" width="50" height="60" rx="4" stroke="#114C5A" strokeWidth="1" />
            <circle cx="100" cy="50" r="10" stroke="#FFC801" strokeWidth="1" fill={isActive ? 'rgba(255,200,1,0.1)' : 'transparent'} />
            <path d="M 90 20 L 110 20" stroke="#114C5A" strokeWidth="2" />
            {isActive && (
              <path d="M 60 50 A 40 40 0 0 1 140 50" stroke="#FF9932" strokeWidth="0.75" strokeDasharray="4">
                <animateTransform attributeName="transform" type="rotate" from="0 100 50" to="360 100 50" dur="4s" repeatCount="indefinite" />
              </path>
            )}
          </svg>
        );
      case 'enrich':
        return (
          <svg className="w-full h-32 md:h-40 text-[#114C5A]" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 0)">
              <rect x="40" y="35" width="40" height="30" border="1px" stroke="#114C5A" strokeWidth="1" />
              <rect x="110" y="35" width="40" height="30" stroke="#114C5A" strokeWidth="1" />
              <line x1="80" y1="50" x2="110" y2="50" stroke="#FFC801" strokeWidth="1" strokeDasharray="3" />
              {isActive && (
                <circle cx="95" cy="50" r="3" fill="#FF9932">
                  <animate attributeName="cx" values="80;110" dur="1s" repeatCount="indefinite" />
                </circle>
              )}
              {/* Extra metadata blocks */}
              <rect x="118" y="20" width="24" height="8" rx="2" fill="#D9E8E2" stroke="#114C5A" strokeWidth="0.5" />
              <rect x="118" y="72" width="24" height="8" rx="2" fill="#D9E8E2" stroke="#114C5A" strokeWidth="0.5" />
            </g>
          </svg>
        );
      case 'broker':
        return (
          <svg className="w-full h-full text-[#114C5A]" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 20 50 L 50 50 L 60 20 L 75 80 L 90 40 L 105 60 L 115 50 L 180 50"
              stroke="#114C5A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {isActive && (
              <path
                d="M 20 50 L 50 50 L 60 20 L 75 80 L 90 40 L 105 60 L 115 50 L 180 50"
                stroke="#FFC801"
                strokeWidth="2"
                strokeDasharray="20"
                strokeDashoffset="100"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <animate attributeName="stroke-dashoffset" values="100;0" dur="1.5s" repeatCount="indefinite" />
              </path>
            )}
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" aria-label="Architectural capabilities" className="py-24 md:py-36 bg-[#F1F6F4] border-b border-[#D9E8E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#114C5A] block mb-4">
              // ARCHITECTURAL CAPABILITIES
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#172B36] tracking-tight leading-tight">
              Engineered for extreme performance.
            </h2>
          </div>
          <div className="lg:col-span-5 text-left">
            <p className="text-sm md:text-base text-[#172B36]/70 leading-relaxed font-sans">
              Aether eliminates pipelines delays. These unified processing components orchestrate data from ingestion points directly into active warehouses.
            </p>
          </div>
        </div>

        {/* 1. Desktop Bento Grid (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* Card 1: Distributed Execution Nodes (Span 2 cols, 2 rows) */}
          <div 
            onClick={() => setActiveIndex(0)}
            onMouseEnter={() => setActiveIndex(0)}
            className={`bento-glow-card col-span-2 row-span-2 border p-8 flex flex-col justify-between text-left cursor-pointer transition-all duration-300 ${
              activeIndex === 0 ? 'bg-[#D9E8E2]/40 border-[#114C5A]' : 'bg-[#D9E8E2]/15 border-[#D9E8E2]/60'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[10px] tracking-wider text-[#114C5A] uppercase block mb-1">
                  {FEATURES[0].label}
                </span>
                <h3 className="text-2xl font-bold text-[#172B36]">{FEATURES[0].title}</h3>
              </div>
              <div className="p-2 border border-[#114C5A]/10 bg-[#F1F6F4]">
                <SandboxIcon className="w-[18px] h-[18px] text-[#114C5A]" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 items-center">
              <p className="text-xs text-[#172B36]/70 leading-relaxed max-w-sm">
                {FEATURES[0].description}
              </p>
              <div className="relative">
                {renderSVG('mesh', activeIndex === 0)}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9E8E2] flex justify-between items-center font-mono">
              <span className="text-[10px] text-[#172B36]/40">CAPABILITY_METRIC</span>
              <span className="text-xs font-bold text-[#114C5A]">{FEATURES[0].metric}</span>
            </div>
          </div>

          {/* Card 2: Cognitive Parsing (Span 1 col, 1 row) */}
          <div 
            onClick={() => setActiveIndex(1)}
            onMouseEnter={() => setActiveIndex(1)}
            className={`bento-glow-card col-span-1 row-span-1 border p-6 flex flex-col justify-between text-left cursor-pointer transition-all duration-300 ${
              activeIndex === 1 ? 'bg-[#D9E8E2]/40 border-[#114C5A]' : 'bg-[#D9E8E2]/15 border-[#D9E8E2]/60'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[10px] tracking-wider text-[#114C5A] uppercase block mb-1">
                  {FEATURES[1].label}
                </span>
                <h3 className="text-lg font-bold text-[#172B36]">{FEATURES[1].title}</h3>
              </div>
            </div>
            <div className="pt-2">
              <span className="font-mono text-xs font-bold text-[#FF9932]">{FEATURES[1].metric}</span>
            </div>
          </div>

          {/* Card 3: Memory Sandboxing (Span 1 col, 1 row) */}
          <div 
            onClick={() => setActiveIndex(2)}
            onMouseEnter={() => setActiveIndex(2)}
            className={`bento-glow-card col-span-1 row-span-1 border p-6 flex flex-col justify-between text-left cursor-pointer transition-all duration-300 ${
              activeIndex === 2 ? 'bg-[#D9E8E2]/40 border-[#114C5A]' : 'bg-[#D9E8E2]/15 border-[#D9E8E2]/60'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[10px] tracking-wider text-[#114C5A] uppercase block mb-1">
                  {FEATURES[2].label}
                </span>
                <h3 className="text-lg font-bold text-[#172B36]">{FEATURES[2].title}</h3>
              </div>
            </div>
            <div className="pt-2">
              <span className="font-mono text-xs font-bold text-[#114C5A]">{FEATURES[2].metric}</span>
            </div>
          </div>

          {/* Card 4: Deep Data Enrichment (Span 1 col, 2 rows - Tall Card) */}
          <div 
            onClick={() => setActiveIndex(3)}
            onMouseEnter={() => setActiveIndex(3)}
            className={`bento-glow-card col-span-1 row-span-2 border p-8 flex flex-col justify-between text-left cursor-pointer transition-all duration-300 ${
              activeIndex === 3 ? 'bg-[#D9E8E2]/40 border-[#114C5A]' : 'bg-[#D9E8E2]/15 border-[#D9E8E2]/60'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[10px] tracking-wider text-[#114C5A] uppercase block mb-1">
                  {FEATURES[3].label}
                </span>
                <h3 className="text-xl font-bold text-[#172B36]">{FEATURES[3].title}</h3>
              </div>
              <div className="p-2 border border-[#114C5A]/10 bg-[#F1F6F4]">
                <EnrichIcon className="w-[18px] h-[18px] text-[#114C5A]" />
              </div>
            </div>

            <div className="my-4">
              {renderSVG('enrich', activeIndex === 3)}
              <p className="text-xs text-[#172B36]/70 leading-relaxed mt-4">
                {FEATURES[3].description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#D9E8E2] flex justify-between items-center font-mono">
              <span className="text-[10px] text-[#172B36]/40">METADATA_MARKERS</span>
              <span className="text-xs font-bold text-[#114C5A]">{FEATURES[3].metric}</span>
            </div>
          </div>

          {/* Card 5: High-Throughput Broker (Span 2 cols, 1 row - Wide Card) */}
          <div
            onClick={() => setActiveIndex(4)}
            onMouseEnter={() => setActiveIndex(4)}
            className={`bento-glow-card col-span-2 row-span-1 border p-8 flex flex-row items-stretch gap-10 text-left cursor-pointer transition-all duration-300 ${
              activeIndex === 4 ? 'bg-[#D9E8E2]/40 border-[#114C5A]' : 'bg-[#D9E8E2]/15 border-[#D9E8E2]/60'
            }`}
          >
            {/* Left: Text + metric, fills height with flex-col justify-between */}
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>
                <span className="font-mono text-[10px] tracking-wider text-[#114C5A] uppercase block mb-1.5">
                  {FEATURES[4].label}
                </span>
                <h3 className="text-xl font-bold text-[#172B36] mb-2 leading-tight">{FEATURES[4].title}</h3>
                <p className="text-xs text-[#172B36]/70 leading-relaxed line-clamp-3">
                  {FEATURES[4].description}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#D9E8E2]/60 font-mono">
                <span className="text-[10px] text-[#172B36]/40 uppercase tracking-wider">INGRESS_CAPACITY</span>
                <span className="text-xs font-bold text-[#FF9932]">{FEATURES[4].metric}</span>
              </div>
            </div>

            {/* Right: Waveform SVG — occupies 42% width, stretches to full card height */}
            <div className="flex-shrink-0 w-[42%] h-full flex items-center border-l border-[#D9E8E2]/40 pl-8">
              {renderSVG('broker', activeIndex === 4)}
            </div>
          </div>

        </div>

        {/* 2. Mobile Accordion (Hidden on Desktop) */}
        <div className="block lg:hidden space-y-4">
          {FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            const isOpen = activeIndex === idx;

            return (
              <div 
                key={feature.id} 
                className={`border transition-all duration-300 ${
                  isOpen ? 'bg-[#D9E8E2]/40 border-[#114C5A]' : 'bg-[#D9E8E2]/10 border-[#D9E8E2]'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveIndex(idx)}
                  className="w-full p-6 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FFC801]"
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${feature.title}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 border ${isOpen ? 'bg-[#114C5A] text-[#FFC801] border-[#114C5A]' : 'bg-[#F1F6F4] text-[#172B36]/60 border-[#D9E8E2]'}`}>
                      <IconComponent className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-[#114C5A]/60 block tracking-widest uppercase">
                        {feature.label}
                      </span>
                      <h3 className="text-base font-bold text-[#172B36]">{feature.title}</h3>
                    </div>
                  </div>
                  <ChevronDownIcon 
                    className={`w-4 h-4 text-[#172B36]/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#114C5A]' : ''}`} 
                  />
                </button>

                {/* Accordion Body (CSS grid-rows transition) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 space-y-4 border-t border-[#D9E8E2]/60 text-left">
                      <p className="text-xs text-[#172B36]/80 leading-relaxed font-sans">
                        {feature.description}
                      </p>
                      
                      <div className="p-4 bg-[#F1F6F4]/60 border border-[#D9E8E2]/60">
                        {renderSVG(feature.svgType, isOpen)}
                      </div>

                      <div className="flex justify-between items-center font-mono text-[10px] border-t border-[#D9E8E2]/60 pt-4">
                        <span className="text-[#172B36]/50">METRIC</span>
                        <span className="font-bold text-[#114C5A]">{feature.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
