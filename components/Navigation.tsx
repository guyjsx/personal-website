'use client';

import { useState, useEffect } from 'react';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Skills', href: 'technical-skills' },
    { name: 'Community', href: 'community' },
    { name: 'Contact', href: 'connect' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'technical-skills', 'community', 'connect'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 50;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`text-xl font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400' 
                : 'text-white hover:text-blue-200'
            }`}
          >
            Guy Stitt
          </button>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.href
                      ? isScrolled 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-blue-200'
                      : isScrolled 
                        ? 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                        : 'text-white/90 hover:text-blue-200'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                : 'text-white hover:text-blue-200'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/20 dark:border-gray-700/20">
            <ul className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 ${
                      activeSection === item.href
                        ? isScrolled 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-blue-200'
                        : isScrolled 
                          ? 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                          : 'text-white/90 hover:text-blue-200'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}