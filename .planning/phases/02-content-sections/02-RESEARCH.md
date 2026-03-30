# Phase 2: Content Sections - Research

**Researched:** 2026-03-30
**Domain:** Technical copy writing, SVG diagram authoring, anti-slop patterns, mathematical content presentation
**Confidence:** HIGH

## Summary

Phase 2 transforms the Phase 1 scaffold into a complete landing page with final copy, rendered equations, static SVG diagrams (Fano plane and octonionic trie), experimental results, and a comparison table. The primary risk is copy quality: every paragraph will start as an LLM draft, and the target audience (ML researchers, systems engineers) can detect AI-generated text instantly. The anti-slop research below synthesizes 6 user-provided URLs plus additional sources into a comprehensive checklist. A second critical finding is that 5 of 7 equation constants in `src/data/equations.ts` are incorrect relative to the thesis and must be rewritten before content sections use them.

The SVG diagrams (Fano plane as brand sigil, octonionic trie as architecture diagram) are hand-coded with exact coordinates, using SVG filter primitives (`feGaussianBlur`, `feColorMatrix`, `feMerge`) for glow effects on the dark background. No libraries needed; the structures are small enough (7 points/7 lines, ~10 nodes) to author directly.

**Primary recommendation:** Fix the equation constants first, then build content sections top-to-bottom matching the decided section order, applying the anti-slop checklist to every paragraph before committing.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions

**Section Flow & Narrative:**
- D-01: Lead with result, not problem. Page opens with what the trie achieves, then explains how.
- D-02: Section order: Hero (identity + brief paragraph) > What It Does (5 mechanisms) > How It Works (associator + Fano plane + trie diagram) > Structural Invariants (5 invariants with equations) > Results (summary table) > Comparison (vs NTM/DNC, SDM, HTM) > Paper link + Contact
- D-03: Hero framing: architecture-first. "A self-organizing memory that replaces gradient descent with octonionic algebra." Brief 2-3 sentence paragraph below, no equation in hero.
- D-04: Fano plane SVG in the hero, side by side with headline text (text left, Fano right)
- D-05: Five mechanisms section: each mechanism gets a short paragraph (3-4 sentences)
- D-06: How It Works section: three-beat structure. (1) Intuition (2) Formal definition: associator (3) Computational interpretation: compatible/incompatible/novel
- D-07: Octonionic trie structure diagram: full-width hero diagram in architecture section
- D-08: Structural invariants: dedicated section with all 5 invariants and equations
- D-09: Equations distributed where relevant, not collected in one place
- D-10: Comparison table: 3 rows, 4 columns. Oct-Trie column highlighted gold.
- D-11: Paper link: external link to GitHub under discur-ai
- D-12: Contact: research@discur.ai + github.com/discur-ai
- D-13: No companion paper mention
- D-14: No author name on page
- D-15: No epistemic honesty notes on landing page

**Copy Voice & Depth:**
- D-16: Direct technical voice. Active voice, no hedging, no "we." Anthropic research blog style.
- D-17: HARD RULES: No "this isn't X, it's Y". No staccato fragments. No unearned superlatives. No hedge phrases. No em dashes (zero on entire page).
- D-18: MUST research AI slop patterns heavily before writing any copy
- D-19: Content depth: as much as needed. No arbitrary word count limit.
- D-20: Audience: technical generalists, layered so ML researchers are rewarded by equations
- D-21: Brief primer on octonions before the associator
- D-22: Economy of mechanism (5 from 1): understated, shown through structure, not stated
- D-23: Tone reference: anthropic.com/research pages
- D-24: Section headings: minimal, single words
- D-25: Post-phase copy audit planned
- D-26: Colon-led inline lists are fine

**Fano Plane SVG:**
- D-27: Esoteric symbol style. Sigil/glyph, brand mark. Gold on dark, no labels.
- D-28: Gold monochromatic palette: 7 shades from gold to amber to bronze
- D-29: Hero element: large, side-by-side with headline
- D-30: Keep the inscribed circle
- D-31: Hand-coded SVG with exact coordinates

**Trie Structure Diagram:**
- D-32: Full-width hero diagram in architecture section
- D-33: Dark/gold palette. Nodes as glowing orbs (SVG Gaussian blur filters)
- D-34: Based on thesis Figure 1 (3-level tree) in esoteric aesthetic
- D-35: Hand-coded SVG

**Results Presentation:**
- D-36: Summary table format
- D-37: MNIST with full context (encoder effect, training size, 3.0 pp gap to kNN). CNN result only as headline (95.2%)
- D-38: Stability-plasticity (0% forgetting, 97.7% accuracy) equal prominence
- D-39: Skip prerequisite experiments
- D-40: Comparison table: dark themed HTML, gold accent on Oct-Trie column

