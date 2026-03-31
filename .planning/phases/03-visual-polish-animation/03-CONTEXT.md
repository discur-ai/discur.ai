# Phase 3: Visual Polish & Animation - Context

**Gathered:** 2026-03-31
**Status:** Ready for planning

<domain>
## Phase Boundary

Add GSAP-driven scroll animations, animated Fano plane and trie diagrams, two decorative elements (section dividers + constellation background), and ensure full progressive enhancement (page works without JavaScript). This is visual polish, not content changes.

</domain>

<decisions>
## Implementation Decisions

### Scroll Animations
- **D-01:** Sections reveal with fade-up (opacity 0 > 1 + translateY 30px > 0). Quick timing: 0.4-0.6s duration.
- **D-02:** ScrollTrigger start position: top 70% of viewport (standard trigger).
- **D-03:** Equations within sections fade in with 0.2-0.3s delay after their parent section. Draws attention to the math.
- **D-04:** Table rows (results table + comparison table) stagger in with 0.1s delay between rows.
- **D-05:** Hero section animates on page load (not scroll-triggered): headline fades in first, then paragraph, then Fano plane draws on.
- **D-06:** Trie structure diagram also animates: nodes glow in sequence (root > children > grandchildren), ~2s total, matching Fano timing.
- **D-07:** Animations play once. No replay on scroll back. ScrollTrigger with once: true.

### Fano Plane Animation
- **D-08:** Combined draw-on + glow effect. Lines draw themselves first (stroke-dashoffset), then each subalgebra illuminates in sequence.
- **D-09:** Triggers after hero text appears (headline + paragraph visible first, ~0.5s delay, then Fano begins).
- **D-10:** Total duration: 1.5-2s. Lines draw fast, glow sequence follows quickly.
- **D-11:** No replay. Animates once on first page load.

### Trie Structure Animation
- **D-12:** Nodes glow in hierarchical sequence: root first, then children, then grandchildren. ~2s total.
- **D-13:** Triggered by ScrollTrigger when Architecture section enters viewport.

### Decorative Elements (2 maximum per VISL-01)
- **D-14:** Element 1: Section dividers. Triple dot motif (three gold dots in a row, like a typographic ornament) centered between sections.
- **D-15:** Element 2: Constellation background. ~50-80 sparse points connected by thin lines at 3-5% opacity across the page background. Evokes star charts / mathematical graphs. Noticeable if you look but doesn't compete with content.

### Progressive Enhancement
- **D-16:** No-JS fallback: all content visible, all equations rendered, all diagrams static. Zero functionality loss. Just no animations.
- **D-17:** No "enable JavaScript" note. The page just works.
- **D-18:** GSAP loaded via Astro client:idle directive. Content renders first, animations enhance after page idle.

### Claude's Discretion
- Easing curve selection for fade-up animations
- SVG hover interactions on diagrams (subtle glow or none)
- Exact constellation point positions and line connections
- GSAP timeline orchestration details
- Specific ScrollTrigger configuration (scrub, markers, etc.)
- Triple dot divider exact sizing and spacing

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Existing Components (from Phase 1-2)
- `src/components/diagrams/FanoPlane.astro` -- Fano plane SVG with glow filters (needs animation hooks added)
- `src/components/diagrams/TrieStructure.astro` -- Trie SVG with glow filters (needs animation hooks added)
- `src/components/sections/Hero.astro` -- Hero section (needs load animation)
- `src/components/sections/*.astro` -- All 7 section components (need scroll reveal)
- `src/components/ui/Section.astro` -- Section wrapper (may need animation class hooks)
- `src/pages/index.astro` -- Page assembly (GSAP script tag goes here or in layout)
- `src/layouts/BaseLayout.astro` -- Layout shell (GSAP client:idle import)

### Design System
- `src/styles/global.css` -- Design tokens (@theme block with colors, spacing)
- `.planning/phases/02-content-sections/02-UI-SPEC.md` -- Approved UI design contract

### Project Context
- `.planning/PROJECT.md` -- Project vision and constraints
- `.planning/REQUIREMENTS.md` -- VISL-01 through VISL-05 requirements

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `FanoPlane.astro`: SVG with 7 points (circles), 6 lines + 1 circle, feGaussianBlur glow filter. Lines and points are separate SVG elements that can be targeted by GSAP.
- `TrieStructure.astro`: SVG with 7 nodes (circles at 3 levels), 6 edges, feGaussianBlur glow filter. Nodes can be targeted by level for sequential animation.
- `Section.astro`: Wrapper component. Animation classes can be added here for uniform scroll reveals.
- All section components are Astro components (server-rendered). GSAP will target them client-side after hydration.

### Established Patterns
- Build-time rendering (KaTeX, SVG) -- animations must NOT interfere with build output
- Tailwind v4 @theme tokens for colors
- No client-side JS in any component currently -- GSAP will be the first client-side script

### Integration Points
- GSAP + ScrollTrigger: loaded in BaseLayout.astro or a dedicated animation script component
- SVG animation: GSAP targets SVG path elements for stroke-dashoffset and circle elements for opacity/filter manipulation
- Section reveal: GSAP targets Section.astro wrapper divs by class or data attribute

</code_context>

<specifics>
## Specific Ideas

- The Fano plane draw-on should feel like sacred geometry being inscribed. Lines trace themselves, then the whole figure pulses with light as subalgebras illuminate.
- The constellation background should feel like looking at a night sky through mathematical coordinates. Barely perceptible but adds depth to the void (#0A0A0F) background.
- Triple dot dividers are a classical typographic ornament (like an asterism). Gold dots at ~4px diameter, ~12px apart, centered.
- The hero entrance sequence: headline appears (0.3s fade up) > paragraph appears (0.3s fade up, 0.2s delay) > Fano plane draws on (1.5-2s, 0.5s delay after text). Total hero sequence: ~2.5s.

</specifics>

<deferred>
## Deferred Ideas

None -- discussion stayed within phase scope

</deferred>

---

*Phase: 03-visual-polish-animation*
*Context gathered: 2026-03-31*
