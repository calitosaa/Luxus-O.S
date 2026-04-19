---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/financial-risk/src/bridges/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Financial Risk Plugin - Bridges Barrel Export
 *
 * @module @claude-flow/plugin-financial-risk/bridges
 */

export {
  FinancialEconomyBridge,
  createEconomyBridge,
  PortfolioRiskCalculator,
} from './economy-bridge.js';

export {
  FinancialSparseBridge,
  createSparseBridge,
  AnomalyDetector,
  MarketRegimeClassifier,
} from './sparse-bridge.js';
