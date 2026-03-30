# Feature Research

**Domain:** AI research startup landing page (single-page, research-focused, pre-product)
**Researched:** 2026-03-30
**Confidence:** HIGH

Research based on analysis of Anthropic, DeepMind, Mistral, Cohere, Sakana AI, and Basis landing pages and research communication pages, plus systematic cataloguing of AI slop patterns from multiple sources.

## Feature Landscape

### Table Stakes (Visitors Expect These)

Features a technical audience assumes exist on an AI research company landing page. Missing these means visitors leave or dismiss credibility.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clear identity statement above the fold | Visitors decide in 3-5 seconds whether to stay. Every AI research company (Anthropic, DeepMind, Basis, Sakana) leads with a declarative statement of identity. Must answer "what is this and what did they build." | LOW | Single headline + subheadline. Not a tagline. A statement. |
| Core technology explanation | Technical visitors come to understand the research contribution. DeepMind and Anthropic dedicate significant space to explaining what their systems do, not just that they exist. | HIGH | The octonionic trie architecture section. Centerpiece of the page. Must balance rigor with accessibility. |
| Experimental results with specific numbers | Technical audiences evaluate credibility through results. Anthropic cites "81,000 people." DeepMind cites "92.4 GDT median score." Vague claims without numbers read as marketing. | MEDIUM | 95.2% MNIST, 0% catastrophic forgetting, 97.7% synthetic, 5x novelty signal. Present the numbers, explain what they mean, stop. |
| Comparison with prior work | Researchers position new work relative to what they know. DeepMind's AlphaFold page compares against CASP historical results. | MEDIUM | Table comparing octonionic trie vs NTM, DNC, SDM, HTM. Focus on architectural differences, not just benchmark numbers. |
| Responsive design (mobile + desktop) | Standard expectation. Not having mobile support signals amateur operation. 40-60% of technical traffic is mobile. | MEDIUM | Math equations need special mobile treatment (horizontal scroll or smaller rendering). |
| Fast page load (<2s) | Technical audiences judge competence by site performance. Slow = amateur. | LOW | Static site + CDN + build-time KaTeX rendering = sub-second loads. |
| Navigation / section anchors | Single-page sites need internal navigation for long content. Visitors scan before reading. | LOW | Sticky nav or section-jump links. Keep minimal. |
| Contact / connection point | Visitors who want to reach out need a path. Even minimal sites (Sakana) include contact information. | LOW | Email link or simple form. Not a sales funnel. |
| Team / founder attribution | Technical audiences want to know who did the work. Anthropic names researchers. DeepMind attributes publications. Anonymous research loses trust. | LOW | Author name with credentials. Not a full team page. |
| Technical credibility in notation | AI researchers evaluate claims by checking the math. Sloppy rendering or wrong notation = instant credibility loss. | HIGH | Every equation must render correctly. LaTeX source must be vetted against the thesis. Notation must be consistent throughout. |
| Accessible color contrast | Dark themes often fail WCAG contrast ratios. Technical audience includes people with visual impairments. | MEDIUM | Test all text/background combinations. KaTeX equations inherit text color -- verify contrast. |
| Semantic HTML and basic SEO | Search engines and screen readers need structure. Title, meta description, Open Graph tags. | LOW | Standard markup practices. |

### Differentiators (What Sets This Apart)

