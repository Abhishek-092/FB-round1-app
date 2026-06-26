import React, { useState, useMemo, useCallback } from 'react';
import { BASE_PLANS, CURRENCIES, calculatePrice } from '../utils/pricingMatrix';

// Memoized Pricing Card to prevent unneeded re-renders
const PricingCard = React.memo(({ plan, price, symbol, isAnnual }) => {
  return (
    <div 
      className={`border p-8 flex flex-col justify-between text-left transition-all duration-300 relative ${
        plan.primary 
          ? 'bg-[#114C5A] border-[#FFC801] text-[#F1F6F4]' 
          : 'bg-[#D9E8E2]/25 border-[#D9E8E2] text-[#172B36]'
      }`}
    >
      {/* Badge / Label */}
      {plan.badge && (
        <div className="absolute top-8 right-8">
          <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border ${
            plan.primary 
              ? 'border-[#FFC801] text-[#FFC801]' 
              : 'border-[#114C5A]/20 text-[#114C5A]'
          }`}>
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        {/* Plan name */}
        <h3 className="font-mono text-xs uppercase tracking-wider mb-2 opacity-60">
          {plan.name}
        </h3>
        <p className={`text-xs mb-8 max-w-[200px] ${plan.primary ? 'text-[#F1F6F4]/80' : 'text-[#172B36]/80'}`}>
          {plan.description}
        </p>

        {/* Dynamic Price Display */}
        <div className="mb-8 font-mono">
          <div className="flex items-baseline">
            <span className={`text-2xl font-bold ${plan.primary ? 'text-[#FFC801]' : 'text-[#114C5A]'}`}>
              {symbol}
            </span>
            <span className={`text-5xl md:text-6xl font-extrabold tracking-tight ml-1 ${plan.primary ? 'text-[#FFC801]' : 'text-[#114C5A]'}`}>
              {price}
            </span>
          </div>
          <span className="text-[10px] opacity-50 block mt-2">
            PER NODE / {isAnnual ? 'BILLED ANNUALLY (-20%)' : 'BILLED MONTHLY'}
          </span>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-10 text-xs">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`w-3.5 h-3.5 flex-shrink-0 ${plan.primary ? 'text-[#FFC801]' : 'text-[#114C5A]'}`}
              >
                <path d="m8.25 4.5l7.5 7.5l-7.5 7.5"/>
              </svg>
              <span className="opacity-90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button 
        type="button"
        className={`w-full py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300 font-bold ${
          plan.primary 
            ? 'bg-[#FFC801] text-[#172B36] hover:bg-[#F1F6F4] hover:text-[#114C5A]' 
            : 'bg-[#114C5A] text-[#F1F6F4] hover:bg-[#FFC801] hover:text-[#172B36]'
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
});

// isolated sub-tree wrapper for pricing values
function Pricing() {
  const [currency, setCurrency] = useState('USD');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleCurrencyChange = useCallback((curr) => setCurrency(curr), []);
  const handleBillingMonthly = useCallback(() => setBillingCycle('monthly'), []);
  const handleBillingAnnual = useCallback(() => setBillingCycle('annual'), []);
  const handleBillingToggle = useCallback(
    () => setBillingCycle((prev) => (prev === 'monthly' ? 'annual' : 'monthly')),
    []
  );

  const plansWithCalculatedPrices = useMemo(() => {
    return BASE_PLANS.map((plan) => ({
      ...plan,
      calculatedPrice: calculatePrice(plan.basePriceUSD, currency, billingCycle === 'annual')
    }));
  }, [currency, billingCycle]);

  const activeCurrencySymbol = CURRENCIES[currency].symbol;
  const isAnnual = billingCycle === 'annual';

  return (
    <section id="pricing" aria-label="Pricing plans" className="py-24 md:py-36 bg-[#F1F6F4] border-b border-[#D9E8E2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#114C5A] block mb-4">
              // PRICING MATRIX
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#172B36] tracking-tight leading-tight">
              Predictable, scale-fit licensing.
            </h2>
          </div>

          {/* Pricing Selectors - Isolated state triggers local-only renders */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:justify-end font-mono">
            {/* Currency Selector */}
            <div className="flex items-center border border-[#D9E8E2] bg-[#D9E8E2]/20 p-1">
              {Object.keys(CURRENCIES).map(curr => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => handleCurrencyChange(curr)}
                  className={`px-3 py-1.5 text-[10px] font-bold tracking-wider transition-all duration-150 ${
                    currency === curr 
                      ? 'bg-[#114C5A] text-[#FFC801]' 
                      : 'text-[#172B36]/60 hover:text-[#172B36]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Billing cycle switch */}
            <div className="flex items-center gap-3">
              <button 
                type="button"
                onClick={handleBillingMonthly}
                className={`text-[10px] font-bold tracking-wider transition-colors ${
                  billingCycle === 'monthly' ? 'text-[#114C5A]' : 'text-[#172B36]/40'
                }`}
              >
                Monthly
              </button>
              
              {/* Custom Toggle Switch */}
              <button 
                type="button"
                onClick={handleBillingToggle}
                className="w-10 h-5 bg-[#D9E8E2] p-0.5 rounded-none flex items-center transition-colors focus:outline-none"
                aria-label="Toggle annual billing discount"
              >
                <div 
                  className={`h-4 w-4 bg-[#114C5A] transition-transform duration-200 ${
                    billingCycle === 'annual' ? 'translate-x-5 bg-[#FFC801]' : ''
                  }`}
                />
              </button>

              <button 
                type="button"
                onClick={handleBillingAnnual}
                className={`text-[10px] font-bold tracking-wider transition-colors flex items-center gap-1 ${
                  billingCycle === 'annual' ? 'text-[#114C5A]' : 'text-[#172B36]/40'
                }`}
              >
                <span>Annual</span>
                <span className="text-[9px] bg-[#FFC801] text-[#172B36] px-1 font-semibold leading-none py-0.5">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansWithCalculatedPrices.map((plan) => (
            <PricingCard 
              key={plan.id}
              plan={plan}
              price={plan.calculatedPrice}
              symbol={activeCurrencySymbol}
              isAnnual={isAnnual}
            />
          ))}
        </div>

        {/* Dynamic quote card */}
        <div className="mt-12 p-8 border border-dashed border-[#D9E8E2] bg-[#D9E8E2]/10 flex flex-col md:flex-row md:items-center justify-between text-left">
          <div className="mb-4 md:mb-0">
            <span className="font-mono text-[10px] bg-[#D9E8E2] text-[#114C5A] px-2 py-0.5 border border-[#114C5A]/10 uppercase font-bold">
              Hybrid Custom Deployment
            </span>
            <h3 className="text-lg font-bold text-[#172B36] mt-2">Need private VPC node clusters?</h3>
            <p className="text-xs text-[#172B36]/70 mt-1 max-w-xl">
              We offer bare-metal compute instances, multi-region routing shields, customized data SLAs, and direct access to our core systems engineering team.
            </p>
          </div>
          <button 
            type="button"
            className="px-6 py-3 border border-[#114C5A] text-[#114C5A] hover:bg-[#114C5A] hover:text-[#F1F6F4] text-xs font-mono uppercase tracking-widest transition-all duration-300 font-bold"
          >
            Request Private Demo
          </button>
        </div>

      </div>
    </section>
  );
}

export default React.memo(Pricing);
