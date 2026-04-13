'use client';

import Link from 'next/link';
import { Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Anya Pathak</h3>
            <p className="text-stone-400 font-light leading-relaxed">
              Freelance video editor and photo editor, crafting compelling visual content for creators worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#portfolio"
                  className="text-stone-400 hover:text-white transition-colors font-light"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-stone-400 hover:text-white transition-colors font-light"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-stone-400 hover:text-white transition-colors font-light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold uppercase tracking-widest text-sm mb-6">Connect</h4>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:anyapathak01@gmail.com"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-stone-400 font-light text-sm">
            &copy; {currentYear} Anya Pathak. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-stone-400 hover:text-white text-sm font-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-stone-400 hover:text-white text-sm font-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-accent text-stone-900 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hidden md:flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v12" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
