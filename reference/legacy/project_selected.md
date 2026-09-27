# PROJECTS_SELECTED — Portfolio Selected Work Specification

## PURPOSE

This document is the authoritative content and presentation direction for the **Selected Work / System Inventory** section of the Sanskar Yadav portfolio.

The current implementation used the wrong project inventory. **Do not use the existing four-project selection as the source of truth.**

The portfolio should showcase the following four flagship projects:

1. **Guna Civic Intelligence Hub**
2. **Electoral Roll Analyzer**
3. **Gwalior Jan Samasya Portal**
4. **Raghogarh Jan Sewa Portal**

This file is a content-direction document, not a UI implementation file.

---

# 1. SELECTED PROJECTS

## PROJECT 01 — Guna Civic Intelligence Hub

### Display name
**Guna Civic Intelligence Hub**

### Position in inventory
**SYS // 01**

### Primary category
**CIVIC INTELLIGENCE**

### Supporting technology/category
Use the actual verified technology/data stack from the project's existing source material.

### Status
Use the project's actual current status from the available project data. Do not invent `LIVE`, `INTERNAL`, or another status.

### Short description
Present this as a civic/public-systems project that demonstrates the ability to turn local public information and civic issues into a structured intelligence system.

### Content direction
The description should communicate:

- the real-world civic problem;
- what system was built;
- how information/data was structured;
- what practical decision-making or operational value it provides.

### Important
Do not fabricate metrics, users, deployment claims, technologies, or outcomes. If the existing project data does not contain a fact, omit it rather than guessing.

---

# 2. PROJECT 02 — Electoral Roll Analyzer

### Display name
**Electoral Roll Analyzer**

### Position in inventory
**SYS // 02**

### Primary category
**DATA / ELECTORAL ANALYSIS**

### Supporting technology/category
**Python / OCR / Data Processing** only where supported by the existing project material.

### Status
Use the actual project status from the existing project data. Do not automatically label it `INTERNAL`.

### Short description
A data-processing and electoral-roll analysis system focused on extracting, cleaning, structuring and analysing voter-list information from difficult source documents.

### Content direction
Where supported by the existing project material, the description should communicate:

- extraction of voter data from PDF/document sources;
- OCR or document-processing workflow;
- cleaning and structuring of records;
- duplicate detection / record comparison where actually implemented;
- the broader analytical purpose of turning unstructured electoral documents into usable structured data.

### Important
Do not claim accuracy percentages, scale, number of records, production deployment, or specific algorithms unless those facts exist in the project source material.

---

# 3. PROJECT 03 — Gwalior Jan Samasya Portal

### Display name
**Gwalior Jan Samasya Portal**

### Position in inventory
**SYS // 03**

### Primary category
**CIVIC TECH**

### Supporting technology/category
Use the actual verified implementation stack from the existing project data.

### Status
This is a major real-world civic/public-facing project. Use its actual current status and available live URL if already present in the project data.

### Short description
A digital public-grievance platform designed to collect and structure citizen-reported issues across Gwalior, helping convert local complaints into organised information for follow-up and decision-making.

### Content direction
Where supported by the existing project material, highlight:

- citizen grievance / public issue collection;
- ward/locality-level issue reporting;
- structured complaint data;
- practical civic follow-up;
- the connection between citizens, public issues and data-driven organisational response.

### Important
Do not invent numbers of wards, complaints, users, response rates, launch dates, technologies, or impact statistics.

---

# 4. PROJECT 04 — Raghogarh Jan Sewa Portal

### Display name
**Raghogarh Jan Sewa Portal**

### Position in inventory
**SYS // 04**

### Primary category
**CIVIC / PUBLIC SERVICE SYSTEM**

### Supporting technology/category
Use only the verified technology from the existing project material.

### Status
Use the actual current status from the available project data. Do not assume `LIVE` or `INTERNAL`.

### Short description
A public-service-oriented digital system focused on making local citizen/public-service interaction more structured, accessible and operationally useful.

### Content direction
The final description should explain the actual problem solved by the portal, what citizens/public users can do through it, and how the system improves organisation or access to public-service information.

### Important
Do not invent services, departments, users, deployment status, metrics, or technical implementation details.

