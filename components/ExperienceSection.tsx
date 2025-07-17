'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

export default function ExperienceSection() {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 200,
    animationClass: 'animate-fade-in-up'
  });

  const experiences = [
    {
      company: 'CVS Health | Aetna',
      title: 'Lead Director, Principal Architect',
      period: 'January 2024 - Present',
      description: 'Leading team of 10 enterprise architects across API, Data, Cloud, Observability & AI domains',
      achievements: [
        'Direct $500M+ technology investment decisions through enterprise architecture governance',
        'Revolutionized Web Vibrancy initiative achieving 100% executive buy-in',
        'Built AI Rules Management Platform in 48 hours, earning EVP recognition',
        'Delivered $1M+ annual savings through unified feature flagging strategy'
      ],
      gradient: 'from-blue-600 to-purple-600',
      current: true
    },
    {
      company: 'CVS Health | Aetna',
      title: 'Lead Architect, Digital Health Solutions',
      period: 'January 2022 - December 2023',
      description: 'Technical leadership for Digital Health serving millions of CVS/Aetna members',
      achievements: [
        'Pioneered LaunchDarkly adoption transforming feature delivery from weeks to hours',
        'Led Adobe Target migration ($50M+ initiative) completing 6 months ahead of schedule',
        'Architected Unified Scheduler consolidating 8 disparate systems into single platform',
        'Mentored 20+ architects with 80% receiving promotions within 18 months'
      ],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      company: 'CVS Health | Aetna',
      title: 'Senior Web Architect & Team Lead',
      period: 'April 2020 - December 2021',
      description: 'Leading web architecture transformation during COVID-19 digital acceleration',
      achievements: [
        'Pioneered back-end for front-end (BFF) API design pattern across enterprise',
        'Train lead for all four Aetna Health trains guiding 6 web engineering teams',
        'Created AH Web Guild uniting engineers across trains for collaboration',
        'Key contributor to CIAM and application security best practices'
      ],
      gradient: 'from-pink-600 to-red-600'
    },
    {
      company: 'Pana (Travel Tech Startup)',
      title: 'Lead Software Engineer',
      period: 'November 2019 - April 2020',
      description: 'Denver, CO - Series B funded startup disrupting corporate travel management',
      achievements: [
        'Led team of 5 engineers building platform for Fortune 500 clients (Google, Facebook, Microsoft)',
        'Architected microservices migration supporting 10x growth while reducing costs by 40%',
        'Implemented CI/CD pipeline reducing production incidents by 85%',
        'Mentored 20+ engineers with 90% retention rate during hypergrowth'
      ],
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      company: 'Beyond (Restaurant Tech)',
      title: 'Solutions Architect & Team Lead',
      period: 'August 2018 - November 2019',
      description: 'Louisville, KY - Restaurant ordering platform acquired for $150M+',
      achievements: [
        'Led platform re-architecture from monolith to microservices/microfrontends',
        'Managed 45 engineers across 8 distributed teams (US, Europe, India)',
        'Played key role in due diligence for successful $150M+ acquisition',
        'Built Customer Data Platform generating $10M+ in upsell revenue'
      ],
      gradient: 'from-orange-600 to-red-600'
    },
    {
      company: 'PharmaCord (Healthcare)',
      title: 'Lead Engineer & Solution Architect',
      period: 'May 2017 - August 2018',
      description: 'Louisville, KY - Specialty pharmacy platform (acquired by AmerisourceBergen)',
      achievements: [
        'Architected enterprise CRM platform processing $2B+ annual pharmaceutical transactions',
        'Built HIPAA-compliant infrastructure supporting 200+ call center agents',
        'Achieved FDA 21 CFR Part 11 compliance opening $50M+ market opportunity',
        'Led 4 high-performing teams (15 direct reports) establishing engineering culture'
      ],
      gradient: 'from-cyan-600 to-blue-600'
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              10+ years of transformational leadership across healthcare, fintech, and enterprise technology
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="stagger-animate">
                <div className="relative lg:flex lg:items-center lg:space-x-8">
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-6 w-5 h-5 bg-white dark:bg-gray-800 rounded-full ring-4 ring-white dark:ring-gray-800 z-10">
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${exp.gradient} ${exp.current ? 'animate-pulse' : ''}`}></div>
                  </div>

                  {/* Content */}
                  <div className="lg:ml-16 w-full">
                    <div className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                              {exp.title}
                            </h3>
                            <p className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                              {exp.company}
                              {exp.current && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  Current
                                </span>
                              )}
                            </p>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                            {exp.period}
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {exp.description}
                        </p>

                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start">
                              <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                              <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
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