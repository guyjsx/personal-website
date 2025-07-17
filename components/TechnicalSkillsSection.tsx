'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

export default function TechnicalSkillsSection() {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 100,
    animationClass: 'animate-fade-in-up'
  });

  const skillCategories = [
    {
      title: 'Architecture Patterns',
      category: 'Design',
      skills: [
        'Microservices',
        'Event-Driven Architecture',
        'Domain-Driven Design',
        'Backend for Frontend (BFF)',
        'Microfrontends',
        'API-First Design',
        'Serverless Architecture',
        'CQRS & Event Sourcing'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cloud & Infrastructure',
      category: 'Platform',
      skills: [
        'AWS (EC2, Lambda, S3, RDS)',
        'GCP (Compute Engine, Cloud Functions)',
        'Kubernetes & Docker',
        'Terraform & Infrastructure as Code',
        'CloudFormation',
        'Ansible & Configuration Management'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Languages & Frameworks',
      category: 'Development',
      skills: [
        'TypeScript & JavaScript (ES6+)',
        'React (Hooks, Context, Redux)',
        'Angular (2-17)',
        'Next.js & Node.js',
        'Express & NestJS',
        'GraphQL & REST APIs',
        'Java & Python'
      ],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Data & Analytics',
      category: 'Storage',
      skills: [
        'PostgreSQL & MySQL',
        'MongoDB & Redis',
        'Elasticsearch & Supabase',
        'DynamoDB & Snowflake',
        'Apache Kafka & RabbitMQ',
        'Segment & Analytics'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section 
      id="technical-skills" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive technical leadership across enterprise architecture, cloud technologies, and modern development practices
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="stagger-animate">
              <div className="group glass dark:glass-dark rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {category.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {category.category}
                    </span>
                  </div>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/70 dark:hover:bg-gray-800/70 transition-colors duration-200 group-hover:scale-105"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform & Tools */}
        <div className="stagger-animate">
          <div className="glass dark:glass-dark rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Platform & DevOps Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Modern development and deployment pipeline mastery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['GitHub', 'GitLab', 'LaunchDarkly', 'Adobe Experience Cloud'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Monitoring</h4>
                <div className="flex flex-wrap gap-2">
                  {['Datadog', 'New Relic', 'Splunk', 'Observability'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">CI/CD</h4>
                <div className="flex flex-wrap gap-2">
                  {['Jenkins', 'CircleCI', 'ArgoCD', 'GitOps'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}