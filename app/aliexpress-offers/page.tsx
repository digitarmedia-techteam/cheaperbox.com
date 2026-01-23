'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import { FramerCarousel } from '@/components/ui/framer-carousel';

// Google Ads conversion tracking function
function gtag_report_conversion(url: string, value: number) {
  const windowObj = window as unknown as {
    gtag?: (command: string, event: string, config: Record<string, unknown>) => void
  };

  if (typeof windowObj.gtag === 'function') {
    windowObj.gtag('event', 'conversion', {
      'send_to': 'AW-16957880024/p1LHCNf3_rMaENjtkpY_',
      value,
      currency: 'USD'
    });
  }
  window.open(url, "_blank");
  return false;
}

const deals = [
  {
    id: 1005009676656315,
    title: 'Portable Washing Machine 8L Foldable Mini Laundry',
    description: 'Spin dryer for socks, underwear, lightweight and efficient home shop',
    originalPrice: 63.13,
    discountedPrice: 23.43,
    rating: 4.5,
    reviews: 1336,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S3fcab73023884a2fa69ae76c4980bc7ch.jpg',
    discount: 62,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c3Ygtdsv?subid=google_us_p1',
  },
  {
    id: 1005009498079500,
    title: 'WUBEN G5 Rechargeable EDC Flashlight 400 Lumens',
    description: 'Dual light sources, RGB light, portable pocket flashlight',
    originalPrice: 46.85,
    discountedPrice: 14.05,
    rating: 4.9,
    reviews: 3058,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S6b8756e7a7674c04a188f153b10ce528f.jpg',
    discount: 70,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c4NTpRiH?subid=google_us_p2',
  },
  {
    id: 1005008255653752,
    title: '504LED Solar Street Light Motion Sensor',
    description: 'Wide angle, remote control, energy-efficient, waterproof 4300mah',
    originalPrice: 69.96,
    discountedPrice: 15.59,
    rating: 4.5,
    reviews: 1008,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sa70729f57e26422c94f7c67b7a509eac6.jpg',
    discount: 77,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c3ADquDX?subid=google_us_p3',
  },
  {
    id: 1005007379460738,
    title: 'Active Helmet Mounted Earmuffs Electronic Hearing',
    description: 'Noise reduction, active hunting headphone ear protect',
    originalPrice: 36.24,
    discountedPrice: 8.33,
    rating: 4.9,
    reviews: 2624,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S383f39ab9c5d4af081ab784c5d6dfd58G.jpg',
    discount: 77,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c4Co42ol?subid=google_us_p4',
  },
  {
    id: 1005006639944031,
    title: 'KINGROON PETG 3D Printer Filament 1.75mm 5KG-10KG',
    description: 'Mix color 3D printing material, 1kg/roll for FDM printer',
    originalPrice: 150.55,
    discountedPrice: 45.04,
    rating: 4.8,
    reviews: 3264,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sefb42a28674e4504bda7c4c3772313a8z.jpg',
    discount: 70,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c3Jna113?subid=google_us_p5',
  },
  {
    id: 1005007975326135,
    title: 'SucceBuy Ultrasonic Cleaner Stainless Steel 2L-30L',
    description: 'Portable cleaning washing machine, home appliance',
    originalPrice: 87.76,
    discountedPrice: 34.62,
    rating: 4.7,
    reviews: 6049,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sfa81cd12db4f4d0fb4bf95b17252e1efb.jpg',
    discount: 60,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c31Kk1qN?subid=google_us_p6',
  },
  {
    id: 1005007474219781,
    title: 'Vxe Dragonfly R1SE Gaming Mouse Wireless Rechargeable',
    description: 'Lightweight ergonomic paw3395, esport gaming mouse',
    originalPrice: 54.71,
    discountedPrice: 12.74,
    rating: 4.9,
    reviews: 11300,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S0de6610f40a04148b6756a39a5bc25716.jpg',
    discount: 76,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c3WV9nO9?subid=google_us_p7',
  },
  {
    id: 1005007792127483,
    title: 'COLMI R10 Smart Ring Health & Sleep Monitor',
    description: '5ATM waterproof, multi-sport mode, charging case included',
    originalPrice: 84.04,
    discountedPrice: 21.06,
    rating: 4.7,
    reviews: 3375,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S4178511c6d734751a881a54ef3ec60e9f.jpg',
    discount: 74,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c3f5istB?subid=google_us_p8',
  },
  {
    id: 1005007099240050,
    title: 'AULA F75 Mechanical Keyboard RGB 2.4G Wireless',
    description: '75% layout, OEM profile, gasket structure, gaming keyboard',
    originalPrice: 112.41,
    discountedPrice: 47.58,
    rating: 4.9,
    reviews: 15146,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S9d0c285127124820ae8fda27a0cc0b34k.jpg',
    discount: 57,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c4BF4qap?subid=google_us_p9',
  },
  {
    id: 1005006870991534,
    title: '4WD Remote Control Excavator Alloy Dump Truck',
    description: 'Radio model RC car construction vehicle toy for kids',
    originalPrice: 49.22,
    discountedPrice: 16.60,
    rating: 4.7,
    reviews: 4271,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S5034f848fea04894a64628b2425e36dei.jpg',
    discount: 66,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c42ed4GH?subid=google_us_p10',
  },
  {
    id: 1005005943671094,
    title: 'Magcubic Projector HY300 Pro 8K Android 14',
    description: 'Dual wifi6, 290ANSI, 1080P 1280x720P home cinema outdoor',
    originalPrice: 126.45,
    discountedPrice: 45.61,
    rating: 4.7,
    reviews: 48581,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S003bf514a3614cea9fc324f016e9ac5b7.png',
    discount: 63,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c4ncSPEN?subid=google_us_p11',
  },
  {
    id: 1005005597724853,
    title: 'Japan Genuine NH35 Mechanical Watch Movement',
    description: '24 jewels high accuracy, date at 3:00, mod watch replacement',
    originalPrice: 125.87,
    discountedPrice: 54.48,
    rating: 4.9,
    reviews: 15582,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sa5014ef63ece4a939867f1f0da8d61d3j.jpg',
    discount: 56,
    promotionUrl: 'https://s.click.aliexpress.com/e/_c2JH7rQN?subid=google_us_p12',
  },
];