### Claude's Discretion
- Specific copy text for each section (within voice and anti-slop constraints)
- Exact SVG coordinates for Fano plane and trie diagram
- Section spacing and layout details within the existing Section component
- Responsive behavior of SVG diagrams on mobile
- Exact gold shade selections for the 7 subalgebra colors
- Table HTML/CSS implementation details

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.

</user_constraints>

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| CONT-01 | Hero section states what Discur builds in one clear sentence | Anthropic research page patterns (declarative opening statements), anti-slop checklist, D-03 hero framing |
| CONT-02 | Core technology section with rendered equations (associator, composition error, associator norm) | Thesis equations extracted and verified; 5 of 7 equation constants in equations.ts need correction; Equation.astro component ready |
| CONT-03 | Five mechanisms section (routing, novelty, update, verification, health) | Thesis Section 3.3 content extracted; D-05 structure; anti-slop patterns for mechanism descriptions |
| CONT-04 | Fano plane SVG with labeled points and color-coded subalgebras | Fano plane geometry researched (7 lines, 7 points, standard triangle+circle embedding); D-27 through D-31 override labels requirement (no labels per D-27); SVG glow filter techniques documented |
| CONT-05 | Octonionic trie structure diagram | Thesis Figure 1 structure (3-level tree, root + 3 children + 3 grandchildren); SVG filter glow techniques; D-32 through D-35 |
| CONT-06 | Results section with specific numbers (95.2% MNIST, 0% forgetting, 97.7% synthetic, 5x novelty) | Thesis Tables 2-4 and Section 7 fully extracted; D-36 through D-39 presentation constraints |
| CONT-07 | Comparison table (Oct-Trie vs NTM/DNC, SDM, HTM) | Thesis Table 1 extracted with all 8 properties and 4 architectures; D-10 simplifies to 3 rows; D-40 styling |
| CONT-08 | Link to research paper | D-11: external GitHub link under discur-ai; placeholder URL pattern established |
| CONT-09 | Contact section | D-12: research@discur.ai + github.com/discur-ai; Footer.astro already has contact link (needs update from contact@ to research@) |
| CONT-10 | All copy passes anti-slop checklist | Comprehensive checklist compiled from 6+ sources below; D-17 hard rules; D-25 post-phase audit |

</phase_requirements>

## Critical Finding: Equation Constants Are Wrong

**Confidence: HIGH** (verified against thesis equations 1-8)

Five of seven equation constants in `src/data/equations.ts` do not match the thesis. These MUST be corrected before any content section uses them.

| Constant | Current (WRONG) | Thesis (CORRECT) | Eq # |
|----------|-----------------|-------------------|------|
| `COMPOSITION_ERROR` | `\varepsilon(d) = \frac{\|N(ab) - N(a)N(b)\|}{N(a)N(b)}` (norm multiplicativity) | `\varepsilon(d) = \frac{|x^{-1} \cdot (o \cdot x) - o|}{|o|}` (composition recovery error) | 2 |
| `COMPRESSION_EFFICIENCY` | `\rho = \frac{|\mathcal{T}_{\text{pruned}}|}{|\mathcal{T}_{\text{full}}|}` | `\rho = \frac{\text{number of nodes}}{\text{effective prediction capacity}}` | 3 |
| `SUBALGEBRA_CLEANLINESS` | `1 - \frac{\|[e_i, e_j, e_k]\|}{\|e_i\| \|e_j\| \|e_k\|}` | `\text{cleanliness}(n) = \min_{i \neq j} |[c_i, c_j, n]|` | 4 |
| `PREDICTION_CONSISTENCY` | Indicator function averaging | `\delta(n) = \max_{y \in \text{buffer}(n)} |\text{counterfactual}(y, o') - \text{original}(y)|` | 5 |
| `ASSOCIATOR_HEALTH` | Ratio `\|[a,b,c]_n\| / \|[a,b,c]_0\|` | `\alpha(n) = \frac{1}{K} \sum_{k=1}^{K} |[x_k, c_k^*, n]|` (mean associator norm) | 6 |

The `ASSOCIATOR` (Eq 1) is correct. The `ASSOCIATOR_NORM_S7` (Eq 8) has a minor issue: the code uses `\|\varphi(a,b,c)\|^2` (squared) but the thesis defines `E[\phi(a,b,c)] = 147456/(42875\pi)` without the square. Verify whether the thesis intends the squared norm or the norm itself.

**Action:** Rewrite all 7 constants to match thesis equations exactly. This is a prerequisite task before any content section implementation.

## Anti-Slop Comprehensive Checklist

**Confidence: HIGH** (synthesized from 6 user-provided URLs + 4 additional sources)

This checklist is the deliverable for CONT-10. Every paragraph of copy must pass ALL items before committing.

### Tier 1: Hard Rules (from D-17, zero tolerance)

