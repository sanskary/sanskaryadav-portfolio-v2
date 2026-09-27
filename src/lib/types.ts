// ---------------------------------------------------------------------------
// Shared TypeScript interfaces for portfolio content.
// Sourced strictly from /reference/portfolio/01_PROJECT_BRIEF.md & 02_PROJECTS.md
// ---------------------------------------------------------------------------

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'live' | 'internal' | 'production-ready' | 'framework';
  url?: string;
  rel?: string;
  tags: string[];
  isFlagship?: boolean;
  takeaway?: string;
  image?: string;
  imageAlt?: string;
}

export interface Experience {
  role: string;
  organisation: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  focusAreas: string[];
  location: string;
  email: string;
  phone: string;
  links: SocialLink[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
