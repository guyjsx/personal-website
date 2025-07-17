'use client';

import Image from 'next/image';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 150,
    animationClass: 'animate-fade-in-up'
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Leading by Example
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transformational technology leader directing 10 enterprise architects across critical domains
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="stagger-animate">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/guy-stitt-headshot.png"
                  alt="Guy Stitt - Lead Director, Principal Architect at CVS Health"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="stagger-animate">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Executive Leadership at CVS Health
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As Lead Director and Principal Architect, I direct a team of 10 enterprise architects across API, 
                Data, Cloud, Observability, and AI domains. Leading enterprise architecture governance board 
                reviewing $500M+ in technology investments.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Partner with C-suite executives to align technology strategy with business objectives, presenting 
                quarterly to EVP and SVP leadership across 300,000+ employees serving millions of customers.
              </p>
            </div>

            <div className="stagger-animate">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Technical Excellence & Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I continue to write production code while leading at executive level. Built AI Rules Management 
                Platform in 48 hours, earning recognition from Brad Cain (EVP). Authored paradigm-shifting 
                accessibility testing standards moving 10,000+ engineers from reactive to proactive integration.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Revolutionized Web Vibrancy initiative through Lean Coffee framework, becoming the gold standard 
                adopted by all technology groups with 100% executive buy-in.
              </p>
            </div>
          </div>
        </div>

        {/* Core Leadership Competencies */}
        <div className="stagger-animate">
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Core Leadership Competencies
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
              {[
                {
                  title: 'Enterprise Architecture Strategy',
                  description: 'Leading team of 10 architects across critical domains',
                  metric: '10',
                  unit: 'architects'
                },
                {
                  title: 'Digital Transformation',
                  description: 'Driving cloud migration and modernization initiatives',
                  metric: '$500M+',
                  unit: 'investments'
                },
                {
                  title: 'AI/ML Innovation Leadership',
                  description: 'Built AI Rules Management Platform in 48 hours',
                  metric: '48',
                  unit: 'hours'
                },
                {
                  title: 'Strategic Vendor Management',
                  description: 'Optimizing costs while maintaining quality standards',
                  metric: '$1.2M',
                  unit: 'savings'
                },
                {
                  title: 'Cross-Functional Collaboration',
                  description: 'Presenting quarterly to EVP and SVP leadership',
                  metric: '300K+',
                  unit: 'employees'
                },
                {
                  title: 'Team Development Excellence',
                  description: '80% of direct reports have been promoted',
                  metric: '80%',
                  unit: 'promoted'
                }
              ].map((competency, index) => (
                <div key={index} className="group relative">
                  <div className="glass dark:glass-dark rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          {competency.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {competency.description}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {competency.metric}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {competency.unit}
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-1">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${85 + (index * 3)}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}