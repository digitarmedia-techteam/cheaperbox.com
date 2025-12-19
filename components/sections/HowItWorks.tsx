'use client';

import { motion } from 'framer-motion';
import { Search, ShieldCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'We curate',
    description: 'Our team searches through millions of products to find exceptional deals.',
  },
  {
    icon: ShieldCheck,
    title: 'We verify',
    description: 'Every product is checked for quality, reviews, and seller reliability.',
  },
  {
    icon: Truck,
    title: 'You save',
    description: 'Shop with confidence knowing you\'re getting the best value.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-3">
            How it works
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Simple, transparent, and designed to save you money
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 mb-6">
                <step.icon className="w-7 h-7 text-violet-600" />
              </div>
              
              <div className="text-sm font-medium text-violet-600 mb-2">
                0{index + 1}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
