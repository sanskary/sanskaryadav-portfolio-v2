# Sanskar Yadav — All Project Case Studies

**Status:** MASTER SOURCE OF TRUTH  
**Purpose:** Single consolidated document containing the approved detailed case studies for all six flagship projects.

> This file supersedes the earlier evidence-only placeholder structure for project narratives.
> It preserves the approved source material and its `[CONFIRM]` / confidentiality markers.
> No unsupported facts, metrics, outcomes or roles are added.

---

# Sanskar Yadav — Case Studies

**Status:** SOURCE OF TRUTH  
**Purpose:** Detailed case-study narratives for the six flagship projects on `sanskaryadav.in`.

> This document is grounded in the available project documentation. Where the sources do not establish a fact, the field is marked `[CONFIRM]` rather than being invented.
>
> Public website case studies should use the **public-safe version** of each project. Sensitive political, electoral, organisational and personal data must be anonymised or replaced with dummy examples.

---

# 01 — GUNA CIVIC INTELLIGENCE HUB

## Project type
**Political Intelligence · Data · AI · Decision Support**

## Project name
**Guna Civic Intelligence Hub**

The source documentation describes it as a real-time Decision Support System designed to reduce information asymmetry in regional political strategy by connecting grassroots grievance reporting with high-level planning.

## The problem

The project documentation identifies four major problems:

1. **High information latency** — local civic intelligence such as fertilizer shortages, water-supply failures and road damage could take hours or days to reach decision-makers.
2. **Fragmented data silos** — information was spread across WhatsApp groups, phone calls and physical reports.
3. **Strategic disconnect** — high-level English strategic directives did not always translate into actionable Hindi instructions for ground workers.
4. **Reactive operations** — campaign teams spent substantial time verifying rumours instead of proactively responding to issues.

Source: project documentation. fileciteturn16file0L17-L21

## Intended users

The documented stakeholders were:

- District Congress Committee leadership
- Election War Room strategists in Guna district
- Local block committee leaders
- Media-cell managers
- Ground workers

The documented geographical coverage includes four constituencies:

- Guna City
- Bamori
- Raghogarh
- Chachoura

Source: project documentation. fileciteturn16file0L25-L28

## Sanskar's role

The documentation states that Sanskar:

- Architected the client-side/serverless application flow
- Designed the UI
- Designed the zero-trust security framework
- Built the interactive dashboard
- Built the data pipeline
- Designed Gemini prompts
- Implemented deployment/security measures

Source: project documentation. fileciteturn16file0L31-L36

## What was built

### 1. Live analytics dashboard

Includes:

- Doughnut charts
- Stacked bar graphs
- Intensity heatmap
- Grievance distribution
- Severity visualisation

### 2. Regional Intelligence Hub

Block-level issue cards display:

- Ground problems
- Severity
- Source attribution

### 3. AI Strategic Analyst

The integrated AI engine uses **Gemini 2.5 Flash** and generates four documented output types:

- Press releases
- Protest plans
- Escalation warnings
- Social-media drafts

### 4. Bilingual command system

Produces:

- English outputs for leadership review
- Hindi outputs for ground-worker circulation

### 5. War Room checklist

Provides operational task lists for local block committees.

Source: project documentation. fileciteturn16file0L40-L49

## Technology

Documented stack:

- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Chart.js
- Plotly.js
- PapaParse.js
- Google Gemini 2.5 Flash API
- Marked.js
- Phosphor Icons
- Google Fonts
- AST JavaScript Obfuscator
- LocalStorage
- Netlify
- Google Sheets

Source: project documentation. fileciteturn16file0L53-L60

## Interesting technical challenge

A major design challenge was **smart authority targeting**.

Instead of generating generic political criticism, the AI was designed to identify relevant administrative authorities such as a District Collector, PWD Engineer, NHAI or Mandi Secretary.

Another challenge was operational simplicity: Google Sheets was used as a live backend so non-technical rural staff could update information without a traditional CMS.

Source: project documentation. fileciteturn16file0L64-L68

## Current status

The documentation states:

- Fully functional live prototype
- Deployed on Netlify
- Running on `gemini-2.5-flash`
- Connected to a published spreadsheet data feed

Source: project documentation. fileciteturn16file0L72-L75

