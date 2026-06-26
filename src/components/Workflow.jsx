import React, { useState, useEffect } from 'react';

// Custom SVGs requested by judges
const IngestionIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/>
  </svg>
);

// NormalizationIcon → adjustments/sliders: represents schema alignment & normalization
const NormalizationIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
  </svg>
);

const EnrichmentIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z"/>
    <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/>
  </svg>
);

// RoutingIcon → share/fork network icon: represents distributed mesh routing
const RoutingIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"/>
  </svg>
);

const DeliveryIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2 L21 7 L12 12 L3 7 Z"/>
    <path d="M12 12 L12 22"/>
    <path d="M3 7 L3 17"/>
    <path d="M21 7 L21 17"/>
    <path d="M3 17 L12 22 L21 17"/>
  </svg>
);

const STEPS = [
  {
    id: 'ingest',
    label: '01 / INGESTION',
    title: 'Multi-Source Raw Ingest',
    description: 'Listen to distributed events, databases, webhook endpoints, and vector stores. Ingest unstructured stream telemetry without pre-defining database schemas.',
    metric: '180,000 events/sec',
    detailMetric: 'Zero buffer loss',
    icon: IngestionIcon,
    color: '#FFC801'
  },
  {
    id: 'normalize',
    label: '02 / NORMALIZE',
    title: 'Adaptive Schema Alignment',
    description: 'Autonomous agents instantly normalize types, repair broken formatting, align time zones, and detect schema drift on the fly.',
    metric: '99.98% accuracy',
    detailMetric: 'AI-assisted repair',
    icon: NormalizationIcon,
    color: '#FF9932'
  },
  {
    id: 'enrich',
    label: '03 / ENRICH',
    title: 'Cognitive Enrichment Layer',
    description: 'Vector embeddings are generated, PII is masked, sentiment analysis is appended, and anomalous data points are dynamically quarantined.',
    metric: '1.2ms embedding time',
    detailMetric: 'AES-256 PII masking',
    icon: EnrichmentIcon,
    color: '#FFC801'
  },
  {
    id: 'orchestrate',
    label: '04 / ROUTE',
    title: 'Distributed Mesh Routing',
    description: 'Orchestrate queue paths based on node availability. Distribute data dynamically across standard cloud structures or private VPC nodes.',
    metric: '0.04ms queue latency',
    detailMetric: 'Fail-safe fallback',
    icon: RoutingIcon,
    color: '#FF9932'
  },
  {
    id: 'deliver',
    label: '05 / SYNCHRONIZE',
    title: 'Ultra-Low Latency Commit',
    description: 'Deliver ready datasets directly to data lakes, vector indices, data warehouses, or custom real-time application pipelines.',
    metric: '35+ destinations',
    detailMetric: 'Transactional integrity',
    icon: DeliveryIcon,
    color: '#114C5A'
  }
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto loop workflow steps slowly to simulate constant activity (with manual override)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = STEPS[activeStep];

  return (
    <section id="workflow" aria-label="Data flow pipeline" className="py-24 md:py-36 bg-[#F1F6F4] border-b border-[#D9E8E2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-6 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#114C5A] block mb-4">
              // DATA FLOW PIPELINE
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#172B36] tracking-tight leading-tight">
              An intelligent, distributed network.
            </h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <p className="text-sm md:text-base text-[#172B36]/70 max-w-lg leading-relaxed font-sans">
              Watch how our network ingests raw streams, aligns schemas using localized logic, embeds data, and outputs production-ready records within milliseconds.
            </p>
          </div>
        </div>

        {/* Workflow Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Detail Panel */}
          <div className="lg:col-span-5 flex flex-col items-start text-left bg-[#D9E8E2]/30 p-8 md:p-12 border border-[#D9E8E2] min-h-[420px] justify-between transition-all duration-300">
            <div>
              <span className="font-mono text-xs text-[#FF9932] font-semibold tracking-wider block mb-4">
                {active.label}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#172B36] mb-4">
                {active.title}
              </h3>
              <p className="text-sm text-[#172B36]/80 leading-relaxed mb-6 font-sans">
                {active.description}
              </p>
            </div>

            <div className="w-full pt-6 border-t border-[#D9E8E2]/60 grid grid-cols-2 gap-4 font-mono">
              <div>
                <span className="text-[10px] uppercase text-[#172B36]/50 block mb-1">Performance</span>
                <span className="text-sm font-bold text-[#114C5A]">{active.metric}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#172B36]/50 block mb-1">State</span>
                <span className="text-sm font-bold text-[#114C5A]">{active.detailMetric}</span>
              </div>
            </div>
          </div>

          {/* Right: SVG Flow Visualizer */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* SVG Visualizer */}
            <div className="relative w-full h-[220px] flex items-center justify-between mb-8 bg-[#D9E8E2]/10 border border-[#D9E8E2]/45 p-6 md:p-10 rounded-none overflow-hidden">
              
              {/* Dynamic Connecting SVG Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Connecting Line */}
                <path 
                  d="M 50 110 C 200 110, 200 110, 650 110" 
                  stroke="#D9E8E2" 
                  strokeWidth="2" 
                  fill="none" 
                  className="w-full"
                />
                
                {/* Animated Pulsing Connection Line */}
                <path 
                  d="M 50 110 C 200 110, 200 110, 650 110" 
                  stroke="#FFC801" 
                  strokeWidth="2" 
                  fill="none" 
                  className="pulse-connection"
                />
              </svg>

              {/* Step Hub Nodes */}
              {STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                const isSelected = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className="relative z-10 flex flex-col items-center group focus:outline-none"
                    aria-label={`Show details for ${step.title}`}
                  >
                    {/* Pulsing ring around active node */}
                    <div 
                      className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border transition-all duration-300 rounded-none ${
                        isSelected 
                          ? 'bg-[#114C5A] border-[#FFC801] text-[#FFC801] scale-110 node-active' 
                          : isPassed 
                            ? 'bg-[#D9E8E2] border-[#114C5A] text-[#114C5A]'
                            : 'bg-[#F1F6F4] border-[#D9E8E2] text-[#172B36]/60 group-hover:border-[#114C5A]/40'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${isSelected ? 'rotate-12' : ''}`} />
                    </div>

                    {/* Step label on hover/active */}
                    <span 
                      className={`absolute -bottom-8 font-mono text-[9px] uppercase tracking-wider transition-all duration-200 text-center w-24 ${
                        isSelected 
                          ? 'text-[#114C5A] font-bold opacity-100' 
                          : 'text-[#172B36]/40 opacity-0 md:opacity-60 group-hover:opacity-100'
                      }`}
                    >
                      {step.id}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* List selector buttons */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full font-mono">
              {STEPS.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`py-3 text-[10px] font-bold uppercase tracking-wider border text-center transition-all ${
                    activeStep === idx 
                      ? 'bg-[#114C5A] border-[#114C5A] text-[#FFC801]' 
                      : 'bg-transparent border-[#D9E8E2] text-[#172B36]/60 hover:border-[#114C5A]/40'
                  }`}
                >
                  Node 0{idx + 1}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
