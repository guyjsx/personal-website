"use client";

import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TechnicalSkillsSection from '../components/TechnicalSkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import CommunitySection from '../components/CommunitySection';
import ConnectSection from '../components/ConnectSection';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <ScrollProgress />
      <Navigation scrollY={scrollY} />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechnicalSkillsSection />
        <CommunitySection />
        <ConnectSection />
      </main>
    </div>
  );
}
