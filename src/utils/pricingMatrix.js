/**
 * Centralized pricing configuration matrix.
 * All pricing values derive from this file — never hardcode in JSX.
 */

export const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR' },
  INR: { symbol: '₹', rate: 83.0, label: 'INR' }
};

export const BILLING_CYCLES = {
  monthly: { id: 'monthly', label: 'Monthly', discountMultiplier: 1.0 },
  annual: { id: 'annual', label: 'Annual', discountMultiplier: 0.8 }
};

export const ANNUAL_DISCOUNT_PERCENT = 20;

export const BASE_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Autonomous pipelines for growing engineering teams.',
    basePriceUSD: 29,
    features: [
      '3 Autonomous Data Pipelines',
      '10GB Data Processed / mo',
      'Real-time Flow Visualizer',
      'Community Slack Support',
      'Standard Encryption (AES-256)'
    ],
    cta: 'Start Free Trial',
    badge: 'Standard'
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Advanced distributed orchestration for scale.',
    basePriceUSD: 79,
    features: [
      'Unlimited Data Pipelines',
      '250GB Data Processed / mo',
      'Custom Connectors & APIs',
      '1-Hour Service Level Agreement',
      'Dedicated Node Isolation',
      'Advanced Anomaly Detection'
    ],
    cta: 'Upgrade to Pro',
    badge: 'Popular',
    primary: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom security and computing for global networks.',
    basePriceUSD: 299,
    features: [
      'Multi-region Mesh Networks',
      'Unlimited Processing Capacity',
      'Direct Node Customization',
      'Zero-Latency Security Shields',
      'Dedicated Architect Support',
      'Custom SLA & Legal Contracts'
    ],
    cta: 'Contact Architecture',
    badge: 'Custom'
  }
];

/**
 * Builds the full pricing matrix: plan × currency × billing cycle.
 * Used for memoized lookups; all display prices flow through calculatePrice.
 */
export function buildPricingMatrix(plans = BASE_PLANS, currencies = CURRENCIES, cycles = BILLING_CYCLES) {
  const matrix = {};

  for (const plan of plans) {
    matrix[plan.id] = {};
    for (const currencyCode of Object.keys(currencies)) {
      matrix[plan.id][currencyCode] = {};
      for (const cycleKey of Object.keys(cycles)) {
        matrix[plan.id][currencyCode][cycleKey] = calculatePrice(
          plan.basePriceUSD,
          currencyCode,
          cycleKey === 'annual'
        );
      }
    }
  }

  return matrix;
}

/**
 * Calculates price dynamically from the configuration matrix.
 * Applies currency conversion via rate, then annual discount (20%).
 */
export function calculatePrice(basePriceUSD, currencyCode, isAnnual) {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const cycle = isAnnual ? BILLING_CYCLES.annual : BILLING_CYCLES.monthly;
  let price = basePriceUSD * currency.rate * cycle.discountMultiplier;

  if (currencyCode === 'INR') {
    return Math.round(price / 50) * 50;
  }
  return Math.round(price);
}

/**
 * Resolves a formatted price from the matrix for a specific plan/currency/cycle.
 */
export function getMatrixPrice(planId, currencyCode, billingCycle) {
  const plan = BASE_PLANS.find((p) => p.id === planId);
  if (!plan) return 0;
  return calculatePrice(plan.basePriceUSD, currencyCode, billingCycle === 'annual');
}
