---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/examples/calc-app-parallel/calculator.js
license: MIT
category: skills/web-search
imported_at: 2026-04-19
---

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  sqrt(n) {
    if (n < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(n);
  }
}

module.exports = Calculator;
