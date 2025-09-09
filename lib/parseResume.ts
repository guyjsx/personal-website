import fs from 'fs';
import path from 'path';

export interface ResumeCompetency {
  category: string;
  skills: string[];
}

export interface ResumeTechnologiesCategory {
  title: string;
  skills: string[];
}

export interface ResumeContact {
  email?: string;
  phone?: string;
  linkedin?: string;
  location?: string;
}

export interface ResumeEducation {
  degree?: string;
  institution?: string;
  years?: string;
  details?: string[];
}

export interface ResumeData {
  summary?: string;
  contact?: ResumeContact;
  competencies?: ResumeCompetency[];
  technologies?: ResumeTechnologiesCategory[];
  education?: ResumeEducation;
  experiences?: ResumeCompanyExperience[];
  community?: ResumeCommunity[];
  lastUpdated?: string;
}

function readResumeMarkdown(): string {
  const cwd = process.cwd();
  const p = path.join(cwd, 'guy-stitt-resume.md');
  return fs.readFileSync(p, 'utf8');
}

function extractSection(md: string, heading: string): string | undefined {
  const re = new RegExp(`^##\\s+${heading}\\s*$`, 'm');
  const match = md.match(re);
  if (!match) return undefined;
  const start = match.index! + match[0].length;
  const rest = md.slice(start);
  const next = rest.search(/^##\s+/m);
  return next === -1 ? rest.trim() : rest.slice(0, next).trim();
}

function parseContact(md: string): ResumeContact | undefined {
  // The second non-empty line contains contact details separated by •
  const lines = md.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const contactLine = lines.find(l => l.includes('•') && l.includes('@'));
  if (!contactLine) return undefined;
  const parts = contactLine.split('•').map(p => p.trim());
  const [email, phone, linkedin, location] = parts;
  return { email, phone, linkedin, location };
}

function parseSummary(md: string): string | undefined {
  const section = extractSection(md, 'Executive Summary');
  if (!section) return undefined;
  // Take the first paragraph
  const para = section.split(/\n\n+/)[0]?.trim();
  return para;
}

function parseCompetencies(md: string): ResumeCompetency[] | undefined {
  const section = extractSection(md, 'Core Competencies');
  if (!section) return undefined;
  const result: ResumeCompetency[] = [];
  const lines = section.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  lines.forEach(line => {
    const m = line.match(/^\*\*([^:]+):\*\*\s+(.+)$/);
    if (m) {
      const category = m[1].trim();
      const skills = m[2].split('•').map(s => s.trim()).filter(Boolean);
      result.push({ category, skills });
    }
  });
  return result.length ? result : undefined;
}

function parseTechnologies(md: string): ResumeTechnologiesCategory[] | undefined {
  const section = extractSection(md, 'Technologies');
  if (!section) return undefined;
  const lines = section.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const result: ResumeTechnologiesCategory[] = [];
  lines.forEach(line => {
    const m = line.match(/^\*\*([^:]+):\*\*\s+(.+)$/);
    if (m) {
      const title = m[1].trim();
      const skills = m[2].split(',').map(s => s.trim()).filter(Boolean);
      result.push({ title, skills });
    }
  });
  return result.length ? result : undefined;
}

function parseEducation(md: string): ResumeEducation | undefined {
  const section = extractSection(md, 'Education');
  if (!section) return undefined;
  const lines = section.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const edu: ResumeEducation = {};
  // Expect structure:
  // **Bachelor of ...**
  // University of Louisville • 2011-2015
  // Major: ... • Concentration: ...
  // Graduated ...
  const degreeLine = lines.find(l => l.startsWith('**'));
  if (degreeLine) edu.degree = degreeLine.replace(/\*\*/g, '').trim();
  const instLine = lines.find(l => l.includes('•') && /\d{4}/.test(l));
  if (instLine) edu.institution = instLine;
  const details = lines.filter(l => l !== degreeLine && l !== instLine);
  if (details.length) edu.details = details;
  return Object.keys(edu).length ? edu : undefined;
}

export function parseResume(): ResumeData {
  const md = readResumeMarkdown();
  // File mtime as last updated signal
  const p = path.join(process.cwd(), 'guy-stitt-resume.md');
  const stat = fs.statSync(p);
  return {
    contact: parseContact(md),
    summary: parseSummary(md),
    competencies: parseCompetencies(md),
    technologies: parseTechnologies(md),
    education: parseEducation(md),
    experiences: parseProfessionalExperience(md),
    community: parseCommunityLeadership(md),
    lastUpdated: stat.mtime.toISOString(),
  };
}

// -------------------- Professional Experience --------------------
export interface ResumeRole {
  title: string;
  period?: string;
  location?: string;
  description?: string;
  achievements?: string[];
  leadership?: string[];
  highlights?: string[];
}

export interface ResumeCompanyExperience {
  company: string;
  roles: ResumeRole[];
}

function parseProfessionalExperience(md: string): ResumeCompanyExperience[] | undefined {
  const section = extractSection(md, 'Professional Experience');
  if (!section) return undefined;
  const lines = section.split(/\r?\n/);

  const companies: ResumeCompanyExperience[] = [];
  let currentCompany: ResumeCompanyExperience | null = null;
  let currentRole: ResumeRole | null = null;
  let mode: 'none' | 'achievements' | 'leadership' | 'highlights' = 'none';

  const flushRole = () => {
    if (currentCompany && currentRole) {
      // Normalize empty arrays
      if (currentRole.achievements && !currentRole.achievements.length) delete currentRole.achievements;
      if (currentRole.leadership && !currentRole.leadership.length) delete currentRole.leadership;
      if (currentRole.highlights && !currentRole.highlights.length) delete currentRole.highlights;
      currentCompany.roles.push(currentRole);
      currentRole = null;
      mode = 'none';
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { mode = 'none'; continue; }

    // New company
    if (line.startsWith('### ')) {
      flushRole();
      const company = line.replace(/^###\s+/, '').trim();
      currentCompany = { company, roles: [] };
      companies.push(currentCompany);
      continue;
    }

    if (!currentCompany) {
      continue; // Skip anything before first company
    }

    // New role title
    if (/^\*\*.+\*\*$/.test(line)) {
      flushRole();
      const title = line.replace(/^\*\*|\*\*$/g, '').trim();
      currentRole = { title };
      continue;
    }

    // Period • Location
    if (/^\*.+\*$/.test(line) && currentRole) {
      const meta = line.replace(/^\*|\*$/g, '').trim();
      const [periodPart, locationPart] = meta.split('•').map(s => s.trim());
      currentRole.period = periodPart;
      if (locationPart) currentRole.location = locationPart;
      continue;
    }

    // Section markers
    if (/^\*\*Key Achievements:/.test(line)) { mode = 'achievements'; continue; }
    if (/^\*\*Leadership Impact:/.test(line)) { mode = 'leadership'; continue; }

    // Bullets
    if (/^[•\-*]\s+/.test(line)) {
      const text = line.replace(/^[•\-*]+\s+/, '').trim();
      if (!text) continue;
      if (!currentRole) {
        currentRole = { title: 'Role', highlights: [text] };
        continue;
      }
      if (mode === 'achievements') {
        (currentRole.achievements ||= []).push(text);
      } else if (mode === 'leadership') {
        (currentRole.leadership ||= []).push(text);
      } else {
        (currentRole.highlights ||= []).push(text);
      }
      continue;
    }

    // Default: description content
    if (currentRole) {
      currentRole.description = currentRole.description ? `${currentRole.description} ${line}` : line;
    }
  }

  flushRole();
  return companies.length ? companies : undefined;
}

// -------------------- Community Leadership --------------------
export interface ResumeCommunity {
  organization: string;
  role?: string;
  type?: string;
  period?: string;
  duration?: string;
  description?: string;
  achievements?: string[];
}

function parseCommunityLeadership(md: string): ResumeCommunity[] | undefined {
  const section = extractSection(md, 'Community Leadership');
  if (!section) return undefined;
  const lines = section.split(/\r?\n/).map(l => l.trim());
  const items: ResumeCommunity[] = [];
  let current: ResumeCommunity | null = null;

  const flush = () => {
    if (current) {
      items.push(current);
      current = null;
    }
  };

  for (const line of lines) {
    if (!line) { continue; }
    // Start of an item: **Org • Role • Type**
    if (/^\*\*.+\*\*$/.test(line)) {
      flush();
      const content = line.replace(/^\*\*|\*\*$/g, '').trim();
      const parts = content.split('•').map(s => s.trim());
      const organization = parts[0] || content;
      const role = parts[1];
      const type = parts[2];
      current = { organization, role, type };
      continue;
    }

    if (!current) continue;

    // Period and duration: *Month YYYY - Month YYYY • X years*
    if (/^\*.+\*$/.test(line)) {
      const meta = line.replace(/^\*|\*$/g, '').trim();
      const [period, duration] = meta.split('•').map(s => s.trim());
      current.period = period;
      if (duration) current.duration = duration;
      continue;
    }

    if (/^\*\*Key Achievements:/.test(line)) { continue; }

    if (line.startsWith('• ')) {
      const text = line.replace(/^•\s+/, '');
      (current.achievements ||= []).push(text);
      continue;
    }

    // Description paragraph
    current.description = current.description ? `${current.description} ${line}` : line;
  }

  flush();
  return items.length ? items : undefined;
}
