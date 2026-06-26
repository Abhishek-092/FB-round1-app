import React from 'react';

// Custom inline SVGs — contextually matched to each security feature

const KeyIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z"/>
  </svg>
);

const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
  </svg>
);

const EyeSlashIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>
  </svg>
);

const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
  </svg>
);

const SECURITY_ITEMS = [
  {
    icon: KeyIcon,
    title: 'Zero-Knowledge Crypto Proofs',
    description: 'Data payloads are signed with public/private keys before transport. Aether routes payloads without ever reading the unencrypted memory block.'
  },
  {
    icon: ShieldIcon,
    title: 'Stateless Node Execution',
    description: 'VPC worker nodes spin up in isolated micro-VMs. As soon as the transmission finishes, the sandbox is completely scrubbed from the CPU cache.'
  },
  {
    icon: EyeSlashIcon,
    title: 'PII Scrubbing Filters',
    description: 'Pre-ingest regex filters mask social security codes, account balances, and user credentials, guaranteeing sensitive records never touch public indices.'
  },
  {
    icon: GlobeIcon,
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
                  <IconComp className="w-5 h-5" />
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
