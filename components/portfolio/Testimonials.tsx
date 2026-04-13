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

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Content Creator',
    content: 'Anya transformed my raw footage into something I didn\'t even know was possible. Her attention to detail and quick turnaround time is unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alex Kumar',
    role: 'YouTuber',
    content: 'Best investment I made for my channel. My audience engagement went up 300% after working with Anya. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Johnson',
    role: 'Brand Manager',
    content: 'Professional, creative, and always delivers on time. Anya has become an integral part of our content strategy.',
    rating: 5,
  },
];

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-8 bg-white rounded-lg border border-stone-200 transition-all duration-500 hover:border-accent hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone-600 mb-6 leading-relaxed font-light">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-stone-200">
                <p className="font-serif font-bold text-stone-900">{testimonial.name}</p>
                <p className="text-sm text-stone-500 font-light">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white p-12 rounded-lg border border-stone-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-serif font-bold text-stone-900 mb-2">4.9/5</p>
              <p className="text-stone-500 font-light">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-stone-900 mb-2">98%</p>
              <p className="text-stone-500 font-light">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-stone-900 mb-2">200+</p>
              <p className="text-stone-500 font-light">Happy Creators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
