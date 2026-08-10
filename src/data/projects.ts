import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'gwalior-jan-samasya-portal',
    title: 'Gwalior Jan Samasya Portal',
    subtitle: 'Digital grievance collection platform',
    description:
      'Designed and launched a digital grievance collection platform for ward-level public issues including water, roads, sanitation, electricity, and health. Centralizes citizen feedback for data-based local decision-making.',
    status: 'live',
    url: 'https://gwalior.surendrayadav.com/',
    tags: ['Civic Tech', 'React'],
  },
  {
    slug: 'ujjain-division-intelligence',
    title: 'Ujjain Division Intelligence',
    subtitle: 'District-level public issue analysis',
    description:
      'Conducted AI-assisted research and analysis of district-level public issues across sectors. Produced structured reports with high-impact issue identification.',
    status: 'live',
    url: 'https://jade-haupia-38998c.netlify.app/',
    tags: ['Policy Research', 'Analytics'],
  },
  {
    slug: 'electoral-roll-analysis',
    title: 'Electoral Roll Analysis',
    subtitle: 'Voter data extraction and deduplication',
    description:
      'Developed a Python-based approach to extract voter data from non-OCR PDFs, clean records, and detect potential duplicate entries using fuzzy matching techniques.',
    status: 'internal',
    tags: ['Python', 'OCR'],
  },
  {
    slug: 'ai-workflow-public-communication',
    title: 'AI Workflow for Public Communication',
    subtitle: 'AI-assisted operational workflows',
    description:
      'Designed AI-assisted workflows for monitoring issues, generating structured content, and improving operational efficiency for public messaging teams.',
    status: 'internal',
    tags: ['GenAI', 'Automation'],
  },
];
