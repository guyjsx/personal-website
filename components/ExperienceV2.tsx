'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import type { ResumeCompanyExperience, ResumeRole } from '../lib/parseResume';

interface Props {
  experiences?: ResumeCompanyExperience[];
}

export default function ExperienceV2({ experiences }: Props) {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 200,
    animationClass: 'animate-fade-in-up'
  });

  const cvs = experiences?.find(c => /cvs/i.test(c.company));
  const others = (experiences || []).filter(c => c !== cvs);
  const startupRe = /(startup|pana|beyond)/i;
  const startupGroups = others.filter(c => startupRe.test(c.company));
  const additionalGroups = others.filter(c => !startupRe.test(c.company));

  function splitTitle(title: string): { title: string; subtitle?: string } {
    const parts = title.split('•').map(s => s.trim());
    if (parts.length > 1) return { title: parts[0], subtitle: parts.slice(1).join(' • ') };
    return { title };
  }

  function toCvsCard(company: string, role: ResumeRole) {
    const { title, subtitle } = splitTitle(role.title);
    return {
      title,
      subtitle: subtitle || '',
      company,
      period: role.period || '',
      location: role.location || '',
      description: role.description || '',
      achievements: role.achievements || role.highlights || [],
      leadership: role.leadership || [],
      current: !!role.period?.toLowerCase().includes('present')
    };
  }

  function toOtherCard(company: string, role: ResumeRole) {
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
      ].filter(Boolean)
    };
  }

  const cvsCards = cvs?.roles.map(r => toCvsCard(cvs.company, r)) || [];
  const startupCards = startupGroups.flatMap(g => g.roles.map(r => toOtherCard(g.company, r)));
  const additionalCards = additionalGroups.flatMap(g => g.roles.map(r => toOtherCard(g.company, r)));

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-white">
      <div className="content-width">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Professional Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              15+ years of transformational leadership driving enterprise architecture, platform modernization, and team development
            </p>
          </div>
        </div>

        {cvsCards.length > 0 && (
          <div className="mb-20">
            <div className="stagger-animate mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">CVS Health Journey</h3>
              <p className="text-gray-600">5+ years of progressive leadership roles driving enterprise transformation</p>
            </div>
            <div className="space-y-8">
              {cvsCards.map((exp, index) => (
                <div key={index} className="stagger-animate">
                  <div className="clean-card p-8" data-layout="colocated-role">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="mb-2 md:mb-0">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                        {exp.subtitle && (
                          <p className="text-lg text-gray-700 mb-1">{exp.subtitle}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                          {exp.current && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Current</span>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-gray-600">{exp.description}</p>
                    )}

                    {(exp.achievements.length || exp.leadership.length) ? (
                      <div className={`mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 ${exp.achievements.length && exp.leadership.length ? 'lg:grid-cols-2' : ''} gap-8`}>
                        {exp.achievements.length > 0 && (
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Key Achievements</h5>
                            <div className="space-y-2">
                              {exp.achievements.map((a, i) => (
                                <div key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-600">{a}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {exp.leadership.length > 0 && (
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Leadership Impact</h5>
                            <div className="space-y-2">
                              {exp.leadership.map((l, i) => (
                                <div key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-600">{l}</span>
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
        )}

        {startupCards.length > 0 && (
          <>
            <div className="stagger-animate mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Startup Leadership</h3>
              <p className="text-gray-600">Scaling teams and building products in high-growth environments</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {startupCards.map((exp, index) => (
                <div key={index} className="stagger-animate">
                  <div className="clean-card p-6 h-full" data-layout="colocated-role">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period} • {exp.location}</p>
                    {exp.description && (
                      <p className="text-gray-600 text-sm mb-4">{exp.description}</p>
                    )}
                    {exp.highlights.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {additionalCards.length > 0 && (
          <>
            <div className="stagger-animate mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Early Career & Foundation</h3>
              <p className="text-gray-600">Building technical expertise and leadership skills across diverse industries</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {additionalCards.map((exp, index) => (
                <div key={index} className="stagger-animate">
                  <div className="clean-card p-6 h-full" data-layout="colocated-role">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period} • {exp.location}</p>
                    {exp.description && (
                      <p className="text-gray-600 text-sm mb-4">{exp.description}</p>
                    )}
                    {exp.highlights.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

