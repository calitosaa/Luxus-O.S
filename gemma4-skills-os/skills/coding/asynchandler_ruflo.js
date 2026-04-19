---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/05-swarm-apps/rest-api-advanced/src/utils/asyncHandler.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Async handler to wrap async route handlers and pass errors to error handling middleware
 * @param {Function} fn - Async function to wrap
 * @returns {Function} - Express middleware function
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;