## Public presentation

The documentation permits public demonstration with security controls. Sensitive Google Sheet data should be replaced with dummy/sample data where necessary. fileciteturn16file0L79-L83

## Portfolio takeaway

> **Turning fragmented ground information into structured political intelligence and decision support.**

---

# 02 — ELECTORAL INTEGRITY AI TOOL

## Project type
**Electoral Intelligence · AI · Python · Document Processing**

## Project name
**Electoral Integrity AI Tool**

## The problem

Electoral-roll information can exist inside scanned/non-OCR PDFs, making conventional text extraction unreliable.

The project is designed to process Hindi/English electoral-roll PDFs and identify duplicate or suspicious voter records.

Source: project README. fileciteturn16file1L104-L120

## The approach

Instead of depending exclusively on traditional OCR, the system uses **Google Gemini multimodal capabilities** to interpret scanned PDF pages as images.

The workflow is:

**Electoral Roll PDF → Page/Image Processing → AI Extraction → Structured Records → Matching → Anomaly Review**

## What the tool detects

### Critical
Exact EPIC-number matches across different pages.

### Warning
Potentially suspicious records based on:

- Same name
- Same father's name
- Similar age within tolerance
- Different EPIC number

Source: project README. fileciteturn16file1L108-L120

## Sanskar's role

The available documentation establishes the tool and implementation but does not explicitly state the complete formal role description.

**Role:** `[CONFIRM EXACT WORDING]`

## Technology

Documented:

- Python 3.9+
- Google Gemini multimodal AI
- Streamlit
- PDF/image processing
- Record matching

The exact libraries listed in `requirements.txt` are not established in the available source and should not be invented.

## Privacy architecture

An important design decision is local processing:

- PDF pages are converted into images in memory.
- Only the specific page images being analysed are sent to the AI API.

Source: project README. fileciteturn16file1L118-L120

## User workflow

1. Enter Gemini API key.
2. Upload electoral-roll PDF.
3. Select a page range.
4. Start AI analysis.
5. Review the Anomalies & Duplicates section.

Source: project README. fileciteturn16file1L141-L155

## Portfolio presentation

Because voter data is sensitive, the public case study should use:

- Synthetic voter records
- Redacted screenshots
- Workflow diagrams
- Dummy PDFs
- Demonstration outputs without real personal information

## Portfolio takeaway

> **Applying multimodal AI and data processing to a difficult electoral-document analysis problem.**

---

# 03 — GWALIOR JAN SAMASYA PORTAL

## Project type
**Civic Technology · Public Systems · Citizen Grievance Platform**

## Project name
**Gwalior Jan Samasya Portal**

## Public URL
`gwalior.surendrayadav.com`

## The problem

Citizens need a simple digital mechanism for submitting local public issues and grievances.

The portal was designed around ward-level issues including:

- Water
- Roads
- Sanitation
- Electricity
- Health

The existing portfolio implementation describes it as a digital grievance collection platform that centralises citizen feedback for data-based local decision-making. fileciteturn14file6L295-L315

## What was built

The portal provides a citizen-facing digital submission experience with:

- Public issue submission
- Simple instructions
- Instructional video
- Public-service information
- Representative/contact information
- Disclaimer/data-use information

## Strategic value

The project is important because it is not merely a mockup or technical experiment.

It demonstrates:

**Public problem → Digital system → Real deployment**

## Technology

The current portfolio source identifies:

- React
- Civic technology
- Live deployment

Source: existing project portfolio. fileciteturn14file6L295-L315

The exact backend/form architecture should be taken from the final project files before publication.

## Real-world evidence

The portal was launched in the presence of Madhya Pradesh Congress State President Shri Jitu Patwari Ji.

**Exact launch date:** `[CONFIRM]`

## Public presentation

This project can be one of the three strongest homepage projects because it combines:

- Real public-facing use
- Civic technology
- Deployment
- Social/public problem-solving
- A visible live product

## Portfolio takeaway

> **Building a real citizen-facing system for collecting and structuring local public issues.**

---

# 04 — RAGHOGARH JAN SEWA PORTAL

## Project type
**Civic Technology · Constituency Systems · Citizen Engagement**

## Project name
**Raghogarh Jan Sewa Portal (राघौगढ़ जन सेवा पोर्टल)**

