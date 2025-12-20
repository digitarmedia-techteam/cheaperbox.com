'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah J.',
    text: 'I\'ve saved hundreds using CheaperBox. The quality verification gives me real peace of mind.',
    rating: 5,
  },
  {
    name: 'Michael C.',
    text: 'Finally, a site that filters through the noise. Every product has exceeded my expectations.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'The home decor finds are incredible! Premium quality at a fraction of retail prices.',
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-3">
            Loved by shoppers
          </h2>
          <p className="text-gray-500">
            Join thousands of satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="font-medium text-gray-900">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
