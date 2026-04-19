---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/gastown-bridge/src/formula/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Gas Town Formula Module Exports
 *
 * Provides formula execution with WASM acceleration:
 * - FormulaExecutor: Hybrid WASM/CLI executor
 * - Molecule generation from cooked formulas
 * - Step dependency resolution
 * - Progress tracking and cancellation
 *
 * @module v3/plugins/gastown-bridge/formula
 */

// Main executor
export {
  FormulaExecutor,
  createFormulaExecutor,
  // Types
  type IWasmLoader,
  type ExecuteOptions,
  type StepContext,
  type StepResult,
  type Molecule,
  type ExecutionProgress,
  type ExecutorEvents,
  type ExecutorLogger,
} from './executor.js';

// Default export
export { default } from './executor.js';
