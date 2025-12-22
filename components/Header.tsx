'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? 'bg-white/95 backdrop-blur-lg border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 -ml-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <Image 
              src="https://panel.digitarmedia.com/admin/uploads/Untitled design (5)1766401787.png" 
              alt="Cheaperbox Logo" 
              width={150} 
              height={44} 
              className="w-auto max-w-full" 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Deals', 'Categories', 'How it works', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-4 p-4">
              {['Deals', 'Categories', 'How it works', 'About'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://www.aliexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-gray-900 text-white font-medium rounded-full cursor-pointer"
              >
                Shop on AliExpress
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
