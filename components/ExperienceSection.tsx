'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import type { ResumeCompanyExperience, ResumeRole } from '../lib/parseResume';

interface Props {
  experiences?: ResumeCompanyExperience[];
}

export default function ExperienceSection({ experiences: resumeExperiences }: Props) {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 200,
    animationClass: 'animate-fade-in-up'
  });

  const experiences = [
    {
      title: 'Principal Architect',
      subtitle: 'Enterprise Technical Architecture',
      company: 'CVS Health • Aetna',
      period: 'January 2024 - Present',
      location: 'Denver, CO',
      description: 'Team Lead responsible for enterprise-wide technical standards and governance across AI, Web, and Security domains.',
      achievements: [
        'Created PRISM, an AI Rules Management Platform that transforms enterprise standards into consumable rules for AI coding agents using Next.js and Azure AI',
        'Lead Web Engineering Vibrancy Working Group with technical leaders from all business units to develop enterprise and platform standards',
        'Delivered $1.2M annual cost savings by consolidating 5+ feature flag tools into single LaunchDarkly platform',
        'Influence 5,000+ engineers through enterprise standards for Web, Security and AI domains',
        'Established partnerships across 5 business units to drive Developer Experience Platform adoption based on enterprise standards'
      ],
      leadership: [
        'Mentor 10 enterprise architects through weekly one-on-ones and technical reviews',
        'Present quarterly to VP and C-level leadership on technology strategy and roadmap',
        'Enable enterprise transformation through developer experience platforms and cross-functional collaboration'
      ],
      current: true
    },
    {
      title: 'Lead Architect',
      subtitle: 'Digital Health Solutions',
      company: 'CVS Health',
      period: 'January 2022 - December 2023',
      location: 'Denver, CO',
      description: 'Led technical architecture for Digital Health serving millions of CVS/Aetna members. Team lead for 12+ architects supporting 10+ product teams and 200+ engineers.',
      achievements: [
        'Pioneered LaunchDarkly adoption across CVS, reducing feature delivery time from weeks to hours',
        'Directed $50M Adobe Target migration across 15 teams, including project management and technical guidance',
        'Architected Unified Scheduler framework consolidating 8 scheduling systems for millions of patients',
        'Won Digital GenAI hackathon with working implementation built in 48-hour sprint',
        'Led Enterprise Digital Client Reference Architecture Working Group aligning CVS and Aetna standards',
        'Created i90 Experience API conversion process reducing REST to GraphQL transformation effort by 90%'
      ],
      leadership: [
        'Mentored 12+ architects and 100+ engineers directly',
        'Established Engineering Guild enabling knowledge sharing across 200+ engineers',
        'Implemented Architecture Decision Records process',
        'Achieved 100% PI planning readiness as train lead for four Aetna Health trains'
      ],
      current: false
    },
    {
      title: 'Senior Web Architect',
      subtitle: 'Aetna Client Architecture',
      company: 'CVS Health',
      period: 'April 2020 - December 2021',
      location: 'Denver, CO',
      description: 'Led team of 6 senior-level architects while accountable for 16 distinct engineering teams including 80 engineers, product owners, and QA across web, Android, iOS, and server applications.',
      achievements: [
        'Led enterprise-wide project eliminating third-party cookies and consolidating Aetna domains for privacy compliance',
        'Revamped API security to meet OAuth 2.0 spec using authorization code flow with PKCE across all platforms',
        'Pioneered enterprise Backend for Frontend (BFF) strategy becoming key reference architecture contributor',
        'Led A/B testing initiative in collaboration with CVS establishing Adobe Target standards',
        'Created GraphQL architecture assessment and API lifecycle adopted enterprise-wide',
        'Chaired weekly Architecture working group forum enabling cohesion across Aetna architects'
      ],
      leadership: [
        'Performed weekly one-on-ones with 6 architects',
        'Created Engineering Guild providing 200+ engineers forum for technical decisions',
        'Developed Architecture and Engineering Sync solving critical cross-train dependencies',
        'Routinely presented solution estimates to Aetna leadership and C-level executives',
        'Responsible for hiring, interviewing candidates, and building architecture team'
      ],
      current: false
    }
  ];

  const startupExperience = [
    {
      title: 'Senior Software Engineer • Team Lead',
      company: 'Pana - Travel Tech Startup',
      period: 'November 2019 - April 2020',
      location: 'Denver, CO',
      description: 'Led 5 engineers building enterprise travel platform for Fortune 500 clients. Company scaled from 100 to 1000 employees during tenure.',
      highlights: [
        'Led frontend overhaul from Backbone.js and Marionette to React hooks improving developer productivity',
        'Drove conversion of legacy Node.js API from CoffeeScript to TypeScript modernizing codebase',
        'Enabled scalable trunk-based development by integrating LaunchDarkly feature flags',
        'Implemented Datadog monitoring for application and infrastructure observability',
        'Partnered with CEO and CTO on technical roadmap supporting $50M Series B funding',
        'Mentored junior and senior engineers on modern architectures and best practices'
      ]
    },
    {
      title: 'Solutions Architect • Engineering Manager',
      company: 'Beyond - Restaurant Tech Startup',
      period: 'August 2018 - November 2019',
      location: 'Louisville, KY',
      description: 'Architected the restaurant and payment solutions used by Panera.',
      highlights: [
        'Led platform overhaul to Micro-App architecture behind API Gateway enabling independent deployments',
        'Converted authentication from session tokens to JWT for stateless operations',
        'Integrated Ionic for cross-platform deployment on Android, iOS, Desktop, and PWA with native functionality',
        'Implemented OAuth2 authorization code flow for single-page application security',
        'Designed company-wide end-to-end testing strategy using TestCafe',
        'Provided servant leadership to 5 in-office teams with 30 members and 3 remote teams with 15 members'
      ]
    }
  ];

  const additionalExperience = [
    {
      title: 'Lead Engineer • Engineering Manager',
      company: 'Pharmacord - Healthcare Startup',
      period: 'May 2017 - August 2018',
      location: 'Louisville, KY',
      description: 'Led a team of 15 engineers to develop an in-house platform that managed patient intake, benefits investigation, and prior authorizations for medication approval.',
      highlights: [
        'Designed pharmaceutical CRM platform from inception using Angular, Java, and SQL',
        'Created real-time benefits investigation reducing processing from days to minutes',
        'Built custom Genesys telephony integration powering call center operations',
        'Scaled engineering from 5 to 50 including developers, QA, designers, product owners',
        'Built deep expertise in healthcare industry, HIPAA compliance, and patient services'
      ]
    },
    {
      title: 'Pharmacy Technician',
      company: 'Rite Aid',
      period: 'June 2010 - January 2011',
      location: 'Louisville, KY',
      description: 'Supported pharmacy operations serving 200+ patients daily, partnering closely with pharmacists and patients.',
      highlights: [
        'Entered prescriptions into NextGen system ensuring accuracy of patient data and medications',
        'Counted and dispensed medications verifying dosage, quantity, and interactions',
        'Processed insurance claims and resolved coverage issues with providers',
        'Assisted patients with prescription questions and pickup procedures',
        'Maintained controlled substance logs ensuring DEA compliance',
        'Partnered with pharmacists on prescription verification and consultations'
      ]
    },
    {
      title: 'Senior Web Developer',
      company: 'CBS Interactive - CNET',
      period: 'June 2014 - May 2017',
      location: 'Louisville, KY',
      description: 'Led 5 engineers building platforms serving 200M+ monthly users across CNET, ZDNet, and TechRepublic.',
      highlights: [
        'Developed forums using PHP, JavaScript, Symfony2 framework serving 50M+ monthly active users',
        'Integrated in-house JavaScript video player ensuring cross-browser compatibility',
        'Worked directly with Google, Facebook, and LinkedIn engineering teams on integrations',
        'Implemented Google AMP achieving 40% traffic increase and faster load times',
        'Built recommendation engine increasing user engagement and page views'
      ]
    },
    {
      title: 'Operations Supervisor',
      company: 'UPS Worldport',
      period: 'January 2011 - June 2014',
      location: 'Louisville, KY',
      description: 'Managed 20 employees in world\'s largest package handling facility.',
      highlights: [
        'Supervised sort operations processing 1.6M packages nightly with 99.8% accuracy requirement',
        'Implemented process improvements reducing sort time by 25% and saving $250K annually',
        'Maintained safety compliance achieving 1,095 consecutive days without lost-time injury',
        'Completed degree while working full-time nights through Earn and Learn Program'
      ]
    }
  ];

  // If we have parsed resume data, transform it to this component's shape
  let cvsFromResume: typeof experiences | undefined;
  let startupsFromResume: typeof startupExperience | undefined;
  let additionalFromResume: typeof additionalExperience | undefined;

  function splitTitle(title: string): { title: string; subtitle?: string } {
    const parts = title.split('•').map(s => s.trim());
    if (parts.length > 1) return { title: parts[0], subtitle: parts.slice(1).join(' • ') };
    return { title };
  }

  function mapRoleToCvs(company: string, role: ResumeRole) {
    const { title, subtitle } = splitTitle(role.title);
    const current = !!(role.period && role.period.toLowerCase().includes('present'));
    return {
      title,
      subtitle: subtitle || '',
      company,
      period: role.period || '',
      location: role.location || '',
      description: role.description || '',
      achievements: role.achievements || role.highlights || [],
      leadership: role.leadership || [],
      current
    };
  }

  function mapRoleToStartup(company: string, role: ResumeRole) {
    const { title } = splitTitle(role.title);
    return {
      title,
      company,
      period: role.period || '',
      location: role.location || '',
      description: role.description || '',
      highlights: [
        ...(role.achievements || []),
        ...(role.leadership || []),
        ...(role.highlights || []),
      ]
    };
  }

  function mapRoleToAdditional(company: string, role: ResumeRole) {
    const { title } = splitTitle(role.title);
    return {
      title,
      company,
      period: role.period || '',
      location: role.location || '',
      description: role.description || '',
      highlights: role.highlights || role.achievements || []
    };
  }

  if (resumeExperiences && resumeExperiences.length) {
    const cvs = resumeExperiences.find(c => /cvs/i.test(c.company));
    if (cvs) {
      cvsFromResume = cvs.roles.map(r => mapRoleToCvs(cvs.company, r));
    }
    const others = resumeExperiences.filter(c => c !== cvs);
    const startupRe = /(startup|pana|beyond)/i;
    const startupGroups = others.filter(c => startupRe.test(c.company));
    const additionalGroups = others.filter(c => !startupRe.test(c.company));
    startupsFromResume = startupGroups.flatMap(g => g.roles.map(r => mapRoleToStartup(g.company, r)));
    additionalFromResume = additionalGroups.flatMap(g => g.roles.map(r => mapRoleToAdditional(g.company, r)));
  }

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="content-width">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              15+ years of transformational leadership driving enterprise architecture, 
              platform modernization, and team development
            </p>
          </div>
        </div>

        {/* CVS Health Experience */}
        <div className="mb-20">
          <div className="stagger-animate mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">CVS Health Journey</h3>
            <p className="text-gray-600">5+ years of progressive leadership roles driving enterprise transformation</p>
          </div>

          <div className="space-y-8">
            {(cvsFromResume ?? experiences).map((exp, index) => (
              <div key={index} className="stagger-animate">
                <div className="clean-card p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-2 md:mb-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h4>
                      {exp.subtitle && (
                        <p className="text-lg text-gray-700 mb-1">
                          {exp.subtitle}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold text-blue-600">
                          {exp.company}
                        </p>
                        {exp.current && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-gray-600 mb-6">
                      {exp.description}
                    </p>
                  )}

                  {(exp.achievements.length || exp.leadership.length) ? (
                    <div className={`mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 ${exp.achievements.length && exp.leadership.length ? 'lg:grid-cols-2' : ''} gap-8`}>
                      {exp.achievements.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Key Achievements</h5>
                          <div className="space-y-2">
                            {exp.achievements.filter(Boolean).map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm text-gray-600">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {exp.leadership.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Leadership Impact</h5>
                          <div className="space-y-2">
                            {exp.leadership.filter(Boolean).map((leadership, leadIndex) => (
                              <div key={leadIndex} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm text-gray-600">{leadership}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Startup Experience */}
        <div className="stagger-animate mb-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Startup Leadership</h3>
          <p className="text-gray-600">Scaling teams and building products in high-growth environments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {(startupsFromResume ?? startupExperience).map((exp, index) => (
            <div key={index} className="stagger-animate">
              <div className="clean-card p-8 h-full">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {exp.title}
                </h4>
                <p className="text-blue-600 font-semibold mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {exp.period} • {exp.location}
                </p>
                
                <p className="text-gray-600 text-sm mb-4">
                  {exp.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Professional Experience */}
        <div className="stagger-animate mb-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Early Career & Foundation</h3>
          <p className="text-gray-600">Building technical expertise and leadership skills across diverse industries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(additionalFromResume ?? additionalExperience).map((exp, index) => (
            <div key={index} className="stagger-animate">
              <div className="clean-card p-8 h-full">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {exp.title}
                </h4>
                <p className="text-blue-600 font-semibold mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {exp.period} • {exp.location}
                </p>
                
                <p className="text-gray-600 text-sm mb-4">
                  {exp.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
