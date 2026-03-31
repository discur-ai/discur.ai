# Discur

## What This Is

A landing page for Discur (discur.ai), an ASI startup building self-organizing memory systems based on octonionic algebra. The site explains the core technology — the octonionic trie — to a technical audience. Full esoteric/gnostic/occult visual styling with heavy use of mathematical symbols and equations. Understated, confident editorial feel. No hype.

## Core Value

Clearly communicate what the octonionic trie is and why it matters, through the work itself — the math, the results, the architecture — without rhetorical embellishment.

## Requirements

### Validated

- ✓ Static site builds with zero client-side JS for content — Phase 1
- ✓ Build-time KaTeX math rendering — Phase 1
- ✓ Dark color palette avoids halation — Phase 1
- ✓ Typography system with font preloading — Phase 1
- ✓ Responsive equation containers — Phase 1
- ✓ Landing page content sections with equations, diagrams, results — Phase 2
- ✓ Fano plane SVG (esoteric sigil) and octonionic trie diagram — Phase 2
- ✓ Experimental results and comparison table — Phase 2
- ✓ Anti-slop compliant copy (direct technical voice) — Phase 2
- ✓ GSAP scroll animations and Fano plane draw-on — Phase 3
- ✓ Progressive enhancement (full content without JS) — Phase 3
- ✓ Decorative elements (triple-dot dividers + constellation background) — Phase 3

### Active

- [ ] Landing page that explains the octonionic trie architecture
- [ ] Esoteric/gnostic/occult visual design language throughout
- [ ] Heavy use of actual math symbols, equations, and diagrams from the thesis
- [ ] Understated, confident copy — state what it does, provide evidence, stop
- [ ] Key concepts presented: associator as computational primitive, Fano plane routing, self-organizing memory, no gradient descent
- [ ] Experimental results surfaced (95.2% MNIST, 0% catastrophic forgetting, 97.7% synthetic)
- [ ] Comparison table vs existing architectures (NTM, DNC, SDM, HTM)
- [ ] Responsive design (desktop + mobile)
- [ ] Domain: discur.ai
- [ ] No code/API documentation (product codebase evolving rapidly)

### Out of Scope

- API documentation — codebase evolving too rapidly
- Product demo / interactive playground — not ready yet
- Blog / content management — single landing page only
- User accounts / authentication — informational site
- Pricing / commercial pages — premature

## Context

**The thesis:** "Self-Organizing Octonionic Tries: Algebraic Memory Without Gradient Descent" by Antonio Escalera (March 2026). Proposes a hierarchical memory structure where octonionic algebra replaces gradient-based learning entirely. The octonionic trie is a dynamically growing tree whose nodes are individual octonions. Five mechanisms that are typically separate engineered components in memory-augmented architectures emerge from a single algebraic substrate:

1. **Routing** via Fano plane subalgebra decomposition (7 quaternionic channels)
2. **Novelty detection** via the associator [a,b,c] = (ab)c − a(bc)
3. **Content update** via norm-preserving octonionic multiplication
4. **Consistency verification** via algebraic inversion (x⁻¹ = x̄/|x|²)
5. **Structural health monitoring** via associator norms, composition error, and subalgebra coherence

**Key results:**
- 95.2% MNIST accuracy with zero gradient descent in the classifier
- 0% catastrophic forgetting on stability-plasticity test
- 97.7% accuracy on structured synthetic data
- 5× contrast novelty signal from the associator
- Competitive with k-nearest neighbors (3.0 pp gap) at O(log n) vs O(n) query time

**Companion work:** Builds on "Octonionic Neural Networks: Division Algebra Structure for Reversible Geometric Reasoning" (Escalera, 2026).

**Design direction:** Esoteric/gnostic/occult aesthetic. The octonions sit at the boundary of mathematics — the largest normed division algebra, non-associative, connected to exceptional Lie groups (G₂). The visual language should reflect this liminal, esoteric quality. Heavy on mathematical notation rendered beautifully. The Fano plane diagram is a natural visual centerpiece.

**Copy direction:** Research-quality writing. Study how companies like Anthropic, DeepMind, and OpenAI present technical work — plain, specific, no rhetorical tricks. Avoid AI slop patterns: "this isn't X, it's Y" constructions, staccato fragment lists, binary contrasts, manufactured excitement. State what the thing does. Provide the specific evidence. Stop.

## Constraints

- **Tech stack**: Static site / landing page — no backend needed
- **Content**: Single page, no CMS
- **Copy quality**: Must avoid AI slop patterns — research quality writing only
- **Design**: Esoteric/occult aesthetic with mathematical rigor, not generic tech startup
- **Scope**: Landing page only — no product docs, no API reference

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Single landing page, no multi-page site | Product evolving rapidly, minimize maintenance surface | — Pending |
| No interactive demos | Codebase not stable enough for public-facing demos | — Pending |
| Esoteric/occult design language | Octonions are mathematically liminal — aesthetic should match the subject | — Pending |
| Understated copy, no hype | Let the math and results speak; builds credibility with technical audience | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-31 after Phase 3 completion*
