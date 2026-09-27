import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'guna-civic-intelligence-hub',
    title: 'Guna Civic Intelligence Hub',
    subtitle: 'Political Intelligence · Data · AI · Decision Support',
    description:
      'Real-time decision support system connecting grassroots grievance reporting with high-level campaign strategy across Guna, Bamori, Raghogarh, and Chachoura.',
    status: 'live',
    url: 'https://guna-intelligence-portal.netlify.app/',
    rel: 'nofollow noopener noreferrer',
    tags: ['Political Intelligence', 'Gemini AI', 'Decision Support'],
    isFlagship: true,
    takeaway:
      'Turning fragmented ground information into structured political intelligence and decision support.',
    image: '/images/project/guna-civic-hub.webp',
    imageAlt: 'Guna Civic Intelligence Hub operational decision workflow and regional intelligence map',
  },
  {
    slug: 'electoral-integrity-ai-tool',
    title: 'Electoral Integrity AI Tool',
    subtitle: 'Electoral Data · Multimodal AI · Python · Document Analysis',
    description:
      'Multimodal AI workflow processing Hindi/English electoral-roll PDFs to detect candidate matches, duplicate voter records, and potential anomalies for human review.',
    status: 'internal',
    tags: ['Electoral Data', 'Multimodal AI', 'Document Processing'],
    isFlagship: true,
    takeaway:
      'Applying multimodal AI and data processing to a difficult electoral-document analysis problem.',
    image: '/images/project/electoral-roll-analyzer.webp',
    imageAlt: 'Electoral Roll Analyzer AI extraction pipeline and duplicate voter anomaly review',
  },
  {
    slug: 'gwalior-jan-samasya-portal',
    title: 'Gwalior Jan Samasya Portal',
    subtitle: 'Civic Technology · Public Systems · Citizen Grievance Platform',
    description:
      'Deployed digital grievance collection platform for ward-level public issues including water, roads, sanitation, electricity, and health to support data-backed local governance.',
    status: 'live',
    url: 'https://gwalior.surendrayadav.com/',
    rel: 'noopener noreferrer',
    tags: ['Civic Tech', 'Public Systems', 'Grievance Intake'],
    isFlagship: true,
    takeaway:
      'Building a real citizen-facing system for collecting and structuring local public issues.',
    image: '/images/project/gwalior-jan-samasya.webp',
    imageAlt: 'Gwalior Jan Samasya Portal 66 wards grievance intake and resolution dashboard',
  },
  {
    slug: 'raghogarh-jan-sewa-portal',
    title: 'Raghogarh Jan Sewa Portal',
    subtitle: 'Civic Technology · Constituency Systems · Citizen Engagement',
    description:
      'Constituency-scale digital system connecting residents, youth volunteers (Jan Mitras), and leadership across 300+ villages and 24 rural mandals.',
    status: 'production-ready',
    url: 'https://www.jvsinghinc.in/',
    rel: 'noopener noreferrer',
    tags: ['Constituency Systems', 'Jan Mitra Cadre', 'Digital Access'],
    isFlagship: false,
    takeaway:
      'Designing a constituency-scale digital system that connects citizens, volunteers, and leadership.',
    image: '/images/project/raghogarh-jan-seva.webp',
    imageAlt: 'Raghogarh Jan Sewa Portal constituency volunteer cadre and public grievance coordination',
  },
  {
    slug: 'kartavya-organisational-reporting-system',
    title: 'Kartavya — Organisational Reporting System',
    subtitle: 'Automation · AI · Information Extraction · Organisational Intelligence',
    description:
      'Automated intelligence pipeline harvesting social media posts, filtering non-activity content via Gemini AI, and synthesizing formal activity audit reports.',
    status: 'live',
    url: 'https://kartavya-web.onrender.com/',
    rel: 'noopener noreferrer',
    tags: ['Workflow Automation', 'Information Extraction', 'Gemini AI'],
    isFlagship: false,
    takeaway:
      'Automating the transformation of fragmented social-media activity into structured organisational reporting.',
    image: '/images/project/kartavya.webp',
    imageAlt: 'Kartavya organisational activity harvesting and AI audit verification report',
  },
  {
    slug: 'sangathan-samvad-abhiyan',
    title: 'Sangathan-Samvad Abhiyan',
    subtitle: 'Organisational Strategy · Political Research · Field Intelligence',
    description:
      'Comprehensive 66-ward strategic research and field dialogue framework converting grassroots worker feedback and civic issues into structured strategic intelligence.',
    status: 'framework',
    tags: ['Organisational Strategy', 'Field Research', '66-Ward Scope'],
    isFlagship: false,
    takeaway:
      'Designing a structured 66-ward research framework converting grassroots dialogue into actionable intelligence.',
    image: '/images/project/sangathan-samvad.webp',
    imageAlt: 'Sangathan Samvad Abhiyan 66 municipal wards field research and intelligence matrix',
  },
];
