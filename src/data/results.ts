// src/data/results.ts
// Experimental results from oct-trie.pdf Sections 7 and 10.
// Numbers are exact values from thesis tables.

/** MNIST benchmark results (thesis Table 6, Section 10.2) */
export const MNIST_RESULTS = {
  /** Headline result: CNN encoder, 60K training samples */
  headline: {
    accuracy: 95.2,
    encoder: 'CNN-8D',
    trainSize: 60_000,
  },
  /** kNN baseline on same CNN features */
  knnBaseline: 98.2,
  /** Gap to kNN in percentage points */
  gap: -3.0,
  /** Number of trie nodes at convergence */
  trieNodes: 26_042,
  /** Maximum trie depth */
  maxDepth: 15,
} as const;

/** Stability-plasticity results (thesis Table 4, Section 7.4) */
export const STABILITY_RESULTS = {
  /** Phase 1 accuracy before new categories trained */
  phase1AccuracyBefore: 99.5,
  /** Phase 1 accuracy after Phase 2 training (unchanged = 0% forgetting) */
  phase1AccuracyAfter: 99.5,
  /** Phase 2 accuracy on new categories */
  phase2Accuracy: 95.3,
  /** Overall accuracy across all 7 categories */
  overallAccuracy: 97.7,
  /** Catastrophic forgetting rate */
  catastrophicForgetting: 0.0,
  /** Trie nodes at convergence */
  trieNodes: 531,
  /** Maximum trie depth */
  maxDepth: 15,
  /** Number of categories */
  categories: 7,
  /** Total test samples */
  totalTestSamples: 350,
  /** Correct test samples */
  correctTestSamples: 342,
} as const;

/** Novelty signal results (thesis Section 7.2) */
export const NOVELTY_RESULTS = {
  /** Mean associator norm within categories */
  withinCategoryNorm: 0.211,
  /** Associator norm at category transitions */
  transitionNorm: 1.047,
  /** Spike ratio (transition / within) */
  spikeRatio: 4.97,
  /** Rounded spike ratio for display */
  spikeRatioDisplay: '5x',
  /** Number of transitions detected */
  transitionsDetected: 4,
  /** All transitions exceed this percentile of within-category norms */
  percentileExceeded: 99,
} as const;
