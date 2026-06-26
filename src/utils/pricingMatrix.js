export const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR' },
  INR: { symbol: '₹', rate: 83.0, label: 'INR' }
};

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
 * Calculates price dynamically.
 * Applies a 20% discount for annual billing.
 */
export function calculatePrice(basePriceUSD, currencyCode, isAnnual) {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  let price = basePriceUSD * currency.rate;
  
  if (isAnnual) {
    price = price * 0.8; // 20% discount
  }
  
  // Format to standard visual denominations
  if (currencyCode === 'INR') {
    return Math.round(price / 50) * 50;
  }
  return Math.round(price);
}