Features that make discur.ai memorable and distinct. These are where the site competes.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Esoteric / occult visual design language | Every AI company uses the same gradients-and-dark-mode aesthetic. An esoteric/gnostic visual language rooted in the mathematics itself (Fano plane, octonion algebra) is genuinely distinctive. No one in the space does this. | HIGH | Custom dark palette, display typography (Cinzel or similar), sacred geometry patterns, subtle grain textures. The design IS the brand. |
| Beautiful math rendering as content | Most AI companies hide math behind prose or relegate it to PDFs. Showing actual equations (associator definition, norm-preserving multiplication, Fano plane routing) directly on the page signals real research, not marketing. The math IS the product. | MEDIUM | KaTeX build-time rendering. Requires careful LaTeX authoring and visual testing. Must render correctly on mobile. |
| Interactive Fano plane diagram | The Fano plane is the visual signature of octonion algebra. Letting visitors explore the 7 quaternionic subalgebras and see how routing works creates understanding text alone cannot. | HIGH | SVG with hover/click states. Can defer to v1.1 with static SVG for launch. 7 points, 7 lines (including inscribed circle). Color-code the subalgebras. |
| Five-mechanisms-from-one-substrate narrative | The core insight -- five normally separate components emerging from a single algebraic structure -- is genuinely novel. Most AI sites describe components; discur.ai can describe emergence. This is a structural differentiator in how the story is told. | MEDIUM | Content/copy challenge, not a technical one. Requires careful writing to land without sounding like marketing. |
| Research paper availability | Linking the actual thesis lets technical visitors verify claims directly. Anthropic and DeepMind link all publications. For a pre-product company, the paper IS the product. | LOW | PDF download link. |
| Scroll-triggered section reveals | Content revealed as visitor scrolls creates unfolding discovery, matching the esoteric theme. Each section builds on the previous. | MEDIUM | GSAP ScrollTrigger. Restrained -- fade-in and draw-on effects, not bouncing animations. |
| Sacred geometry background patterns | Subtle geometric patterns (circles, triangles, heptagons referencing the Fano plane) as section backgrounds or dividers. Reinforces mathematical/esoteric identity. | MEDIUM | SVG patterns or CSS-generated. Must be subtle enough not to compete with content. |
| Copy quality as brand signal | In a landscape saturated with AI-generated marketing copy, writing that is plainly, specifically, and carefully crafted IS a differentiator. Anthropic's reputation partly rests on communication quality. For a company building AI, the quality of your own writing is a credibility signal. | MEDIUM | Not a UI feature. A quality constraint on all text. Covered in depth in Copy Quality Patterns below. |

### Anti-Features (Deliberately NOT Building)

Features that seem natural but would actively harm credibility, focus, or positioning.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Interactive demo / playground | Visitors might want to "try it." Common on product-focused AI sites (Cohere, Mistral). | Codebase evolving rapidly. A broken or underwhelming demo destroys credibility faster than no demo. | Present experimental results as proof. The numbers speak. Add demo when system is stable. |
| Blog / news section | Content marketing is standard. Anthropic, DeepMind all have blogs. | Single-page focus. Blog implies ongoing content commitment that distracts from shipping. Premature content strategy for a pre-product company. | The research paper is the content. Blog later when there is genuine research output. |
| Pricing / commercial pages | Enterprise AI sites (Cohere, Mistral) foreground pricing. | No product to price. Commercial pages on a research-stage site signal confused priorities. | Omit entirely. Contact path for interested parties is sufficient. |
| Customer logos / social proof | Standard trust signal on enterprise AI sites. | No customers. Fake-it-til-you-make-it social proof (advisor logos stretched to imply customers) is transparent and embarrassing. | Let the math and results be the proof. Paper quality replaces customer logos at research stage. |
| Newsletter signup | Common engagement capture. | Nothing to send. Newsletter without content is a broken promise. | Simple contact email. Build the list when there is something to send. |
| Chatbot / AI assistant on page | "AI company should have AI on its site." | Distraction from content. A chatbot answering questions about octonions would need to be flawless to avoid embarrassment. Risk of hallucination about the research. | Clear, well-written copy that anticipates questions. |
| Dark/light mode toggle | "Users should choose their theme." | The esoteric aesthetic IS the dark theme. A light mode requires designing two complete visual systems. The dark theme is a brand decision, not a user preference. | Ship dark only. The aesthetic is intentional. |
| Video explainer | Some AI sites use video for complex concepts. | Production quality must be high or it hurts credibility. Video is expensive. For math-heavy content, notation renders better as text. | Static diagrams, rendered equations, possibly one interactive visualization. |
| "Revolutionizing AI" mission statement | Standard on AI company sites. | For a pre-product company, grandiose mission statements without evidence are indistinguishable from vaporware marketing. The thesis makes specific, bounded claims -- the site should mirror that discipline. | State what the thing does. Provide evidence. Let readers form their own conclusions about significance. |
| Animations on every element | "Make it feel alive." | Over-animation is the hallmark of amateur web design. Slows page load, creates accessibility issues (motion sensitivity), distracts from math. | Restrained, purposeful animation. Fano plane diagram, section reveals, one or two signature moments. Everything else static. |

## Copy Quality Patterns

This section is the critical research deliverable. The copy direction for discur.ai -- "state what it does, provide the evidence, stop" -- requires precise understanding of what good technical writing looks like and what patterns to systematically avoid.

