'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

export default function ArchitectureSection() {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 200,
    animationClass: 'animate-fade-in-up'
  });

  const projects = [
    {
      title: "Web Vibrancy Initiative",
      subtitle: "Lean Coffee & Community Building",
      description: "Launched grassroots initiative to energize 10,000+ engineers across CVS Health through collaborative forums and technical excellence programs.",
      impact: "10,000+ engineers engaged",
      technologies: ["React", "Node.js", "AWS", "Community Building"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Rules Management Platform",
      subtitle: "48-Hour Build Challenge",
      description: "Built production-ready AI-powered rules management system in 48 hours to demonstrate rapid prototyping capabilities and technical leadership.",
      impact: "48-hour delivery",
      technologies: ["React 18", "TypeScript", "AI/ML", "FastAPI", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "LaunchDarkly Platform Consolidation",
      subtitle: "$1.2M Annual Savings",
      description: "Led enterprise-wide feature flag platform consolidation, reducing vendor sprawl while improving developer experience and operational efficiency.",
      impact: "$1.2M annual savings",
      technologies: ["LaunchDarkly", "Enterprise Architecture", "Cost Optimization"],
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section 
      id="architecture" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Architecture Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key projects demonstrating technical leadership and measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="stagger-animate group relative"
            >
              <div className="glass dark:glass-dark rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.impact}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Impact</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                    {project.subtitle}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
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