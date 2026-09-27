# ABOUT_POSITIONING — Portfolio About / Positioning Specification

## PURPOSE

This document is the authoritative content and presentation direction for **Phase 5 — Homepage Architecture, Step 10: About / Positioning**.

The purpose of this section is to answer the question the Hero intentionally leaves open:

> Who is Sanskar Yadav, beyond the projects?

The section should establish a coherent professional identity across:

**Technology × Data × AI × Strategy × Public Systems**

It must feel like a continuation of the portfolio's **Editorial × System Interface × Intelligence** language, not a conventional "About Me" biography.

---

# 1. CORE POSITIONING

## Primary identity

**Sanskar Yadav — Technology, Data, AI and Strategy.**

This is the central identity established in the Hero and should remain consistent.

## Professional direction

The portfolio should communicate Sanskar as a multidisciplinary practitioner working at the intersection of:

- Technology
- Data
- Artificial Intelligence
- Digital strategy
- Public systems
- Civic technology
- Research and analysis
- Communication and organisational problem-solving

The emphasis should be on the ability to connect these disciplines to solve real-world problems.

---

# 2. WHAT THIS SECTION MUST COMMUNICATE

The section should establish four ideas.

### A. Systems thinker

Sanskar does not approach technology as an isolated coding exercise.

He works from the problem backwards:

**problem → research → structure → data → technology → operational system**

### B. Cross-disciplinary practitioner

His background combines economics/research thinking with technology, data, AI and strategy.

The section should make this combination feel intentional rather than scattered.

### C. Real-world orientation

The portfolio should communicate that the work is connected to actual civic, organisational, research and public-system problems.

This should connect directly to the Hero statement:

> BUILDING SYSTEMS FOR REAL-WORLD PROBLEMS

### D. Technology as a means, not the identity by itself

Do not position Sanskar simply as:

- "developer"
- "software engineer"
- "AI engineer"
- "data scientist"

unless a specific context requires one of those labels.

The stronger positioning is the intersection of technology, data, AI and strategy applied to real-world systems.

---

# 3. RECOMMENDED SECTION IDENTITY

The section should NOT be titled simply:

**ABOUT ME**

Avoid generic portfolio language.

Preferred editorial/system treatment:

**[ 02 ] // POSITIONING**

### Main heading

A strong direction is:

**TECHNOLOGY, DATA, AI AND STRATEGY**

or a similarly concise heading that reinforces the established identity.

The final wording may be refined during implementation, but it must preserve the approved positioning.

---

# 4. NARRATIVE

The section should follow this conceptual sequence:

### 01 — Background

A concise statement establishing the combination of economics/research thinking and technology-oriented practice.

### 02 — Working philosophy

Explain that the work begins with understanding the problem, structuring information and identifying the right system rather than choosing technology first.

### 03 — Capability intersection

Show the intersection of:

**DATA**
**AI**
**TECHNOLOGY**
**STRATEGY**
**PUBLIC SYSTEMS**

### 04 — Evidence

Connect the positioning back to the selected projects without repeating the full project descriptions.

The reader should understand:

> "This person is not collecting technologies. He uses technology, data and AI to build useful systems around real problems."

---

# 5. SUGGESTED CORE COPY DIRECTION

Use the following as the conceptual basis, not as a requirement to reproduce every sentence verbatim:

> I work at the intersection of technology, data, AI and strategy, with a focus on turning complex real-world problems into structured systems.

Then establish the multidisciplinary background:

> My work combines research and analytical thinking with technology, data workflows, AI-assisted systems and digital strategy.

Then establish the working philosophy:

> I start with the problem, understand the information and constraints around it, and then design the simplest useful system that can move the work forward.

The final copy should remain concise and evidence-oriented.

Do not turn this into a long personal biography.

---

# 6. ECONOMICS BACKGROUND

The Economics background should appear because it contributes to the positioning, but it should NOT dominate the section.

Use it as evidence of analytical/research training.

The intended relationship is:

**Economics / Research → analytical thinking → data → systems → technology / AI → strategy**

Do not present the Economics degree as the primary identity of the portfolio.

Do not use academic achievement language unless it is relevant to the professional positioning.

---

# 7. POLITICAL / ORGANISATIONAL WORK

The portfolio should acknowledge experience in digital strategy, communication and organisational/public-system work where it strengthens the positioning.

However:

- Do not turn the About section into a political profile.
- Do not make political affiliation the primary identity.
- Do not use campaign-style language.
- Do not make the portfolio visually resemble a political website.
- Do not introduce political branding into this section unless explicitly required by the project.

The framing should remain professional:

**digital strategy + communication + organisational systems + public-facing technology**

---

# 8. CAPABILITY MATRIX

A visual capability matrix is encouraged instead of a conventional skills list.

Suggested groups:

### DATA
- Data analysis
- Data structuring
- Research workflows
- Information extraction

### AI
- AI-assisted workflows
- Generative AI
- AI-enabled research
- Operational automation

### TECHNOLOGY
- Web systems
- Digital platforms
- Automation
- Data-driven interfaces