### Positive Patterns (What Quality Technical Marketing Looks Like)

Based on analysis of Anthropic research pages, DeepMind publications, and Anthropic's alignment science blog.

**1. Declarative Opening Statements**

State the subject, then the claim. No preamble.

Good (Anthropic): "Agents are emerging in production as LLMs mature in key capabilities."
Good (DeepMind/AlphaFold): "AlphaFold has been recognised as a solution to this grand challenge by the organisers of CASP."

The pattern: Subject. Verb. Object. No wind-up. No "In a world where..." No "As AI continues to evolve..."

**2. Specific Numbers Without Editorializing**

Present the result. Say what it means in plain terms. Do not tell the reader how to feel about it.

Good (DeepMind): "Achieves a median score of 92.4 GDT overall across all targets... comparable to the width of an atom (or 0.1 of a nanometer)."
Good (Anthropic): "Nearly 81,000 people participated."

The pattern: [Number]. [What the number means in concrete terms]. Full stop.

Bad: "An unprecedented 92.4 GDT score -- a truly groundbreaking achievement that fundamentally redefines what's possible."

**3. Problem-First Framing (Without Drama)**

Name the problem, then the approach. No manufactured tension.

Good (Anthropic): "However, some formats are much more difficult for an LLM to write than others."
Good (DeepMind): "This computational challenge is known as the protein folding problem."

The pattern: [Here is the problem]. [Here is what we did about it]. Not "But what if there was a better way?"

**4. Honest Limitation Statements**

Acknowledge constraints directly. This builds more trust than any positive claim.

Good (Anthropic): "The autonomous nature of agents means higher costs, and the potential for compounding errors."

The pattern: [Our approach has this limitation]. [Here is why it exists]. No spin.

For discur.ai: State the 3.0 percentage point gap vs k-nearest neighbors directly. Acknowledge the MNIST benchmark is limited. This honesty IS the credibility.

**5. Evidence from Experience, Not Authority**

Ground claims in specific work, not appeals to expertise.

Good (Anthropic): "Over the past year, we've worked with dozens of teams building LLM agents."

The pattern: [We did X]. [We observed Y]. Not "As leaders in the field, we believe..."

For discur.ai: The evidence is the experimental results from the thesis. Let the experiments speak.

**6. Technical Terms Defined on Introduction**

Introduce jargon with its definition, then use it freely. Do not avoid technical language -- contextualize it.

Good (Anthropic): "agent-computer interface (ACI)"
Good pattern for discur.ai: "The associator [a,b,c] = (ab)c - a(bc) measures how far multiplication deviates from associativity."

The pattern: [Term] [definition or expansion]. Then use the term without further apology.

**7. "We show" / "We investigate" / "We introduce" Constructions**

From Anthropic's alignment blog. Active voice with the research team as agent. Not passive. Not grandiose.

Good: "We show that language models can be trained with hidden objectives."
Good pattern for discur.ai: "We introduce a hierarchical memory structure where octonionic algebra replaces gradient-based learning."

The pattern: [We] [concrete verb] [specific thing]. Not "A novel paradigm is presented..."

**8. Confidence Through Restraint**

Anthropic's "Building Effective Agents" piece demonstrates this: the writing is authoritative precisely because it does not try to sound authoritative. It presents findings, acknowledges tradeoffs, and lets the reader decide. The absence of superlatives IS the confidence signal.

For discur.ai: The octonionic trie either works or it does not. The numbers either impress or they do not. The writing should present both without commentary on their significance.

### Negative Patterns (AI Slop to Systematically Avoid)

Based on the LLM Cliches repository, Field Guide to AI Slop, Wikipedia's Signs of AI Writing, and multiple practitioner analyses.

**1. The "This Isn't X, It's Y" Construction**

The single most recognizable LLM writing pattern. Creates false drama through binary contrast.

Bad: "This isn't just a data structure -- it's a new paradigm for intelligence."
Bad: "This isn't an incremental improvement. It's a fundamental reimagining."

Why it fails: It tells the reader what to think instead of presenting evidence. It manufactures significance through rhetorical structure rather than content. Technical audiences see through it instantly.

Instead: State what it is. Provide evidence. The reader decides significance.

**2. Staccato Fragment Lists**

Short. Punchy. Fragments. Designed to create momentum. Actually creating emptiness.

Bad: "No gradients. No backpropagation. No training loop. Just algebra."
Bad: "Fast. Efficient. Scalable."

