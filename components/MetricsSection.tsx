'use client';

import { useEffect, useRef, useState } from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface MetricProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration, suffix = '', prefix = '' }: MetricProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration * 60); // 60 FPS
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function MetricsSection() {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 150,
    animationClass: 'animate-fade-in-up'
  });

  const metrics = [
    { value: 10000, suffix: '+', label: 'Engineers Impacted', description: 'Across enterprise architecture initiatives' },
    { value: 1.2, suffix: 'M', prefix: '$', label: 'Annual Savings', description: 'Through platform consolidation' },
    { value: 10, suffix: '', label: 'Architects Led', description: 'API, Data, Cloud, Observability, AI' },
    { value: 10, suffix: '+', label: 'Years Experience', description: 'Healthcare, fintech, and startups' }
  ];

  return (
    <section 
      id="metrics" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Measurable Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leading with data-driven results and quantifiable business outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="stagger-animate group relative"
            >
              <div className="glass dark:glass-dark rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <AnimatedCounter 
                    end={metric.value} 
                    duration={2} 
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                  <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {metric.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}