# Changelog

All notable changes to ZenBrain are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.1] — 2026-05-08

### Documentation

Cosmetic patch — no code changes. Refreshes the user-facing description and `packages/algorithms/README.md` rendered on npmjs.com so that newcomers see all 22 algorithms (incl. the 10 NeurIPS extensions added in 0.3.0) instead of the historical "seven battle-tested algorithms" snapshot.

- `package.json` `description` rewritten to mention the NeurIPS extensions.
- `packages/algorithms/README.md` "What's Inside" expanded from 7 → 22 algorithms; stats refreshed to current parent-platform totals (440K+ LOC, 12,000+ tests, 429 ZenBrain tests).
- Root `README.md` and `docs/FAQ.md` stats brought to the same baseline.

## [0.3.0] — 2026-05-08

### NeurIPS Extensions

Adds the 9 NeurIPS algorithms promised in [arXiv 2604.23878](https://arxiv.org/abs/2604.23878) to the open-source `@zensation/algorithms` package. Until now they only existed as references in the paper — this release ships them.

**`@zensation/algorithms@0.3.0`** — 10 new algorithms (zero dependencies, pure TypeScript):

| Algorithm | Sub-path | Paper |
|---|---|---|
| Prediction-Error Coupled FSRS | `./fsrs-vmPFC` | NeurIPS Algorithm A |
| Two-Factor Synaptic Hebbian | `./hebbian-two-factor` | NeurIPS Algorithm D |
| Simulation-Selection Sleep Loop | `./sleep-simulation-selection` | NeurIPS Algorithm C |
| Spectral KG Health Monitor | `./spectral-health` | NeurIPS Algorithm E |
| Information-Bottleneck Budget | `./ib-budget` | NeurIPS Algorithm F |
| Dopamine-Modulated Routing | `./dopamine-routing` | — |
| Hopfield Short-Term Memory | `./hopfield-stm` | — |
| Personalized PageRank | `./personalized-pagerank` | — |
| Surprise-Gradient (Variational FE) Memory | `./surprise-gradient-memory` | — |
| Temporal Multi-Route Retrieval | `./temporal-multi-route` | — |

### Tests
- **+250 new tests** (429 total, 179 existing + 250 new). All passing on vitest.

### Build
- `tsup` ESM + CJS + DTS dual format extended to all 22 algorithm modules.
- Package size: 379 KB packed, 1.7 MB unpacked, 152 files.

### Breaking changes
- None. Additive release; existing 0.2.x APIs unchanged.

### Notes
- The `AblationRegistry` interface in `./sleep-simulation-selection` is an *optional* injection point for ablation studies — pass `undefined` for default PMA-aware behavior.
- All algorithms remain zero runtime dependencies.

---

## [0.2.1] — 2026-03-30

### Fixed
- **Dual ESM/CJS build:** `import` and `require()` both work correctly. v0.2.0 had missing `.js` extensions in ESM that caused runtime failures.
- Migrated from raw `tsc` to **tsup** for reliable dual-format output.
- All `exports` maps now include `require` condition for CJS consumers.

### Changed
- 276 tests, all passing (179 algorithms + 97 core).

---

## [0.2.0] — 2026-03-25

### Added
- **MemoryCoordinator** — Orchestrates all 7 memory layers (Working, Episodic, Semantic, Procedural, Core, Cross-Context, Sleep). Auto-routing `store()`, cross-layer `recall()`, `consolidate()`, `decay()`, FSRS review queue.
- **Sleep Consolidation** (`@zensation/algorithms`) — Memory replay simulation: `selectForReplay()`, `simulateReplay()`, `pruneWeakConnections()`. Based on Stickgold & Walker (2013).
- **Confidence Intervals** — 95% CI for FSRS retrievability and Bayesian propagation.
- **Retention Visualization** — Export Ebbinghaus curves and FSRS schedule timelines.

---

## [0.1.0] — 2026-03-24

### Added
- Initial public release.
- 12 neuroscience-inspired memory algorithms (FSRS, Ebbinghaus, Hebbian, Bayesian, Emotional, Context-Retrieval, Similarity, Intervals, Visualization, Sleep-Consolidation, plus shared types).
- 7-layer memory system (Working, Short-Term, Episodic, Semantic, Procedural, Core, Cross-Context).
- Pluggable storage / embeddings / LLM providers.
- Apache-2.0 license.

[0.3.1]: https://github.com/zensation-ai/zenbrain/releases/tag/v0.3.1
[0.3.0]: https://github.com/zensation-ai/zenbrain/releases/tag/v0.3.0
[0.2.1]: https://github.com/zensation-ai/zenbrain/releases/tag/v0.2.1
[0.2.0]: https://github.com/zensation-ai/zenbrain/releases/tag/v0.2.0
[0.1.0]: https://github.com/zensation-ai/zenbrain/releases/tag/v0.1.0
