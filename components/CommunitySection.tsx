'use client';

import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

export default function CommunitySection() {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 200,
    animationClass: 'animate-fade-in-up'
  });

  return (
    <section 
      id="community" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Community Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Using technology to drive positive social impact and criminal justice reform
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animate">
            <div className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-2xl mr-4">
                    ⚖️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Restorative Justice Louisville
                    </h3>
                    <p className="text-lg text-green-600 dark:text-green-400 font-semibold">
                      Solution Architect & Technical Lead
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong>2000+ volunteer hours</strong> advancing criminal justice reform (July 2011 - Present)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong>Secured Community Foundation Grant</strong> from 116 competing nonprofits
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong>Led team of 15 volunteer engineers</strong> building comprehensive case management system
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong>Managed technology infrastructure</strong> supporting case workers and program participants
                    </span>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'React', 'Node.js', 'PostgreSQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 text-green-800 dark:text-green-200 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="stagger-animate">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Personal Values & Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Beyond my professional work, I&apos;m deeply committed to using technology as a force for positive 
                  social change. My decade-long involvement with Restorative Justice Louisville demonstrates 
                  how technical leadership can extend far beyond corporate environments.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Leading a team of volunteer engineers to build systems that support criminal justice reform 
                  has taught me invaluable lessons about servant leadership, community building, and the 
                  responsibility we have as technologists to serve the greater good.
                </p>
              </div>

              <div className="glass dark:glass-dark rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Community Impact
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">2000+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Volunteer Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Engineers Led</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">13+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">1</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Grant Secured</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6">
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 text-center">
                  &quot;Technology has the power to transform not just businesses, but entire communities. 
                  The skills we develop as engineers and architects come with a responsibility to use 
                  them for the greater good.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}