Why it fails: Each fragment carries almost no information. The rhythm substitutes for content. Technical readers want to know HOW it works without gradients, not just that it does.

Instead: Write complete sentences with specific claims.

**3. Manufactured Excitement / Unearned Superlatives**

Bad adjectives (from the LLM Cliches repository): groundbreaking, revolutionary, paradigm-shifting, game-changing, unprecedented, pioneering, cutting-edge, trailblazing, next-generation, best-in-class, seamless, unparalleled, visionary, holistic.

Bad verbs: unleash, unlock, revolutionize, supercharge, transform, reimagine, redefine, transcend, harness, elevate, foster, orchestrate.

Bad nouns: tapestry, odyssey, symphony, nexus, pinnacle, paradigm, landscape (as metaphor), journey, trajectory.

Why they fail: They are content-free intensifiers. "Groundbreaking" means nothing without the ground that was broken. These words are so overused by LLMs that they function as AI-detection signals. Technical audiences actively distrust text containing them.

Instead: Replace every superlative with a specific claim. "Groundbreaking accuracy" becomes "95.2% MNIST accuracy with zero gradient descent." The specificity IS the excitement.

**4. Hedge Phrases and Throat-Clearing**

Bad: "It's worth noting that..." / "It's important to remember..." / "Arguably..." / "To some extent..." / "In many ways..." / "It is important to note that..."

Why they fail: They pad word count without adding information. They signal uncertainty without committing to it.

Instead: Delete the hedge phrase. Start with the claim. If uncertain, say "We have not yet verified X" -- explicit uncertainty beats hedging.

**5. The "In Today's [Landscape/World/Era]" Opening**

Bad: "In today's rapidly evolving AI landscape..."
Bad: "As technology continues to advance..."
Bad: "In the era of artificial intelligence..."

Why it fails: Content-free warm-up sentence. Establishes no information. Signals the writer had nothing specific to say about the present moment.

Instead: Start with the specific thing. No warm-up.

**6. Excessive Em Dashes for Dramatic Effect**

Bad: "The octonionic trie -- a structure that fundamentally changes how we think about memory -- enables routing, novelty detection, and structural verification -- all from a single algebraic substrate."

Why it fails: One em dash per paragraph is fine. Three in a sentence signals synthetic generation. Creates breathless, parenthetical-heavy rhythm.

Instead: Use periods. Write shorter sentences. One idea per sentence.

**7. The Rule of Three (Compulsive Triads)**

Bad: "Fast, efficient, and scalable."
Bad: "It enables, empowers, and transforms."

Why it fails: LLMs default to three-item lists as a structural crutch. When every description uses triads, the rhythm becomes monotonous and synthetic.

Instead: Use the actual number of items. Two things? List two. Five things? List five. Do not compress or expand to hit three.

**8. Fluency Masking Confusion**

Bad: "The non-associative algebraic structure enables emergent computational properties that transcend traditional architectural boundaries."

Why it fails: Every word is real. The sentence parses grammatically. It says nothing specific. Sophisticated-sounding language gesturing at meaning without delivering it. This is the most dangerous pattern because it can fool the writer into thinking something has been said.

Instead: "The octonionic trie uses non-associativity as a feature: the associator [a,b,c] = (ab)c - a(bc) produces a nonzero signal when new data does not match stored patterns, functioning as a novelty detector."

**9. Monotonous Paragraph Rhythm**

Bad pattern: [Topic sentence of medium length]. [Supporting sentence of roughly the same length]. [Another sentence roughly the same length]. [Concluding sentence roughly the same length].

Why it fails: Uniform sentence length creates flat, droning quality. Human writers naturally vary -- a long sentence followed by a short one. A fragment. Then a complex sentence. LLMs default to medium-length sentences throughout.

Instead: Vary sentence length deliberately. Some under 10 words. Some 30+. The variation holds attention.

**10. Performative Enthusiasm**

Bad: "We're incredibly excited to introduce..."
Bad: "We're thrilled to announce..."
Bad: "Something shifted." / "Everything changed."

Why it fails: The writer's emotional state is not information. When the state is always excitement, it becomes noise. Technical audiences want to know WHAT, not how the writer feels.

Instead: State the thing. Let the reader decide if it is exciting.

### Copy Quality Checklist for discur.ai

Before publishing any text on the site, verify:

