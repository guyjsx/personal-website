'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 150,
    animationClass: 'animate-fade-in-up'
  });

  const competencies = [
    {
      category: 'Leadership',
      skills: [
        'Enterprise Architecture',
        'Team Leadership',
        'Technical Mentorship',
        'Organizational Design',
        'Change Management',
        'Stakeholder Management',
        'Cross-Functional Collaboration'
      ],
      color: 'blue'
    },
    {
      category: 'Technical',
      skills: [
        'Web Platforms',
        'Applied AI',
        'API Strategy',
        'Cloud Architecture',
        'Security Standards',
        'Feature Flags',
        'A/B Testing',
        'Developer Experience',
        'Platform Modernization'
      ],
      color: 'purple'
    },
    {
      category: 'Business',
      skills: [
        'Cost Optimization',
        'Vendor Management',
        'Strategic Planning',
        'Technology Governance',
        'Digital Transformation',
        'Process Improvement',
        'Risk Management'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          dot: 'bg-blue-600',
          accent: 'text-blue-600'
        };
      case 'purple':
        return {
          dot: 'bg-purple-600',
          accent: 'text-purple-600'
        };
      case 'green':
        return {
          dot: 'bg-green-600',
          accent: 'text-green-600'
        };
      default:
        return {
          dot: 'bg-blue-600',
          accent: 'text-blue-600'
        };
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
      <div className="content-width">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              About Guy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise technology leader with 15+ years driving web platforms, applied AI, and security 
              transformation at CVS Health, influencing 5,000+ engineers through enterprise standards and 
              platform strategy. People-first builder and hands-on architect who scales high-performing teams 
              while shipping complex technical solutions that turn executive vision into measurable outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {competencies.map((competency, index) => {
            const colors = getColorClasses(competency.color);
            return (
              <div key={index} className="stagger-animate">
                <div className="clean-card p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-3 h-3 rounded-full ${colors.dot} mr-3`}></div>
                    <h3 className={`text-2xl font-bold ${colors.accent}`}>
                      {competency.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {competency.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="stagger-animate mt-16">
          <div className="clean-card p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Education & Background
            </h3>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Bachelor of Science in Business Administration</strong><br/>
                University of Louisville • 2011-2015<br/>
                Major: Computer Information Systems • Concentration: Web Development<br/>
                <em>Graduated debt-free through UPS Earn and Learn Program</em>
              </p>
              <p className="text-gray-600">
                Combines deep technical expertise with servant leadership to mentor engineers, modernize platforms, 
                and accelerate digital innovation. Seeking Executive Director role to drive larger-scale digital 
                transformation with AI and expanded people leadership.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                Let&apos;s Connect
              </button>
              
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
              >
                View Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}