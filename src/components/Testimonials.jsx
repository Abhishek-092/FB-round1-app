import React from 'react';

const LOGS = [
  {
    quote: "Aether completely restructured our telemetry ingest. We went from managing fragile Kubernetes routing configurations to deploying 200 distributed pipelines in under a day. The zero-knowledge memory architecture is a game-changer.",
    author: "Elena Rostova",
    title: "VP of Platform Engineering",
    company: "KRONOS DATA",
    stats: "2.4B events/day",
    caseLabel: "CASE STUDY // KRONOS DATA"
  },
  {
    quote: "No other platform handles adaptive schema repairs at our scale. Aether automatically catches format drifts, repairs dates, and maps models correctly. Our data lakes are clean, and our downstream LLMs have never been more reliable.",
    author: "Marcus Vance",
    title: "Chief Data Architect",
    company: "APERTURE COGNITIVE",
    stats: "0.14ms ingestion latency",
    caseLabel: null
  },
  {
    quote: "Aether's edge node mesh lets us compute PII filters locally before data crosses our network perimeter. It satisfies legal requirements while maintaining sub-millisecond execution speeds.",
    author: "Sarah Jenkins",
    title: "Director of Enterprise Security",
    company: "HELIOS DISTRIBUTED",
    stats: "SOC2 Compliance verified",
    caseLabel: null
  }
];

export default function Testimonials() {
  const [primary, ...secondary] = LOGS;

  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials"
      className="py-24 md:py-36 bg-[#F1F6F4] border-b border-[#D9E8E2]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Editorial label */}
        <span className="font-mono text-xs uppercase tracking-widest text-[#114C5A] block text-left mb-16">
          // REVIEWS FROM IMPLEMENTATION ARCHITECTS
        </span>

        {/* Asymmetric Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">

          {/* Main Large Quote (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-12 border border-[#114C5A] bg-[#D9E8E2]/20">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF9932] font-bold block mb-6">
                {primary.caseLabel}
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#172B36] leading-snug tracking-tight italic font-serif">
                &ldquo;{primary.quote}&rdquo;
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#D9E8E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-[#114C5A] text-sm">{primary.author}</div>
                <div className="text-xs text-[#172B36]/60">{primary.title}, {primary.company}</div>
              </div>
              <div className="font-mono text-right sm:text-left">
                <span className="text-[9px] uppercase text-[#172B36]/40 block">Node Throughput</span>
                <span className="text-xs font-bold text-[#114C5A]">{primary.stats}</span>
              </div>
            </div>
          </div>

          {/* Column with Stacked Smaller Quotes (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {secondary.map((log, idx) => (
              <div
                key={idx}
                className="p-8 border border-[#D9E8E2] bg-[#D9E8E2]/10 hover:border-[#114C5A]/40 transition-colors duration-200 flex flex-col justify-between h-full"
              >
                <p className="text-xs md:text-sm text-[#172B36]/80 leading-relaxed italic mb-8 font-sans">
                  &ldquo;{log.quote}&rdquo;
                </p>

                <div className="pt-6 border-t border-[#D9E8E2]/60 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-[#172B36] text-xs">{log.author}</div>
                    <div className="text-[10px] text-[#172B36]/60">{log.title}, {log.company}</div>
                  </div>
                  <div className="font-mono text-right">
                    <span className="text-[9px] uppercase text-[#172B36]/40 block">METRIC</span>
                    <span className="text-[10px] font-bold text-[#114C5A]">{log.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
