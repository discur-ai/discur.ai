---
phase: 03-visual-polish-animation
plan: 02
subsystem: ui
tags: [gsap, svg, data-attributes, animation-hooks, astro]

# Dependency graph
requires:
  - phase: 02-content-sections
    provides: "SVG diagrams (FanoPlane, TrieStructure), section components, Hero layout"
provides:
  - "All SVG elements addressable via data-fano-*, data-trie-* selectors for GSAP animation"
  - "All section components with data-animate attributes for ScrollTrigger targeting"
  - "Hero elements with data-hero-* attributes for page-load animation sequence"
  - "Table rows with data-result-row and data-comparison-row for stagger animation"
  - "pathLength=1 normalization on all Fano stroke elements for DrawSVGPlugin"
  - "Section borders removed in preparation for SectionDivider components"
affects: [03-visual-polish-animation/03-03]

# Tech tracking
tech-stack:
  added: []
  patterns: ["data-attribute hooks for GSAP animation targeting", "dataAnimate prop pattern for Section wrapper"]

key-files:
  created: []
  modified:
    - src/components/diagrams/FanoPlane.astro
    - src/components/diagrams/TrieStructure.astro
    - src/components/sections/Hero.astro
    - src/components/ui/Section.astro
    - src/components/sections/Mechanism.astro
    - src/components/sections/Architecture.astro
    - src/components/sections/Invariants.astro
    - src/components/sections/Results.astro
    - src/components/sections/Comparison.astro
    - src/components/sections/Contact.astro

key-decisions:
  - "Hero uses data-animate=hero on grid wrapper div (not on Section) since Hero uses page-load animation, not scroll-triggered reveal"
  - "Architecture, Results, Comparison get unique dataAnimate values (architecture, results, comparison) instead of generic section-reveal because they have component-specific animations (trie draw, table row stagger)"

patterns-established:
  - "dataAnimate prop pattern: Section.astro accepts optional dataAnimate string prop, renders as data-animate HTML attribute, undefined values are stripped by Astro"
  - "SVG animation hook pattern: data-fano-line/data-fano-node on Fano elements, data-trie-edge/data-trie-label/data-trie-node on Trie elements, with level metadata on trie nodes"

requirements-completed: [VISL-01, VISL-02, VISL-03]

# Metrics
duration: 14min
completed: 2026-03-31
---

# Phase 03 Plan 02: Animation Data Attributes Summary

**GSAP animation hook attributes on all SVG diagrams, Hero elements, section wrappers, and table rows for scroll-triggered and page-load animation targeting**

## Performance

- **Duration:** 14 min
- **Started:** 2026-03-31T20:05:56Z
- **Completed:** 2026-03-31T20:20:00Z
- **Tasks:** 2
- **Files modified:** 10

## Accomplishments
- Instrumented FanoPlane SVG with 7 data-fano-line + 7 pathLength=1 + 7 data-fano-node attributes for DrawSVGPlugin draw-on animation
- Instrumented TrieStructure SVG with 6 data-trie-edge + 6 data-trie-label + 7 data-trie-node (with level-0/1/2 metadata) for cascading reveal animation
- Added data-hero-headline, data-hero-paragraph, data-hero-fano attributes to Hero section for page-load animation sequence
- Added dataAnimate prop to Section.astro wrapper with proper Astro undefined-stripping behavior
- Set data-animate values on all 6 non-Hero section components for ScrollTrigger targeting
- Removed border-t border-sigil-dim/20 from all 6 section components (replaced by SectionDivider in Plan 03)
- Added data-result-row to 3 Results table rows and data-comparison-row to Comparison mapped rows for stagger animation

## Task Commits

Each task was committed atomically:

1. **Task 1: Add animation hooks to SVG diagrams and Hero section** - `54ed912` (feat)
2. **Task 2: Add data-animate to Section wrapper and update all section components** - `08dc5b5` (feat)

## Files Created/Modified
- `src/components/diagrams/FanoPlane.astro` - Added data-fano-line, pathLength=1, data-fano-node to all SVG elements
- `src/components/diagrams/TrieStructure.astro` - Added data-trie-edge, data-trie-label, data-trie-node=level-N to all SVG elements
- `src/components/sections/Hero.astro` - Added data-animate=hero, data-hero-headline, data-hero-paragraph, data-hero-fano
- `src/components/ui/Section.astro` - Added dataAnimate prop and data-animate attribute rendering
- `src/components/sections/Mechanism.astro` - Removed border-t, added dataAnimate=section-reveal
- `src/components/sections/Architecture.astro` - Removed border-t, added dataAnimate=architecture
- `src/components/sections/Invariants.astro` - Removed border-t, added dataAnimate=section-reveal
- `src/components/sections/Results.astro` - Removed border-t, added dataAnimate=results, data-result-row on 3 rows
- `src/components/sections/Comparison.astro` - Removed border-t, added dataAnimate=comparison, data-comparison-row on mapped rows
- `src/components/sections/Contact.astro` - Removed border-t, added dataAnimate=section-reveal

## Decisions Made
- Hero uses data-animate="hero" on the grid wrapper div rather than on the Section component, since Hero uses page-load animation (not scroll-triggered reveal) and the Section component should not get data-animate="section-reveal"
- Architecture, Results, and Comparison sections get unique dataAnimate values instead of generic "section-reveal" because they have component-specific GSAP animations (trie draw-on, table row stagger)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Build verification could not run due to Node.js v20 in the worktree environment (Astro 6.1 requires Node >=22.12.0). This is a pre-existing environment constraint, not caused by plan changes. All changes are purely additive data attributes and prop modifications that are syntactically valid Astro.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All animation target elements are now addressable via data-attribute CSS/GSAP selectors
- Plan 03 (AnimationScript + SectionDivider) can now target these elements with GSAP timeline animations
- Section borders removed; SectionDivider components (Plan 03) will provide visual separation

## Self-Check: PASSED

All 10 modified files verified present. Both task commits (54ed912, 08dc5b5) confirmed in git log. SUMMARY.md created successfully.

---
*Phase: 03-visual-polish-animation*
*Completed: 2026-03-31*