| # | Rule | Test |
|---|------|------|
| H1 | Zero "this isn't X, it's Y" constructions | String search for "isn't...it's", "not...it's", "not just" |
| H2 | Zero staccato fragment lists for dramatic effect | No standalone fragments used for rhythm ("Fast. Efficient. Scalable.") |
| H3 | Zero unearned superlatives | Grep for: groundbreaking, revolutionary, paradigm-shifting, game-changing, unprecedented, pioneering, cutting-edge, trailblazing, next-generation, best-in-class, seamless, unparalleled, visionary, holistic, transformative, innovative, compelling |
| H4 | Zero hedge phrases | Grep for: it's worth noting, interestingly, importantly, arguably, to some extent, in many ways, it is important to note, it bears mentioning, notably |
| H5 | Zero em dashes on entire page | String search for U+2014 (--) and double hyphens used as dashes |

### Tier 2: Structural Patterns (AI detection signals)

| # | Pattern | Detection | Fix |
|---|---------|-----------|-----|
| S1 | Binary contrasts ("Not X, but Y") | Any sentence correcting an assumption the reader never held | State the positive claim directly |
| S2 | Rule of three (compulsive triads) | Three-item lists where the third item adds no information | Use the actual number of items |
| S3 | Uniform paragraph length | All paragraphs within a section are 3-4 sentences | Vary deliberately: some 1-sentence, some 5+ |
| S4 | Uniform sentence length | All sentences 15-25 words | Mix short (under 10 words) with long (30+) |
| S5 | Parallel kickers | Every section ends with same punch-line structure | Vary endings |
| S6 | Fractal summaries | Introduction restated in conclusion, section summaries repeat section content | Each sentence must add new information |
| S7 | Disguised listicles | "The first... The second... The third..." in prose | Use actual paragraph development |
| S8 | Inanimate agency | "The framework reveals" where a person should appear | But NOTE: for this site, the octonionic trie IS the agent. "The trie routes..." is correct. Apply only to non-technical prose. |

### Tier 3: Word-Level Tells

| # | Category | Banned Words/Phrases |
|---|----------|---------------------|
| W1 | Pretentious vocabulary | delve, utilize, leverage (as verb), harness, foster, orchestrate, streamline, robust |
| W2 | Grandiose nouns | tapestry, odyssey, symphony, nexus, pinnacle, paradigm, landscape (as metaphor), journey, trajectory, ecosystem (unless literal) |
| W3 | Hype verbs | unleash, unlock, revolutionize, supercharge, transform, reimagine, redefine, transcend, elevate |
| W4 | Filler transitions | furthermore, moreover, in addition, on the other hand, having said that, that being said |
| W5 | False suspense | here's the kicker, here's the thing, here's where it gets interesting, here's what most people miss |
| W6 | Pedagogical voice | let's break this down, let's unpack this, let's explore, let's dive in |
| W7 | Performative enthusiasm | excited to, thrilled to, something shifted, everything changed |
| W8 | Vague attributions | experts argue, industry reports suggest, observers have cited |
| W9 | Pompous copula | serves as, stands as, marks, represents (replacing simple "is") |
| W10 | Magic adverbs | quietly, deeply, fundamentally, remarkably, arguably, incredibly |
| W11 | Stakes inflation | "the future of", "a new era", "change everything", "nothing will ever" |

### Tier 4: Tone Tests

| # | Test | Pass Criteria |
|---|------|---------------|
| T1 | Anthropic test | Would this paragraph appear on anthropic.com/research? |
| T2 | Specificity test | Could this sentence describe a different AI project without modification? If yes, rewrite. |
| T3 | Information density | Does every sentence contain specific information? Delete pure transition/padding. |
| T4 | Read-aloud test | Does it sound like a person speaking, or a language model performing? |
| T5 | Professor test | Would a mathematics professor take this seriously enough to read the content? |
| T6 | Emotional neutrality | Is the writer's emotional state absent? The reader decides significance. |

### Tier 5: Formatting Tells

| # | Pattern | Rule |
|---|---------|------|
| F1 | Bold-first bullets | Do not start every bullet with a bolded keyword |
| F2 | Unicode decoration | No arrows, smart quotes, or special characters not in standard text |
| F3 | Excessive signposting | No "As mentioned earlier", "Now that we've explored", "In the next section" |
| F4 | Meta-commentary | No sentences about the article/page itself rather than the topic |

## Anthropic Research Page: Copy Style Reference

**Confidence: HIGH** (fetched and analyzed directly)

### Patterns to Emulate

1. **Declarative openings.** Start with a concrete observation or finding. "Over the past year, we've worked with dozens of teams building LLM agents." No warm-up.

2. **Counterintuitive findings early.** Present the surprising result in the first paragraph. The reader stays because the claim is specific and unexpected.

3. **Sentence length variation.** Short declarative statements alternate with longer explanatory sentences. The rhythm holds attention.

4. **Specificity through metrics.** "A prototype withstood over 3,000 hours of red teaming with no universal jailbreak discovered." Numbers are the credibility.

5. **Conditional guidance.** "When to use X" framing matches patterns to problems. Not prescriptive for all cases.

