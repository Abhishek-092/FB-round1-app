import React from 'react';
import { ShieldAlert, Key, Globe, EyeOff } from 'lucide-react';

const SECURITY_ITEMS = [
  {
    icon: Key,
    title: 'Zero-Knowledge Crypto Proofs',
    description: 'Data payloads are signed with public/private keys before transport. Aether routes payloads without ever reading the unencrypted memory block.'
  },
  {
    icon: ShieldAlert,
    title: 'Stateless Node Execution',
    description: 'VPC worker nodes spin up in isolated micro-VMs. As soon as the transmission finishes, the sandbox is completely scrubbed from the CPU cache.'
  },
  {
    icon: EyeOff,
    title: 'PII Scrubbing Filters',
    description: 'Pre-ingest regex filters mask social security codes, account balances, and user credentials, guaranteeing sensitive records never touch public indices.'
  },
  {
    icon: Globe,
    title: 'Sovereign Regional Isolation',
    description: 'Ensure data compliance. Force node queues to remain in specified regional geo-boundaries (EU-West, US-East, AP-South) dynamically.'
  }
];

export default function Security() {
  return (
    <section id="security" className="py-24 md:py-36 bg-[#114C5A] text-[#F1F6F4] relative overflow-hidden">
      
      {/* Decorative radial mesh light bloom */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FFC801]/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFC801] block mb-4">
              // CRYPTOGRAPHIC INTEGRITY
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1] text-[#F1F6F4]">
              Secured for global compliance.
            </h2>
          </div>
          <div className="lg:col-span-4 text-left">
            <p className="text-xs md:text-sm text-[#F1F6F4]/80 leading-relaxed font-sans">
              Every data byte flowing through Aether is shielded, isolated, and cryptographically verified. Build enterprise automations without losing data custody.
            </p>
          </div>
        </div>

        {/* Security Grid (Asymmetrical list) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {SECURITY_ITEMS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="flex gap-6 items-start p-8 border border-[#D9E8E2]/10 bg-[#D9E8E2]/5 hover:border-[#FFC801]/30 transition-all duration-300"
              >
                <div className="p-3 bg-[#D9E8E2]/10 border border-[#FFC801]/25 text-[#FFC801]">
                  <IconComp size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F1F6F4] mb-3">{item.title}</h3>
                  <p className="text-xs md:text-sm text-[#F1F6F4]/70 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Compliance badges row (JetBrains Mono) */}
        <div className="mt-20 pt-10 border-t border-[#D9E8E2]/10 flex flex-wrap justify-between items-center gap-6 font-mono text-[10px] tracking-widest text-[#F1F6F4]/40 uppercase">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC801]"></span>
            SOC2 Type II Certified
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9932]"></span>
            ISO 27001 Registered
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC801]"></span>
            HIPAA Compliant Structures
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9932]"></span>
            GDPR Data Custody Compliant
          </div>
        </div>

      </div>
    </section>
  );
}
