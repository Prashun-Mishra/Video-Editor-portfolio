'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Portfolio from '@/components/portfolio/Portfolio';
import Services from '@/components/portfolio/Services';
import FeaturedVideo from '@/components/portfolio/FeaturedVideo';
import Testimonials from '@/components/portfolio/Testimonials';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollProgress((scrolled / windowHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-stone-50/50 overflow-x-hidden selection:bg-accent/20">
      {/* Global Glassy Background Mesh */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-stone-300/40 rounded-full blur-[120px] opacity-70" />
      </div>
      {/* Subtle scroll progress indicator */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <FeaturedVideo />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
