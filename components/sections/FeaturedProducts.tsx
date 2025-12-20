'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Wireless Bluetooth Headphones',
    price: 34.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviews: 12543,
    image: '🎧',
  },
  {
    id: 2,
    title: 'Smart Fitness Watch',
    price: 45.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviews: 8721,
    image: '⌚',
  },
  {
    id: 3,
    title: 'Portable Power Bank 20000mAh',
    price: 24.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviews: 15234,
    image: '🔋',
  },
  {
    id: 4,
    title: 'LED Desk Lamp',
    price: 32.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 6543,
    image: '💡',
  },
  {
    id: 5,
    title: 'Mini Projector HD',
    price: 89.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 4321,
    image: '📽️',
  },
  {
    id: 6,
    title: 'Robot Vacuum Cleaner',
    price: 149.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 9876,
    image: '🤖',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <motion.h2
              className="text-4xl font-semibold text-gray-900 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Today&apos;s best picks
            </motion.h2>
            <motion.p
              className="text-gray-500 mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hand-selected deals with verified quality
            </motion.p>
          </div>
          
          <motion.button
            className="group flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
                
                {/* Discount badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-rose-500 text-white text-xs font-semibold rounded-md">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
              </div>

              {/* Content */}
              <h3 className="font-medium text-gray-900 mb-2 line-clamp-1 group-hover:text-violet-600 transition-colors">
                {product.title}
              </h3>

              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  ({product.reviews.toLocaleString()})
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
