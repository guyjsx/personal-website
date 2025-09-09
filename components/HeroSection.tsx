'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
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
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="content-width">
        {/* Main Hero Content */}
        <div className="text-center mb-20">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              <span className="block">Enterprise Architecture Leader</span>
              <span className="block text-blue-600">Building AI-Driven Platforms</span>
            </h1>
          </div>

          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              15+ years driving web platforms, applied AI, and security transformation at CVS Health, 
              influencing 5,000+ engineers through enterprise standards and platform strategy.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToNext}
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                Explore My Work
              </button>
              
              <button
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
              >
                Let&apos;s Connect
              </button>
            </div>
          </div>
        </div>

        {/* Personal Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
                <Image
                  src="/guy-stitt-headshot.png"
                  alt="Guy J. Stitt - Principal Architect at CVS Health"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Hi, I'm Guy J. Stitt
              </h2>
              <p className="text-gray-600 mb-6">
                I'm a people-first builder and hands-on architect who scales high-performing teams while shipping 
                complex technical solutions. Currently serving as Principal Architect for Enterprise Technical Architecture 
                at CVS Health, I turn executive vision into measurable outcomes.
              </p>
              <p className="text-gray-600 mb-6">
                I combine deep technical expertise with servant leadership to mentor engineers, modernize platforms, 
                and accelerate digital innovation. From creating AI-driven platforms to leading enterprise-wide standards, 
                I'm passionate about building technology that makes a difference.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="clean-card p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="clean-card p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">5,000+</div>
                <div className="text-sm text-gray-600">Engineers Influenced</div>
              </div>
              <div className="clean-card p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">$1.2M</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}