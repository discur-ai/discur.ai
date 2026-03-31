# Roadmap: Discur.ai Landing Page

## Overview

Build a single-page static site for discur.ai that explains the octonionic trie architecture to a technical audience. The site moves from build infrastructure (Astro + KaTeX + Tailwind) through content authoring (all sections with equations, diagrams, and comparison data) to visual polish (esoteric aesthetic, scroll animations) and finally to production deployment with performance verification. Every phase delivers something coherent and verifiable on its own.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - Static site scaffolding with build-time math rendering, dark design system, and responsive equation containers
- [ ] **Phase 2: Content Sections** - All page sections authored with equations, diagrams, results, and comparison data
- [ ] **Phase 3: Visual Polish & Animation** - Esoteric aesthetic refinement, scroll-triggered reveals, animated Fano plane
- [ ] **Phase 4: Deploy & Verify** - Production deployment to discur.ai with SEO, meta tags, and performance audit

## Phase Details

### Phase 1: Foundation
**Goal**: A working Astro project where equations render at build time into static HTML, the dark color palette avoids halation, fonts load without layout shift, and the responsive layout handles math overflow on mobile
**Depends on**: Nothing (first phase)
**Requirements**: FOUN-01, FOUN-02, FOUN-03, FOUN-04, FOUN-05, FOUN-06
**Success Criteria** (what must be TRUE):
  1. Running `npm run build` produces static HTML with zero client-side JS for content rendering
  2. A LaTeX equation (e.g., the associator formula) renders as static HTML in the build output with no client-side math processing
  3. An equation container on a 375px viewport scrolls horizontally without breaking the page layout
  4. Body text appears as off-white on dark gray (no pure white on pure black anywhere in the palette)
  5. Fonts (display, body, monospace) load with preload hints and the page is usable during font loading
**Plans**: 4 plans

Plans:
- [x] 01-01-PLAN.md -- Astro 6 project scaffolding with Tailwind v4 design tokens, KaTeX CSS, and font config
- [ ] 01-02-PLAN.md -- Layout and structural UI components (BaseLayout, Header, Footer, Section)
- [x] 01-03-PLAN.md -- Math rendering components and equation data (Equation, InlineMath, equations.ts)
- [x] 01-04-PLAN.md -- Demo index page integration and visual verification

**UI hint**: yes

### Phase 2: Content Sections
**Goal**: Every section of the landing page exists with final copy, rendered equations, static SVG diagrams, experimental results, and comparison table -- a complete page that communicates the octonionic trie architecture without any animation or decorative polish
**Depends on**: Phase 1
**Requirements**: CONT-01, CONT-02, CONT-03, CONT-04, CONT-05, CONT-06, CONT-07, CONT-08, CONT-09, CONT-10
**Success Criteria** (what must be TRUE):
  1. The hero section states what Discur builds in one sentence, and a visitor can understand the core concept within 10 seconds of landing
  2. The technology section displays rendered equations (associator, composition error bound, associator norm) and explains the octonionic trie as a self-organizing memory structure
  3. The five mechanisms (routing, novelty detection, content update, consistency verification, structural health) are each presented as consequences of octonionic algebra, not separate engineered components
  4. A Fano plane SVG diagram with labeled points and color-coded subalgebras is visible, and an octonionic trie structure diagram shows nodes, edges, and subalgebra labels
  5. Experimental results (95.2% MNIST, 0% catastrophic forgetting, 97.7% synthetic, 5x novelty contrast) appear with specific numbers, and a comparison table contrasts Oct-Trie against NTM/DNC, SDM, and HTM
**Plans**: 5 plans

Plans:
- [x] 02-01-PLAN.md -- Fix equation constants and create results/comparison data files
- [x] 02-02-PLAN.md -- Hand-coded SVG diagrams (Fano plane sigil and octonionic trie structure)
- [x] 02-03-PLAN.md -- Hero, Mechanism, and Architecture section components with pre-written copy
- [x] 02-04-PLAN.md -- Invariants, Results, Comparison, and Contact section components with pre-written copy
- [x] 02-05-PLAN.md -- Assemble index.astro and update Footer with correct contact info

**UI hint**: yes

### Phase 3: Visual Polish & Animation
**Goal**: The esoteric/occult aesthetic is fully realized through mathematical content itself (not decoration), scroll-triggered section reveals add rhythm to the reading experience, and the page degrades gracefully without JavaScript
**Depends on**: Phase 2
**Requirements**: VISL-01, VISL-02, VISL-03, VISL-04, VISL-05
**Success Criteria** (what must be TRUE):
  1. The page conveys an esoteric/occult aesthetic through its mathematical content, typography, and color palette -- with no more than 2 decorative non-mathematical elements
  2. Sections reveal on scroll via GSAP-driven animations that add visual rhythm without delaying content access
  3. The Fano plane diagram animates on scroll (draw-on effect or subalgebra highlighting sequence)
  4. The page renders all content and is fully navigable with JavaScript disabled (progressive enhancement)
**Plans**: 3 plans

Plans:
- [ ] 03-01-PLAN.md -- Progressive enhancement foundation and decorative components (SectionDivider, ConstellationBackground, .js-animate CSS)
- [ ] 03-02-PLAN.md -- Animation data hooks on SVG diagrams and all section components
- [ ] 03-03-PLAN.md -- GSAP installation, AnimationScript orchestration, and page assembly with decorative elements

**UI hint**: yes

### Phase 4: Deploy & Verify
**Goal**: The site is live at discur.ai with proper meta tags for social sharing and a Lighthouse performance score that confirms the build-time rendering strategy pays off
**Depends on**: Phase 3
**Requirements**: DEPL-01, DEPL-02, DEPL-03
**Success Criteria** (what must be TRUE):
  1. The site is accessible at discur.ai and serves the landing page over HTTPS
  2. Sharing the URL on social media (Twitter/LinkedIn) shows a title, description, and OG image preview
  3. Lighthouse performance score is 90 or above on mobile

**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/4 | Planning complete | - |
| 2. Content Sections | 0/5 | Planning complete | - |
| 3. Visual Polish & Animation | 0/3 | Planning complete | - |
| 4. Deploy & Verify | 0/0 | Not started | - |
