'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { name: 'Tech', count: '2,340', emoji: '📱', color: 'from-blue-500/10 to-cyan-500/10' },
  { name: 'Home', count: '1,890', emoji: '🏠', color: 'from-orange-500/10 to-amber-500/10' },
  { name: 'Fashion', count: '3,210', emoji: '👕', color: 'from-pink-500/10 to-rose-500/10' },
  { name: 'Beauty', count: '1,560', emoji: '✨', color: 'from-purple-500/10 to-violet-500/10' },
  { name: 'Sports', count: '980', emoji: '⚽', color: 'from-green-500/10 to-emerald-500/10' },
  { name: 'Kids', count: '1,120', emoji: '🧸', color: 'from-yellow-500/10 to-orange-500/10' },
];

export default function CategoryShowcase() {
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
            Shop by category
          </h2>
          <p className="text-gray-500">
            Explore thousands of verified products
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${category.color} border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="text-5xl mb-4">{category.emoji}</div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.count} products
              </p>

              <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
