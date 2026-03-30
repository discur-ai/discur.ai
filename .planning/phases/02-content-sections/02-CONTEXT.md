# Phase 2: Content Sections - Context

**Gathered:** 2026-03-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Every section of the landing page exists with final copy, rendered equations, static SVG diagrams (Fano plane + octonionic trie), experimental results, and comparison table. A complete page that communicates the octonionic trie architecture without any animation or decorative polish. This is content, not design.

</domain>

<decisions>
## Implementation Decisions

### Section Flow & Narrative
- **D-01:** Lead with result, not problem. The page opens with what the trie achieves, then explains how.
- **D-02:** Section order: Hero (identity + brief paragraph) > What It Does (5 mechanisms) > How It Works (associator + Fano plane + trie diagram) > Structural Invariants (5 invariants with equations) > Results (summary table) > Comparison (vs NTM/DNC, SDM, HTM) > Paper link + Contact
- **D-03:** Hero framing: architecture-first. "A self-organizing memory that replaces gradient descent with octonionic algebra." (or similar). Brief 2-3 sentence paragraph below, no equation in hero.
- **D-04:** Fano plane SVG in the hero, side by side with headline text (text left, Fano right)
- **D-05:** Five mechanisms section: each mechanism gets a short paragraph (3-4 sentences) explaining what it does and why octonionic algebra provides it
- **D-06:** How It Works section: three-beat structure. (1) Intuition: what problem does routing in a trie solve? (2) Formal definition: the associator [a,b,c] = (ab)c - a(bc). (3) Computational interpretation: compatible/incompatible/novel.
- **D-07:** Octonionic trie structure diagram: full-width hero diagram in the architecture section. Stylized to match the dark/gold palette, nodes as glowing orbs with SVG filter effects.
- **D-08:** Structural invariants: dedicated section showing all 5 (composition error, compression efficiency, cleanliness, prediction consistency, associator health) with their equations
- **D-09:** Equations distributed where relevant throughout sections, not collected in one place
- **D-10:** Comparison table: simplified, 3 rows (Training method, Routing mechanism, Consistency check) across 4 columns (NTM/DNC, SDM, HTM, Oct-Trie). Oct-Trie column highlighted with gold accent.
- **D-11:** Paper link: external link to GitHub under discur-ai organization (not PDF download)
- **D-12:** Contact section: research@discur.ai email + github.com/discur-ai link
- **D-13:** No companion paper mention. Focus on oct-trie paper only.
- **D-14:** No author name on page. Author is in the paper.
- **D-15:** No epistemic honesty notes on landing page. Paper has them.

### Copy Voice & Depth
- **D-16:** Direct technical voice. Active voice, no hedging, no "we." Anthropic research blog style. "The octonionic trie organizes..." not "We propose..."
- **D-17:** HARD RULES (anti-slop checklist):
  - No "this isn't X, it's Y" constructions
  - No staccato fragment lists for dramatic effect
  - No unearned superlatives ("revolutionary", "groundbreaking", "paradigm-shifting")
  - No hedge phrases ("it's worth noting", "interestingly", "importantly")
  - No em dashes. Zero on the entire page. Use commas, periods, or parentheses.
- **D-18:** MUST research AI slop patterns heavily before writing any copy. User-provided reference URLs in canonical refs below. Do additional sourcing beyond these.
- **D-19:** Content depth: as much as needed per section. No arbitrary word count limit. Quality over brevity.
- **D-20:** Audience: technical generalists (engineers, scientists), layered so ML researchers are rewarded by the equations and notation
- **D-21:** Brief primer on octonions: what they are, why non-associativity matters, why 8 dimensions. Then the associator.
- **D-22:** Economy of mechanism (5 things from 1 algebra): understated. Let the reader discover it from the section structure. Don't state it explicitly.
- **D-23:** Tone reference: anthropic.com/research pages
- **D-24:** Section headings: minimal, single words. "Mechanism", "Architecture", "Invariants", "Results", "Comparison"
- **D-25:** Post-phase copy audit planned. Build first, review after.
- **D-26:** Colon-led inline lists are fine when appropriate. No restriction.

### Fano Plane SVG
- **D-27:** Esoteric symbol style. Treat as sigil/glyph, the brand mark. Stylized, gold on dark, no labels. Mathematical beauty over readability.
- **D-28:** Gold monochromatic palette: 7 shades from gold to amber to bronze for the subalgebras
- **D-29:** Hero element: large, positioned in the hero section side-by-side with headline text
- **D-30:** Keep the inscribed circle (one of the 7 projective "lines"). Standard recognizable form.
- **D-31:** Hand-coded SVG with exact coordinates. Full control over aesthetic.

### Trie Structure Diagram
- **D-32:** Full-width hero diagram in the architecture section
- **D-33:** Stylized to match dark/gold palette. Nodes as glowing orbs using SVG Gaussian blur filter effects.
- **D-34:** Based on thesis Figure 1 structure (3-level tree) but rendered in the esoteric aesthetic
- **D-35:** Hand-coded SVG

