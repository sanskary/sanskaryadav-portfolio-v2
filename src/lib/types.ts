// ---------------------------------------------------------------------------
// Shared TypeScript interfaces for portfolio content.
// All data files import from here to ensure a single source of truth.
// ---------------------------------------------------------------------------

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'live' | 'internal' | 'archived';
  url?: string;
  tags: string[];
  year?: number;
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
