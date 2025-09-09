'use client';

import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import TechnicalSkillsSection from './TechnicalSkillsSection';
import ExperienceV2 from './ExperienceV2';
import CommunitySection from './CommunitySection';
import ConnectSection from './ConnectSection';
import ScrollProgress from './ScrollProgress';
import Footer from './Footer';

import type { ResumeData } from '../lib/parseResume';

interface Props { resume: ResumeData; }

export default function HomePageClient({ resume }: Props) {
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
        <AboutSection competencies={resume.competencies} education={resume.education} summary={resume.summary} />
        <ExperienceV2 experiences={resume.experiences} />
        <TechnicalSkillsSection categories={resume.technologies} />
        <CommunitySection community={resume.community} />
        <ConnectSection contact={resume.contact} />
      </main>
      <Footer lastUpdated={resume.lastUpdated} />
    </div>
  );
}
