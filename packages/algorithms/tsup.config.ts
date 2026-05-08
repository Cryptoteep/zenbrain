import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    fsrs: 'src/fsrs.ts',
    ebbinghaus: 'src/ebbinghaus.ts',
    emotional: 'src/emotional.ts',
    'context-retrieval': 'src/context-retrieval.ts',
    hebbian: 'src/hebbian.ts',
    bayesian: 'src/bayesian.ts',
    similarity: 'src/similarity.ts',
    intervals: 'src/intervals.ts',
    visualization: 'src/visualization.ts',
    'sleep-consolidation': 'src/sleep-consolidation.ts',
    // Advanced algorithms (added in v0.3.0)
    'fsrs-vmPFC': 'src/fsrs-vmPFC.ts',
    'hebbian-two-factor': 'src/hebbian-two-factor.ts',
    'sleep-simulation-selection': 'src/sleep-simulation-selection.ts',
    'spectral-health': 'src/spectral-health.ts',
    'ib-budget': 'src/ib-budget.ts',
    'dopamine-routing': 'src/dopamine-routing.ts',
    'hopfield-stm': 'src/hopfield-stm.ts',
    'personalized-pagerank': 'src/personalized-pagerank.ts',
    'surprise-gradient-memory': 'src/surprise-gradient-memory.ts',
    'temporal-multi-route': 'src/temporal-multi-route.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  clean: true,
  sourcemap: true,
});
