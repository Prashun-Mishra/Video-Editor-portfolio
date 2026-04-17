'use client';

import { useEffect, useRef, useState } from 'react';
import { Film, ImageIcon, Zap, Smartphone } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Instagram Reels Editing',
    description: 'Create engaging, trend-based reels that capture attention.',
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'YouTube Editing',
    description: 'Clean, professional edits with smooth transitions and pacing.',
    icon: <Film className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Short-form Content',
    description: 'High-retention content optimized for social platforms.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Photo Editing',
    description: 'Basic retouching, color correction, and enhancement.',
    icon: <ImageIcon className="w-8 h-8" />,
  },
];

export default function Services() {
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
      id="services"
      className={`py-24 px-6 bg-stone-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Services</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4">
            What I Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`p-8 bg-white rounded-lg border border-stone-200 hover:border-accent hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 text-accent inline-block p-3 bg-accent/5 rounded-lg">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-stone-600 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 p-8 bg-white border border-stone-200 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
            Custom Projects
          </h3>
          <p className="text-stone-600 leading-relaxed font-light mb-6">
            Have a unique project in mind? I&apos;m open to custom work tailored to your specific needs. Whether it&apos;s animation, motion graphics, or specialized editing, let&apos;s discuss your vision.
          </p>
          <a href="#contact" className="inline-block text-accent font-medium hover:underline">
            Get a Custom Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
