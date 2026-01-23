'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';

interface CarouselItem {
  id: number;
  url: string;
  title: string;
}

interface FramerCarouselProps {
  items?: CarouselItem[];
}

const defaultItems = [
  {
    id: 1,
    url: 'https://panel.digitarmedia.com/admin/uploads/zero_gst_term1767616536.png',
    title: 'Special Offer 1',
  },
  {
    id: 2,
    url: 'https://panel.digitarmedia.com/admin/uploads/zero_gst_term1767616536.png',
    title: 'Special Offer 2',
  },
  {
    id: 3,
    url: 'https://panel.digitarmedia.com/admin/uploads/zero_gst_term1767616536.png',
    title: 'Special Offer 3',
  },
];

export function FramerCarousel({ items = defaultItems }: FramerCarouselProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className='w-full'>
      <div className='flex flex-col gap-3'>
        <div className='relative overflow-hidden rounded-xl' ref={containerRef}>
          <motion.div className='flex' style={{ x }}>
            {items.map((item) => (
              <div key={item.id} className='shrink-0 w-full h-[180px]'>
                <Image
                  src={item.url}
                  alt={item.title}
                  width={800}
                  height={180}
                  className='w-full h-full object-cover rounded-xl select-none pointer-events-none'
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Progress Indicator */}
          <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2.5 py-1.5 bg-black/30 backdrop-blur-sm rounded-full'>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
