---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/benchmark/archive/old-files/hello_world.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Simple Hello World function in JavaScript
 * @param {string} name - Optional name parameter
 * @returns {string} Greeting message
 */
export function helloWorld(name = 'World') {
  return `Hello, ${name}!`;
}

// Example usage
console.log(helloWorld());        // Output: Hello, World!
console.log(helloWorld('Claude')); // Output: Hello, Claude!