---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/src/swarm/strategies/strategy-metrics-patch.ts
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

// Patch for StrategyMetrics interface
import { StrategyMetrics } from './base.js';

declare module './base.js' {
  interface StrategyMetrics {
    queriesExecuted?: number;
    averageResponseTime?: number;
    cacheHits?: number;
    cacheMisses?: number;
    credibilityScores?: Record<string, number>;
  }
}