6. **No performative enthusiasm.** Anthropic never writes "we're excited to announce." They write "We introduce X."

### Adaptation for Discur

Per D-16, the site uses no "we" construction. Adapt Anthropic patterns to third-person active voice:

- Anthropic: "We introduce a hierarchical memory structure..."
- Discur: "The octonionic trie organizes memory hierarchically..."
- Anthropic: "We show that language models can be trained..."
- Discur: "The associator detects novel inputs with 5x contrast over baseline."

## Architecture Patterns

### Section Component Composition

Each content section follows this pattern:

```astro
---
import Section from '../components/ui/Section.astro';
import Equation from '../components/math/Equation.astro';
import InlineMath from '../components/math/InlineMath.astro';
import { ASSOCIATOR } from '../data/equations';
---

<Section id="mechanism" class="border-t border-sigil-dim/20">
  <h2 class="font-display text-2xl sm:text-3xl text-sigil mb-8">
    Mechanism
  </h2>
  <p class="text-chalk mb-6">
    Paragraph with <InlineMath latex="[a,b,c]" /> inline math.
  </p>
  <Equation latex={ASSOCIATOR} label="1" ariaLabel="..." />
</Section>
```

### Recommended Project Structure for New Files

```
src/
├── components/
│   ├── diagrams/           # NEW: SVG diagram components
│   │   ├── FanoPlane.astro  # Fano plane sigil/glyph
│   │   └── TrieStructure.astro  # Octonionic trie diagram
│   ├── math/               # EXISTS: Equation, InlineMath
│   ├── ui/                 # EXISTS: Section
│   ├── sections/           # NEW: page section components
│   │   ├── Hero.astro
│   │   ├── Mechanism.astro
│   │   ├── Architecture.astro
│   │   ├── Invariants.astro
│   │   ├── Results.astro
│   │   ├── Comparison.astro
│   │   └── Contact.astro
│   ├── Header.astro        # EXISTS
│   └── Footer.astro        # EXISTS (needs update: contact@ -> research@)
├── data/
│   ├── equations.ts         # EXISTS (needs correction)
│   ├── results.ts           # NEW: experimental results data
│   └── comparisons.ts       # NEW: comparison table data
├── pages/
│   └── index.astro          # EXISTS (replace demo content)
├── layouts/
│   └── BaseLayout.astro     # EXISTS
└── styles/
    ├── global.css           # EXISTS
    └── katex-overrides.css  # EXISTS
```

### Pattern: Data-Driven Content Sections

Separate data from presentation. Results and comparison data live in TypeScript files, imported by section components:

```typescript
// src/data/results.ts
export const MNIST_RESULTS = {
  headline: { accuracy: 95.2, encoder: 'CNN-8D', trainSize: 60000 },
  knnBaseline: 98.2,
  gap: -3.0,
  context: 'Zero gradient descent in the classifier',
};

export const STABILITY_RESULTS = {
  phase1AccuracyBefore: 99.5,
  phase1AccuracyAfter: 99.5,
  phase2Accuracy: 95.3,
  overallAccuracy: 97.7,
  catastrophicForgetting: 0.0,
  trieNodes: 531,
  maxDepth: 15,
};
```

```typescript
// src/data/comparisons.ts
export const COMPARISON_TABLE = {
  columns: ['NTM/DNC', 'SDM', 'HTM', 'Oct-Trie'],
  rows: [
    {
      property: 'Training method',
      values: ['Backpropagation', 'None', 'Hebbian', 'None (algebraic)'],
    },
    {
      property: 'Routing mechanism',
      values: ['Learned attention', 'Hamming distance', 'Spatial pooling', 'Subalgebra decomposition'],
    },
    {
      property: 'Consistency check',
      values: ['None', 'None', 'None', 'Algebraic inversion'],
    },
  ],
};
```

## SVG Diagram Techniques

### Fano Plane Geometry

**Confidence: HIGH** (mathematical structure from thesis Section 9.2 + standard references)

The Fano plane has 7 points and 7 lines. Standard visualization: vertices, edge midpoints, and centroid of an equilateral triangle. The 7 lines are the 3 triangle sides, 3 medians (altitudes through centroid), and 1 inscribed circle through the 3 edge midpoints.

**Labeling convention for octonions** (from thesis and standard references):
The 7 imaginary basis units e1 through e7 are placed at the 7 points. Each line contains 3 points forming a quaternionic subalgebra S_l. The directed triples encode the multiplication table: for a directed triple (e_i, e_j, e_k), we have e_i * e_j = e_k.

**Standard coordinate layout** (equilateral triangle centered at origin, circumradius R):

```
Point positions (for a triangle with circumradius R centered at cx, cy):
  Top vertex:        (cx, cy - R)
  Bottom-left:       (cx - R*sin(60), cy + R*cos(60))
  Bottom-right:      (cx + R*sin(60), cy + R*cos(60))
  Top-left midpoint: midpoint of top and bottom-left
  Top-right midpoint: midpoint of top and bottom-right
  Bottom midpoint:   midpoint of bottom-left and bottom-right
  Centroid:          (cx, cy + R/3) approximately
```

