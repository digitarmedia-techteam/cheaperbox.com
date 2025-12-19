'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const featuredDeals = [
  {
    id: 1,
    title: 'Wireless Headphones Pro',
    price: '$34.99',
    originalPrice: '$89.99',
    discount: '61',
    rating: 4.8,
    image: '�',
  },
  {
    id: 2,
    title: 'Smart Fitness Watch',
    price: '$45.99',
    originalPrice: '$129.99',
    discount: '65',
    rating: 4.6,
    image: '⌚',
  },
  {
    id: 3,
    title: 'Portable Power Bank',
    price: '$24.99',
    originalPrice: '$59.99',
    discount: '58',
    rating: 4.9,
    image: '🔋',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredDeals.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-violet-100/40 to-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-100/30 to-orange-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          
          {/* Left - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-full text-sm font-medium text-violet-600 mb-6">
                Curated deals, verified quality
              </span>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                Shop smarter.
                <br />
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  Save bigger.
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-500 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Premium products at unbeatable prices. Every deal hand-picked and verified by our team.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button className="group flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
                Browse Deals
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 text-gray-900 font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer">
                How it works
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-12 pt-8 border-t border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <div className="text-3xl font-semibold text-gray-900">2M+</div>
                <div className="text-sm text-gray-500">Happy customers</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gray-900">50K+</div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gray-900">4.9</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </motion.div>
          </div>

          {/* Right - Carousel */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-full flex items-center justify-center">
              {/* Cards */}
              {featuredDeals.map((deal, index) => {
                const position = index - currentIndex;
                const isActive = index === currentIndex;
                const isPrev = position === -1 || (currentIndex === 0 && index === featuredDeals.length - 1);
                const isNext = position === 1 || (currentIndex === featuredDeals.length - 1 && index === 0);
                
                if (!isActive && !isPrev && !isNext) return null;

                return (
                  <motion.div
                    key={deal.id}
                    className={`absolute cursor-pointer ${isActive ? 'z-20' : 'z-10'}`}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -180 : 180,
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className={`w-[280px] sm:w-[320px] bg-white rounded-3xl p-6 shadow-xl border border-gray-100 ${isActive ? 'shadow-2xl' : ''}`}>
                      {/* Badge */}
                      <div className="inline-block px-3 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full mb-4">
                        {deal.discount}% OFF
                      </div>

                      {/* Image */}
                      <div className="w-full h-44 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-5">
                        <span className="text-7xl">{deal.image}</span>
                      </div>

                      {/* Info */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                        {deal.title}
                      </h3>

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < Math.floor(deal.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">{deal.rating}</span>
                      </div>

                      <div className="flex items-baseline gap-2 mb-5">
                        <span className="text-2xl font-bold text-gray-900">{deal.price}</span>
                        <span className="text-sm text-gray-400 line-through">{deal.originalPrice}</span>
                      </div>

                      <button className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors cursor-pointer">
                        View Deal
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dots */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredDeals.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