---

# 5. ORDER AND NARRATIVE

The four projects should appear in this order:

**01 — Guna Civic Intelligence Hub**  
**02 — Electoral Roll Analyzer**  
**03 — Gwalior Jan Samasya Portal**  
**04 — Raghogarh Jan Sewa Portal**

The ordering should create a narrative:

**Civic Intelligence → Data Analysis → Civic Technology → Public Service**

The section should therefore feel like evidence of a broader capability rather than a random collection of projects.

---

# 6. HOW THEY SHOULD BE SHOWN

## Section identity

The section should remain conceptually:

**[ 01 ] // SELECTED WORK**

**SYSTEM INVENTORY**

Supporting line should explain that these are real systems/projects built around civic technology, data, public systems and operational problem-solving.

Avoid generic portfolio language such as:

- "My latest projects"
- "Things I've built"
- "Check out my work"
- "Featured projects"

The tone should remain editorial, technical and evidence-oriented.

---

## Project presentation

Each project should be presented as a **system record**, not a conventional SaaS/developer portfolio card.

Each record should contain:

- System number
- Project name
- Category / discipline
- One-line system descriptor
- Concise evidence-based description
- Verified technology/category tags
- Actual project status
- External link only if a verified link exists
- Small interaction indicator / arrow where appropriate

Do NOT add:

- fake statistics;
- star ratings;
- testimonials;
- generic "View Case Study" buttons when no case study exists;
- invented GitHub links;
- invented live URLs;
- decorative mockup screenshots that do not represent the actual project.

---

# 7. CONTENT LENGTH

### Project title
Short and prominent.

### System descriptor
Approximately **3–7 words**.

Examples of the style:

- CIVIC INTELLIGENCE PLATFORM
- ELECTORAL DATA ANALYSIS SYSTEM
- DIGITAL PUBLIC GRIEVANCE PLATFORM
- PUBLIC SERVICE INFORMATION SYSTEM

These are examples of tone/format. The final wording must accurately reflect the actual project.

### Description
Keep the inventory description to approximately **2–3 concise sentences**.

The description should answer:

1. What problem did it address?
2. What did Sanskar build/do?
3. What practical value did it create?

Do not turn the inventory into a full case study.

---

# 8. DATA SOURCE RULE

The existing `src/data/projects.ts` must be corrected to reflect this document.

The implementation should remain **data-driven**.

Do not hardcode project-specific content inside `ProjectCard.tsx`.

The architecture should remain:

`projects.ts` → `Projects.tsx` → `ProjectCard.tsx`

If additional project facts are required, inspect the existing reference material/project files before writing them.

---

# 9. SOURCE-OF-TRUTH RULE

This document establishes the **selected-project list and presentation direction**.

However, factual project details must come from the existing project/reference material.

If there is a conflict:

1. This document controls **which four projects are selected and their order**.
2. Existing verified project/reference material controls **factual details**.
3. Never invent missing information merely to fill a card.

---

# 10. IMPORTANT DESIGN DIRECTION

The purpose of Selected Work is to prove the Hero statement:

> BUILDING SYSTEMS FOR REAL-WORLD PROBLEMS

Therefore the projects should feel like **evidence of systems thinking**, not a list of coding exercises.

The visual language should remain consistent with:

**Editorial × System Interface × Intelligence**

Keep:

- strong typography;
- precise metadata;
- restrained borders;
- negative space;
- asymmetric editorial rhythm;
- subtle interaction;
- purposeful motion.

Avoid turning this section into a standard 4-card developer portfolio.

---

# 11. IMPLEMENTATION INSTRUCTION

When implementing this specification:

1. Read this file first.
2. Inspect the existing `src/data/projects.ts`.
3. Inspect the reference material for factual project details.
4. Replace the currently incorrect project inventory with the four projects specified here.
5. Preserve the existing approved visual language and component architecture.
6. Do not redesign the Hero.
7. Do not introduce new dependencies.
8. Run:
   - `npx tsc -b`
   - `npm run build`
   - `npm run lint`
9. Stop after the Selected Work correction is complete and report exactly what was changed.

**Do not proceed to the next homepage section without explicit approval.**