### Results Presentation
- **D-36:** Summary table format for experimental results (not large headline numbers)
- **D-37:** MNIST result with full context: encoder effect (PCA vs CNN), training size effect, 3.0 pp gap to kNN. But present CNN result only as the headline (95.2%).
- **D-38:** Stability-plasticity result (0% catastrophic forgetting, 97.7% accuracy) equal prominence to MNIST
- **D-39:** Skip prerequisite experiments (routing discriminability, novelty signal, composition depth). They're building blocks, not landing page material.
- **D-40:** Comparison table: dark themed HTML, custom-styled with dark background, gold accent on Oct-Trie column, clear row separation

### Claude's Discretion
- Specific copy text for each section (within the voice and anti-slop constraints)
- Exact SVG coordinates for Fano plane and trie diagram
- Section spacing and layout details within the existing Section component
- Responsive behavior of SVG diagrams on mobile
- Exact gold shade selections for the 7 subalgebra colors
- Table HTML/CSS implementation details

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Source Material
- `oct-trie.pdf` -- The thesis document. Source of ALL mathematical content, equations, diagrams, and experimental results. Read thoroughly before writing any copy.

### Anti-Slop Research (MANDATORY before writing copy)
- `https://www.ignorance.ai/p/the-field-guide-to-ai-slop` -- Field guide to AI slop patterns
- `https://robotsatemyhomework.substack.com/p/ai-writing-patterns` -- AI writing patterns catalog
- `https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1` -- AI slop patterns gist
- `https://tropes.fyi/directory` -- AI tropes directory
- `https://hastewire.com/blog/uncover-linguistic-patterns-of-ai-writing-key-tells` -- Linguistic tells of AI writing
- `https://www.louisbouchard.ai/ai-editing/` -- AI editing patterns
- Researcher MUST do additional sourcing beyond these URLs

### Tone Reference
- `https://www.anthropic.com/research` -- Gold standard for technical writing tone (research blog pages)

### Project Context
- `.planning/PROJECT.md` -- Project vision, core value, constraints
- `.planning/REQUIREMENTS.md` -- CONT-01 through CONT-10 requirements
- `.planning/phases/01-foundation/01-CONTEXT.md` -- Phase 1 decisions (palette, typography, components)

### Existing Components (from Phase 1)
- `src/components/math/Equation.astro` -- Display math renderer (use for all block equations)
- `src/components/math/InlineMath.astro` -- Inline math renderer
- `src/components/ui/Section.astro` -- Reusable section wrapper
- `src/components/Header.astro` -- Fixed wordmark header
- `src/components/Footer.astro` -- Contact + paper link
- `src/layouts/BaseLayout.astro` -- Page shell with fonts
- `src/data/equations.ts` -- 7 thesis equation LaTeX constants
- `src/styles/global.css` -- Design tokens (@theme block)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `Equation.astro`: Renders LaTeX to static HTML via katex.renderToString(). Accepts `latex` and optional `label` props. Has overflow-x: auto, overflow-y: hidden for mobile.
- `InlineMath.astro`: Inline variant with displayMode: false
- `Section.astro`: Consistent max-w-4xl, responsive padding, optional fullWidth prop
- `equations.ts`: All 7 thesis equations as named LaTeX string constants (ASSOCIATOR_DEFINITION, COMPOSITION_ERROR_BOUND, COMPRESSION_EFFICIENCY, SUBALGEBRA_CLEANLINESS, PREDICTION_CONSISTENCY, ASSOCIATOR_HEALTH, ASSOCIATOR_NORM_DISTRIBUTION)

### Established Patterns
- Build-time KaTeX rendering (server-side only, no client JS)
- Tailwind v4 with @theme design tokens (--color-void, --color-chalk, --color-sigil, --color-arcanum)
- Astro component composition: Section wraps content, BaseLayout wraps pages

### Integration Points
- `src/pages/index.astro` -- Currently a demo page. Will be replaced with the full content page.
- New SVG components go in `src/components/diagrams/` (new directory)
- New data files go in `src/data/` (results.ts, comparisons.ts)

</code_context>

<specifics>
## Specific Ideas

- The Fano plane as sigil/glyph is the visual identity of Discur. It should feel like discovering an ancient mathematical symbol, not reading a textbook diagram.
- The trie diagram nodes should glow like points of light in darkness. SVG Gaussian blur filters on circles against the #0A0A0F background.
- Copy should read like Anthropic's research pages: clean, precise, no personality. State what the thing does. Provide the specific evidence. Stop.
- The economy of mechanism argument (5 from 1) should be SHOWN through the section structure, not STATED explicitly. The reader who gets it will see the pattern. The reader who doesn't will still understand each mechanism.
- Paper lives on GitHub: github.com/discur-ai (exact repo URL TBD, use placeholder)
- Contact: research@discur.ai
- Post-phase: do a copy quality audit against the anti-slop checklist before moving to Phase 3

</specifics>

<deferred>
## Deferred Ideas

None -- discussion stayed within phase scope

</deferred>

---

*Phase: 02-content-sections*
*Context gathered: 2026-03-30*
