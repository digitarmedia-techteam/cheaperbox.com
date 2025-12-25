'use client';

import { motion } from 'framer-motion';
import { Star, Zap, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Google Ads conversion tracking function
function gtag_report_conversion(url: string) {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-16957880024/p1LHCNf3_rMaENjtkpY_',
      'event_callback': callback
    });
  } else {
    callback();
  }
  return false;
}

// Christmas elements configuration
const christmasElements = ['🎁', '⭐', '🎄', '🔔', '🎅', '⛄', '🦌', '🍬', '🧦', '🎀'];

interface ChristmasItem {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  fontSize: number;
  opacity: number;
  element: string;
  rotation: number;
}

const generateChristmasElements = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDuration: 8 + Math.random() * 15,
    animationDelay: Math.random() * 8,
    fontSize: 12 + Math.random() * 24,
    opacity: 0.2 + Math.random() * 0.6,
    element: christmasElements[Math.floor(Math.random() * christmasElements.length)],
    rotation: Math.random() * 360,
  }));
};

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

const trustFeatures = [
  { icon: ShieldCheck, text: 'Secure Checkout on AliExpress' },
  { icon: Truck, text: 'Buyer Protection & Easy Refunds' },
  { icon: Zap, text: 'Prices Valid While Stocks Last' },
];