For SVG with viewBox "0 0 400 400" and center at (200, 200):

```
Vertices (circumradius 160):
  P1 = (200, 40)     -- top
  P2 = (61, 280)     -- bottom-left
  P3 = (339, 280)    -- bottom-right

Edge midpoints:
  P4 = (130.5, 160)  -- midpoint P1-P2 (left edge)
  P5 = (269.5, 160)  -- midpoint P1-P3 (right edge)
  P6 = (200, 280)    -- midpoint P2-P3 (bottom edge)

Centroid:
  P7 = (200, 200)    -- center
```

**7 lines:**
1. P1-P2-P4? No. Each line has 3 points from the 7. The standard lines are:
   - Line 1: P1, P4, P2 (side: top to bottom-left, through left midpoint -- wait, that's the edge itself)

Actually for the standard Fano plane with triangle visualization:
- 3 sides: {P1,P5,P3}, {P1,P4,P2}, {P2,P6,P3} -- but these have the midpoints ON the sides
- The correct structure: vertices at triangle corners, edge midpoints at triangle edge midpoints, centroid at center
- Lines: 3 triangle sides (each passes through 2 vertices + 1 midpoint between them), 3 medians (each passes through 1 vertex + centroid + opposite midpoint), 1 circle (passes through 3 midpoints)

Explicit 7 lines:
1. {P1, P4, P2} -- left side
2. {P2, P6, P3} -- bottom side
3. {P3, P5, P1} -- right side
4. {P1, P7, P6} -- median from top
5. {P2, P7, P5} -- median from bottom-left
6. {P3, P7, P4} -- median from bottom-right
7. {P4, P5, P6} -- inscribed circle

**Per D-27:** No labels. Esoteric sigil style. Gold monochromatic. The 7 subalgebras get 7 gold shades.

**Gold shade palette (7 shades):**

```css
--subalgebra-1: #D4AF37;  /* Classic gold */
--subalgebra-2: #C49B30;  /* Warm gold */
--subalgebra-3: #B8892A;  /* Amber gold */
--subalgebra-4: #A87424;  /* Deep amber */
--subalgebra-5: #8B6914;  /* Bronze */
--subalgebra-6: #DAC060;  /* Light gold */
--subalgebra-7: #E8D088;  /* Pale gold */
```

### SVG Glow Filter for Nodes

**Confidence: HIGH** (verified from SVG specification and 9elements tutorial)

```svg
<defs>
  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
    <!-- Take the source alpha, blur it -->
    <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
    <!-- Colorize the blur to gold -->
    <feColorMatrix in="blur" type="matrix" result="coloredBlur"
      values="0.77 0 0 0 0
              0.64 0 0 0 0
              0.35 0 0 0 0
              0    0 0 0.8 0"/>
    <!-- Merge: glow behind, original on top -->
    <feMerge>
      <feMergeNode in="coloredBlur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<!-- Usage: node with glow -->
<circle cx="200" cy="200" r="12" fill="#C4A35A" filter="url(#glow)"/>
```

**Performance note:** Limit filter regions with x/y/width/height attributes. Each filtered element creates a compositing layer. For the Fano plane (7 points) and trie (10 nodes), this is well within budget. Do NOT apply glow to line elements (too many pixels to blur).

### Trie Structure Diagram

Based on thesis Figure 1: 3-level tree with:
- Root node (o_root)
- 3 children (o_1, o_2, o_3) connected by edges labeled S_1, S_3, S_6
- 3 grandchildren (o_11, o_12, o_31) connected by edges labeled S_2, S_4, S_7

SVG approach:
- Nodes as circles with glow filter (same as Fano plane)
- Edges as SVG `<line>` elements in chalk-muted color
- Edge labels as small text elements in sigil color
- Full-width layout: use Section's `fullWidth` prop

### Responsive SVG Strategy

Both SVGs use `viewBox` for intrinsic scaling and `preserveAspectRatio="xMidYMid meet"` so they scale proportionally. Set `width="100%" max-width="Xpx"` on the container.

For mobile (375px):
- Fano plane: reduce to ~280px wide, remains legible (simple geometry)
- Trie diagram: full-width with horizontal scroll via overflow-x container if needed, or stack vertically on very narrow screens

## Thesis Content Extraction

### Five Mechanisms (from thesis Section 1 + 3.3)

| # | Mechanism | Algebra Used | Thesis Section |
|---|-----------|-------------|----------------|
| 1 | **Routing** | Fano plane subalgebra decomposition (7 quaternionic channels) | 3.3.1 |
| 2 | **Novelty detection** | Associator [a,b,c] = (ab)c - a(bc) | 3.3.2 |
| 3 | **Content update** | Norm-preserving octonionic multiplication | 3.3.1 |
| 4 | **Consistency verification** | Algebraic inversion (x^{-1} = x-bar / |x|^2) | 3.3.3 |
| 5 | **Structural health monitoring** | Associator norms, composition error, subalgebra coherence | 4.1-4.5 |

### Five Structural Invariants (from thesis Section 4)

| # | Invariant | Equation (thesis) | What it monitors |
|---|-----------|-------------------|------------------|
| 1 | Composition error bound | epsilon(d) = |x^{-1}(ox) - o| / |o| | Floating-point error accumulation at depth d |
| 2 | Compression efficiency | rho = nodes / effective prediction capacity | Whether subtree complexity is justified |
| 3 | Subalgebra cleanliness | cleanliness(n) = min_{i!=j} |[c_i, c_j, n]| | Whether children occupy genuinely different subalgebras |
| 4 | Prediction consistency | delta(n) = max |counterfactual - original| | Whether updates invalidate prior predictions |
| 5 | Associator health | alpha(n) = (1/K) sum |[x_k, c_k*, n]| | Whether routing structure accommodates incoming data |

### Experimental Results (from thesis Section 7 + 10)

**MNIST Benchmark (Section 10):**
- CNN-8D encoder, 60K training set: **95.2%** accuracy
- kNN baseline on same features: 98.2%
- Gap: -3.0 percentage points
- PCA-8D encoder, 60K training set: 76.5% (trie), 88.8% (kNN)
- Key: zero gradient descent in the classifier; trie self-organizes 60,000 digits

**Stability-Plasticity (Section 7.4):**
- Phase 1 accuracy (before new categories): 99.5% (199/200)
- Phase 1 accuracy (after new categories): 99.5% (199/200) -- unchanged
- Phase 2 accuracy: 95.3% (143/150)
- Overall: **97.7%** (342/350)
- Catastrophic forgetting: **0.0%**
- Trie nodes: 531, max depth: 15

**Novelty Signal (Section 7.2):**
- Within-category associator norm: 0.211
- At category transitions: 1.047
- Spike ratio: **4.97x** (round to 5x for landing page)
- All 4 transitions exceed 99th percentile of within-category norms

### Comparison Table (from thesis Table 1)

Full table has 8 rows. Per D-10, simplify to 3 rows:

| Property | NTM/DNC | SDM | HTM | Oct-Trie |
|----------|---------|-----|-----|----------|
| Training method | Backpropagation | None | Hebbian | None (algebraic) |
| Routing mechanism | Learned attention | Hamming distance | Spatial pooling | Subalgebra decomposition |
| Consistency check | None | None | None | Algebraic inversion |

The simplified table highlights the three most differentiating properties.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Math rendering | Custom equation renderer | KaTeX via `Equation.astro` + `InlineMath.astro` | Already built, tested, handles mobile overflow |
| SVG glow effects | CSS box-shadow on SVG elements | SVG filter primitives (feGaussianBlur + feColorMatrix + feMerge) | CSS shadows don't work reliably on SVG elements; filter primitives are the standard |
| Responsive tables | JavaScript table scrolling | CSS `overflow-x: auto` on table container | Zero JS, handles mobile |
| Color palette | Picking colors ad hoc | Existing @theme design tokens (--color-sigil, --color-void, etc.) | Consistency; already established in Phase 1 |

## Common Pitfalls

### Pitfall 1: Using Wrong Equations
**What goes wrong:** Equations on the landing page don't match the thesis. A researcher checks the paper, finds discrepancies, loses trust in the entire site.
**Why it happens:** The `equations.ts` constants were drafted as approximations during Phase 1 and never verified against the thesis.
**How to avoid:** Fix all 7 constants against thesis equations 1-8 as the first task. Cross-reference every LaTeX string with the corresponding thesis equation number.
**Warning signs:** Any equation constant that doesn't cite a thesis equation number.

### Pitfall 2: AI Slop in Copy
**What goes wrong:** Copy reads as AI-generated. Technical audience detects it instantly. Credibility collapses.
**Why it happens:** Every paragraph starts as an LLM draft. Default LLM patterns (em dashes, triads, binary contrasts, hedge phrases) leak through.
**How to avoid:** Apply the full anti-slop checklist (above) to every paragraph. Run a post-phase audit (D-25). The checklist has 5 tiers covering hard rules, structural patterns, word-level tells, tone tests, and formatting tells.
**Warning signs:** More than zero em dashes. Any sentence transferable to a different AI startup without modification.

### Pitfall 3: Fano Plane Geometry Errors
**What goes wrong:** The SVG misrepresents the combinatorial structure. Mathematicians notice.
**Why it happens:** The Fano plane is a projective structure, not Euclidean. Any 2D embedding creates visual artifacts (apparent line intersections that aren't real intersections).
**How to avoid:** Use the standard triangle-with-circle embedding. Verify all 7 lines pass through exactly their 3 points. Use distinct gold shades per line to disambiguate.
**Warning signs:** Lines appearing to intersect at points that are not one of the 7 labeled points.

### Pitfall 4: Results Without Context
**What goes wrong:** "95.2% MNIST accuracy" reads as a bad result to anyone who knows SOTA is 99.7%.
**Why it happens:** The number is presented without the tradeoff that makes it meaningful.
**How to avoid:** Always pair the result with its context. "95.2% on MNIST with zero gradient descent, within 3.0 pp of k-nearest neighbors" frames it as a tradeoff, not a benchmark race.
**Warning signs:** Any number presented without a comparison or qualifying condition.

### Pitfall 5: SVG Glow Filters Causing Mobile Jank
**What goes wrong:** Gaussian blur filters on too many elements or with large stdDeviation cause rendering lag on mobile GPUs.
**Why it happens:** Each filtered SVG element creates a compositing layer. Large blur radii process more pixels.
**How to avoid:** Apply glow only to node circles (7 in Fano, 10 in trie). Use stdDeviation of 3-5 (not 10+). Set explicit filter region bounds. Do not apply filters to lines or large areas.
**Warning signs:** Lighthouse Performance drops below 90 on mobile.

### Pitfall 6: Footer Contact Email Mismatch
**What goes wrong:** Footer says `contact@discur.ai`, but D-12 says `research@discur.ai`.
**How to avoid:** Update Footer.astro as part of the content phase.

## Code Examples

### SVG Fano Plane Component Structure

```astro
---
// src/components/diagrams/FanoPlane.astro
interface Props {
  class?: string;
  width?: string;
}

const { class: className, width = '100%' } = Astro.props;

// 7 points of the Fano plane (equilateral triangle embedding)
// Vertices
const P1 = { x: 200, y: 50 };   // top
const P2 = { x: 62, y: 290 };   // bottom-left
const P3 = { x: 338, y: 290 };  // bottom-right
// Edge midpoints
const P4 = { x: 131, y: 170 };  // left edge midpoint
const P5 = { x: 269, y: 170 };  // right edge midpoint
const P6 = { x: 200, y: 290 };  // bottom edge midpoint
// Centroid
const P7 = { x: 200, y: 210 };  // center

const points = [P1, P2, P3, P4, P5, P6, P7];
const nodeRadius = 8;

// 7 gold shades for 7 subalgebras/lines
const lineColors = [
  '#D4AF37', '#C49B30', '#B8892A',
  '#A87424', '#DAC060', '#E8D088', '#8B6914',
];
---

<svg
  viewBox="0 0 400 360"
  xmlns="http://www.w3.org/2000/svg"
  class:list={[className]}
  style={`width: ${width}; max-width: 400px;`}
  preserveAspectRatio="xMidYMid meet"
  role="img"
  aria-label="Fano plane diagram showing the seven quaternionic subalgebras of the octonions"
>
  <defs>
    <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
      <feColorMatrix in="blur" type="matrix" result="coloredBlur"
        values="0.77 0 0 0 0
                0.64 0 0 0 0
                0.35 0 0 0 0
                0    0 0 0.6 0"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Lines (drawn first, behind nodes) -->
  <!-- ... 6 straight lines + 1 circle ... -->

  <!-- Inscribed circle through midpoints P4, P5, P6 -->
  <!-- Center and radius computed from midpoint positions -->

  <!-- 7 nodes with glow -->
  {points.map((p) => (
    <circle cx={p.x} cy={p.y} r={nodeRadius} fill="#C4A35A" filter="url(#node-glow)"/>
  ))}
</svg>
```

### Comparison Table Dark Theme Pattern

```astro
<div class="overflow-x-auto rounded-lg border border-sigil-dim/30">
  <table class="w-full text-left text-sm">
    <thead>
      <tr class="border-b border-sigil-dim/30 bg-obsidian">
        <th class="px-4 py-3 font-display text-chalk-muted">Property</th>
        <th class="px-4 py-3 font-display text-chalk-muted">NTM/DNC</th>
        <th class="px-4 py-3 font-display text-chalk-muted">SDM</th>
        <th class="px-4 py-3 font-display text-chalk-muted">HTM</th>
        <th class="px-4 py-3 font-display text-sigil border-l border-sigil-dim/30 bg-sigil/5">Oct-Trie</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-sigil-dim/20">
      <!-- Rows with gold-highlighted Oct-Trie column -->
    </tbody>
  </table>
</div>
```

### Results Summary Table Pattern

```astro
<div class="grid gap-8 sm:grid-cols-2">
  <div class="rounded-lg border border-sigil-dim/30 bg-obsidian p-6">
    <p class="font-display text-sigil text-sm tracking-wider uppercase mb-2">MNIST Classification</p>
    <p class="text-3xl text-glyph font-display">95.2%</p>
    <p class="text-chalk-muted text-sm mt-2">
      CNN encoder, 60K training samples. Zero gradient descent in the classifier.
      Within 3.0 pp of k-nearest neighbors.
    </p>
  </div>
  <div class="rounded-lg border border-sigil-dim/30 bg-obsidian p-6">
    <p class="font-display text-sigil text-sm tracking-wider uppercase mb-2">Stability-Plasticity</p>
    <p class="text-3xl text-glyph font-display">0%</p>
    <p class="text-sm text-chalk-muted">catastrophic forgetting</p>
    <p class="text-xl text-glyph font-display mt-2">97.7%</p>
    <p class="text-sm text-chalk-muted">overall accuracy across 7 categories</p>
  </div>
</div>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| KaTeX client-side rendering | Build-time rendering via rehype-katex | Already implemented in Phase 1 | Zero client JS for equations |
| D3.js for diagrams | Hand-coded SVG | N/A (design decision) | Zero JS dependency, full aesthetic control |
| CSS box-shadow for glow | SVG filter primitives | SVG spec (stable) | Proper glow on SVG elements |

## Open Questions

1. **Exact LaTeX for thesis equations 2-6**
   - What we know: The current `equations.ts` constants are wrong (documented above)
   - What's unclear: Some thesis equations use prose descriptions (e.g., "effective prediction capacity") that need translation to LaTeX
   - Recommendation: Write LaTeX to match the thesis notation exactly, using the numbered equations from the PDF. For equation 3 (compression efficiency), the prose description is intentional in the thesis; create a LaTeX version that preserves the ratio concept.

2. **ASSOCIATOR_NORM_S7 squared vs unsquared**
   - What we know: Code has `\|\varphi\|^2`, thesis Eq 8 writes `E[\phi(a,b,c)]` without square
   - What's unclear: Whether the thesis intends the squared norm or the norm
   - Recommendation: Check the thesis text around Eq 8 carefully. The thesis says "expected associator norm" and the value 147456/42875pi is approximately 1.0947, which is described as "close to 1, the geometric midpoint of [0,2]." This strongly suggests it's the norm (not squared), since the norm range is [0,2]. Update code to remove the `^2`.

3. **Comparison table row count**
   - What we know: D-10 says 3 rows. Thesis Table 1 has 8 rows.
   - What's unclear: Whether the user's 3-row specification (Training method, Routing mechanism, Consistency check) is final
   - Recommendation: Implement exactly 3 rows per D-10. These three capture the most differentiating features.

## Sources

### Primary (HIGH confidence)
- `oct-trie.pdf` -- Thesis equations 1-8, Figure 1, Tables 1-4, Sections 1-10 read in full
- Existing codebase: `Equation.astro`, `InlineMath.astro`, `Section.astro`, `equations.ts`, `global.css`, `astro.config.ts`, `BaseLayout.astro`, `Header.astro`, `Footer.astro`
- Anthropic "Building Effective Agents" -- writing style analysis (fetched directly)
- Anthropic research page -- structural patterns (fetched directly)

### Secondary (MEDIUM confidence)
- [The Field Guide to AI Slop](https://www.ignorance.ai/p/the-field-guide-to-ai-slop) -- em dash abuse, parallelism cliches, structural problems
- [AI Writing Patterns](https://robotsatemyhomework.substack.com/p/ai-writing-patterns) -- 8 major patterns (binary contrasts, inanimate agency, uniform paragraphs, etc.)
- [AI Slop Patterns Gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1) -- comprehensive word/phrase/structural pattern catalog
- [AI Tropes Directory](https://tropes.fyi/directory) -- 33 named tropes with descriptions
- [Linguistic Patterns of AI Writing](https://hastewire.com/blog/uncover-linguistic-patterns-of-ai-writing-key-tells) -- quantitative metrics (20% higher repetition, 15% lower lexical diversity)
- [AI Editing Patterns](https://www.louisbouchard.ai/ai-editing/) -- anti-slop prompt strategies, word blacklists
- [SVG Neon Glow Tutorial (9elements)](https://9elements.com/blog/creating-an-animated-svg-neon-light-effect/) -- SVG filter code for glow effects
- [Fano Plane (Baez, UCR)](https://math.ucr.edu/home/baez/octonions/node4.html) -- octonion multiplication via Fano plane

### Tertiary (LOW confidence)
- None. All findings verified against primary or secondary sources.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- using existing Phase 1 infrastructure, no new dependencies
- Architecture: HIGH -- component patterns established in Phase 1, extending with new sections and diagrams
- Anti-slop checklist: HIGH -- synthesized from 6+ independent sources with cross-verification
- Equation accuracy: HIGH -- verified against thesis PDF directly
- SVG techniques: HIGH -- based on SVG specification and verified tutorials
- Pitfalls: HIGH -- combination of prior research and phase-specific findings

**Research date:** 2026-03-30
**Valid until:** 2026-04-30 (stable domain; no fast-moving dependencies)
