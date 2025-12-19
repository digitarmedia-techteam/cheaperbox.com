// Site-wide constants

export const SITE_NAME = 'DealFinder';
export const SITE_DESCRIPTION = 'Discover premium products at unbeatable prices. Curated AliExpress finds, verified for quality.';

// Breakpoints (px)
export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

// Animation durations (ms)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// Easing functions
export const EASING = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// Color palette
export const COLORS = {
  primary: {
    navy: '#0A192F',
    charcoal: '#1A1A1A',
  },
  gradient: {
    purple: '#8B5CF6',
    blue: '#3B82F6',
    coral: '#FF6B6B',
    orange: '#F59E0B',
  },
  neutral: {
    lightGray: '#F7F7F7',
    cardGray: '#E5E5E5',
  },
  accent: {
    green: '#10B981',
  },
} as const;

// Typography scale (px)
export const TYPOGRAPHY = {
  h1: {
    desktop: 72,
    mobile: 48,
  },
  h2: {
    desktop: 48,
    mobile: 32,
  },
  h3: {
    desktop: 32,
    mobile: 24,
  },
  body: {
    desktop: 18,
    mobile: 16,
  },
  small: 14,
} as const;

// Social links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
} as const;

// Trust metrics
export const TRUST_METRICS = {
  totalCustomers: '2M+',
  productsVerified: '50K+',
  averageRating: '4.9',
  supportAvailability: '24/7',
} as const;
