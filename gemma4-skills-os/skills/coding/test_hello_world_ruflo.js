---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/benchmark/archive/old-files/test_hello_world.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Unit tests for Hello World function
 */

import { helloWorld } from './hello_world.js';

// Simple test framework
function test(description, testFunc) {
  try {
    testFunc();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.log(`✗ ${description}`);
    console.error(`  Error: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

// Run tests
console.log('Running JavaScript Hello World Tests:\n');

test('should return "Hello, World!" with no parameter', () => {
  assert(helloWorld() === 'Hello, World!', 'Default parameter not working');
});

test('should return custom greeting with name parameter', () => {
  assert(helloWorld('Claude') === 'Hello, Claude!', 'Custom name not working');
});

test('should handle empty string', () => {
  assert(helloWorld('') === 'Hello, !', 'Empty string not handled');
});

console.log('\nAll tests completed!');