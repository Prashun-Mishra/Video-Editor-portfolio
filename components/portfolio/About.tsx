'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Label */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">About Me</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4">
            Crafting Stories Through Motion
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
          <p className="font-light">
            I am a passionate Video Editor and Photo Editor focused on creating engaging and high-quality content for creators and small businesses.
          </p>

          <p className="font-light">
            I specialize in editing Instagram Reels, YouTube videos, and short-form content using modern editing techniques, transitions, and storytelling.
          </p>

          <p className="font-light">
            As a growing freelancer, I am continuously improving my skills and staying updated with current trends to deliver content that captures attention and increases engagement.
          </p>

          <p className="font-light">
            I aim to provide clean, professional edits with a strong focus on detail and client satisfaction.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-stone-200">
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-stone-900 mb-2">20+</p>
            <p className="text-sm text-stone-500 font-light">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-stone-900 mb-2">10+</p>
            <p className="text-sm text-stone-500 font-light">Creators Worked With</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-stone-900 mb-2">100K+</p>
            <p className="text-sm text-stone-500 font-light">Content Reach (Est.)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
