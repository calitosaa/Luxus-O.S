---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/neural/src/domain/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Neural Domain Layer - Public Exports
 *
 * @module v3/neural/domain
 */

export {
  Pattern,
  type PatternType,
  type PatternProps,
} from './entities/pattern.js';

export {
  LearningDomainService,
  type Trajectory,
  type LearningResult,
  type RouteRecommendation,
} from './services/learning-service.js';
