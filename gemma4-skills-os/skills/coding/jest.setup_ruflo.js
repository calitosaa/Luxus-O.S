---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/jest.setup.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Jest Setup File - ES Module Compatible
 * Configure test environment and global settings
 */

// Set test environment flags
process.env.CLAUDE_FLOW_ENV = 'test';
process.env.NODE_ENV = 'test';

// Suppress console output during tests unless explicitly needed
const originalConsole = { ...console };

// Store original console for restoration
global.originalConsole = originalConsole;

// Handle unhandled rejections in tests
process.on('unhandledRejection', (reason, promise) => {
  // Only log in test environment if needed
  if (process.env.DEBUG_TESTS) {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  }
});