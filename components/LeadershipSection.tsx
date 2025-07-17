'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

export default function LeadershipSection() {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 150,
    animationClass: 'animate-fade-in-up'
  });

  const principles = [
    {
      title: "Lead by Example",
      description: "I continue to write production code and ship features while managing teams. Technical leaders must stay current with the technologies they&apos;re architecting.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Measure Everything",
      description: "Every initiative should have clear metrics. From $1.2M savings to 10,000+ engineers impacted, I focus on measurable business outcomes.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Build People, Not Just Systems",
      description: "80% of my direct reports have been promoted. I invest in developing technical leaders who can architect systems and lead people.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Technical Excellence",
      description: "Great architecture starts with great code. I maintain high standards for technical delivery while scaling teams and systems.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section 
      id="leadership" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Leadership Philosophy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building high-performing teams through technical excellence and measurable impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="stagger-animate group relative"
            >
              <div className="glass dark:glass-dark rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
                <div className={`absolute inset-0 bg-gradient-to-r ${principle.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {principle.title}
                    </h3>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${principle.gradient}`}></div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {principle.description}
                  </p>
                  <div className="mt-6 w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-1">
                    <div 
                      className={`bg-gradient-to-r ${principle.gradient} h-1 rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${75 + (index * 5)}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass dark:glass-dark rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Build Something Great Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;m looking for Executive Director or VP of Architecture roles where I can combine strategic 
              technical vision with hands-on leadership. Let&apos;s discuss how we can drive technical excellence 
              and measurable business impact at your organization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Let&apos;s Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass dark:glass-dark text-gray-900 dark:text-gray-100 font-semibold rounded-full hover:scale-105 transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}