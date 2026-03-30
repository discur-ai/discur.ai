// src/data/equations.ts
// All LaTeX equation strings for the octonionic trie thesis.
// Imported by name in content sections and passed to Equation/InlineMath components.

/** Associator definition: measures non-associativity */
export const ASSOCIATOR = '[a,b,c] = (ab)c - a(bc)';

/** Composition error bound */
export const COMPOSITION_ERROR = '\\varepsilon(d) = \\frac{\\|N(ab) - N(a)N(b)\\|}{N(a)N(b)}';

/** Compression efficiency ratio */
export const COMPRESSION_EFFICIENCY = '\\rho = \\frac{|\\mathcal{T}_{\\text{pruned}}|}{|\\mathcal{T}_{\\text{full}}|}';

/** Subalgebra cleanliness metric */
export const SUBALGEBRA_CLEANLINESS = '\\text{cleanliness}(n) = 1 - \\frac{\\|[e_i, e_j, e_k]\\|}{\\|e_i\\| \\|e_j\\| \\|e_k\\|}';

/** Prediction consistency metric */
export const PREDICTION_CONSISTENCY = '\\delta(n) = \\frac{1}{|\\mathcal{P}_n|} \\sum_{p \\in \\mathcal{P}_n} \\mathbb{1}[p = p_{\\text{prev}}]';

/** Associator health metric */
export const ASSOCIATOR_HEALTH = '\\alpha(n) = \\frac{\\|[a,b,c]_n\\|}{\\|[a,b,c]_0\\|}';

/** Associator norm on S^7 -- the beautiful closed-form result */
export const ASSOCIATOR_NORM_S7 = 'E_{a,b,c \\sim S^7}[\\|\\varphi(a,b,c)\\|^2] = \\frac{147456}{42875\\pi}';
