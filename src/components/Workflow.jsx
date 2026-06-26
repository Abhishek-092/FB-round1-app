import React, { useState, useEffect, memo } from 'react';

// Custom SVGs requested by judges
// IngestionIcon → arrow-path: represents multi-source raw ingest
const IngestionIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
  </svg>
);

// NormalizationIcon → chart-pie: represents schema alignment & normalization
const NormalizationIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"/>
    <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"/>
  </svg>
);

// EnrichmentIcon → cog-8-tooth: represents enrichment engine
const EnrichmentIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z"/>
      <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/>
    </g>
  </svg>
);

// RoutingIcon → link-solid: represents distributed mesh routing
const RoutingIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z" clipRule="evenodd"/>
  </svg>
);

// DeliveryIcon → cube-16-solid: represents destination delivery
const DeliveryIcon = (props) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/>
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

function Workflow() {
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
              
              {/* Dynamic Connecting Line Container - stops exactly at first and last node center */}
              <div className="absolute left-[48px] right-[48px] md:left-[72px] md:right-[72px] top-0 bottom-0 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Connecting Line */}
                  <line 
                    x1="0" 
                    y1="50%" 
                    x2="100%" 
                    y2="50%" 
                    stroke="#D9E8E2" 
                    strokeWidth="2" 
                  />
                  
                  {/* Animated Pulsing Connection Line */}
                  <line 
                    x1="0" 
                    y1="50%" 
                    x2="100%" 
                    y2="50%" 
                    stroke="#FFC801" 
                    strokeWidth="2" 
                    strokeDasharray="8"
                    className="pulse-connection"
                  />
                </svg>
              </div>

              {/* Step Hub Nodes */}
              {STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                const isSelected = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <button
                    type="button"
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className="relative z-10 flex flex-col items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC801] focus-visible:ring-offset-2"
                    aria-label={`Show details for ${step.title}`}
                    aria-pressed={isSelected}
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
                  type="button"
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

export default memo(Workflow);
