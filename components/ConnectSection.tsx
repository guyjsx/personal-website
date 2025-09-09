'use client';

import { useState } from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { IconMail, IconPhone, IconLink, IconPin, IconFile, IconDownload } from './icons';
import type { ResumeContact } from '../lib/parseResume';

interface Props {
  contact?: ResumeContact;
}

export default function ConnectSection({ contact }: Props) {
  const sectionRef = useStaggeredAnimation('.stagger-animate', {
    threshold: 0.1,
    stagger: 150,
    animationClass: 'animate-fade-in-up'
  });

  // Basic obfuscation: keep secrets out of initial DOM
  const obEmail = (contact?.email ?? 'guy.jsx@gmail.com');
  const emailCodes = Array.from(obEmail).map(c => c.charCodeAt(0));
  const phoneSrc = (contact?.phone ?? '303-997-1231');
  const phoneParts = phoneSrc.split(/[^\d]+/).filter(Boolean);
  const [emailText, setEmailText] = useState<string>('');
  const [phoneText, setPhoneText] = useState<string>('');

  const contactMethods = [
    {
      type: 'Email',
      value: emailText || 'Reveal',
      href: '#',
      icon: <IconMail size={18} />,
      onClick: () => {
        if (!emailText) {
          const addr = String.fromCharCode(...emailCodes);
          setEmailText(addr);
        } else {
          window.location.href = `mailto:${emailText}`;
        }
      }
    },
    {
      type: 'Phone', 
      value: phoneText || 'Reveal',
      href: '#',
      icon: <IconPhone size={18} />,
      onClick: () => {
        if (!phoneText) {
          const digits = phoneParts.join('');
          setPhoneText(digits);
        } else {
          window.location.href = `tel:${phoneText}`;
        }
      }
    },
    {
      type: 'LinkedIn',
      value: contact?.linkedin ?? 'linkedin.com/in/guyjstitt',
      href: contact?.linkedin?.startsWith('http') ? contact.linkedin : `https://${contact?.linkedin ?? 'linkedin.com/in/guyjstitt'}`,
      icon: <IconLink size={18} />
    },
    {
      type: 'Resume',
      value: 'Download PDF',
      href: '/resume',
      icon: <IconFile size={18} />
    },
    {
      type: 'Location',
      value: contact?.location ?? 'Denver, CO',
      href: '#',
      icon: <IconPin size={18} />
    }
  ];

  return (
    <section 
      id="connect" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="content-width">
        <div className="text-center mb-16">
          <div className="stagger-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to discuss Executive Director opportunities and drive larger-scale digital transformation? 
              I&apos;d love to hear about your challenges and explore how we can work together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-stretch">
          <div className="stagger-animate h-full">
            <div className="clean-card p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What I&apos;m Seeking
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Executive Director roles</strong> where I can drive larger-scale digital transformation 
                    with AI and expanded people leadership
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Enterprise environments</strong> that value technical excellence, innovation, 
                    and measurable business outcomes
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Organizations focused on AI</strong> and modern platform development where 
                    I can combine strategic vision with hands-on technical leadership
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Denver, CO or Remote</strong> opportunities with companies that prioritize 
                    team development and servant leadership
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stagger-animate h-full">
            <div className="clean-card p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6 flex-1">
                {contactMethods.map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 text-blue-700 bg-blue-50 ring-1 ring-blue-200">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {contact.type}
                      </p>
                      {contact.onClick ? (
                        <button onClick={() => (contact.onClick as (() => void))()} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                          {contact.value}
                        </button>
                      ) : contact.href !== '#' ? (
                        <a 
                          href={contact.href}
                          target={contact.type === 'LinkedIn' ? '_blank' : undefined}
                          rel={contact.type === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-gray-600">{contact.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="stagger-animate">
          <div className="clean-card p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let&apos;s Build Something Great Together
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I&apos;m passionate about using technology to create meaningful impact. Whether you&apos;re looking 
                for executive leadership, technical consulting, or speaking engagements, I&apos;d love to explore 
                how we can collaborate.
              </p>
            </div>

            <div className="text-center mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Available for:</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Executive Director roles',
                  'Technical leadership consulting', 
                  'Enterprise architecture reviews',
                  'AI strategy consulting',
                  'Speaking engagements',
                  'Board advisory positions'
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-blue-50 rounded-full px-4 py-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:guy.jsx@gmail.com"
                  className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Email
                </a>
                
                <a
                  href="https://linkedin.com/in/guyjstitt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="/Guy%20Stitt%20-%20Resume.pdf"
                  download="Guy-Stitt-Resume.pdf"
                  className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="inline-flex items-center gap-2"><IconDownload size={18} /> Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
