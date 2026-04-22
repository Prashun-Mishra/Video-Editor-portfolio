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
  driveLink: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Edit of a Small Baby',
    category: 'Portrait Edit',
    image: '/baby.png',
    duration: '0:27',
    driveLink: 'https://drive.google.com/file/d/1cppoNxZnjVHlr6KDtr2ItRxS5QNjF2EB/view',
  },
  {
    id: 2,
    title: 'Love Last Wish at 11:11',
    category: 'Cinematic Edit',
    image: '/love.png',
    duration: '0:18',
    driveLink: 'https://drive.google.com/file/d/198OrWz29tCgere48TXDdpSpUekIJgUw1/view',
  },
  {
    id: 3,
    title: 'Nature Edit',
    category: 'Landscape / Nature',
    image: '/nature.png',
    duration: '0:22',
    driveLink: 'https://drive.google.com/file/d/1x00mcGoQJPLFoaK3MuCiLmhpUKpQDiqs/view',
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
      className={`py-24 px-6 bg-transparent transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">My Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4">
            Sample Work
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <a
              key={item.id}
              href={item.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`block group cursor-pointer p-4 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[9/16] bg-stone-100/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
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
            </a>
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
