# Positive Copywriting Patterns for Deep Technical Fields

A source-by-source compendium of specific, extractable writing patterns from organizations and practitioners who communicate complex mathematical, scientific, and technical work to technical audiences. Compiled for Discur's landing page.

**Compiled:** 2026-03-31
**Purpose:** Reference material for writing landing page copy for an AI research company building self-organizing memory systems based on octonionic algebra.
**Scope:** Positive patterns only. What to do, with specific examples. (Anti-patterns live in COPY-PATTERNS.md Section 11.)

---

## Table of Contents

1. [Anthropic Research Pages](#source-anthropic-research)
2. [Anthropic: Building Effective Agents](#source-anthropic-building-effective-agents)
3. [Anthropic: Interpretability Research (Transformer Circuits)](#source-anthropic-interpretability-transformer-circuits)
4. [DeepMind Research Blog](#source-deepmind-research-blog)
5. [Stripe](#source-stripe)
6. [Mistral AI](#source-mistral-ai)
7. [Scale AI](#source-scale-ai)
8. [SandboxAQ](#source-sandboxaq)
9. [Hugging Face](#source-hugging-face)
10. [Cohere Labs](#source-cohere-labs)
11. [Linear](#source-linear)
12. [Vercel](#source-vercel)
13. [Wolfram / Stephen Wolfram](#source-wolfram--stephen-wolfram)
14. [Paul Halmos on Mathematical Writing](#source-paul-halmos)
15. [Donald Knuth on Mathematical Writing](#source-donald-knuth)
16. [Igor Pak on Clear Mathematical Papers](#source-igor-pak)
17. [Feynman on Clear Writing](#source-feynman)
18. [Swyx on Writing for Developers](#source-swyx)
19. [Patrick McKenzie (patio11)](#source-patrick-mckenzie)
20. [Cross-Cutting Patterns](#cross-cutting-patterns)
21. [Application to Discur](#application-to-discur)

---

## Source: Anthropic Research

**URL:** https://www.anthropic.com/research
**What they do:** Present AI safety research to a mixed audience of researchers, engineers, policymakers, and the technically curious.

### Key Patterns

**Pattern 1: The Direct Question Opening**
Open with the question the research answers. No preamble.

> "Can Claude access and report on its own internal states?"

This works because technical readers self-select: if they care about the question, they read on. If not, they move on without feeling tricked.

**Pattern 2: The Qualified Finding**
State the result with precise qualification -- neither overclaiming nor burying the lead.

> "This research finds evidence for a limited but functional ability to introspect."

The phrase "limited but functional" does enormous work. It acknowledges boundaries while asserting significance. Compare to what most companies would write: "We've discovered groundbreaking introspection capabilities."

**Pattern 3: Specificity as Credibility**
Replace adjectives with numbers. Let data carry the weight.

> "Nearly 81,000 people participated -- the largest and most multilingual qualitative study of its kind."

> "Withstood over 3,000 hours of red teaming with no universal jailbreak discovered."

The numbers are not decoration. They are the argument. No adjective could match the persuasive force of "3,000 hours."

**Pattern 4: The "We Find" Construction**
Present findings with first-person plural authority.

> "We find that, when Claude models are presented with a harmful version of a task they can otherwise perform, they sometimes claim they lack the ability to perform the task."

This is a research convention that signals empirical grounding. "We find" is more authoritative than "it appears that" and more honest than "it is the case that."

**Pattern 5: Results Then Tradeoff**
State the win, then immediately quantify the cost.

> "The jailbreak success rate was reduced to 4.4%... with a 0.38% increase in refusal rates and moderate additional compute costs."

This pattern -- result followed by measured cost -- builds enormous trust. It says: we know what the tradeoffs are and we're telling you.

**Pattern 6: Limitation as Guidance**
Convert weaknesses into actionable recommendations.

> "Constitutional Classifiers may not prevent every universal jailbreak... we therefore recommend using complementary defenses."

"We therefore recommend" transforms an admission into expertise.

### What Works
- Concrete nouns over abstractions: "persona vectors," "alignment faking," "sleeper agents" -- each names a specific phenomenon
- Honest uncertainty expressed through calibrated language: "evidence for" rather than "proof of"; "limited but functional" rather than "robust"
- First-person plural ("we studied," "we tested") that claims collaborative authority without grandiosity
- Hedging done strategically, not defensively: "does not show that dangerous alignment faking behavior will necessarily emerge" -- the careful "necessarily" is doing precise work

### Applicable to Discur
- The "qualified finding" pattern maps directly to describing octonionic trie capabilities: "The octonionic trie preserves both local adjacency and global topology -- at the cost of [specific tradeoff]"
- Anthropic's use of specific phenomenon names ("alignment faking," "introspection") models how Discur should name its own concepts: "associative closure," "octonionic encoding," "norm-preserving retrieval"
- The numbers-as-argument pattern is essential: Discur needs specific benchmarks, complexity bounds, or structural properties that speak for themselves

---

## Source: Anthropic: Building Effective Agents

**URL:** https://www.anthropic.com/research/building-effective-agents
**What they do:** Present practical engineering wisdom to practitioners building with LLMs.

### Key Patterns

**Pattern 1: The Experience-Authority Opening**
Establish credibility through specific experience, not credentials.

> "We've worked with dozens of teams building LLM agents across industries. Consistently, the most successful implementations weren't using complex frameworks or specialized libraries. Instead, they were building with simple, composable patterns."

Three sentences. First establishes experience scope. Second inverts expectations. Third delivers the thesis. The word "consistently" does the work of a dozen citations.

**Pattern 2: Negation as Emphasis**
Define what something is by first stating what it is not.

> "Success in the LLM space isn't about building the most sophisticated system."

This pattern works because it disarms the reader's assumption. The reader expected sophistication to be the goal; the negation creates a gap that the next sentence fills.

**Pattern 3: Conditional Guidance Over Prescriptions**
Frame advice as decisions, not mandates.

> "When (and when not) to use agents"

The parenthetical "(and when not)" is the credibility signal. It says: we'll tell you when to stop, too.

**Pattern 4: The Suggest-Over-Insist Pattern**
Soften directives with "suggest" -- paradoxically increasing persuasiveness.

> "We suggest that developers start by using LLM APIs directly."

Compare: "Developers should start by using LLM APIs directly." The suggestion carries more weight because it implies the authors have considered alternatives and still landed here.

**Pattern 5: Define Through Contrast**
Introduce concepts by placing them against a sibling concept.

> "At Anthropic, we categorize all these variations as agentic systems, but draw an important architectural distinction between workflows and agents."

Then immediately:

> "Workflows are systems where LLMs and tools are orchestrated through predefined code paths."
> "Agents... are systems where LLMs dynamically direct their own processes and tool usage."

Parallel structure makes the distinction instantly clear.

### What Works
- Present tense dominance creates immediacy without promotional feel
- Borrowed concepts with attribution: "Poka-yoke your tools" imports a manufacturing principle, creating memorable intellectual surprise
- "Put yourself in the model's shoes" -- empathy language applied to system design; anthropomorphism used precisely and acknowledged
- Concrete evidence over abstract claims: cites SWE-bench Verified benchmark by name rather than saying "impressive performance"

### Applicable to Discur
- The negation-as-emphasis pattern applies to positioning: "The problem with vector databases isn't speed. It's structure."
- Define-through-contrast works for octonionic algebra: "Real numbers give you magnitude. Complex numbers give you magnitude and phase. Quaternions give you magnitude, phase, and rotation. Octonions give you all of that -- plus associative structure."
- The suggest-over-insist tone matches Discur's editorial confidence: understated authority that doesn't need to shout

---

## Source: Anthropic Interpretability (Transformer Circuits)

**URL:** https://transformer-circuits.pub/2025/attribution-graphs/biology.html
**What they do:** Present cutting-edge interpretability research with interactive visualizations to a mixed audience.

### Key Patterns

**Pattern 1: The Disciplinary Analogy Frame**
Open by mapping the unknown domain to a known one.

> "The challenges we face in understanding language models resemble those faced by biologists."

This single sentence does three things: acknowledges difficulty (builds empathy), introduces the analogy frame (provides scaffolding), and signals ambition (biology is a real science; this is real science too).

**Pattern 2: The Cascading List**
Move from concrete to abstract within a single list.

> "Features often represent human-interpretable concepts, ranging from low-level (e.g. specific words or phrases) to high-level (e.g. sentiments, plans, and reasoning steps)."

The "ranging from... to..." construction creates an accessible hierarchy. The parenthetical examples ground each level.

**Pattern 3: Honest Limitation Before Explanation**
Acknowledge the tool's shortcomings before describing what it does.

> "Our replacement models don't perfectly reconstruct the activations of the original model. On any given prompt, there are gaps between the two."

Counter-intuitive placement: admitting imperfection before explaining the approach. But it works because it prevents the reader from waiting for the other shoe to drop. The limitation is already on the table; now they can focus on the substance.

**Pattern 4: Parenthetical as Dual-Track Reading**
Create two reading paths: one for experts, one for generalists.

> "That is, during the forward pass rather than the 'thinking out loud' of a chain-of-thought completion."

The parenthetical translates "forward pass" for non-experts without interrupting the expert's reading flow. The quotation marks around "thinking out loud" signal that this is a deliberate simplification.

**Pattern 5: The Analogy with Explicit Limits**
Use an analogy, then immediately state where it breaks.

> "Just as cells form the building blocks of biological systems, we hypothesize that features form the basic units of computation inside models."

Then later: "The analogy between features and cells shouldn't be taken too literally."

This is intellectually honest in a way that builds deep trust with technical readers. It says: we know the limits of our own metaphors.

**Pattern 6: Scale Through Concrete Comparison**
Make computational scale visceral.

> "This required going up by many orders of magnitude -- from a backyard bottle rocket to a Saturn-V."

Not "we scaled up significantly" but a comparison the reader can feel.

### What Works
- Active verbs over passive: "the model activates features" not "features are activated"
- Scare-quotes used precisely to signal metaphorical awareness: "in its head" marks anthropomorphism as intentional
- Rhythm shifts: long technical passages broken by interactive elements that reset cognitive load
- Correlation vs. causation handled with surgical precision: "aren't just correlated with... but also causally shape"

### Applicable to Discur
- The disciplinary analogy frame is perfect for introducing octonions: "The challenge of organizing knowledge resembles the challenge that physicists face in organizing forces -- how to represent fundamentally different relationships within a single algebraic structure."
- Dual-track parentheticals let Discur address both mathematicians and engineers: "The associator (a measure of how much the multiplication order matters) vanishes for..."
- The analogy-with-limits pattern keeps octonionic analogies honest: "The trie is like a filing cabinet -- except the cabinet encodes the relationships between its contents, not just their locations."

---

## Source: DeepMind Research Blog

**URL:** https://deepmind.google/research/
**What they do:** Present major AI research advances to a broad audience including researchers, policymakers, and the general public.

### Key Patterns

**Pattern 1: The Action-Verb Headline**
Use present-tense verbs that describe what the system does.

> "Predict protein structures with high accuracy"
> "Generate and explore interactive worlds"

No "introducing." No "announcing." No "our new." Just the capability, stated as an imperative.

**Pattern 2: Outcome Before Method**
Lead with what the system achieves, not how it works.

> "A solution to a 50-year-old grand challenge in biology"

The 50-year timeframe establishes significance. "Grand challenge" is a term of art in science that signals real difficulty. "Solution" is stated flatly -- no modifiers needed when you can back the claim.

**Pattern 3: Third-Party Validation as Structure**
Build the argument through external voices.

DeepMind's AlphaFold announcement uses quotes from Nobel laureates and institute directors rather than self-congratulatory prose. The voices of recognized authorities carry the significance claim so the authors don't have to.

**Pattern 4: Technical Score Made Intuitive**

> "A median score of 92.4 GDT... a score of around 90 GDT is informally considered to be competitive with experimental methods."

First the raw number, then the context that makes it meaningful. The word "informally" is honest -- it acknowledges this is a community consensus, not a formal threshold.

> "Approximately 1.6 Angstroms... comparable to the width of an atom."

Translation to physical intuition. Even a reader who doesn't know GDT scores understands "the width of an atom."

**Pattern 5: The Humble Bookend**
Celebrate the result, then immediately pivot to what remains unsolved.

> "Not every structure we predict will be perfect... There's still much to learn, including how multiple proteins form complexes."

This is the scientific maturity move: claiming victory on one front while acknowledging the war continues. It reads as confidence, not hedging.

### What Works
- Benefit-forward framing with impact first, methodology second
- Active voice dominance: "We work on," "Explore," "Discover"
- Short, declarative subheadings under 15 words
- Modular design: single-sentence descriptions followed by "Learn more" -- optimized for scanning
- "Accelerating" as a recurring motif -- suggests momentum without claiming finality

### Applicable to Discur
- Action-verb headlines work for Discur: "Encode semantic relationships. Retrieve them in constant time."
- The "technical score made intuitive" pattern is essential: if Discur has complexity bounds or accuracy metrics, they need a "comparable to the width of an atom" translation
- The humble bookend keeps claims credible: "The octonionic trie solves the structure-preservation problem. The scaling problem is next."

---

## Source: Stripe

**URL:** https://stripe.com
**What they do:** Present complex financial infrastructure to developers and business leaders.

### Key Patterns

**Pattern 1: The Category-Defining Headline**
Name the category you're creating.

> "Financial infrastructure to grow your revenue."

Seven words. Two concepts: what it is (financial infrastructure) and what it does for you (grow your revenue). No adjective. No qualifier. The confidence of omission.

**Pattern 2: The Scaling Clause**
An em-dash clause that communicates both accessibility and ambition.

> "Accept payments, offer financial services, and implement custom revenue models -- from your first transaction to your billionth."

The em-dash phrase does dual work: it says "this works at any scale" and "we've thought about the full range of your growth."

**Pattern 3: Numbers as the Entire Argument**
Let metrics stand without commentary.

> 135+ currencies. $1.9T processed. 99.999% uptime.

No adjectives needed. The numbers are the adjectives. A reader who sees "99.999% uptime" doesn't need to be told this is reliable.

**Pattern 4: Code on the Homepage**
Stripe put working code -- not a meaningless snippet, but a complete curl command with a working test API key -- on their homepage. The copy pattern here is: show, don't describe. The most persuasive copy for a developer product is working code.

### What Works
- CEO Patrick Collison structures emails "like research papers with footnotes" -- the writing culture starts at the top
- Engineers recognize that "investing extra time to communicate an idea through clear, precise writing delivers outsized results because vastly more people consume the writing than produce it"
- Brand-neutral, user-centric tone: the copy is about what the reader can do, not about Stripe
- Capability stacking: listing what's possible rather than explaining how it works

### Applicable to Discur
- The category-defining headline pattern maps to: "Self-organizing memory through octonionic algebra" -- names the category (self-organizing memory) and the mechanism (octonionic algebra) in one line
- Numbers-as-argument: if the trie has specific structural properties (7 dimensions, O(1) retrieval, lossless norm preservation), state them flatly
- The Stripe approach to code-on-homepage has an analog for math-heavy products: put the key equation on the homepage, rendered beautifully, with enough context to make it meaningful

---

## Source: Mistral AI

**URL:** https://mistral.ai
**What they do:** Present frontier AI models to enterprise technical audiences.

### Key Patterns

**Pattern 1: The Two-Word Punch**
Ultra-compressed headlines that create rhythm through brevity.

> "Frontier AI. In your hands."
> "Keep shipping."
> "Your AI future belongs in your hands."

Two-word sentences force the reader to fill in the meaning. The gap between the words and the full concept is where engagement lives.

**Pattern 2: Ownership Language**
Repeated emphasis on reader control.

> "your own," "your hands," "your environment," "your codebase"

For enterprise audiences concerned about data sovereignty and vendor lock-in, "your" is the most powerful word. It preempts the objection before it's raised.

**Pattern 3: The "Frontier" Adjective**
Using "frontier" instead of "cutting-edge," "state-of-the-art," or "revolutionary."

"Frontier" has a precise meaning in AI research (models at the capability boundary). It sounds technical without sounding promotional. It implies advancement through specificity rather than through hyperbole.

**Pattern 4: Restraint in Claims**
Using precise technical modifiers instead of superlatives.

> "purpose-built," "deep context," "production-ready"

None of these claim to be the best. They claim to be the right tool for a specific purpose. This is more persuasive to technical audiences than any superlative.

### What Works
- Action-oriented verbs: "deploy," "build," "customize," "fine-tune," "ship," "execute"
- Proof through association: customer logos without explanatory text -- assumes the reader recognizes the credibility markers
- Indirect proof over direct claims: shows industry sectors using the technology rather than claiming superiority
- "Self-contained private deployments" -- jargon-appropriate specificity that signals deep expertise

### Applicable to Discur
- The two-word punch works for section headers: "Structure remembers." "Dimensions matter." "Algebra encodes."
- Restraint in claims: instead of "the most efficient data structure," use "norm-preserving," "dimension-native," "algebraically closed"
- Ownership language might work differently for Discur -- less "your" (no product to hand over yet) and more "the" (definite article claiming the territory): "The algebra. The structure. The trie."

---

## Source: Scale AI

**URL:** https://scale.com
**What they do:** Present data infrastructure for AI development to enterprise and research audiences.

### Key Patterns

**Pattern 1: Authority Through Association**
Let the names of your users carry the credibility claim.

Scale's homepage features direct quotes from Mark Zuckerberg, Andrej Karpathy, and Demis Hassabis. The copy doesn't argue that Scale is important -- it lets the users make that argument by their presence.

**Pattern 2: The Credibility Acronym**
Create a branded framework with an evocative name.

> "SEAL (Safety, Evaluations, and Alignment Lab)"

The acronym does double duty: it names the function and creates a brand-memorable shorthand. "Expert-Driven Private Evaluations" is the subtitle, reinforcing that this is rigorous, not casual.

**Pattern 3: Outcome Over Mechanism**

> "Generative AI Data Engine powers many... advanced LLMs."

This says "we're the infrastructure behind the things you already use" without explaining how. The mechanism is implied by the credibility of the output.

### What Works
- "Proven data, evaluations, and outcomes" -- the word "proven" carries weight because it's accompanied by specific evidence (partnership announcements, named models)
- "World-class" appears twice but works because it's supported by named world-class clients
- Partnership framing ("Meta and Scale Partner...") positions Scale as a peer, not a vendor

### Applicable to Discur
- Authority through association will be limited for an early-stage company, but the pattern translates to: authority through mathematical lineage. "The octonions were discovered by Graves and Cayley in 1843. The Fano plane was formalized by Fano in 1892. The trie brings them together."
- The outcome-over-mechanism pattern: "The octonionic trie organizes knowledge the way algebra organizes numbers -- by structure, not by label."

---

## Source: SandboxAQ

**URL:** https://www.sandboxaq.com
**What they do:** Present quantum + AI technology to enterprise and government audiences.

### Key Patterns

**Pattern 1: Physics-Grounded Accessibility**
Bridge deep theory and commercial application through physics framing.

> "AI that understands the physical world."
> "Rooted in Science -> Trained on the laws of nature."

The physics-first framing says: this isn't just machine learning, this is science. For a company working with octonions (which are mathematical physics), this resonance is direct.

**Pattern 2: The Arrow Progression**
Use visual metaphor to show sequential depth.

> "Rooted in Science -> Trained on the laws of nature"
> "Engineered for Impact -> From molecular modeling to cyber defense"

Each arrow implies: what you just read is the foundation for what comes next.

**Pattern 3: Constraint-as-Feature**

> "Clear outputs, reduced uncertainty."

This reframes a model limitation (constrained output space) as a benefit (clarity). The reader doesn't see constraint; they see precision.

**Pattern 4: Scale Narrative**

> "Autonomously explores millions of potential chemical pathways."

"Millions" establishes scale. "Autonomously" establishes capability. "Potential chemical pathways" grounds it in physical reality. The sentence encodes scale, capability, and domain in nine words.

### What Works
- "Large Quantitative Models (LQMs)" -- coined a container term that parallels "Large Language Models" but for their domain. Borrows the structural familiarity of LLMs while carving out new territory
- Declarative, not explanatory tone: assumes readers either trust the brand or recognize partner validation
- Uses quotes from named, titled experts (e.g., "Yann LeCun, leading AI scientist, one of three Turing Award winners") -- full credential in the attribution

### Applicable to Discur
- Physics-grounded accessibility maps directly: "Built on normed division algebras -- the same mathematical structures that underlie quantum mechanics and string theory"
- The container-term pattern: if Discur coins a term (e.g., "octonionic associative memory" or "algebraic trie"), framing it parallel to existing terms helps readers pattern-match
- Constraint-as-feature: "Seven dimensions. Not eight, not sixteen. Seven -- because the octonions provide exactly the structure this problem requires."

---

## Source: Hugging Face

**URL:** https://huggingface.co
**What they do:** Present an ML collaboration platform to researchers and engineers.

### Key Patterns

**Pattern 1: The Community-First Positioning**

> "The AI community building the future."

Not "our platform" but "the community." The definite article claims territory. "Building" is present progressive -- ongoing, not complete.

**Pattern 2: Quantity as Social Proof**

> "2M+ models," "500k+ datasets," "50,000 organizations"

Raw numbers without commentary. The scale speaks for itself. No need for "massive" or "enormous" when the number itself is massive and enormous.

**Pattern 3: The Triple Imperative**

> "Create, discover and collaborate on ML better."

Three verbs in ascending ambition: make (individual), find (exploration), work together (community). The "better" at the end is earned by the verb progression.

**Pattern 4: Democratization Without the Word**

> "Host and collaborate on unlimited public models, datasets and applications."

"Unlimited" and "public" do the work of "democratize" without using a word that has been emptied of meaning by overuse.

### What Works
- Assumes technical literacy without gatekeeping -- "Inference Endpoints" appears without explanation because the audience knows
- "Explore all modalities: Text, image, video, audio or even 3D" -- the "or even 3D" at the end creates a sense of expanding possibility
- Logos of Meta, Google, Microsoft, Amazon validate without requiring explanation
- Free tier -> Enterprise ($20/user/month) signals both accessibility and seriousness

### Applicable to Discur
- The quantity-as-social-proof pattern needs adaptation: Discur won't have 2M models, but can cite mathematical properties with the same flat authority: "7 imaginary units. 480 automorphisms. 1 algebraic structure."
- "Explore all modalities" maps to: "Encode all structures: hierarchical, associative, sequential, graph."

---

## Source: Cohere Labs

**URL:** https://cohere.com/research
**What they do:** Present ML research with emphasis on multilingual and community-driven work.

### Key Patterns

**Pattern 1: The Mission Inversion**

> "Changing where, how, and by whom breakthroughs happen."

Instead of "we make breakthroughs," they describe changing the conditions for breakthroughs. The tricolon (where, how, by whom) creates rhythm. The implied claim: the problem isn't just technical, it's structural.

**Pattern 2: Practical Benefit Before Technical Detail**

> "Speech recognition model for generating highly accurate audio transcripts."

The benefit (accurate transcripts) precedes the mechanism (speech recognition model). A listener knows what transcripts are; they may not know what speech recognition models are.

**Pattern 3: Problem-Before-Solution Structure**

> "Systemic flaws in AI benchmarking" [then introduces their LMArena study]

Name the problem with specificity ("systemic flaws" is stronger than "issues with") before presenting your contribution. This creates the gap the reader wants filled.

### What Works
- Active voice dominance: subjects do things rather than having things done to them
- Parallel structure in feature lists: "diverse perspectives... trustworthy... collaborative... universally capable"
- Numbered metrics that establish scale without defensiveness: "4500 members, 150 countries"
- Collaborative framing: "we," "our," "together" used frequently -- positions research as community endeavor

### Applicable to Discur
- The mission inversion: "Changing how memory systems organize themselves -- through algebra, not heuristics"
- Problem-before-solution: "Vector databases flatten semantic relationships into high-dimensional point clouds. The octonionic trie preserves them."

---

## Source: Linear

**URL:** https://linear.app
**What they do:** Present a product development tool to engineering teams.

### Key Patterns

**Pattern 1: Apposition Without Superlatives**

> "Linear -- The system for product development."

Not "the best system" or "a revolutionary system." Definite article + noun. The confidence is in the claim that a category exists and this product is it.

**Pattern 2: Confidence Through Restraint**
The entire Linear homepage philosophy: the copy doesn't need to convince because the product's elegance becomes the argument. Sparse copy with abundant whitespace communicates "we don't need to persuade you."

**Pattern 3: Functional Language Over Marketing**
Using words like "system" rather than "platform" or "tool." "System" implies architecture, coherence, and intentionality. "Platform" implies breadth. "Tool" implies limitation.

### What Works
- Technical precision embedded in the product itself: references to system specifications (like "hardwareConcurrency" detection) signal deep engineering without explanation
- Professional understatement that respects the reader's intelligence
- Whitespace as communication: empty space signals editorial confidence

### Applicable to Discur
- Apposition without superlatives: "Discur -- Self-organizing memory through octonionic algebra."
- Whitespace and restraint: let the equations and diagrams carry the page rather than filling space with explanatory prose
- Word choice precision: use "algebra" not "framework," "structure" not "solution," "encode" not "leverage"

---

## Source: Vercel

**URL:** https://vercel.com
**What they do:** Present developer infrastructure with minimalist, confident technical writing.

### Key Patterns

**Pattern 1: The Fragment Declaration**

> "Security, speed, and AI included."

Not a sentence. A list followed by a verdict. The missing verb forces the reader to supply it, creating engagement.

**Pattern 2: The Metric-Backed Claim**

> "Ship 6x faster."
> "95% reduction in page load times."

No adjective-based claims. The number IS the claim. If Discur can say "O(1) retrieval" or "7-dimensional encoding," those numbers have the same force.

**Pattern 3: The Zero-Config Promise**

> "Zero-config infrastructure."
> "Deploy automatically from git."

"Zero" is the most powerful number in developer copy. It means: you don't have to think about this. "Automatic" is the most powerful adjective: it means the system handles it.

**Pattern 4: The Inversive Compound**

> "Framework-Defined Infrastructure"

This takes a familiar concept (infrastructure) and prefixes it with an unfamiliar qualifier (framework-defined), creating a term that signals sophistication while remaining parseable.

### What Works
- Action-forward verbs: "Deploy," "Build," "Ship," "Scale," "Secure"
- Concrete metrics instead of hype: no "blazing fast," just "6x faster"
- Direct developer address: "What will you create?"
- Avoiding motivational tone entirely -- the copy targets developer autonomy and technical credibility through brevity

### Applicable to Discur
- Fragment declarations for section transitions: "Seven dimensions. One structure. Zero heuristics."
- The inversive compound for naming: "Algebra-native memory." "Structure-preserving retrieval."

---

## Source: Wolfram / Stephen Wolfram

**URL:** https://www.wolfram.com/wolfram-science/, https://www.wolframscience.com/nks/notes-0-1--writing-style/
**What they do:** Present mathematical and computational science to mixed audiences.

### Key Patterns

**Pattern 1: Expectation-Inverting Headlines**

> "Simple Programs May Not Do Simple Things"
> "Programs We Can't Understand"
> "Mining for Algorithms"

These headlines work by pairing familiar words in unfamiliar combinations. "Simple" appears twice in the first headline, creating an expectation that the second "simple" will mean the same as the first. It doesn't. The reader has to read further.

**Pattern 2: The Telescopic Analogy**

> "Like the telescope enabled modern astronomy... the Wolfram Language... enabled exploration of the computational universe."

Maps unknown to known. The analogy doesn't explain how the technology works -- it explains what kind of thing it is. This is the distinction between mechanism and category.

**Pattern 3: Personal Narrative as Authenticity**

> "We built Wolfram Language so we could use it ourselves. But I never imagined how much science we'd be able to discover."

The shift from "we" to "I" creates intimacy. "I never imagined" is honest surprise -- it signals that the results exceeded the creator's own expectations.

**Pattern 4: One Paragraph, One Idea**
Wolfram explicitly states: "any paragraph should communicate just one basic idea." He deliberately fragments explanations across multiple short paragraphs rather than building long, complex arguments in single paragraphs.

**Pattern 5: Conjunctions at Sentence Start**
Wolfram starts sentences with "And," "But," "So" to break what would otherwise be unwieldy compound sentences.

> "And the key point is that even extremely simple programs can produce highly complex behavior."

The "And" at the start creates continuity while the period before it creates a pause. This rhythm keeps dense material readable.

### What Works
- Three distinct writing styles for three contexts: scientific papers, technical documentation, science communication. Each serves a different purpose
- Rhetorical questions as genuine invitations: "What does it take to make a universal computer?" poses a problem, not a sales pitch
- "Less than a line of code" -- grounding abstract computation in concrete, visualizable scale

### Applicable to Discur
- Expectation inversion headlines: "Non-associative algebra. Associative memory." The collision of "non-associative" and "associative" in adjacent sentences creates productive confusion
- One paragraph, one idea: essential for explaining octonions, where each property (non-commutativity, non-associativity, normed division) deserves its own paragraph
- Personal narrative: if Discur's founders had a "I never imagined" moment in discovering the octonionic trie approach, that story is valuable copy

---

## Source: Paul Halmos

**URL:** https://entropiesschool.sciencesconf.org/data/How_to_Write_Mathematics.pdf
**What they do:** Foundational essay on mathematical exposition, published 1973, still the standard.

### Key Patterns

**Pattern 1: Say Something**
"To have something to say is by far the most important ingredient of good exposition."

Applied to landing pages: if you remove the marketing language and there's nothing left, you have nothing to say. The math and the results must stand alone.

**Pattern 2: Speak to Someone**
"Write for someone. When you decide to write something, ask yourself who it is that you want to reach."

For Discur: the imagined reader is a researcher or engineer who knows what a normed division algebra is, or who can look it up without feeling patronized.

**Pattern 3: Minimize the Reader's Resistance**
"Arrange the material so as to minimize the resistance and maximize the insight of the reader."

Applied practically: don't make the reader wait. Put the key result in the opening. Put the notation guide before the equations, not after. Every ordering decision should reduce friction.

**Pattern 4: Words Over Symbols in Prose**
Rather than writing "for all x in S, P(x)," write "for every element in the set, the property holds." Symbols work best in displayed equations, not embedded in flowing text.

**Pattern 5: The "We" of Collaboration**
Halmos advocates for "we" as the pronoun of mathematical exposition -- not the royal "we" but the collaborative "we" that represents author and reader working through a problem together.

> "We calculate the derivative" includes the reader in the act of reasoning.

**Pattern 6: State What You'll Prove Before Proving It**
Announce the strategy: "We'll show this by contradiction" or "The proof has two cases." This gives the reader a map before the journey.

**Pattern 7: The Revision Standard**
Halmos never published a word before reading it six times. This isn't about perfectionism -- it's about the belief that mathematical writing improves with each pass because each pass reveals a new structural weakness.

### What Works
- "If a symbol doesn't clarify, remove it" -- notation exists to serve comprehension, not to signal sophistication
- "One idea per sentence. If you need multiple clauses, you likely need multiple sentences."
- "Begin paragraphs with purpose. The opening sentence should signal what the paragraph accomplishes."
- Active voice: "The theorem asserts" not "it can be shown"
- "Don't use 'obviously,' 'clearly,' or 'trivially' -- these insult readers who find the material difficult."

### Applicable to Discur
- Words over symbols in prose: when describing the octonionic trie in body copy, write "the product of any two basis elements determines a third" rather than "e_i * e_j = +/- e_k"
- Collaborative "we": "We begin with the octonions" invites the reader into exploration
- The prohibition on "obviously" and "clearly" is critical for Discur's landing page -- never assume the reader finds octonions obvious
- State-before-prove: "The octonionic trie achieves constant-time retrieval. Here's why."

---

## Source: Donald Knuth

**URL:** https://jmlr.csail.mit.edu/reviewing-papers/knuth_mathematical_writing.pdf (Stanford CS 1193 class)
**What they do:** Codify rules for mathematical writing based on decades of practice.

### Key Patterns

**Pattern 1: Never Start a Sentence with a Symbol**

Write: "The polynomial x^n - a has n distinct zeroes."
Not: "x^n - a has n distinct zeroes."

The article or descriptor before the symbol gives the reader a syntactic anchor. On a landing page, this means: "The octonion $q$ encodes..." not "$q$ encodes..."

**Pattern 2: Separate Adjacent Formulas with Words**

Write: "Consider $S_q$, where $q < p$."
Not: "Consider $S_q$, $q < p$."

Words between formulas prevent visual collision. The connective word ("where," "such that," "whenever") also clarifies the logical relationship.

**Pattern 3: Left-to-Right Comprehension**

> "We prove that the two conditions (grunt) and (snort) imply (blah)."

Not:

> "We prove that (grunt) and (snort) implies (blah)."

The first version can be parsed left-to-right without backtracking. The second forces the reader to re-parse when "implies" (singular) appears after two conditions.

**Pattern 4: Display Only Equations You Stand Behind**

> "The reader's eye will alight upon displayed equations and treat them as gospel. Only display equations you stand behind."

Displayed equations carry inherent authority. On a landing page, this means: the one equation you put in the hero section will be scrutinized by every mathematician who visits. Make it exact. Make it central. Make it correct.

**Pattern 5: The "Teamwork" Pronoun**
Knuth likes the "teamwork" aspect of using "we" -- it represents author and reader together, working through the material as a unit.

### What Works
- "Don't use jargon unnecessarily. Even specialists in a field get more pleasure from papers that use a nonspecialist's vocabulary."
- Notation should be defined before it's used, and redefined if enough pages have passed since the first definition
- Replace "..." "=>" and logical symbols with English words in prose

### Applicable to Discur
- The "display only equations you stand behind" rule means the landing page should feature at most 2-3 equations, and each must be central to the argument
- Left-to-right comprehension: "The octonionic trie maps each concept to a point in 7-dimensional space" (parseable incrementally) vs. "Each concept to a point in 7-dimensional space is mapped by the octonionic trie" (requires backtracking)
- Redefine notation: if $\mathbb{O}$ appears early and then again after several sections, re-anchor: "Returning to the octonions ($\mathbb{O}$)..."

---

## Source: Igor Pak

**URL:** https://www.math.ucla.edu/~pak/papers/how-to-write1.pdf
**What they do:** Practical guide for writing clear mathematical papers, with emphasis on 21st-century practices.

### Key Patterns

**Pattern 1: Examples Before Abstraction**

> "It is extremely helpful to give an example to clarify your ideas: this can make concrete in the reader's mind what your technique does."

For a landing page: before presenting the general theory of octonionic encoding, show what happens when you encode a specific concept. Walk through one multiplication. Show one retrieval.

**Pattern 2: The Running Example**

> "When possible, use a running example throughout the paper."

Applied to a landing page: choose one small, compelling example (e.g., encoding three related concepts and showing their octonionic products) and thread it through multiple sections.

**Pattern 3: Be Specific, Not Abstract**

> "Never say 'for various reasons' -- tell the reader the reasons!"

On a landing page: "The octonionic trie outperforms vector databases for three reasons: it preserves algebraic structure, it encodes relationships as products rather than distances, and it achieves retrieval without search."

**Pattern 4: State Purpose Immediately**

> "Inform readers of the purpose of your paper as soon as you can. If you don't immediately bring them to the objective, you will lose readers."

The landing page hero section must answer: what is this, why does it matter, and why should I keep reading. Within the first screenful.

**Pattern 5: Don't Hedge Excessively**

> Avoid "it seems," "somewhat," or "rather" unless genuinely uncertain. Be direct.

"The octonionic trie preserves structure." Not "The octonionic trie somewhat preserves structure." If there's a genuine qualification, state it specifically: "The octonionic trie preserves structure up to the alternator."

### What Works
- "If your paper yields a single equation... stick it right in the introduction." Don't tease. Don't build suspense.
- "Delete sentences that could precede any ML paper." The opening must be unique to your work.
- Use figures and tables to break up dense text -- visual variety is not decoration but cognitive relief
- "Replace 'utilize' with 'use,' 'in order to' with 'to,' and 'is relevant to' with 'affects.'"

### Applicable to Discur
- The running example approach: pick one encoding scenario (e.g., "apple" -> "fruit" -> "food") and trace it through the octonionic trie across multiple sections
- Stick the key equation in the introduction: if $|xy| = |x||y|$ is the multiplicative property that makes octonionic encoding work, put it above the fold
- The "delete generic openings" test: "In an era of information overload..." -- delete. "Memory is the foundation of intelligence..." -- delete. "The octonionic trie encodes semantic relationships as algebraic products over a normed division algebra." -- keep.

---

## Source: Feynman

**What they do:** Principles for clear explanation of physics, widely applicable to any technical exposition.

### Key Patterns

**Pattern 1: Foundation First**

> "Every chapter, every paragraph, every train of thought begins with the underlying foundation."

Applied to landing page sections: each section should open with the foundational concept that makes the rest possible. For the octonionic trie section, start with: "There are exactly four normed division algebras." That's the foundation. Everything else follows from it.

**Pattern 2: Clear Thinking Precedes Clear Writing**

> "You can only write vigorously and concisely if you know exactly what you're talking about."

Implication for Discur: if a section of copy can't be made clear, the problem is not the copy -- it's that the concept hasn't been fully thought through. Vague writing is a symptom of vague thinking.

**Pattern 3: One Sentence of Knowledge**
Feynman proposed that if only one sentence of scientific knowledge could survive, it should be the foundational concept from which all else derives. For Discur, this sentence might be:

"The octonions are the largest normed division algebra, and their non-associativity encodes exactly the kind of structured relationships that memory systems need."

### What Works
- Getting to the hypothesis in as few words as possible
- Avoiding clunky, verbose language
- Understanding ideas deeply enough that unnecessary words fall away
- The belief that true understanding enables simple explanation (but "simple" does not mean "simplified" or "dumbed down")

### Applicable to Discur
- The foundation-first pattern for each section means: don't start with what the octonionic trie does. Start with why octonions exist. Then show what they make possible. Then show the trie.
- The one-sentence-of-knowledge exercise: what is the single sentence that, if a reader understood nothing else, would convey the core of what Discur is?

---

## Source: Swyx

**URL:** https://www.swyx.io/writing-advice
**What they do:** Practical writing advice for developers and technical content creators.

### Key Patterns

**Pattern 1: Skip the Running Start**

Get to the point immediately. Don't warm up, don't establish credentials, don't build context before delivering value.

Applied to a landing page: the hero section is not the place for "In today's world..." or "At Discur, we believe..." It's the place for: "The octonionic trie."

**Pattern 2: The ABCD Feedback Framework**
When reviewing drafts, ask:
- What's **A**wesome?
- What's **B**oring?
- What's **C**onfusing?
- What didn't you **B**elieve?

The last question -- "What didn't you believe?" -- is critical for technical copy. If a claim triggers disbelief, it needs evidence or removal.

**Pattern 3: Clarity, Simplicity, Brevity, Humanity**
Four criteria, in order:
1. Is it clear? (Can the reader understand it?)
2. Is it simple? (Is it free of unnecessary complexity?)
3. Is it brief? (Does every word earn its place?)
4. Is it human? (Does it sound like a person wrote it?)

The ordering matters. Clarity comes before brevity. A longer, clearer sentence beats a shorter, ambiguous one.

**Pattern 4: Write Like You Talk**
Conversational tone is not the same as informal tone. "Write like you talk" means: use natural sentence structures, avoid constructions you'd never speak aloud, and let your actual thinking voice come through.

For technical content, this doesn't mean dumbing down. It means: if you'd say "the product is lossless because the norm is multiplicative" in conversation, write it that way.

### What Works
- Daily writing builds long-term quality -- the craft improves through practice, not theory
- "The essential components of good blog content are that it is interesting to others and VERY interesting to you"
- Use only the 1,000 most common English words for initial explanation, then layer in technical terms (Up Goer Five approach)

### Applicable to Discur
- The ABCD framework is a practical editing tool for landing page drafts
- "What didn't you believe?" should be asked of every claim on the page. If a mathematician wouldn't believe it, it needs a proof. If an engineer wouldn't believe it, it needs a benchmark.
- Clarity before brevity: don't compress the octonionic explanation so aggressively that it becomes incomprehensible

---

## Source: Patrick McKenzie

**URL:** https://www.kalzumeus.com/greatest-hits/, https://www.bitsaboutmoney.com
**What they do:** Long-form essay writing for technical and business audiences.

### Key Patterns

**Pattern 1: Communication as a Practiced Skill**

> "Communication is a skill. Practice it: you will get better."

The implication: good copy is not a talent. It's the result of iteration. The first draft of Discur's landing page will be bad. The fifth will be significantly better.

**Pattern 2: Long-Form Essay for Professional Audiences**

McKenzie advocates for "long-form essay writing for professional audiences" as the highest-value content form. Not blog posts. Not tweets. Not marketing copy. Essays.

For Discur: the landing page can be an essay. A single-page argument, with mathematical rigor and editorial confidence, that makes the case for octonionic memory.

**Pattern 3: Content Before Product**

> "Write the book before the software."

For a research company: the whitepaper, the explanation, the mathematical exposition -- these are the product. The landing page is not separate from the research. It IS the research, presented for a different audience.

### What Works
- Building audience through consistent, valuable writing -- not through marketing campaigns
- Structural emails "like research papers with footnotes" (observed at Stripe, which McKenzie influenced)
- The conviction that clear writing is a force multiplier: "vastly more people consume the writing than produce it"

### Applicable to Discur
- The landing page IS the product at this stage. Treat it with the same rigor as a paper.
- "Write the book before the software" validates Discur's approach: the mathematical argument comes first, the implementation follows

---

## Cross-Cutting Patterns

These patterns appear across three or more sources and represent consensus among practitioners.

### Pattern: Numbers Replace Adjectives
- Anthropic: "3,000 hours of red teaming"
- Stripe: "135+ currencies. $1.9T processed. 99.999% uptime."
- Scale: Partner logos and named users
- Vercel: "6x faster"
- DeepMind: "92.4 GDT... approximately 1.6 Angstroms"

**The rule:** If you can replace an adjective with a number, always replace the adjective. "Fast" means nothing. "O(1)" means everything.

### Pattern: First-Person Plural ("We") as Collaborative Authority
- Anthropic: "We find," "We studied," "We tested"
- Halmos: "We calculate the derivative" -- includes the reader
- Knuth: "teamwork" pronoun
- DeepMind: "We work on"

**The rule:** "We" is the pronoun of technical authority. It's collaborative, not boastful. It includes the reader in the reasoning.

### Pattern: Limitation Acknowledged Strengthens the Claim
- Anthropic: "limited but functional ability"
- DeepMind: "Not every structure we predict will be perfect"
- Anthropic (Constitutional Classifiers): "may not prevent every universal jailbreak"

**The rule:** Technical audiences distrust perfection claims. Acknowledging specific limitations paradoxically increases credibility.

### Pattern: Active Voice Dominance
- Every source prefers active voice
- Halmos: "The theorem asserts" not "It can be shown"
- Pak: "We prove" not "It is proven"
- Anthropic: "We find" not "It was found"

**The rule:** Active voice is shorter, clearer, and more confident. Use passive voice only when the actor is genuinely irrelevant.

### Pattern: Define Through Contrast
- Anthropic (Agents): workflows vs. agents
- Mistral: "your" vs. others' (implicit)
- SandboxAQ: LQMs vs. LLMs

**The rule:** New concepts are clearest when placed against familiar ones. "Unlike X, Y does Z."

### Pattern: The Equation Sandwich
- Knuth/Halmos: introduce equation -> display equation -> explain equation
- Anthropic (biology): setup -> finding -> implication
- Multiple sources: context -> claim -> evidence

**The rule:** An equation (or finding) without a setup is an equation readers skip. An equation without a follow-up is an equation readers forget.

### Pattern: Progressive Disclosure (Layered Depth)
- Anthropic: Hero -> Summary -> Full Paper
- DeepMind: Headline -> Blog -> Paper
- Jane Street: Title -> Overview -> Technical Detail

**The rule:** Structure so readers "drop off at various points" (Minsky). Each layer is self-contained.

### Pattern: Precision of Word Choice
Replace:
| Generic | Precise |
|---------|---------|
| "leverage" | "use" |
| "utilize" | "use" |
| "in order to" | "to" |
| "cutting-edge" | "frontier" or specific capability |
| "revolutionary" | name the specific advance |
| "powerful" | name what it enables |
| "platform" | "system," "algebra," "structure" |
| "solution" | "trie," "encoding," "method" |

---

## Application to Discur

### The Discur Voice

Synthesizing across all sources, Discur's writing voice should be:

1. **Mathematically precise.** Use the correct terms. Don't simplify where precision matters. The audience knows what a normed division algebra is -- or they can learn.

2. **Editorially confident.** No hedge words where the math is certain. "The multiplicative property guarantees lossless encoding" -- not "may help enable."

3. **Structurally generous.** One concept per section. Progressive disclosure. Equations sandwiched between setup and consequence. Short paragraphs.

4. **Honestly bounded.** State what the octonionic trie does and does not do. Specific limitations, not vague caveats.

5. **Human without being casual.** First-person plural. Active voice. Natural sentence rhythm. But never slangy, never cute, never ironic.

### Sentence Templates for Discur

**The Phenomenon Statement:**
> "[Concept] is [definition that includes the key insight]."
> "The octonionic trie is a data structure that encodes semantic relationships as products in a normed division algebra."

**The Contrast Setup:**
> "Unlike [familiar approach], [our approach] [specific difference]."
> "Unlike vector databases, which flatten relationships into distances, the octonionic trie preserves algebraic structure."

**The Qualified Result:**
> "[System] achieves [specific result] -- [with specific tradeoff/limitation]."
> "The octonionic trie achieves constant-time retrieval -- for relationships that can be expressed as products of basis elements."

**The Foundation Statement:**
> "There are exactly [N] [things]. [Brief explanation of why this matters]."
> "There are exactly four normed division algebras. The octonions are the last and the largest."

**The Equation Introduction:**
> "[Plain language setup]:"
> $$[equation]$$
> "[Consequence in plain language]."

**The Scale/Number Statement:**
> "[Number]. [What it means]."
> "Seven dimensions. Each one a degree of freedom in the algebra."

**The History Anchor:**
> "[The concept] was [discovered/formalized] by [person] in [year]. [Brief connection to present]."
> "The octonions were discovered by John Graves in 1843. They waited 180 years for a data structure."

### Section-by-Section Voice Guide

| Section | Voice | Key Pattern |
|---------|-------|-------------|
| Hero | Definitive. No hedging. | Category-defining headline + one equation |
| What is the octonionic trie | Expository. Concrete example first. | Running example + equation sandwich |
| Why octonions | Historical + mathematical. Foundation first. | Feynman foundation principle |
| How it works | Technical. Assume expertise. | Knuth/Halmos math-in-prose rules |
| Results/Properties | Evidence-driven. Numbers only. | Numbers replace adjectives |
| Comparison | Specific contrasts. Fair to competitors. | Define through contrast |
| About Discur | Personal but restrained. | Wolfram personal narrative pattern |

### The Final Test

Before publishing any sentence, apply:

1. **The Falsifiability Test** (from Anthropic patterns): Does this sentence make a specific claim? Could it be wrong? If it can't be wrong, it's not saying anything.

2. **The Uniqueness Test** (from Pak): Could this sentence appear on any AI startup's landing page? If yes, delete it.

3. **The Respect Test** (from Halmos): Would a mathematician reading this feel respected? Would a technical generalist feel included?

4. **The Number Test** (cross-cutting): Is there a number that could replace an adjective? Use the number.

5. **The Equation Test** (from Knuth): Is this equation displayed? Then it must be central, correct, and explained.

---

## Sources

### AI Research Organizations
- [Anthropic Research](https://www.anthropic.com/research) -- research page patterns, qualified findings, honest uncertainty
- [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) -- practitioner-facing technical writing
- [Anthropic: Alignment Faking](https://www.anthropic.com/research/alignment-faking) -- analogy-first approach, percentage-driven specificity
- [Anthropic: Constitutional Classifiers](https://www.anthropic.com/research/constitutional-classifiers) -- precise results + tradeoff quantification
- [Anthropic: Mapping the Mind of a Language Model](https://www.anthropic.com/research/mapping-mind-language-model) -- metaphor as scaffold
- [Anthropic: Interpretability (Transformer Circuits)](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) -- disciplinary analogy, dual-track reading
- [DeepMind Research](https://deepmind.google/research/) -- action-verb headlines, outcome-first framing
- [DeepMind: AlphaFold Blog](https://deepmind.google/discover/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology/) -- third-party validation, humble bookend

### Technology Companies
- [Stripe](https://stripe.com/) -- category-defining headlines, numbers as argument, writing culture
- [Mistral AI](https://mistral.ai/) -- two-word punch, ownership language, restraint in claims
- [Scale AI](https://scale.com/) -- authority through association, outcome over mechanism
- [SandboxAQ](https://www.sandboxaq.com/) -- physics-grounded accessibility, constraint-as-feature
- [Hugging Face](https://huggingface.co/) -- community-first positioning, quantity as social proof
- [Cohere Labs](https://cohere.com/research) -- mission inversion, problem-before-solution
- [Linear](https://linear.app/) -- confidence through restraint, apposition without superlatives
- [Vercel](https://vercel.com/) -- fragment declarations, metric-backed claims

### Mathematical Writing
- [Paul Halmos: How to Write Mathematics](https://entropiesschool.sciencesconf.org/data/How_to_Write_Mathematics.pdf) -- six principles, words over symbols, collaborative "we"
- [Donald Knuth: Mathematical Writing](https://jmlr.csail.mit.edu/reviewing-papers/knuth_mathematical_writing.pdf) -- never start with symbol, left-to-right comprehension, display rules
- [Igor Pak: How to Write a Clear Math Paper](https://www.math.ucla.edu/~pak/papers/how-to-write1.pdf) -- examples before abstraction, running examples, state purpose immediately
- [Keith Conrad: Advice on Mathematical Writing](https://kconrad.math.uconn.edu/blurbs/proofs/writingtips.pdf) -- notation aids comprehension
- [Francis Su: Guidelines for Good Mathematical Writing](https://www.math.clemson.edu/~macaule/classes/m20_math4120/docs/good-math-writing.pdf) -- communication as practice

### Writing Practitioners
- [Swyx: Writing Advice](https://www.swyx.io/writing-advice) -- skip running start, ABCD feedback, clarity > brevity
- [Patrick McKenzie](https://www.kalzumeus.com/greatest-hits/) -- communication as skill, content before product
- [Stephen Wolfram: Writing Style Notes](https://www.wolframscience.com/nks/notes-0-1--writing-style/) -- short paragraphs, conjunctions at sentence start
- [Feynman's Principles](https://celiafidalgo.medium.com/richard-feynmans-7-principles-for-clear-writing-that-will-help-you-craft-compelling-online-297c686630e7) -- foundation first, clear thinking precedes clear writing
- [Stripe Writing Culture](https://slab.com/blog/stripe-writing-culture/) -- writing as force multiplier