### STRATEGY
- Digital strategy
- Communication systems
- Research synthesis
- Organisational problem-solving

### PUBLIC SYSTEMS
- Civic technology
- Public grievance systems
- Electoral/data workflows
- Public information systems

Only display capabilities supported by the existing project/skills data.

Do not invent expertise simply because it sounds appropriate.

---

# 9. VISUAL STRUCTURE

The section should continue the visual language established by the Hero and Selected Work.

Preferred structure:

- Large editorial heading
- Asymmetric two-column layout
- One strong positioning statement
- Supporting explanatory copy
- Technical/capability metadata
- Thin rules and grid alignment
- Generous negative space
- Small system labels / indices
- Minimal accent colour

A possible conceptual layout:

```text
[ 02 ] // POSITIONING

TECHNOLOGY,
DATA, AI
AND STRATEGY

        I work at the intersection...
        [short positioning statement]

        ─────────────────────

        DATA          AI
        TECHNOLOGY    STRATEGY
        PUBLIC SYSTEMS

        [small supporting metadata]
```

This is a structural direction, not a mandatory pixel-level design.

---

# 10. PORTRAIT / PERSONAL IMAGE

Do NOT automatically add a portrait simply because this is an About section.

The current portfolio identity is intentionally system/editorial rather than personality-card driven.

If a portrait is considered, it must have a clear compositional reason and should not turn the section into a conventional personal-brand hero.

Before introducing a portrait:

1. Check whether an appropriate approved image exists in the project/reference assets.
2. Do not use stock imagery.
3. Do not generate an AI portrait.
4. Do not invent an image asset.
5. If no suitable image exists, keep the section typographic/system-oriented.

**Default decision: no portrait unless explicitly justified.**

---

# 11. MOTION

Use the already-approved motion language.

Possible interactions:

- Section heading reveal
- Short metadata scramble
- Capability labels appearing sequentially
- Subtle border-state transitions
- Small system indicators activating on interaction

Do NOT introduce:

- perpetual animation
- large parallax
- 3D
- particle systems
- animated background distractions
- excessive text scrambling
- large cursor effects

Motion should reinforce the idea of an intelligent system.

---

# 12. ACCESSIBILITY

Maintain the existing accessibility rules:

- Respect `prefers-reduced-motion`.
- All interactive elements must be keyboard accessible.
- Never communicate important information through animation alone.
- Maintain WCAG AA contrast.
- Use semantic headings and sections.
- Use native interactive elements where possible.

---

# 13. RESPONSIVE BEHAVIOUR

### Desktop

Use asymmetric editorial composition with meaningful negative space.

### Tablet

Reduce the asymmetry while preserving hierarchy.

### Mobile

Stack content naturally:

1. section identifier
2. main positioning statement
3. explanatory copy
4. capability matrix

Do not allow decorative system graphics to compromise readability.

---

# 14. DATA / ARCHITECTURE

Keep content separate from presentation.

If the existing architecture already has a personal/skills data layer, reuse it.

Preferred flow:

`personal.ts / skills.ts → About.tsx → reusable UI components`

Do not duplicate existing personal or skill content unnecessarily.

Do not create a giant monolithic About component.

---

# 15. SOURCE-OF-TRUTH RULE

This document controls:

- the purpose of the section;
- positioning;
- narrative;
- tone;
- information hierarchy;
- visual direction.

Existing project/reference data controls factual details.

If a fact is not supported by the existing data/reference material:

**do not invent it.**

If existing data conflicts with this document, this document controls the intended positioning while the source material controls factual accuracy.

---

# 16. THINGS TO AVOID

Do NOT create:

- a generic "About Me" paragraph;
- a long life story;
- a conventional resume timeline;
- a giant skill-cloud;
- percentage-based skill bars;
- "5+ years experience" style claims unless verified;
- fake client logos;
- testimonials;
- generic developer buzzwords;
- AI-generated personal imagery;
- political campaign aesthetics;
- unnecessary decorative graphics;
- a second Hero section.

The section should feel like **professional positioning**, not a biography.

---

# 17. IMPLEMENTATION RULE

Before implementation:

1. Read this file completely.
2. Inspect:
   - `src/data/personal.ts`
   - `src/data/skills.ts`
   - `src/lib/types.ts`
   - `reference/old-site/`
   - `CLAUDE.md`
   - existing `Hero.tsx`
   - existing `Projects.tsx`
3. Determine which factual content is already available.
4. Do not invent missing facts.
5. Propose the exact section architecture before coding.
6. Implement only after the architecture is internally consistent with the existing homepage.

During implementation:

- Preserve Hero and Projects exactly as approved.
- Do not redesign previous sections.
- Do not introduce unnecessary dependencies.
- Reuse existing motion and typography tokens.
- Keep content data-driven.

After implementation:

Run:

`npx tsc -b`

`npm run build`

`npm run lint`

Then provide:

- files created;
- files modified;
- files deleted;
- verification results;
- any factual/content decisions made.

**STOP after Step 10. Do not proceed to the next homepage section without explicit approval.**