export default function AliExpressOffers() {
  const [christmasItems, setChristmasItems] = useState<ChristmasItem[]>([]);

  useEffect(() => {
    setChristmasItems(generateChristmasElements(40));
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-red-50 via-green-50 to-blue-50 overflow-hidden">
      {/* Christmas Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`,
        }} />
      </div>

      {/* Festive Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Candy Canes */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 rotate-12">🎅</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 -rotate-12">🎄</div>
        <div className="absolute bottom-40 left-20 text-7xl opacity-15">🎁</div>
        <div className="absolute bottom-20 right-40 text-6xl opacity-20 rotate-45">⭐</div>
        <div className="absolute top-1/2 left-5 text-4xl opacity-15">🍬</div>
        <div className="absolute top-1/3 right-10 text-5xl opacity-20">⛄</div>
        <div className="absolute bottom-1/3 left-1/4 text-4xl opacity-15 rotate-45">🔔</div>
        <div className="absolute top-2/3 right-1/4 text-5xl opacity-20 -rotate-12">🥶</div>
      </div>

      {/* Enhanced Christmas Elements Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-70">
        {christmasItems.map((item) => (
          <motion.div
            key={item.id}
            className="absolute"
            initial={{ y: -50, x: `${item.left}vw`, opacity: item.opacity, rotate: item.rotation }}
            animate={{
              y: '100vh',
              x: [`${item.left}vw`, `${item.left + 8}vw`, `${item.left}vw`],
              rotate: [item.rotation, item.rotation + 360],
            }}
            transition={{
              duration: item.animationDuration,
              delay: item.animationDelay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ 
              fontSize: item.fontSize,
              willChange: 'transform'
            }}
          >
            {item.element}
          </motion.div>
        ))}
      </div>

      {/* Content Wrapper with frosted effect */}
      <div className="relative z-10">
      {/* Header */}
      <motion.header
        className="pt-16 pb-8 sm:pt-24 sm:pb-12 px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-red-700 -mb-4 sm:mb-4 border border-red-300">
           Christmas Special Offers
          </div>

         
        </div>
      </motion.header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Christmas Promo Banner */}
        <motion.div
          className="mb-8 sm:mb-12 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-red-50 via-white to-green-50 backdrop-blur-xl border-2 border-dashed border-red-300 p-4 sm:p-8 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,#ff0000,transparent_50%),radial-gradient(circle_at_80%_50%,#00ff00,transparent_50%)]" />
          
          <div className="relative z-10">
           
            <h2 className="text-lg sm:text-2xl font-bold text-red-700 mb-1 sm:mb-2">🎄 Holiday AliExpress Deals 🎄</h2>
            <p className="text-base sm:text-lg text-green-700 mb-1">
              New Users: Enjoy <span className="font-bold text-red-600">Free Delivery</span> 🎅
            </p>
            <p className="text-xs sm:text-sm text-gray-700">
              Limited Holiday Coupons • Perfect Gift Prices • Hurry Before Santa&apos;s Gone!
            </p>
          </div>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid gap-4 sm:gap-6 mb-12 sm:mb-16">
          {deals.map((deal, index) => {
            return (
              <motion.div
                key={deal.id}
                className="group relative bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-red-200 overflow-hidden hover:border-green-300 transition-all duration-200 hover:shadow-2xl shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: [0.4, 0, 0.2, 1]
                }}
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Christmas decoration corners - hidden on mobile */}
                <div className="hidden sm:block absolute top-0 left-0 text-2xl z-10">🎄</div>
                <div className="hidden sm:block absolute top-0 right-0 text-2xl z-10">🎄</div>
                
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
                    {/* Left - Product Image with discount badge */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-full md:w-44 lg:w-52 aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-200 group-hover:border-red-200 transition-all duration-300">
                        <img
                          src={deal.image}
                          alt={deal.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160"%3E%3Crect fill="%23f3f4f6" width="160" height="160"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="14"%3EProduct%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      </div>
                      {/* Discount Badge - positioned on image */}
                      <div className="absolute -top-2 -right-2 px-3 py-1.5 bg-gradient-to-br from-red-500 to-red-600 text-white text-sm font-bold rounded-full shadow-lg border-2 border-white">
                        -{deal.discount}%
                      </div>
                    </div>

                    {/* Right - Content with better hierarchy */}
                    <div className="flex-1 flex flex-col min-w-0">
                      {/* Top section: Title, description, rating */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition-colors">
                          {deal.title}
                        </h3>

                        <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed line-clamp-2">
                          {deal.description}
                        </p>

                        {/* Rating - better spacing */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(deal.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {deal.rating}
                          </span>
                          <span className="text-sm text-gray-400">
                            ({deal.reviews.toLocaleString()} reviews)
                          </span>
                        </div>
                      </div>

                      {/* Bottom section: Pricing & CTA - always at bottom */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-gray-200">
                        {/* Price section - mobile optimized */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-red-600">
                            ${deal.discountedPrice.toFixed(2)}
                          </div>
                          <div className="flex flex-wrap gap-2 sm:gap-2 items-center">
                            <span className="text-sm sm:text-base text-gray-400 line-through">
                              ${deal.originalPrice.toFixed(2)}
                            </span>
                            <span className="inline-block px-2.5 py-1 bg-green-100 text-green-700 text-xs sm:text-sm font-semibold rounded-full">
                              Save ${(deal.originalPrice - deal.discountedPrice).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* CTA Button - prominent */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            gtag_report_conversion(deal.promotionUrl);
                          }}
                          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group/btn cursor-pointer"
                        >
                          Get Deal Now
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Section */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
            Why Shop Christmas Deals With Us? 🎄
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-green-200 hover:border-red-300 transition-all duration-200 hover:shadow-xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-3 text-red-600" />
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{feature.text}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ-Style Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">🎅 Holiday Shopping Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: '🎁 Are these Christmas deals legitimate?',
                a: 'Yes! All deals are verified AliExpress holiday offers with full buyer protection and money-back guarantees.',
              },
              {
                q: '⏰ How long do these Christmas deals last?',
                a: 'Holiday deals are valid while stocks last. Prices may change after Christmas. Order now for best savings!',
              },
              {
                q: '🎅 Will my gifts arrive before Christmas?',
                a: 'Yes! Choose express shipping for faster delivery to the USA with tracking information.',
              },
              {
                q: '🎄 What if I\'m not satisfied with my purchase?',
                a: 'AliExpress offers a 60-day buyer protection guarantee with free returns for most holiday items.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl border-2 border-red-100 p-6 hover:shadow-xl transition-shadow hover:border-green-200"
              >
                <h3 className="font-semibold text-red-700 mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Final Christmas CTA */}
        <motion.div
          className="mb-24 text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-red-100 via-green-100 to-red-100 border-4 border-red-200 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl mb-4">🎅🎄🎁</div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready for Christmas Shopping?
          </h2>
          <p className="text-gray-700 mb-6 max-w-md mx-auto">
            Browse all holiday deals above and start gift shopping. New users get extra Christmas discounts!
          </p>
          <a
            href="https://www.aliexpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-out cursor-pointer relative overflow-hidden"
            style={{
              border: '4px solid',
              borderImage: 'repeating-linear-gradient(45deg, #dc2626, #dc2626 10px, #ffffff 10px, #ffffff 20px) 1'
            }}
          >
            🎁 Shop All Christmas Deals on AliExpress
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
      </div>
    </main>
  );
}