'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [];

export default function Testimonials() {
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
      className={`py-24 px-6 bg-stone-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Placeholder */}
        <div className="text-center py-16 bg-white rounded-lg border border-stone-200">
          <p className="text-xl text-stone-600 font-serif mb-4">
            Client testimonials coming soon!
          </p>
          <p className="text-stone-500 font-light">
            Currently building my portfolio and open to new collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
