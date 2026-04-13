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
            With over 5 years of experience in video editing and visual storytelling, I&apos;ve helped creators and brands bring their vision to life. My expertise spans from short-form social media content to long-form documentary-style edits.
          </p>

          <p className="font-light">
            I believe that great editing is invisible—it enhances the story without distracting from the message. Whether you need polished YouTube edits, engaging Instagram Reels, or professional photo retouching, I deliver work that drives results.
          </p>

          <p className="font-light">
            Currently based in India, I work with creators worldwide, bringing a blend of technical excellence and creative vision to every project.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-stone-200">
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-stone-900 mb-2">50+</p>
            <p className="text-sm text-stone-500 font-light">Creators Helped</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-stone-900 mb-2">200+</p>
            <p className="text-sm text-stone-500 font-light">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-stone-900 mb-2">5M+</p>
            <p className="text-sm text-stone-500 font-light">Total Reach</p>
          </div>
        </div>
      </div>
    </section>
  );
}