- [ ] Does every sentence contain specific information? (Delete sentences that are pure transition or padding)
- [ ] Are all claims backed by numbers or specific evidence?
- [ ] Does the text avoid every word on the LLM cliches list? (groundbreaking, revolutionary, seamless, paradigm, unleash, unlock, harness, leverage, etc.)
- [ ] Zero instances of "This isn't X, it's Y" constructions?
- [ ] Zero instances of "In today's [landscape/era/world]" openings?
- [ ] Does sentence length vary noticeably across paragraphs?
- [ ] Are technical terms defined on first use, then used without apology?
- [ ] Is every em dash justified? (Maximum one per paragraph as guideline)
- [ ] Are limitations stated directly, without spin?
- [ ] Does the text sound like it was written by someone who understands octonionic algebra, not someone who read a press release about it?
- [ ] Read aloud: does it sound like a person speaking, or a language model performing?
- [ ] No compulsive triads? (If three items appear, are there genuinely three things?)
- [ ] No hedge phrases? (Delete "it's worth noting," "arguably," "to some extent")
- [ ] No performative enthusiasm? (Delete "excited to," "thrilled to," "something shifted")

## Feature Dependencies

```
[Identity Statement / Hero]
    +-- requires --> nothing (first thing built)

[Core Technology Explanation]
    +-- requires --> [Identity Statement] (readers need context)
    +-- requires --> [KaTeX / Math Rendering] (equations ARE the explanation)
    +-- enhanced by --> [Interactive Fano Plane]

[KaTeX Build Pipeline]
    +-- requires --> [Astro config: remark-math + rehype-katex]
    +-- requires --> [KaTeX CSS loaded globally]

[Experimental Results Section]
    +-- requires --> [Core Technology Explanation] (readers need to understand what was tested)
    +-- requires --> [KaTeX / Math Rendering]

[Comparison Table]
    +-- requires --> [Core Technology Explanation] (must understand the trie first)
    +-- requires --> [Experimental Results] (comparison needs numbers)

[Fano Plane Diagram (Static SVG)]
    +-- requires --> [SVG design/authoring] (custom artwork, not a library)
    +-- enhances --> [Core Technology Explanation]

[Fano Plane Diagram (Interactive)]
    +-- requires --> [Static SVG] (enhance existing, not rebuild)
    +-- requires --> [GSAP or JS for interaction]
    +-- conflicts with --> [fast initial launch] (HIGH complexity, defer)

[Scroll-Triggered Reveals]
    +-- requires --> [GSAP ScrollTrigger]
    +-- requires --> [All content sections built]
    +-- enhances --> [Esoteric Design]

[Esoteric Visual Design]
    +-- requires --> [Typography loaded (Cinzel, Cormorant Garamond or similar)]
    +-- requires --> [Color palette in Tailwind/CSS theme]
    +-- enhances --> all sections

[Research Paper Link]
    +-- requires --> nothing (standalone)
    +-- enhances --> [Core Technology Explanation]
    +-- enhances --> [Experimental Results]

[Responsive Design]
    +-- requires --> [All content sections built]
    +-- conflicts with --> [Wide math equations] (need overflow handling)

[Navigation / Section Anchors]
    +-- requires --> [3+ content sections to navigate between]

[Contact Point]
    +-- requires --> nothing (standalone)

[Founder Attribution]
    +-- requires --> nothing (standalone)
    +-- enhances --> credibility of all technical content
```

### Dependency Notes

- **KaTeX pipeline is foundational:** Both the technology explanation and results section depend on rendered math. This is a hard dependency -- content cannot be written without it. Must be configured before content authoring begins.
- **Static Fano plane SVG before interactive:** Build the correct geometry first, add interaction in a second pass. The SVG itself is custom artwork requiring design work.
- **Esoteric visual design is parallel to content:** CSS/design layer does not block content creation but must be integrated before launch. Develop concurrently.
- **Copy quality is a constraint, not a dependency:** It does not appear as a node because it applies to everything. It is the quality gate for all text content.
- **Responsive design conflicts with wide equations:** Long LaTeX equations may overflow on mobile. Plan for horizontal scroll containers or line-breaking in KaTeX.

## MVP Definition

### Launch With (v1)

Minimum viable landing page -- enough to establish credibility with a technical audience.

