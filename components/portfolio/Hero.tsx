'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 bg-transparent">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-6 leading-tight text-balance">
          Freelance Video Editor
          <br />
          <span className="text-accent">&amp; Photo Editor</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-stone-600 mb-8 font-light leading-relaxed">
          Helping creators grow with engaging, high-quality content
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-stone-500 mb-12 leading-relaxed font-light">
          I transform raw footage into clean, engaging videos for social media and YouTube.<br/>
          <span className="font-medium text-stone-600 mt-2 block">Growing editor + high effort + affordable</span>
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Link
            href="#portfolio"
            className="px-8 py-3 text-base font-medium text-white bg-stone-900 hover:bg-stone-800 transition-all duration-300 hover:scale-105 rounded-sm shrink-0"
          >
            View My Work
          </Link>
          <a
            href="/DOC-20260418-WA0012. (1).pdf"
            download="Resume_Video_Editor.pdf"
            className="px-8 py-3 text-base font-medium text-white bg-accent hover:bg-accent/90 transition-all duration-300 hover:scale-105 rounded-sm shrink-0 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download Resume
          </a>
          <Link
            href="#contact"
            className="px-8 py-3 text-base font-medium text-stone-900 border border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 rounded-sm shrink-0"
          >
            Let&apos;s Collaborate
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-stone-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
