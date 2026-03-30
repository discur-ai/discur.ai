# Requirements: Discur.ai Landing Page

**Defined:** 2026-03-30
**Core Value:** Clearly communicate what the octonionic trie is and why it matters, through the work itself — the math, the results, the architecture — without rhetorical embellishment.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation

- [x] **FOUN-01**: Site builds as static HTML with zero client-side JS for content rendering
- [x] **FOUN-02**: Mathematical equations render at build time via KaTeX (no client-side math processing)
- [x] **FOUN-03**: Equation containers handle mobile overflow without layout breakage (overflow-x: auto, overflow-y: hidden)
- [x] **FOUN-04**: Dark color palette avoids halation (off-white on dark gray, no pure white on pure black)
- [x] **FOUN-05**: Typography system loaded with font preloading (display, body, monospace)
- [ ] **FOUN-06**: Responsive layout works on mobile (375px) through desktop (1440px+)

### Content

- [ ] **CONT-01**: Hero section states what Discur builds in one clear sentence
- [ ] **CONT-02**: Core technology section explains the octonionic trie with rendered equations ([a,b,c] = (ab)c - a(bc), composition error bound, associator norm)
- [ ] **CONT-03**: Five mechanisms section presents routing, novelty detection, content update, consistency verification, and structural health as consequences of octonionic algebra
- [ ] **CONT-04**: Fano plane diagram rendered as SVG with labeled points and color-coded subalgebras
- [ ] **CONT-05**: Octonionic trie structure diagram showing nodes, edges, and subalgebra labels
- [ ] **CONT-06**: Results section presents experimental evidence with specific numbers (95.2% MNIST, 0% catastrophic forgetting, 97.7% synthetic, 5x novelty contrast)
- [ ] **CONT-07**: Comparison table contrasts Oct-Trie vs NTM/DNC, SDM, HTM across memory structure, routing, update rule, consistency check, training, pruning, self-monitoring
- [ ] **CONT-08**: Link to research paper (PDF download or external link)
- [ ] **CONT-09**: Contact section with email or other contact method
- [ ] **CONT-10**: All copy passes anti-slop checklist (no "this isn't X, it's Y", no staccato fragments, no binary contrasts, no manufactured excitement, no unearned superlatives)

### Visual Design

- [ ] **VISL-01**: Esoteric/occult aesthetic expressed through mathematical content itself, not excessive decoration
- [ ] **VISL-02**: Section transitions use scroll-triggered reveals (GSAP)
- [ ] **VISL-03**: Fano plane diagram animates on scroll (draw-on effect or subalgebra highlighting)
- [ ] **VISL-04**: Sacred geometry or mathematical dividers between sections (max 2 decorative non-mathematical elements)
- [ ] **VISL-05**: Page functions fully without JavaScript (progressive enhancement)

### Deployment

- [ ] **DEPL-01**: Site deployed to production on discur.ai domain
- [ ] **DEPL-02**: Proper meta tags (title, description, OG image) for social sharing
- [ ] **DEPL-03**: Lighthouse performance score >= 90

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Interactive Features

- **INTV-01**: Interactive Fano plane with hover-to-highlight subalgebras and click-to-show routing paths
- **INTV-02**: Animated octonionic trie showing routing, branching, and consolidation
- **INTV-03**: Interactive demo of associator computation

### Content Expansion

- **CEXP-01**: Blog section for research updates
- **CEXP-02**: Team page
- **CEXP-03**: API documentation (when product codebase stabilizes)
- **CEXP-04**: Newsletter signup

## Out of Scope

| Feature | Reason |
|---------|--------|
| API documentation | Product codebase evolving rapidly, premature to document |
| Interactive product demo | Codebase not stable enough for public-facing demos |
| User accounts / authentication | Informational site only |
| Pricing / commercial pages | Premature at research stage |
| Blog / CMS | Single landing page; content changes are code deploys |
| Customer logos / testimonials | Research-first positioning, not enterprise sales |
| Mobile app | Web-only |
| Newsletter / email capture | Premature; no content pipeline to feed it |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUN-01 | Phase 1 | Complete |
| FOUN-02 | Phase 1 | Complete |
| FOUN-03 | Phase 1 | Complete |
| FOUN-04 | Phase 1 | Complete |
| FOUN-05 | Phase 1 | Complete |
| FOUN-06 | Phase 1 | Pending |
| CONT-01 | Phase 2 | Pending |
| CONT-02 | Phase 2 | Pending |
| CONT-03 | Phase 2 | Pending |
| CONT-04 | Phase 2 | Pending |
| CONT-05 | Phase 2 | Pending |
| CONT-06 | Phase 2 | Pending |
| CONT-07 | Phase 2 | Pending |
| CONT-08 | Phase 2 | Pending |
| CONT-09 | Phase 2 | Pending |
| CONT-10 | Phase 2 | Pending |
| VISL-01 | Phase 3 | Pending |
| VISL-02 | Phase 3 | Pending |
| VISL-03 | Phase 3 | Pending |
| VISL-04 | Phase 3 | Pending |
| VISL-05 | Phase 3 | Pending |
| DEPL-01 | Phase 4 | Pending |
| DEPL-02 | Phase 4 | Pending |
| DEPL-03 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 24 total
- Mapped to phases: 24
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-30*
*Last updated: 2026-03-30 after initial definition*
