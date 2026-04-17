'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

export default function FeaturedVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
      className={`py-24 px-6 bg-transparent transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4">
            Latest Project
          </h2>
        </div>

        {/* Video Container */}
        <div className={`relative w-full aspect-video bg-stone-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Video Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1611339555312-e607c04352fd?w=1200&h=675&fit=crop)',
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Play Button */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play video"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-white/20 group-hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:scale-110">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </button>
          )}

          {/* Embedded Video (when playing) */}
          {isPlaying && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Video Description */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
            Creative Storytelling Through Motion
          </h3>
          <p className="text-stone-600 leading-relaxed font-light mb-8">
            A showcase of my recent editing work focusing on clean visuals, pacing, and engaging storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}
