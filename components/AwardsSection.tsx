'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

export default function AwardsSection() {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 150,
    animationClass: 'animate-fade-in-up'
  });

  const awards = [
    {
      title: 'CVS Health Innovation Award',
      description: 'AI Rules Management Platform',
      year: '2025',
      icon: '🏆',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Digital Excellence Award',
      description: 'Web Vibrancy Leadership',
      year: '2024',
      icon: '⭐',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Hackathon Winner',
      description: 'GenAI Implementation, CVS Digital',
      year: '2023',
      icon: '🥇',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Architecture Excellence Award',
      description: 'LaunchDarkly Implementation',
      year: '2022',
      icon: '🏅',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const speaking = [
    {
      title: 'CVS Tech Summit',
      topic: 'Building Enterprise Feature Management at Scale',
      year: '2024',
      type: 'Keynote'
    },
    {
      title: 'Internal Architecture Forum',
      topic: 'From Monolith to Microservices',
      year: '2023',
      type: 'Technical Talk'
    },
    {
      title: 'Digital All Hands',
      topic: 'GenAI in Enterprise Development',
      year: '2023',
      type: 'Presentation'
    },
    {
      title: 'Web Guild Sessions',
      topic: 'Monthly technical talks',
      year: '2020-Present',
      type: 'Regular Speaker'
    }
  ];

  const publications = [
    {
      title: 'Shifting Left with Accessibility Testing',
      publication: 'CVS Engineering Blog',
      year: '2025',
      type: 'Article'
    },
    {
      title: 'Feature Flagging at Scale',
      publication: 'Internal Architecture Documentation',
      year: '2023',
      type: 'Technical Guide'
    },
    {
      title: 'BFF Pattern Implementation Guide',
      publication: 'Enterprise Standards',
      year: '2021',
      type: 'Documentation'
    }
  ];

  return (
    <section 
      id="awards" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Recognition & Thought Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Awards, speaking engagements, and publications demonstrating industry leadership
            </p>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <div className="stagger-animate">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Awards & Recognition
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="stagger-animate">
                <div className="glass dark:glass-dark rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-r ${award.gradient} opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`text-4xl mb-4 p-3 rounded-full bg-gradient-to-r ${award.gradient} w-16 h-16 flex items-center justify-center mx-auto`}>
                      {award.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {award.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {award.description}
                    </p>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${award.gradient} bg-clip-text text-transparent`}>
                      {award.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking Engagements */}
        <div className="mb-20">
          <div className="stagger-animate">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Speaking Engagements
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speaking.map((talk, index) => (
              <div key={index} className="stagger-animate">
                <div className="glass dark:glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-xl">🎤</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {talk.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {talk.topic}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {talk.type}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {talk.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <div className="stagger-animate">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Publications
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <div key={index} className="stagger-animate">
                <div className="glass dark:glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-lg">📝</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {pub.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                        {pub.publication}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                          {pub.type}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {pub.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}