'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="relative text-center py-16 px-8 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-600" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Start saving today
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
              Join 2M+ shoppers who trust CheaperBox for verified deals
            </p>
            
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              Browse all deals
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
