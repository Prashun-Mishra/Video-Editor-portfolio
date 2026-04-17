'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  duration: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Instagram Reel Edit (Trending Style)',
    category: 'Instagram Reels',
    image: 'https://images.unsplash.com/photo-1635914362033-60ad81dcd203?w=600&h=600&fit=crop',
    duration: '0:15',
  },
  {
    id: 2,
    title: 'YouTube Short Edit',
    category: 'YouTube Edits',
    image: 'https://images.unsplash.com/photo-1634697040565-0ca3d0c7e2d6?w=600&h=600&fit=crop',
    duration: '0:30',
  },
  {
    id: 3,
    title: 'Before & After Video Edit',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1595670553886-a4fe60b67a60?w=600&h=600&fit=crop',
    duration: '0:45',
  },
  {
    id: 4,
    title: 'Social Media Promo Edit',
    category: 'Short-form Content',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop',
    duration: '0:20',
  },
  {
    id: 5,
    title: 'Content Highlight Edit',
    category: 'Highlight Reel',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop',
    duration: '1:00',
  },
  {
    id: 6,
    title: 'Podcast Full Episode',
    category: 'Long-form Video',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=600&fit=crop',
    duration: '25:00',
  },
];

export default function Portfolio() {
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
      id="portfolio"
      className={`relative py-24 px-6 bg-stone-50 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Decorative blobs for glassmorphism backdrop */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">My Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4">
            Sample Work
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer p-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl aspect-square bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white fill-white" />
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 text-sm rounded-sm font-light">
                  {item.duration}
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 px-2 pb-2">
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                  {item.category}
                </p>
                <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 text-base font-medium text-stone-900 border border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 rounded-sm">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
