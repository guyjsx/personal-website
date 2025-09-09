'use client';

import { useEffect, useRef, useState } from 'react';

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

declare global {
  interface Navigator {
    connection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
    mozConnection?: NetworkInformation;
  }
}
import Image from 'next/image';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

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

  const enableVideo = process.env.NEXT_PUBLIC_HERO_VIDEO !== '0';
  const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || '/hero-bg.mp4';
  const mobileVideoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL || '';
  const allowMobileVideo = process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE === '1';

  // Progressive enhancement: defer video loading based on user/device/network
  useEffect(() => {
    if (!enableVideo) return;
    if (typeof window === 'undefined') return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const isSmall = window.innerWidth < 640; // mobile breakpoint
    if (isSmall && !allowMobileVideo) return;

    // Respect Save-Data and slow connections
    const conn: NetworkInformation | undefined =
      navigator.connection || navigator.webkitConnection || navigator.mozConnection;
    const saveData = !!(conn && conn.saveData);
    if (saveData) return;
    const slowTypes = new Set(['slow-2g', '2g']);
    const effType = conn?.effectiveType;
    if (effType && slowTypes.has(effType)) return;

    const start = () => {
      const src = isSmall && allowMobileVideo && mobileVideoUrl ? mobileVideoUrl : videoUrl;
      setVideoSrc(src);
    };
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(start, { timeout: 2000 });
    } else {
      setTimeout(start, 500);
    }
  }, [enableVideo, videoUrl]);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 sm:pt-28"
    >
      {/* Background video (optional). Use env URL or local file. */}
      {enableVideo && videoSrc && (
        <div className="absolute inset-0 -z-10 block">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-80 hero-video mobile-zoom"
            src={videoSrc}
            poster="/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
          <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
        </div>
      )}

      <div className="content-width">
        {/* Main Hero Content */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight text-balance">
              <span className="block">Enterprise Architecture Leader</span>
              <span className="block text-blue-200">Building AI-Driven Platforms</span>
              <span className="block text-white/90 text-2xl md:text-3xl lg:text-4xl mt-3">
                Scaling Teams, Transforming Technology
              </span>
            </h1>
          </div>

          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-snug px-2">
              15+ years driving web platforms, applied AI, and security transformation at CVS Health, 
              influencing 5,000+ engineers through enterprise standards and platform strategy.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-3">
              <button
                onClick={scrollToNext}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-sm"
              >
                Explore My Work
              </button>
              
              <button
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 sm:px-8 sm:py-4 border border-white/30 text-white font-medium rounded-full hover:border-white/50 hover:bg-white/10 transition-colors duration-200"
              >
                Let&apos;s Connect
              </button>
              <a
                href="/resume"
                className="px-6 py-3 sm:px-8 sm:py-4 border border-white/30 text-white font-medium rounded-full hover:border-white/50 hover:bg-white/10 transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Personal Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="opacity-0 animate-fade-in-up order-2 lg:order-1" style={{ animationDelay: '0.8s' }}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square bg-white/10 backdrop-blur rounded-2xl overflow-hidden ring-1 ring-white/10">
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

          <div className="space-y-6 sm:space-y-8 opacity-0 animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '1.0s' }}>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
                Hi, I&apos;m Guy J. Stitt
              </h2>
              <p className="text-white/80 mb-4 sm:mb-6 px-2">
                I&apos;m a people-first builder and hands-on architect who scales high-performing teams while shipping 
                complex technical solutions. Currently serving as Principal Architect for Enterprise Technical Architecture 
                at CVS Health, I turn executive vision into measurable outcomes.
              </p>
              <p className="text-white/80 mb-4 sm:mb-6 px-2 hidden sm:block">
                I combine deep technical expertise with servant leadership to mentor engineers, modernize platforms, 
                and accelerate digital innovation. From creating AI-driven platforms to leading enterprise-wide standards, 
                I&apos;m passionate about building technology that makes a difference.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-6 text-center px-2 sm:px-0">
              <div className="clean-card p-3 sm:p-4 col-span-3 sm:col-span-1" style={{ background: 'rgba(255,255,255,0.9)' }}>
                <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-700">Years Experience</div>
              </div>
              <div className="clean-card p-3 sm:p-4 col-span-3 sm:col-span-1" style={{ background: 'rgba(255,255,255,0.9)' }}>
                <div className="text-2xl font-bold text-blue-600 mb-1">5,000+</div>
                <div className="text-sm text-gray-700">Engineers Influenced</div>
              </div>
              <div className="clean-card p-3 sm:p-4 col-span-3 sm:col-span-1" style={{ background: 'rgba(255,255,255,0.9)' }}>
                <div className="text-2xl font-bold text-blue-600 mb-1">$1.2M</div>
                <div className="text-sm text-gray-700">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