export default function AliExpressOffers() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Random stock numbers for urgency (between 3-15)
  const getStockCount = (id: number) => {
    const seed = id % 13;
    return seed < 5 ? seed + 3 : seed + 2;
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white mt-12">
     
        {/* Mobile Carousel Section - Only visible on mobile */}
        <section className="md:hidden px-3 pt-4 pb-1">
          <style>{`
            .filter-scroll {
              scrollbar-width: none;
            }
            .filter-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="mb-4">
            <FramerCarousel />
          </div>
          
          {/* Filter Buttons */}
          <div className="filter-scroll flex gap-1.5 overflow-x-auto pb-1 px-3">
            {[
              { id: 'all', label: "Today's Deals" },
              { id: '80', label: 'Up to 80% off' },
              { id: 'freeReturn', label: 'Free Return' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-violet-500 text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>  
        </section>

        {/* Compact Page Header */}
        {/* <section className="pt-4 md:pt-8 pb-6 px-4 sm:px-6 bg-gradient-to-b from-violet-50/30 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <a href="/" className="hover:text-violet-600 transition-colors">Home</a>
              <span>/</span>
              <span className="text-gray-900 font-medium">Today&apos;s Deals</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Exclusive Limited-Time Offers
            </h1>
            <p className="text-gray-600">Save up to 77% • Verified sellers • Buyer protection included</p>
          </div>
        </section> */}

        {/* Deals Section */}
        <section className="py-2 px-3 sm:px-6">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-6">{deals.map((deal, index) => {
              const stockLeft = getStockCount(deal.id);
              const isLowStock = stockLeft <= 5;
              
              return (
              <motion.div
                key={deal.id}
                className="group bg-white rounded-xl md:rounded-2xl border md:border-2 border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
              >
                <div className="p-3 md:p-5 lg:p-6">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-full md:w-48 lg:w-56 aspect-square bg-gray-50 rounded-lg md:rounded-xl overflow-hidden border border-gray-100 shadow-md">
                        <Image
                          src={deal.image}
                          alt={deal.title}
                          width={224}
                          height={224}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="224" height="224"%3E%3Crect fill="%23f3f4f6" width="224" height="224"/%3E%3C/svg%3E';
                          }}
                        />
                      </div>
                      {/* Enhanced Discount Badge */}
                      <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full shadow-2xl border-2 md:border-4 border-white transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
                        <div className="text-center leading-none">
                          <div className="text-[8px] md:text-xs font-semibold">SAVE</div>
                          <div className="text-sm md:text-lg font-black">{deal.discount}%</div>
                        </div>
                      </div>
                      {/* Stock Urgency Badge */}
                      {isLowStock && (
                        <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 px-2 md:px-3 py-0.5 md:py-1 bg-orange-500 text-white text-[10px] md:text-xs font-bold rounded-full shadow-lg animate-pulse whitespace-nowrap">
                          Only {stockLeft} left!
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="flex-1">
                        <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 md:mb-2 leading-tight group-hover:text-violet-600 transition-colors line-clamp-2">
                          {deal.title}
                        </h3>

                        <p className="hidden md:block text-gray-600 mb-4 leading-relaxed line-clamp-2">
                          {deal.description}
                        </p>

                        {/* Rating with better visual weight */}
                        <div className="flex items-center gap-1 md:gap-3 mb-2 md:mb-5">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 md:w-5 md:h-5 ${i < Math.floor(deal.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs md:text-base font-bold text-gray-900">
                            {deal.rating}
                          </span>
                          <span className="hidden md:inline text-sm text-gray-500 font-medium">
                            ({deal.reviews.toLocaleString()})
                          </span>
                        </div>
                      </div>

                      {/* Pricing & CTA - Enhanced */}
                      <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 md:flex-row md:items-end md:justify-between md:gap-4 md:pt-5 md:border-t-2">
                        <div className="flex flex-col gap-1 md:gap-2">
                          <div className="flex items-baseline gap-2 md:gap-3">
                            <div className="text-xl md:text-4xl lg:text-5xl font-black text-violet-600">
                              ${deal.discountedPrice.toFixed(2)}
                            </div>
                            <span className="text-xs md:text-lg text-gray-400 line-through font-semibold">
                              ${deal.originalPrice.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-1 md:gap-2">
                            <span className="px-2 md:px-3 py-0.5 md:py-1.5 bg-green-500 text-white text-[10px] md:text-sm font-bold rounded md:rounded-lg shadow-md">
                              SAVE ${(deal.originalPrice - deal.discountedPrice).toFixed(2)}
                            </span>
                            {!isLowStock && (
                              <span className="text-[10px] md:text-xs text-gray-500 font-medium">
                                {stockLeft} left
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            gtag_report_conversion(deal.promotionUrl, deal.discountedPrice);
                          }}
                          className="inline-flex items-center justify-center gap-1 md:gap-2 px-4 md:px-8 py-2 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xs md:text-base rounded-xl md:rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 group/btn"
                        >
                          <span className="md:hidden">Claim Deal</span>
                          <span className="hidden md:inline">Claim Deal Now</span>
                          <ArrowRight className="w-3 h-3 md:w-5 md:h-5 group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
            })}</div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Common Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Are these deals legitimate?',
                  a: 'Yes! All deals are verified offers from AliExpress with full buyer protection. Every product has real customer reviews and ratings.',
                },
                {
                  q: 'How long are prices valid?',
                  a: 'Deals are time-sensitive and valid while stocks last. We recommend acting quickly on items you want.',
                },
                {
                  q: 'What about shipping to the USA?',
                  a: 'Most products offer free or low-cost shipping. New users often get free delivery. Typical delivery is 10-20 days with tracking.',
                },
                {
                  q: 'What if I\'m not satisfied?',
                  a: 'AliExpress provides 60-day buyer protection. Full refund if items don\'t match descriptions or arrive damaged.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Don&apos;t Miss Out on These Deals
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Limited stock available. Claim your deal before prices go back up.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}