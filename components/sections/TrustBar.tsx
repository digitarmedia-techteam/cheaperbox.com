'use client';

import { Shield, Truck, BadgeCheck, Headphones } from 'lucide-react';

const trustItems = [
  { icon: BadgeCheck, text: 'Verified Quality' },
  { icon: Truck, text: 'Free Shipping' },
  { icon: Shield, text: 'Buyer Protection' },
  { icon: Headphones, text: '24/7 Support' },
];

export default function TrustBar() {
  return (
    <section className="py-6 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-600"
            >
              <item.icon className="w-5 h-5 text-violet-600" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
