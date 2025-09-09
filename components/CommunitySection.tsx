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
      className="section-padding bg-gray-50"
    >
      <div className="content-width">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Community Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Using technology for social impact and criminal justice reform through sustained volunteer leadership
            </p>
          </div>
        </div>

        <div className="stagger-animate">
          <div className="clean-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-2xl mr-4">
                    ⚖️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Restorative Justice Louisville
                    </h3>
                    <p className="text-lg text-green-600 font-semibold">
                      Solutions Architect & Technical Lead • Volunteer
                    </p>
                    <p className="text-gray-500 text-sm">
                      July 2012 - December 2021 • 9+ years
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  Led development and managed a team of 8 volunteer engineers to build a comprehensive 
                  case management platform for a criminal justice reform nonprofit, contributing over 
                  2000+ volunteer hours valued at $200,000+ in professional services.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                  <div className="space-y-3">
                    {[
                      'Directed full-stack development of production case management system used by social workers, attorneys, and program participants',
                      'Won competitive Community Foundation Grant through technical proposal, selected from 116 nonprofit applicants',
                      'Architected complete platform migration from legacy system to modern React and Node.js stack, improving case worker productivity by 60%',
                      'Maintained AWS infrastructure including EC2, RDS, and S3, ensuring 99.9% uptime for mission-critical operations',
                      'Implemented CI/CD pipelines using GitHub Actions for safe deployments without service interruption'
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="clean-card p-6 bg-white">
                  <h4 className="font-semibold text-gray-900 mb-4">Impact Metrics</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">2000+</div>
                      <div className="text-sm text-gray-600">Volunteer Hours</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-sm text-gray-600">Engineers Led</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">9+</div>
                      <div className="text-sm text-gray-600">Years Service</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$200K+</div>
                      <div className="text-sm text-gray-600">Value Contributed</div>
                    </div>
                  </div>
                </div>

                <div className="clean-card p-6 bg-white">
                  <h4 className="font-semibold text-gray-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'AWS', 'PostgreSQL', 'GitHub Actions', 'Docker'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Leadership Philosophy</h4>
                  <blockquote className="text-gray-700 italic text-center">
                    "Technology has the power to transform not just businesses, but entire communities. 
                    The skills we develop as engineers and architects come with a responsibility to use 
                    them for the greater good."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stagger-animate mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Servant Leadership in Action
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              This experience shaped my leadership philosophy and reinforced my belief that the best leaders 
              serve others. Managing volunteer engineers taught me invaluable lessons about motivation, 
              collaboration, and building systems that truly matter to the people who use them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}