import React, { useState } from 'react';

const FAQS = [
  {
    question: "How does Aether achieve sub-millisecond execution times?",
    answer: "Aether compiles data pipeline configurations directly into low-level native binaries. By executing pipelines within highly optimized V8 and WebAssembly sandboxes directly inside CPU cache limits, we skip database serialization buffers and network transport hops."
  },
  {
    question: "Can we deploy Aether worker nodes inside our own private cloud?",
    answer: "Yes. With our Enterprise plan, you can run worker nodes inside your private AWS VPC, GCP project, or bare-metal setups. The node communicates metadata back to the Aether orchestrator, but your actual payload data never leaves your VPC perimeter."
  },
  {
    question: "How is schema drift managed automatically?",
    answer: "When Aether detects a structural type change (e.g. an integer column arriving as a float, or a missing field), it passes the payload through a localized mini-LLM parser. The parser infers the correction, updates the schema in the catalog, repairs the record dynamically, and continues the stream without raising exception flags."
  },
  {
    question: "Do you support vector database synchronization?",
    answer: "Yes, natively. Aether automatically generates text embeddings on the fly for incoming text streams (using custom local embed models or third-party APIs like OpenAI and Cohere) and writes directly to databases like Pinecone, Qdrant, Milvus, or pgvector."
  },
  {
    question: "Is there a free tier for local development sandboxes?",
    answer: "Yes. Developers can spin up up to 3 local node pipelines for free on our Starter plan. In this sandbox environment, pricing metrics only trigger if processing surpasses 10GB of records per month."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" aria-label="Frequently asked questions" className="py-24 md:py-36 bg-[#F1F6F4] border-b border-[#D9E8E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left column: Editorial headline */}
        <div className="lg:col-span-4 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#114C5A] block mb-4">
            // FREQUENTLY ENCOUNTERED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#172B36] tracking-tight leading-tight mb-6">
            Everything you need to know.
          </h2>
          <p className="text-xs md:text-sm text-[#172B36]/70 leading-relaxed font-sans">
            Have a question about node clusters, private cloud VPC setups, or security sandboxes? Find answers to our most common engineering inquiries.
          </p>
        </div>

        {/* Right column: Handcrafted Accordion */}
        <div className="lg:col-span-8 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border transition-all duration-300 ${
                  isOpen ? 'bg-[#D9E8E2]/40 border-[#114C5A]' : 'bg-[#D9E8E2]/10 border-[#D9E8E2]'
                }`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FFC801]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="text-sm md:text-base font-bold text-[#172B36]">
                    {faq.question}
                  </span>
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`w-4 h-4 text-[#172B36]/50 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-[#114C5A]' : ''
                    }`}
                  >
                    <path d="m19.5 8.25l-7.5 7.5l-7.5-7.5"/>
                  </svg>
                </button>

                {/* Accordion body container with CSS grid rows transition */}
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-xs md:text-sm text-[#172B36]/80 leading-relaxed font-sans text-left border-t border-[#D9E8E2]/60 pt-4">
                      {faq.answer}
                    </p>
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
