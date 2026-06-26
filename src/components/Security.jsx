import React from 'react';

// Custom inline SVGs — contextually matched to each security feature

// Custom inline SVGs — contextually matched to each security feature

// KeyIcon → cog-8-tooth
const KeyIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z"/>
      <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/>
    </g>
  </svg>
);

// ShieldIcon → cube-16-solid
const ShieldIcon = (props) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/>
  </svg>
);

// EyeSlashIcon → search
const EyeSlashIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
  </svg>
);

// GlobeIcon → link-solid
const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z" clipRule="evenodd"/>
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
    <section id="security" aria-label="Security and compliance" className="py-24 md:py-36 bg-[#114C5A] text-[#F1F6F4] relative overflow-hidden">
      
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