## Public URL
`www.jvsinghinc.in`

## Role

The project documentation identifies Sanskar's role as:

**Independent Civic Tech Architect & Digital Consultant**

Source: project documentation. fileciteturn16file2L172-L178

## Intended users

- Raghogarh constituency residents
- Youth volunteers / Jan Mitras
- MLA leadership office

## The problem

The documentation identifies three operational bottlenecks:

1. Citizens lacked a structured and accessible way to direct local grievances toward representatives/official channels.
2. Youth volunteers lacked formal institutional recognition, digital identity and a central system for participation.
3. Development work and resolved grievances were not consistently documented in searchable public-facing form.

Source: project documentation. fileciteturn16file2L182-L187

## Solution concept

The platform combines three layers:

### Citizens
- Search local ward heads
- View proof-of-work entries
- Access complaint-filing tutorials

### Jan Mitras
- Recruitment
- Digital ID cards
- Public directory
- Monthly Seva Ratna leaderboard

### Leadership
- Coverage map
- Ground-level cadre deployment visibility
- Constituency-level tracking

Source: project documentation. fileciteturn16file2L191-L197

## Sanskar's role

The documentation states that Sanskar owned:

- Strategy
- Architecture
- Design
- Technical execution

Specific responsibilities included:

- Hybrid civic-tech model
- UI/UX
- Responsive bilingual interface
- Google Sheets data architecture
- Constituency information architecture
- Strategic proposals/documentation

Source: project documentation. fileciteturn16file2L201-L208

## What was built

The production-ready platform consists of five major pages:

1. Homepage / Command Center
2. Jan Mitra Directory & Leaderboard
3. Kaam Bolta Hai / proof-of-work gallery
4. Jan Mitra recruitment hub
5. Civic complaint flow

Source: project documentation. fileciteturn16file2L212-L219

## Technology

Documented stack:

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Google Sheets CSV endpoints
- Netlify
- Hostinger DNS
- YouTube iframe API
- PostImg CDN
- WhatsApp Web routing
- Google Forms

Source: project documentation. fileciteturn16file2L223-L232

## Key technical challenge

The constituency includes 300+ villages.

The system groups rural areas into **24 Rural Mandals** while preserving village-level searchability. This was designed to reduce mobile UI complexity.

A custom mobile card-stack interaction was also developed for small screens.

Source: project documentation. fileciteturn16file2L236-L241

## Current status

The documentation states:

- Development: 100% complete
- Production-ready
- Domain/DNS configured
- Google Sheets data endpoints prepared
- Prepared for Netlify deployment and handover

Source: project documentation. fileciteturn16file2L245-L249

## Public presentation

The documentation explicitly permits portfolio presentation and identifies it as a Civic Tech & Electoral Workflow Automation case study. fileciteturn16file2L253-L257

## Portfolio takeaway

> **Designing a constituency-scale digital system that connects citizens, volunteers and organisational operations.**

---

# 05 — KARTAVYA / ORGANISATIONAL REPORTING SYSTEM

## Working public name

**Kartavya — Organisational Reporting System**

**[CONFIRM WHETHER “Kartavya” IS THE FINAL PUBLIC NAME]**

## Project type
**Automation · AI · Information Extraction · Organisational Intelligence**

## Core problem

Organisational activity information is often scattered across social-media posts and requires manual compilation into formal reports.

The system automates the process of collecting, filtering and converting activity information into a standard report.

## Current v1.0 workflow

The documented system:

1. Uses Apify to collect a month of posts from one Facebook profile.
2. Cleans captions by removing hashtags, footer mentions and filler.
3. Uses Gemini to discard non-activity posts.
4. Uses Gemini to write formal Hindi headlines.
5. Produces a four-column Excel report:

`Date | Title | Description | Link`

6. Stores API keys locally.
7. Has already produced three months of real reports: May, June and July 2026.

Source: Kartavya roadmap. fileciteturn16file4L531-L540

## Important reporting rule

The submitted Excel format is deliberately frozen:

**Date | Title | Description | Link**

The link points to the Facebook post rather than temporary media URLs.

Only completed physical activities are included. Greetings, future announcements, appeals, condolences without attendance and commentary are excluded.

Source: roadmap. fileciteturn16file4L544-L558