- [ ] Hero with declarative identity statement -- what this company is and what it built, in one sentence
- [ ] Core technology explanation with rendered math -- the octonionic trie, with actual equations
- [ ] Five-mechanisms narrative -- routing, novelty detection, update, verification, health monitoring from one substrate
- [ ] Fano plane diagram (static SVG minimum) -- visual centerpiece
- [ ] Experimental results with specific numbers -- 95.2%, 0%, 97.7%, 5x
- [ ] Comparison table vs existing architectures -- NTM, DNC, SDM, HTM
- [ ] Research paper link/download -- the thesis as primary evidence
- [ ] Esoteric/occult visual design -- dark palette, custom typography, sacred geometry
- [ ] Founder attribution -- who built this
- [ ] Contact point -- email or minimal form
- [ ] Responsive design -- desktop and mobile, with math overflow handling
- [ ] Section navigation -- anchor links for the single page
- [ ] Copy quality gate passed -- every piece of text reviewed against the checklist

### Add After Validation (v1.x)

Features to add once core page is live and getting feedback.

- [ ] Interactive Fano plane diagram -- hover/click to explore subalgebras and routing
- [ ] Scroll-triggered section reveals -- adds polish
- [ ] Animated Fano plane (draw-on effect, subalgebra highlighting)
- [ ] Sacred geometry background patterns between sections
- [ ] Octonionic trie tree diagram -- additional visual explanation
- [ ] Performance optimization pass (font subsetting, image formats, preload hints)
- [ ] Link to companion paper (octonionic neural networks)

### Future Consideration (v2+)

Features to defer until genuine product-market signal.

- [ ] Blog / research updates -- only when there is ongoing research output
- [ ] Interactive trie demo -- only when codebase is stable
- [ ] API documentation -- only when there is an API
- [ ] Team page -- only when team is ready to be public
- [ ] Community space -- only when there is a community

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Hero identity statement | HIGH | LOW | P1 |
| Core technology explanation | HIGH | HIGH | P1 |
| KaTeX math rendering pipeline | HIGH | MEDIUM | P1 |
| Five mechanisms section | HIGH | MEDIUM | P1 |
| Experimental results section | HIGH | MEDIUM | P1 |
| Comparison table | HIGH | MEDIUM | P1 |
| Research paper link | HIGH | LOW | P1 |
| Fano plane SVG (static) | HIGH | MEDIUM | P1 |
| Esoteric visual design | HIGH | HIGH | P1 |
| Founder attribution | MEDIUM | LOW | P1 |
| Contact point | MEDIUM | LOW | P1 |
| Responsive design | HIGH | MEDIUM | P1 |
| Section navigation | MEDIUM | LOW | P1 |
| Interactive Fano plane | MEDIUM | HIGH | P2 |
| Scroll-triggered animations | MEDIUM | MEDIUM | P2 |
| Sacred geometry patterns | MEDIUM | MEDIUM | P2 |
| Trie tree diagram | MEDIUM | HIGH | P2 |
| Blog section | LOW | MEDIUM | P3 |
| Interactive demo | HIGH | HIGH | P3 |

**Priority key:**
- P1: Must have for launch
- P2: Add after core page is validated
- P3: Defer until product evolves

## Competitor Feature Analysis

| Feature | Anthropic | DeepMind | Mistral | Cohere | Basis | Sakana | discur.ai Plan |
|---------|-----------|----------|---------|--------|-------|--------|----------------|
| Hero statement | Values-led ("safety at the frontier") | Capability-led ("next generation AI systems") | Punchy tagline ("Frontier AI. In your hands.") | Enterprise-led ("powerful AI meets practical business") | 3 declarative statements | Minimal ("AI R&D in Tokyo") | Research-led: what the octonionic trie is |
| Product showcase | Claude front and center | Model cards | Product cards (5 offerings) | Product grid with model lineup | None (research only) | Chat product | None (research only) |
| Customer logos | No | No | Yes, prominently | Yes, prominently | No | No | No |
| Research depth on landing page | Links to papers, team descriptions | Links to papers, summaries | Low (enterprise focus) | Low (enterprise focus) | Low (mission statements) | Low | High (equations, diagrams, results on the page itself) |
| Math rendering | In paper PDFs only | In paper PDFs, some blog posts | None | None | None | None | KaTeX on page (core differentiator) |
| Visual design | Minimalist, light/clean | Google Material, colorful | Purple gradients, modern | Enterprise blue | Minimal, academic | Playful, nature-themed | Esoteric/occult, dark, mathematical |
| Interactive elements | Globe visualization | Some model demos | Product demos | Chat demo | None | Chat | Fano plane (v1.x) |
| Copy tone | Understated, careful, values-centered | Academic, institutional | Confident, solution-oriented | Business-focused, benefit-driven | Declarative, minimal | Direct, unpretentious | Understated, evidence-based. State, prove, stop. |
| Social proof | Research citations, study participation numbers | Historical CASP results, Nobel quotes | Enterprise customer stories | Customer testimonials, logos | None | None | Experimental results and comparison tables |
| CTA | Talk to sales / try Claude | Various | Talk to sales, free tier | Talk to sales, sign up | Join us | Try chat | Email contact |

