// Type definitions for the website

export interface Product {
  id: number;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category?: string;
  affiliateLink?: string;
}

export interface Category {
  name: string;
  count: string;
  gradient: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface TrustMetric {
  number: string;
  label: string;
}