## AI workflow

Gemini is responsible for:

- Filtering relevant activities
- Producing formal Hindi headlines
- Supporting structured reporting

The roadmap also proposes fixed activity categories:

- बैठक / संगठनात्मक
- जनसंपर्क
- आंदोलन / धरना
- सम्मान / स्वागत
- कार्यक्रम / आयोजन
- निरीक्षण / दौरा
- अन्य

Source: roadmap. fileciteturn16file4L569-L585

## Trust / human-review principle

One of the planned high-trust features is a review screen showing:

- Included posts
- Excluded posts
- Reasons for exclusion
- Ability to override AI decisions

This is particularly important because the report is generated under a person's name and may reach senior leadership.

Source: roadmap. fileciteturn16file4L603-L615

## Current scope

The current system is a **single-profile reporting workflow**.

The roadmap describes future expansion to:

- Dashboard
- Multiple profiles
- PDF reports
- Photographs
- Word export
- Custom date ranges
- Other social platforms
- Scheduled runs

These are roadmap items, not necessarily completed features, and must not be presented as current functionality.

Source: roadmap. fileciteturn16file4L619-L652

## Cost/security principle

API credentials stay on the user's machine, and the system recognises that Apify and Gemini usage has a real cost.

Source: roadmap. fileciteturn16file4L544-L558

## Portfolio takeaway

> **Automating the transformation of fragmented social-media activity into structured organisational reporting.**

---

# 06 — SANGATHAN-SAMVAD ABHIYAN

## Project type
**Organisational Strategy · Political Research · Field Intelligence**

## Project name
**संगठन संवाद अभियान (Sangathan-Samvad Abhiyan)**

## Nature of project

This is fundamentally a **strategic organisational initiative**, not a software product.

The source document describes it as a comprehensive organisational reconstruction and grassroots dialogue plan for the Gwalior City District Congress Committee.

## Scope

- Approximately 1.5 months / 45 days
- 66 wards
- Gwalior city
- Target groups: ward/mandal/block office-bearers, workers and citizens

Source: official strategy document. fileciteturn16file3L275-L290

## Core problem

The plan is designed around the need to understand the actual ground-level condition of the organisation rather than relying only on top-down meetings and instructions.

It emphasises:

- Direct worker dialogue
- Household-level contact
- Organisational review
- Membership expansion
- Coordination among departments/front organisations
- Authentic collection of local problems and suggestions

Source: strategy document. fileciteturn16file3L291-L303

## Strategic objectives

The document establishes objectives including:

- Detailed assessment of all 66 wards
- Direct dialogue with active, inactive and senior workers
- Re-engagement of inactive supporters
- New membership and youth engagement
- Coordination among organisational fronts
- Identification of organisational weaknesses
- Structured grievance/suggestion mechanism
- Door-to-door outreach
- Identification of vacant organisational positions
- Creation of a digitised organisational database and final action plan

Source: strategy document. fileciteturn16file3L304-L328

## Field methodology

The campaign is divided into three phases:

### Phase 1 — Preparation
Weeks 1–2:

- Update ward-wise worker lists
- Form and train teams
- Initial meetings
- Print dialogue sheets and data forms

### Phase 2 — Intensive grassroots dialogue
Weeks 3–5:

- House-to-house contact across 66 wards
- Direct dialogue with workers
- Ward-level meetings
- Local issue and organisational-gap data collection

### Phase 3 — Data review and analysis
Week 6:

- Computerise and analyse ward data
- Final review meetings
- Produce consolidated 66-ward report
- Present recommendations and future action plan

Source: strategy document. fileciteturn16file3L362-L404

## Information collected

The framework includes:

- Organisational status
- Worker problems and expectations
- SWOT
- Training needs
- Youth/women participation
- Membership opportunities
- Local civic issues
- Potential leadership
- Coordination among organisational fronts
- Strategic suggestions

Source: strategy document. fileciteturn16file3L405-L427

## Reporting architecture

Each ward is intended to have structured reporting covering:

- Ward details
- Booth counts
- Organisational personnel
- Active/inactive workers
- Contact/membership numbers
- Organisational weaknesses
- Worker complaints
- Major local public issues
- Potential future organisational leaders