### Key Insight from Competitor Analysis

The AI company landing page space is bimodal:

1. **Enterprise product companies** (Mistral, Cohere) foreground products, customers, and pricing. Copy is enterprise marketing. Social proof is customer logos.
2. **Research-first companies** (Anthropic research pages, DeepMind publications, Basis) foreground the work itself. Copy is closer to academic communication. Social proof is the work's quality.

discur.ai falls in category 2 with a distinctive angle: presenting a single, specific technical contribution (the octonionic trie) rather than a portfolio. The page structure should be more like a well-designed thesis abstract than a corporate landing page -- one clear thread from problem to approach to results, with math visible throughout.

No one in the space combines mathematical rigor with esoteric visual design. This is the gap.

## Sources

### AI Company Landing Pages Analyzed
- [Anthropic homepage](https://www.anthropic.com) -- declarative style, values framing, no superlatives
- [Anthropic research page](https://www.anthropic.com/research) -- structure, team descriptions, publication listing
- [Anthropic "Building Effective Agents"](https://www.anthropic.com/research/building-effective-agents) -- model of quality technical writing, confidence through restraint
- [Anthropic Alignment Science Blog](https://alignment.anthropic.com/) -- "We show" / "We investigate" patterns, declarative headlines
- [DeepMind research page](https://deepmind.google/research/) -- card-based layout, authority-through-validation
- [DeepMind AlphaFold blog post](https://deepmind.google/discover/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology/) -- model of results presentation with specific numbers and context
- [Mistral homepage](https://mistral.ai) -- enterprise product page patterns, punchy tagline style
- [Cohere homepage](https://cohere.com) -- enterprise trust signals, product grid layout
- [Sakana AI homepage](https://sakana.ai) -- minimal research company page, deliberate restraint
- [Basis AI homepage](https://www.basis.ai) -- research-first declarative style, parallel construction

### Copy Quality and AI Slop Research
- [LLM Cliches repository (nanxstats)](https://github.com/nanxstats/llm-cliches) -- comprehensive adjective/noun/verb lists to avoid
- [Field Guide to AI Slop (Charlie Guo)](https://www.ignorance.ai/p/the-field-guide-to-ai-slop) -- em dash abuse, "it's not X it's Y," parallelism cliches, structural problems
- [AI Slop Detection (Rost Glukhov)](https://www.glukhov.org/post/2025/12/ai-slop-detection/) -- hedge phrases, repetitive structures, quantitative detection methods
- [Writing in the Age of LLMs (Shreya Shankar)](https://www.sh-reya.com/blog/ai-writing/) -- fluency masking confusion, low information density, vague language
- [Red Flag Words (Blake Stockton)](https://www.blakestockton.com/red-flag-words/) -- categorized AI word lists by domain
- [Common AI Words (AI Text Humanizer)](https://ai-text-humanizer.com/ai-words/) -- common LLM phrases catalog
- [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) -- community-maintained pattern list
- [AI Slop (Wikipedia)](https://en.wikipedia.org/wiki/AI_slop) -- Merriam-Webster 2025 Word of the Year

### Landing Page Design Research
- [Anthropic content strategy (Foundation Inc)](https://foundationinc.co/lab/anthropic) -- writing patterns, brevity, outcome focus
- [Best AI startup landing page examples (Ebaq Design)](https://www.ebaqdesign.com/blog/ai-startup-landing-page-examples) -- section patterns, restraint over complexity
- [Best AI website design examples (Veza Digital)](https://www.vezadigital.com/post/best-ai-website-design-examples) -- credibility patterns, trust signals, dark mode dominance

---
*Feature research for: discur.ai landing page*
*Researched: 2026-03-30*
