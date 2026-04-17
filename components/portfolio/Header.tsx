'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Linkedin, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-stone-200 z-40">
      <nav className="relative max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Left - Social Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="https://www.linkedin.com/in/anya-pathak-627a76402/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Center - Name */}
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <h1 className="max-w-[45vw] truncate text-center text-base sm:text-lg md:max-w-none md:text-xl font-serif font-bold text-stone-900">
            Anya Pathak
          </h1>
        </div>

        {/* Right - Contact Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-block px-6 py-2 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors duration-300 rounded-sm"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-900 hover:text-accent transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            <h1 className="text-lg font-serif font-bold text-stone-900 mb-4">Anya Pathak</h1>
            <a
              href="#portfolio"
              className="block text-stone-700 hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Work
            </a>
            <a
              href="#services"
              className="block text-stone-700 hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors duration-300 rounded-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
