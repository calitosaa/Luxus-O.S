---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/shared/src/resilience/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Resilience Patterns
 *
 * Production-ready resilience utilities:
 * - Retry with exponential backoff
 * - Circuit breaker pattern
 * - Rate limiting
 *
 * @module v3/shared/resilience
 */

// Retry
export { retry, RetryError } from './retry.js';
export type { RetryOptions, RetryResult } from './retry.js';

// Circuit Breaker
export { CircuitBreaker } from './circuit-breaker.js';
export type { CircuitBreakerOptions, CircuitBreakerStats } from './circuit-breaker.js';

// Rate Limiter
export { SlidingWindowRateLimiter, TokenBucketRateLimiter } from './rate-limiter.js';
export type { RateLimiter, RateLimiterOptions, RateLimitResult } from './rate-limiter.js';

// Bulkhead
export { Bulkhead } from './bulkhead.js';
export type { BulkheadOptions, BulkheadStats } from './bulkhead.js';
