'use client';

import { useEffect, useRef } from 'react';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Depth Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        {/* Depth layers */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Volumetric lighting effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Animated depth elements */}
        <div className="depth-layer-1"></div>
        <div className="depth-layer-2"></div>
        <div className="depth-layer-3"></div>
      </div>

      {/* Interactive 3D Cards */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-card floating-card-1">
          <div className="w-32 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-white/10"></div>
        </div>
        <div className="floating-card floating-card-2">
          <div className="w-24 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-white/10"></div>
        </div>
        <div className="floating-card floating-card-3">
          <div className="w-28 h-18 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm border border-white/10"></div>
        </div>
      </div>

      {/* Enhanced Parallax Content */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block relative">
                Enterprise Architect
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-lg -z-10"></div>
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent relative">
                Who Still Codes
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl rounded-lg -z-10"></div>
              </span>
            </h1>
          </div>
        </div>

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Lead Director, Principal Architect at CVS Health. Building high-performing teams 
            while driving measurable business impact across 10,000+ engineers.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={scrollToNext}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover My Story
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border-2 border-white/20 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-500 hover:scale-105"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Gradient Overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none"></div>
    </section>
  );
}