Source: strategy document. fileciteturn16file3L452-L469

## Review system

The framework proposes:

- Daily digital reporting by teams
- Weekly leadership review
- Special teams for priority wards
- Final consolidated 66-ward report

Source: strategy document. fileciteturn16file3L470-L479

## Expected outputs

The document identifies:

- Updated organisational report card for all 66 wards
- Re-energised worker network
- Better coordination among organisational fronts
- Digitised worker/supporter database
- Clear list of local public issues
- Future leadership pipeline

Source: strategy document. fileciteturn16file3L480-L494

## Confidentiality

The source document itself is labelled:

**“अत्यंत गोपनीय — केवल उच्च नेतृत्व एवं वरिष्ठ पदाधिकारियों हेतु”**

Therefore, this should **NOT** be published as a complete public case study.

The portfolio should show only a sanitised strategic overview, such as:

- Problem
- Methodology
- 66-ward scope
- Three-phase framework
- Reporting architecture
- Generic diagrams

Do NOT publish:

- Worker phone numbers
- Internal databases
- Sensitive political assessments
- Potential leadership lists
- Internal strategy
- Confidential ward-level findings

Source: strategy document. fileciteturn16file3L275-L284

## Portfolio takeaway

> **Designing a structured, 66-ward organisational research framework that converts grassroots dialogue into actionable organisational intelligence.**

---

# 7. CROSS-PROJECT STORY

These six projects should not appear as six unrelated technical experiments.

Together they demonstrate a progression:

### Guna
**Political intelligence**

### Electoral Integrity
**Data + AI**

### Gwalior
**Civic technology**

### Raghogarh
**Constituency systems**

### Kartavya
**Automation + organisational intelligence**

### Sangathan-Samvad
**Organisational strategy + field research**

The larger story is:

> **Understand → Structure → Analyse → Build → Operationalise**

---

# 8. CASE-STUDY PAGE TEMPLATE

Every project page should use the same underlying structure:

## 01 — Context
What was happening?

## 02 — The Problem
What was difficult or inefficient?

## 03 — My Role
What did Sanskar personally own?

## 04 — Approach
How was the problem structured?

## 05 — What I Built / Designed
What was actually delivered?

## 06 — How It Works
Simple workflow/architecture.

## 07 — Technology
Only relevant technologies.

## 08 — Difficult Part
One or two genuinely difficult decisions.

## 09 — Outcome / Status
Only verified outcomes.

## 10 — Evidence
Screenshots, photographs, reports, diagrams or live links.

## 11 — What I Learned
Optional short personal reflection.

---

# 9. PROJECT-SPECIFIC PRESENTATION HIERARCHY

## Homepage flagship
1. Guna Civic Intelligence Hub
2. Electoral Integrity AI Tool
3. Gwalior Jan Samasya Portal

## Secondary work
4. Raghogarh Jan Sewa Portal
5. Kartavya / Organisational Reporting System
6. Sangathan-Samvad

This order can be revised after evaluating the actual visual evidence and final CV.

---

# 10. WHAT MUST NOT BE INVENTED

Never invent:

- Number of users
- Number of complaints
- Accuracy percentage
- Time saved
- Number of wards processed unless documented
- Financial impact
- Election impact
- Political outcomes
- Government outcomes
- AI accuracy
- Client testimonials
- Awards
- Official endorsements
- Formal positions

If a metric is desirable but unavailable:

`[METRIC NOT CURRENTLY DOCUMENTED]`

---

# 11. PUBLIC-SAFE CASE STUDY RULE

For politically sensitive projects:

**Show the architecture and thinking, not the confidential intelligence.**

A good public case study can demonstrate:

> “Here is the problem, here is how I structured it, here is the system/methodology, and here is what the output looks like.”

without revealing:

> “Here is the confidential political database and internal strategy.”

---

# 12. FINAL CASE-STUDY PRINCIPLE

The portfolio should make each project answer one question:

> **What does this project prove about how Sanskar thinks and works?**

The six answers should collectively prove:

- He can understand complex problems.
- He can work with political/public context.
- He can conduct research.
- He can structure messy information.
- He can use AI intelligently.
- He can work with data.
- He can build practical digital systems.
- He can automate workflows.
- He can communicate strategy.
- He can work beyond a single discipline.

