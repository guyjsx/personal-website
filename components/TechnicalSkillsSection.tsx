'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import type { ResumeTechnologiesCategory } from '../lib/parseResume';

interface Props {
  categories?: ResumeTechnologiesCategory[];
}

export default function TechnicalSkillsSection({ categories }: Props) {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 100,
    animationClass: 'animate-fade-in-up'
  });

  const skillCategories = categories ?? [
    {
      title: 'Languages',
      skills: [
        'JavaScript',
        'TypeScript',
        'Python',
        'Java',
        'PHP',
        'SQL',
        'HTML5',
        'CSS3',
        'GraphQL',
        'REST'
      ],
      color: 'blue'
    },
    {
      title: 'AI/ML & Emerging Technologies',
      skills: [
        'OpenAI',
        'Claude API', 
        'GitHub Copilot',
        'Cursor',
        'Windsurf',
        'Google Gemini',
        'Vertex AI',
        'Azure AI',
        'MCP',
        'LangChain',
        'Vector Databases'
      ],
      color: 'purple'
    },
    {
      title: 'Frontend Technologies',
      skills: [
        'React',
        'Next.js',
        'Angular',
        'Vue.js',
        'Redux',
        'Webpack',
        'Vite',
        'Jest',
        'Cypress',
        'Playwright'
      ],
      color: 'green'
    },
    {
      title: 'Backend & Architecture',
      skills: [
        'Node.js',
        'Express',
        'NestJS',
        'Spring Boot',
        'Microservices'
      ],
      color: 'orange'
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'AWS (EC2, S3, RDS, Lambda, CloudFront)',
        'Google Cloud Platform',
        'Kubernetes',
        'Docker',
        'Terraform',
        'GitHub Actions',
        'Jenkins',
        'CI/CD'
      ],
      color: 'teal'
    },
    {
      title: 'Data & Analytics',
      skills: [
        'LaunchDarkly',
        'Adobe Target',
        'Adobe Analytics',
        'Google Analytics',
        'Segment',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Redis'
      ],
      color: 'indigo'
    },
    {
      title: 'Development Tools',
      skills: [
        'Git',
        'Jira',
        'Rally',
        'Confluence',
        'Postman',
        'Swagger',
        'OpenAPI',
        'Datadog',
        'New Relic',
        'Splunk'
      ],
      color: 'gray'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: { dot: 'bg-purple-600', accent: 'text-purple-600', bg: 'bg-purple-50' },
      blue: { dot: 'bg-blue-600', accent: 'text-blue-600', bg: 'bg-blue-50' },
      green: { dot: 'bg-green-600', accent: 'text-green-600', bg: 'bg-green-50' },
      orange: { dot: 'bg-orange-600', accent: 'text-orange-600', bg: 'bg-orange-50' },
      teal: { dot: 'bg-teal-600', accent: 'text-teal-600', bg: 'bg-teal-50' },
      indigo: { dot: 'bg-indigo-600', accent: 'text-indigo-600', bg: 'bg-indigo-50' },
      gray: { dot: 'bg-gray-600', accent: 'text-gray-600', bg: 'bg-gray-50' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section 
      id="technical-skills" 
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
      <div className="content-width">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology stack spanning modern web development, AI/ML platforms, 
              cloud architecture, and enterprise tooling
            </p>
          </div>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {skillCategories.map((category, index) => {
            // Unified Apple-inspired palette: single accent hue
            const colors = getColorClasses('blue');
            return (
              <div key={index} className="stagger-animate">
                <div className="clean-card p-8 h-full">
                  <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 rounded-full ${colors.dot} mr-3`}></div>
                    <h3 className={`text-lg font-bold ${colors.accent}`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-600 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
